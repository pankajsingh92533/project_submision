import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

interface ContactFormProps {
  setIsHovering: (isHovering: boolean) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ setIsHovering }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        
        // Reset submission status after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };
  
  const inputClasses = "w-full bg-white dark:bg-primary-800 border border-primary-200 dark:border-primary-700 rounded-lg px-4 py-3 text-primary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-500 transition-all duration-300";
  const labelClasses = "block text-sm font-medium mb-2 text-primary-700 dark:text-primary-300";
  const errorClasses = "text-xs text-error-500 mt-1";
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-lg mx-auto bg-primary-50 dark:bg-primary-800/50 p-8 rounded-lg shadow-lg"
    >
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-8"
        >
          <div className="w-16 h-16 bg-success-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
          <p className="text-primary-600 dark:text-primary-300">
            Thank you for contacting us. We'll get back to you shortly.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-semibold mb-6 text-center">Get in Touch</h2>
          
          <div className="mb-4">
            <label htmlFor="name" className={labelClasses}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`${inputClasses} ${errors.name ? 'border-error-500 ring-1 ring-error-500' : ''}`}
              placeholder="Your name"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            />
            {errors.name && <p className={errorClasses}>{errors.name}</p>}
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className={labelClasses}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`${inputClasses} ${errors.email ? 'border-error-500 ring-1 ring-error-500' : ''}`}
              placeholder="your.email@example.com"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            />
            {errors.email && <p className={errorClasses}>{errors.email}</p>}
          </div>
          
          <div className="mb-4">
            <label htmlFor="subject" className={labelClasses}>Subject</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={inputClasses}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <option value="">Select a subject</option>
              <option value="Web Design">Web Design</option>
              <option value="Development">Development</option>
              <option value="Branding">Branding</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className={labelClasses}>Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={`${inputClasses} resize-none ${errors.message ? 'border-error-500 ring-1 ring-error-500' : ''}`}
              placeholder="Tell us about your project..."
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            ></textarea>
            {errors.message && <p className={errorClasses}>{errors.message}</p>}
          </div>
          
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-accent-600 hover:bg-accent-700 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center transition-colors duration-300 disabled:opacity-70"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {isSubmitting ? (
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
            ) : (
              <Send size={18} className="mr-2" />
            )}
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>
        </form>
      )}
    </motion.div>
  );
};

export default ContactForm;