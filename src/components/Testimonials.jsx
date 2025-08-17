import { useState, useEffect } from "react";
import { Star, MessageSquare, User } from "lucide-react";
import { db, auth } from "../FireBase/FirebaseConfig";
import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  orderBy, 
  where, 
  doc, 
  updateDoc 
} from "firebase/firestore";
import { 
  onAuthStateChanged, 
  signInWithPopup, 
  GoogleAuthProvider,
  signOut 
} from "firebase/auth";
import Swal from "sweetalert2";

export const TestimonialsSection = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    review: "",
    rating: 0
  });

  // Handle Google Sign-In
  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      Swal.fire({
        icon: 'success',
        title: 'Logged in successfully!',
        showConfirmButton: false,
        timer: 1500
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: error.message,
      });
    }
  };

  // Handle Sign Out
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setFormData({ title: "", review: "", rating: 0 });
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // Fetch testimonials from Firestore
  const fetchTestimonials = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, 'testimonials'), orderBy('timestamp', 'desc'));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setTestimonials(data);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to load testimonials',
      });
    } finally {
      setLoading(false);
    }
  };

  // Check for existing user review
  const checkExistingReview = async (userId) => {
    try {
      const q = query(collection(db, 'testimonials'), where('uid', '==', userId));
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        const reviewData = querySnapshot.docs[0].data();
        setFormData({
          title: reviewData.title || "",
          review: reviewData.review || "",
          rating: reviewData.rating || 0
        });
      }
    } catch (error) {
      console.error("Error checking review:", error);
    }
  };

  // Auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      if (user) {
        checkExistingReview(user.uid);
      } else {
        setFormData({ title: "", review: "", rating: 0 });
      }
    });

    fetchTestimonials();
    return () => unsubscribe();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!currentUser) {
      Swal.fire({
        icon: 'error',
        title: 'Authentication Required',
        text: 'Please login to submit a testimonial',
      });
      return;
    }

    try {
      const testimonialData = {
        uid: currentUser.uid,
        name: currentUser.displayName,
        photoURL: currentUser.photoURL || null,
        title: formData.title,
        review: formData.review,
        rating: formData.rating,
        timestamp: new Date()
      };

      // Check if user already has a testimonial
      const q = query(collection(db, 'testimonials'), where('uid', '==', currentUser.uid));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // Update existing testimonial
        const docId = querySnapshot.docs[0].id;
        await updateDoc(doc(db, 'testimonials', docId), testimonialData);
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Your testimonial has been updated',
        });
      } else {
        // Add new testimonial
        await addDoc(collection(db, 'testimonials'), testimonialData);
        Swal.fire({
          icon: 'success',
          title: 'Thank You!',
          text: 'Your testimonial has been submitted',
        });
      }

      // Refresh testimonials
      await fetchTestimonials();
      setFormData({ title: "", review: "", rating: 0 });
      
    } catch (error) {
      console.error("Error submitting testimonial:", error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to submit testimonial',
      });
    }
  };

  // Render star ratings
  const renderStars = (rating) => {
    return (
      <div className="flex justify-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-5 w-5 ${star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="relative bg-white text-black dark:bg-black dark:text-white transition-colors duration-300 py-16 px-4">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          What <span className="text-purple-500">People Say</span>
        </h2>

        {/* Auth Status */}
        <div className="mb-8 flex justify-center">
          {currentUser ? (
            <div className="auth-card flex items-center justify-center space-x-4 p-3 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-sm">
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                Welcome, {currentUser.displayName}
              </span>
              <button
                onClick={handleSignOut}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-200"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="auth-card flex items-center justify-center space-x-4 p-3 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-sm">
              <span className="text-red-500 font-medium">Please login</span>
              <button
                onClick={handleGoogleSignIn}
                className="bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700 transition duration-200 flex items-center"
              >
                <MessageSquare className="h-4 w-4 mr-1" /> Login with Google
              </button>
            </div>
          )}
        </div>

        {/* Testimonial Form (only for logged in users) */}
        {currentUser && (
          <div className="mb-16 p-6 max-w-lg mx-auto bg-gray-100 dark:bg-gray-800 rounded-lg border border-purple-500/20 hover:border-purple-500/40 shadow-sm hover:shadow-[0_10px_25px_-5px_rgba(168,85,247,0.3)] transition-all duration-300">
            <h3 className="text-xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-200">
              Share Your Feedback
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  placeholder="Your Title/Company"
                  className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  required
                  minLength={3}
                  maxLength={25}
                />
              </div>
              <div>
                <textarea
                  name="review"
                  value={formData.review}
                  onChange={(e) => setFormData({...formData, review: e.target.value})}
                  placeholder="Your Review"
                  rows="5"
                  className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  required
                  minLength={6}
                />
              </div>
              <div className="flex justify-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <label key={star} className="cursor-pointer">
                    <input
                      type="radio"
                      name="rating"
                      value={star}
                      checked={formData.rating === star}
                      onChange={() => setFormData({...formData, rating: star})}
                      className="hidden"
                    />
                    <Star
                      className={`h-6 w-6 ${star <= formData.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300 dark:text-gray-600 hover:text-yellow-400'}`}
                    />
                  </label>
                ))}
              </div>
              <button
                type="submit"
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition w-full hover:shadow-[0_5px_20px_rgba(168,85,247,0.4)] hover:-translate-y-1"
              >
                {formData.title ? 'Update Review' : 'Submit Review'}
              </button>
            </form>
          </div>
        )}

        {/* Testimonials Display */}
        {loading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : testimonials.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No testimonials yet. Be the first to share!
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 shadow-sm hover:shadow-[0_10px_25px_-5px_rgba(168,85,247,0.3)] transition-all duration-300"
              >
                <div className="flex flex-col items-center">
                  {testimonial.photoURL ? (
                    <img
                      src={testimonial.photoURL}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mb-4"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mb-4">
                      <User className="h-8 w-8 text-purple-500" />
                    </div>
                  )}
                  {renderStars(testimonial.rating)}
                  <p className="text-gray-600 dark:text-gray-300 italic text-center my-4">
                    "{testimonial.review}"
                  </p>
                  <p className="font-semibold text-gray-800 dark:text-gray-200">
                    {testimonial.name}
                  </p>
                  {testimonial.title && (
                    <p className="text-purple-500 text-sm">{testimonial.title}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};