import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import AnimatedText from '../components/AnimatedText';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  link: string;
}

interface ProjectsProps {
  setIsHovering: (isHovering: boolean) => void;
}

const Projects: React.FC<ProjectsProps> = ({ setIsHovering }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Eco-Friendly E-commerce',
      category: 'Web Design',
      description: 'A sustainable e-commerce platform with carbon-neutral shipping and eco-conscious product filtering.',
      imageUrl: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: 'https://example.com/eco-commerce',
    },
    {
      id: 2,
      title: 'Creative Agency Rebrand',
      category: 'Branding',
      description: 'Complete rebrand for a creative agency, including logo design, visual identity, and brand guidelines.',
      imageUrl: 'https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: 'https://example.com/agency-rebrand',
    },
    {
      id: 3,
      title: 'Fitness App UI/UX',
      category: 'Mobile',
      description: 'Intuitive mobile app design for a fitness platform, focusing on user engagement and habit formation.',
      imageUrl: 'https://images.pexels.com/photos/5053740/pexels-photo-5053740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: 'https://example.com/fitness-app',
    },
    {
      id: 4,
      title: 'Financial Dashboard',
      category: 'Web App',
      description: 'Real-time financial dashboard with data visualization and personalized insights for investors.',
      imageUrl: 'https://images.pexels.com/photos/7821479/pexels-photo-7821479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: 'https://example.com/finance-dashboard',
    },
    {
      id: 5,
      title: 'Restaurant Branding',
      category: 'Branding',
      description: 'Complete branding package for a new farm-to-table restaurant, including menus, signage, and web design.',
      imageUrl: 'https://images.pexels.com/photos/8131589/pexels-photo-8131589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: 'https://example.com/restaurant-brand',
    },
    {
      id: 6,
      title: 'Travel Blog Platform',
      category: 'Web Design',
      description: 'Custom WordPress theme and plugins for a travel blogger with integrated maps and photo galleries.',
      imageUrl: 'https://images.pexels.com/photos/4553030/pexels-photo-4553030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: 'https://example.com/travel-blog',
    },
    {
      id: 7,
      title: 'Event Planning App',
      category: 'Mobile',
      description: 'Mobile application for event planners with vendor management, budget tracking, and guest list features.',
      imageUrl: 'https://images.pexels.com/photos/2608516/pexels-photo-2608516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: 'https://example.com/event-app',
    },
    {
      id: 8,
      title: 'SaaS Analytics Dashboard',
      category: 'Web App',
      description: 'Comprehensive analytics dashboard for SaaS companies with custom reporting and user behavior insights.',
      imageUrl: 'https://images.pexels.com/photos/6803503/pexels-photo-6803503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: 'https://example.com/saas-analytics',
    },
  ];
  
  const categories = ['All', 'Web Design', 'Web App', 'Mobile', 'Branding'];
  
  useEffect(() => {
    setFilteredProjects(
      selectedCategory === 'All'
        ? projects
        : projects.filter(project => project.category === selectedCategory)
    );
  }, [selectedCategory]);
  
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
            <span className="text-sm font-medium uppercase tracking-wider text-accent-600">Our Work</span>
            <h1 className="text-3xl md:text-5xl font-display font-bold mt-2 mb-6">
              <AnimatedText 
                text="Showcasing our best creative projects" 
                className="leading-tight"
              />
            </h1>
            <p className="text-lg text-primary-600 dark:text-primary-300 mb-8 max-w-2xl">
              Explore our portfolio of design and development projects. Each project represents our commitment to quality, innovation, and solving real business challenges.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Projects */}
      <section className="py-16 bg-white dark:bg-primary-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  selectedCategory === category
                    ? 'bg-accent-600 text-white'
                    : 'bg-primary-50 dark:bg-primary-800 text-primary-600 dark:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {category}
              </motion.button>
            ))}
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} setIsHovering={setIsHovering} />
              ))}
            </motion.div>
          </AnimatePresence>
          
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-lg text-primary-600 dark:text-primary-300">
                No projects found in this category. Please try another filter.
              </p>
            </motion.div>
          )}
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-primary-50 dark:bg-primary-800">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-sm font-medium uppercase tracking-wider text-accent-600">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
              <AnimatedText text="How we bring ideas to life" />
            </h2>
            <p className="text-lg text-primary-600 dark:text-primary-300">
              Our proven approach ensures we deliver exceptional results for every project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '01', title: 'Discovery', description: 'We dive deep to understand your business, goals, and challenges.' },
              { number: '02', title: 'Strategy', description: 'We develop a tailored plan that addresses your specific needs and objectives.' },
              { number: '03', title: 'Design & Development', description: 'Our team brings the vision to life with meticulous attention to detail.' },
              { number: '04', title: 'Launch & Support', description: 'We ensure a smooth deployment and provide ongoing maintenance and optimization.' },
            ].map((step, index) => (
              <motion.div
                key={step.number}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="bg-white dark:bg-primary-900 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                  <span className="text-4xl font-bold text-accent-600 opacity-50">{step.number}</span>
                  <h3 className="text-xl font-semibold mt-4 mb-2">{step.title}</h3>
                  <p className="text-primary-600 dark:text-primary-300">{step.description}</p>
                </div>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                    <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M39.5303 6.53033C39.8232 6.23744 39.8232 5.76256 39.5303 5.46967L34.7574 0.696699C34.4645 0.403806 33.9896 0.403806 33.6967 0.696699C33.4038 0.989593 33.4038 1.46447 33.6967 1.75736L37.9393 6L33.6967 10.2426C33.4038 10.5355 33.4038 11.0104 33.6967 11.3033C33.9896 11.5962 34.4645 11.5962 34.7574 11.3033L39.5303 6.53033ZM0 6.75H39V5.25H0V6.75Z" fill="currentColor" className="text-accent-600 opacity-50" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;