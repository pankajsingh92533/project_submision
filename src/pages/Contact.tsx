import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import AnimatedText from '../components/AnimatedText';

interface ContactProps {
  setIsHovering: (isHovering: boolean) => void;
}

const Contact: React.FC<ContactProps> = ({ setIsHovering }) => {
  const contactInfo = [
    {
      icon: <MapPin size={24} className="text-accent-600" />,
      title: 'Our Location',
      details: 'Chak Ganjaria, C, G. City, Lucknow, Ahmamau, Uttar Pradesh 226002',
    },
    {
      icon: <Phone size={24} className="text-accent-600" />,
      title: 'Phone Number',
      details: '+91 9999999999',
    },
    {
      icon: <Mail size={24} className="text-accent-600" />,
      title: 'Email Address',
      details: 'hello@creativestudio.com',
    },
    {
      icon: <Clock size={24} className="text-accent-600" />,
      title: 'Working Hours',
      details: 'Monday - Friday: 9am - 6pm',
    },
  ];
  
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-primary-50 dark:bg-primary-800">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="text-sm font-medium uppercase tracking-wider text-accent-600">Contact Us</span>
            <h1 className="text-3xl md:text-5xl font-display font-bold mt-2 mb-6">
              <AnimatedText 
                text="Let's start a conversation" 
                className="leading-tight"
              />
            </h1>
            <p className="text-lg text-primary-600 dark:text-primary-300 mb-8 max-w-2xl">
              Have a project in mind or want to learn more about our services? We'd love to hear from you. Fill out the form below or use our contact information.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-20 bg-white dark:bg-primary-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
                <AnimatedText text="We'd love to hear from you" />
              </h2>
              <p className="text-primary-600 dark:text-primary-300 mb-8">
                Whether you're looking to start a new project, need help with an existing one, or just want to say hello, we're here to help.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="p-6 rounded-lg bg-primary-50 dark:bg-primary-800"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    <div className="p-2 rounded-full bg-white dark:bg-primary-700 inline-block mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-primary-600 dark:text-primary-300">{item.details}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="bg-primary-50 dark:bg-primary-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {['Instagram', 'Twitter', 'LinkedIn', 'Dribbble'].map((platform) => (
                    <motion.a
                      key={platform}
                      href="#"
                      className="text-primary-600 dark:text-primary-300 hover:text-accent-600 dark:hover:text-accent-500 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      {platform}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
            
            <ContactForm setIsHovering={setIsHovering} />
          </div>
        </div>
      </section>
      
      {/* Map */}
      <section className="py-20 bg-primary-50 dark:bg-primary-800">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              <AnimatedText text="Visit our studio" />
            </h2>
            <p className="text-primary-600 dark:text-primary-300">
              We're conveniently located in the heart of the design district. Come say hello!
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.5154488122815!2d80.94615917497263!3d26.84669307673527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2b2a7a6e9e3%3A0x2f60d189e93d52a0!2sLucknow%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1716452381234!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Studio Location"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-20 bg-white dark:bg-primary-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                <AnimatedText text="Frequently Asked Questions" />
              </h2>
              <p className="text-primary-600 dark:text-primary-300">
                Answers to common questions about our services and process.
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: 'What services do you offer?',
                  answer: 'We offer a comprehensive range of digital services including web design, web development, mobile app design and development, branding, and digital marketing strategy.',
                },
                {
                  question: 'How much does a typical project cost?',
                  answer: 'Project costs vary widely depending on requirements, scope, and complexity. We provide detailed quotes after an initial consultation to understand your specific needs.',
                },
                {
                  question: 'How long does a typical project take?',
                  answer: 'Timeline depends on the project scope and complexity. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months or more.',
                },
                {
                  question: 'Do you work with clients remotely?',
                  answer: 'Yes, we work with clients globally. Our collaborative process works well for remote partnerships, using tools like Zoom, Slack, and Figma to ensure clear communication.',
                },
                {
                  question: 'What is your design process?',
                  answer: 'Our process includes discovery, strategy, wireframing, design, development, testing, and launch phases. We involve clients at each stage for feedback and approvals.',
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-lg bg-primary-50 dark:bg-primary-800"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-primary-600 dark:text-primary-300">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;