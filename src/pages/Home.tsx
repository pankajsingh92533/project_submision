import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Award, Users, Code, Globe, ChevronDown } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';

interface HomeProps {
  setIsHovering: (isHovering: boolean) => void;
}

const Home: React.FC<HomeProps> = ({ setIsHovering }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const services = [
    { 
      icon: <Globe className="w-8 h-8 text-accent-600" />, 
      title: 'Web Design', 
      description: 'Beautiful, intuitive designs that engage your audience and elevate your brand.' 
    },
    { 
      icon: <Code className="w-8 h-8 text-accent-600" />, 
      title: 'Development', 
      description: 'Custom web applications built with cutting-edge technologies and best practices.' 
    },
    { 
      icon: <Users className="w-8 h-8 text-accent-600" />, 
      title: 'Branding', 
      description: 'Strategic brand identity that communicates your unique value proposition.' 
    },
    { 
      icon: <Award className="w-8 h-8 text-accent-600" />, 
      title: 'Digital Marketing', 
      description: 'Data-driven marketing strategies to grow your audience and drive conversions.' 
    },
  ];
  
  const recentProjects = [
    {
      id: 1,
      title: 'Eco-Friendly E-commerce',
      category: 'Web Design & Development',
      imageUrl: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 2,
      title: 'Creative Agency Rebrand',
      category: 'Branding & Identity',
      imageUrl: 'https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 3,
      title: 'Fitness App UI/UX',
      category: 'Mobile App Design',
      imageUrl: 'https://images.pexels.com/photos/5053740/pexels-photo-5053740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];
  
  return (
    <>
      {/* Hero Section */}
      <motion.section 
        ref={targetRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          opacity: heroOpacity,
          scale: heroScale,
          y: heroY,
        }}
      >
        <div className="absolute inset-0 bg-primary-50 dark:bg-primary-900 -z-10" />
        
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-100/30 to-primary-100/30 dark:from-accent-900/20 dark:to-primary-800/20" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-300/50 dark:via-primary-700/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-300/50 dark:via-primary-700/50 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block px-4 py-1 mb-6 rounded-full bg-accent-100 dark:bg-accent-900 text-accent-600 dark:text-accent-300 text-sm font-medium"
            >
              Digital Innovation Studio
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              <AnimatedText 
                text="We craft digital experiences that inspire" 
                className="block"
              />
            </h1>
            
            <p className="text-lg md:text-xl text-primary-600 dark:text-primary-300 mb-8 max-w-2xl mx-auto">
              A creative studio specialized in building beautiful, functional, and user-centered digital solutions that help brands stand out.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/projects"
                  className="inline-flex items-center justify-center px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white font-medium rounded-lg transition-colors duration-300"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  View Our Work <ArrowRight size={18} className="ml-2" />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-primary-800 hover:bg-primary-100 dark:hover:bg-primary-700 text-primary-900 dark:text-white font-medium rounded-lg border border-primary-200 dark:border-primary-700 transition-colors duration-300"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  Get in Touch
                </Link>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.button
            onClick={scrollToFeatures}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 p-2 rounded-full bg-white dark:bg-primary-800 shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            whileHover={{ y: 5 }}
            aria-label="Scroll down"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <ChevronDown size={24} className="text-primary-900 dark:text-white" />
          </motion.button>
        </div>
      </motion.section>
      
      {/* Services Section */}
      <section id="features" className="py-20 bg-white dark:bg-primary-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-sm font-medium uppercase tracking-wider text-accent-600">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
              <AnimatedText text="Exceptional services for extraordinary brands" />
            </h2>
            <p className="text-lg text-primary-600 dark:text-primary-300">
              We combine strategy, design, and technology to create digital experiences that engage and convert.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="p-8 rounded-lg bg-primary-50 dark:bg-primary-800 shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="p-4 rounded-lg bg-white dark:bg-primary-700 inline-block mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-primary-600 dark:text-primary-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="py-20 bg-primary-50 dark:bg-primary-800">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div className="max-w-2xl mb-6 md:mb-0">
              <span className="text-sm font-medium uppercase tracking-wider text-accent-600">Featured Work</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
                <AnimatedText text="Recent projects we're proud of" />
              </h2>
              <p className="text-lg text-primary-600 dark:text-primary-300">
                Take a look at some of our recent work for clients across various industries.
              </p>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/projects"
                className="inline-flex items-center text-accent-600 hover:text-accent-700 font-medium"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                View All Projects <ArrowRight size={18} className="ml-2" />
              </Link>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative h-96 overflow-hidden rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-xs text-white/80 font-medium uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-xl text-white font-semibold mt-1">{project.title}</h3>
                  <Link 
                    to="/projects"
                    className="mt-4 inline-flex items-center text-white/90 hover:text-white font-medium text-sm"
                  >
                    View Project <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-24 bg-accent-600 text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              <AnimatedText text="Let's create something amazing together" />
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Ready to elevate your digital presence? We're here to turn your vision into reality.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-accent-600 font-medium rounded-lg hover:bg-primary-50 transition-colors duration-300"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Start a Project
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;