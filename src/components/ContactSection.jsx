import { useState, useEffect } from "react";
import { FaGoogle, FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { db, auth } from "../FireBase/FirebaseConfig";
import { 
  onAuthStateChanged, 
  signInWithPopup, 
  GoogleAuthProvider,
  signOut 
} from "firebase/auth";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

export const ContactMe = () => {
  // State declarations
  const [currentUser, setCurrentUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [wordCount, setWordCount] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Constants
  const MAX_WORDS = 120;
  const MIN_CHARS = 5;
  const MAX_NAME_LENGTH = 40;
  const MAX_EMAIL_LENGTH = 30;
  const DEFAULT_AVATAR = 'https://via.placeholder.com/40';

  // Handler functions
  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' });
      await signInWithPopup(auth, provider);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Sign-In Error',
        text: error.message,
        customClass: {
          popup: 'dark:bg-gray-700 dark:text-white',
          title: 'dark:text-white',
          content: 'dark:text-gray-300'
        },
        confirmButtonColor: '#2563eb'
      });
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setWordCount(0);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Sign-Out Error',
        text: error.message,
        customClass: {
          popup: 'dark:bg-gray-700 dark:text-white',
          title: 'dark:text-white',
          content: 'dark:text-gray-300'
        },
        confirmButtonColor: '#2563eb'
      });
    }
  };

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newMode);
  };

  const countWords = (text) => {
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    return words.length;
  };

  const handleMessageChange = (e) => {
    const message = e.target.value;
    const newWordCount = countWords(message);
    
    if (newWordCount > MAX_WORDS) {
      const words = message.trim().split(/\s+/).slice(0, MAX_WORDS).join(' ');
      setFormData(prev => ({ ...prev, message: words }));
      setWordCount(MAX_WORDS);
      
      Swal.fire({
        icon: 'warning',
        title: 'Word Limit Reached',
        text: `Your message cannot exceed ${MAX_WORDS} words.`,
        customClass: {
          popup: 'dark:bg-gray-700 dark:text-white',
          title: 'dark:text-white',
          content: 'dark:text-gray-300'
        },
        confirmButtonColor: '#2563eb'
      });
    } else {
      setFormData(prev => ({ ...prev, message }));
      setWordCount(newWordCount);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!currentUser) {
      Swal.fire({
        icon: 'warning',
        title: 'Authentication Required',
        text: 'Please sign in with your Google account to send a message.',
        customClass: {
          popup: 'dark:bg-gray-700 dark:text-white',
          title: 'dark:text-white',
          content: 'dark:text-gray-300'
        },
        confirmButtonColor: '#2563eb'
      });
      return;
    }

    const { name, email, subject, message } = formData;
    const currentWordCount = countWords(message);

    // Validation checks remain the same...
    // ... (include all your existing validation logic)

    try {
      // 1. Save message to Firestore
      await addDoc(collection(db, "messages"), {
        name,
        email,
        subject,
        message,
        uid: currentUser.uid,
        timestamp: serverTimestamp()
      });

      // 2. Send email to owner
      await emailjs.send('service_cystcap', 'template_1wtcizm', {
        from_name: name,
        from_email: email,
        subject,
        message_html: message,
        to_name: 'Saad',
        to_email: 'saadkamra485@gmail.com'
      });

      // 3. Send confirmation email to user
      await emailjs.send('service_cystcap', 'template_gp759md', {
        to_name: name,
        to_email: email,
        subject,
        message_html: message,
        reply_to: 'saadkamra485@gmail.com'
      });

      // Success message
      Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: 'Your message has been successfully sent.',
        timer: 3000,
        showConfirmButton: false,
        customClass: {
          popup: 'dark:bg-gray-700 dark:text-white',
          title: 'dark:text-white',
          content: 'dark:text-gray-300'
        }
      });

      // Clear form
      setFormData(prev => ({ ...prev, subject: "", message: "" }));
      setWordCount(0);
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Failed to send message. Please try again.',
        customClass: {
          popup: 'dark:bg-gray-700 dark:text-white',
          title: 'dark:text-white',
          content: 'dark:text-gray-300'
        },
        confirmButtonColor: '#2563eb'
      });
    }
  };

  // Effects
  useEffect(() => {
    emailjs.init('p7dJaMnnokaaT_Mr3');
    
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark').matches;
    const savedTheme = localStorage.getItem('theme');
    setIsDarkMode(savedTheme === 'dark' || (!savedTheme && prefersDarkMode));
    
    const handleScroll = () => setShowBackToTop(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      if (user) {
        setFormData(prev => ({
          ...prev,
          name: user.displayName || "",
          email: user.email || ""
        }));
      } else {
        setFormData(prev => ({ ...prev, subject: "", message: "" }));
      }
    });
    return () => unsubscribe();
  }, []);

  // Render
  return (
    <section id="contact" className="relative bg-white text-black dark:bg-black dark:text-white transition-colors duration-300 py-16 px-4">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Contact <span className="text-purple-500">Me</span>
        </h2>

        {/* Auth Status */}
        <div className="mb-8 flex justify-center">
          {currentUser ? (
            <div className="flex items-center space-x-4 p-3 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-sm">
              <img 
                src={currentUser.photoURL || DEFAULT_AVATAR} 
                alt="User" 
                className="w-10 h-10 rounded-full border-2 border-purple-500"
                onError={(e) => e.target.src = DEFAULT_AVATAR}
              />
              <span className="text-gray-700 dark:text-gray-300">
                {currentUser.displayName || "User"}
              </span>
              <button
                onClick={handleSignOut}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <button
              onClick={handleGoogleSignIn}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition flex items-center space-x-2"
            >
              <FaGoogle />
              <span>Sign in with Google</span>
            </button>
          )}
        </div>

        {/* Contact Form */}
        <div className="max-w-lg mx-auto p-6 bg-gray-100 dark:bg-gray-800 rounded-lg border border-purple-500/20 hover:border-purple-500/40 shadow-sm hover:shadow-[0_10px_25px_-5px_rgba(168,85,247,0.3)] transition-all duration-300">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              disabled={!!currentUser}
              required
            />
            
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              disabled={!!currentUser}
              required
            />
            
            <select
              name="subject"
              value={formData.subject}
              onChange={(e) => setFormData({...formData, subject: e.target.value})}
              className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              disabled={!currentUser}
              required
            >
              <option value="" disabled>Select Subject</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Project Collaboration">Project Collaboration</option>
              <option value="Feedback">Feedback</option>
              <option value="Other">Other</option>
            </select>
            
            <div className="relative">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleMessageChange}
                className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                disabled={!currentUser}
                required
              />
              <div className={`text-right text-sm mt-1 ${wordCount > MAX_WORDS ? 'text-red-500' : 'text-gray-500'}`}>
                Words: {wordCount}/{MAX_WORDS}
              </div>
            </div>
            
            <button
              type="submit"
              disabled={!currentUser}
              className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition disabled:opacity-50"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-12">
          <a href="mailto:saadkamra485@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-purple-500 text-2xl">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/saad-kamran-257564351/" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-purple-500 text-2xl">
            <FaLinkedin />
          </a>
          <a href="https://github.com/saad89-ux" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-purple-500 text-2xl">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/saadkamran29/profilecard/?igsh=ZzhyZDdpeW91MzB6" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-purple-500 text-2xl">
            <FaInstagram />
          </a>
        </div>
      </div>

    
    </section>
  );
};