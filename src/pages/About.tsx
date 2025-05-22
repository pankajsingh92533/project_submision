import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';

interface AboutProps {
  setIsHovering: (isHovering: boolean) => void;
}

const About: React.FC<AboutProps> = ({ setIsHovering }) => {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Creative Director',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'With over 15 years of experience in design, Sarah leads our creative team with passion and vision.',
    },
    {
      name: 'David Chen',
      role: 'Lead Developer',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'David is a full-stack developer who loves solving complex problems with elegant solutions.',
    },
    {
      name: 'Jessica Martinez',
      role: 'UX Designer',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Jessica specializes in creating intuitive user experiences that balance form and function.',
    },
    {
      name: 'Michael Park',
      role: 'Project Manager',
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Michael ensures projects run smoothly, on time, and on budget with meticulous attention to detail.',
    },
  ];
  
  const values = [
    { title: 'Innovation', description: 'We embrace new technologies and approaches to solve problems creatively.' },
    { title: 'Quality', description: 'We maintain the highest standards in everything we create and deliver.' },
    { title: 'Collaboration', description: 'We believe the best work happens when we work closely with our clients.' },
    { title: 'Integrity', description: 'We operate with honesty, transparency, and ethical business practices.' },
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
            <span className="text-sm font-medium uppercase tracking-wider text-accent-600">About Us</span>
            <h1 className="text-3xl md:text-5xl font-display font-bold mt-2 mb-6">
              <AnimatedText 
                text="We're a team of creative problem solvers" 
                className="leading-tight"
              />
            </h1>
            <p className="text-lg text-primary-600 dark:text-primary-300 mb-8 max-w-2xl">
              Founded in 2018, we're a digital studio that helps brands connect with their audience through thoughtful design and technology solutions.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-20 bg-white dark:bg-primary-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-medium uppercase tracking-wider text-accent-600">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">
                <AnimatedText text="From a small idea to a creative powerhouse" />
              </h2>
              <p className="text-primary-600 dark:text-primary-300 mb-6">
                We started as a two-person team working out of a tiny apartment, fueled by a passion for creating beautiful digital experiences. Today, we've grown into a full-service studio with a talented team of designers, developers, and strategists.
              </p>
              <p className="text-primary-600 dark:text-primary-300 mb-6">
                Our journey has been defined by our commitment to quality and our belief that great design can transform businesses. We've had the privilege of working with amazing clients across various industries, from startups to established brands.
              </p>
              <p className="text-primary-600 dark:text-primary-300">
                Through every project, we've maintained our core values of innovation, collaboration, and delivering exceptional results that exceed expectations.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="relative h-96 overflow-hidden rounded-lg shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Our team collaborating" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white dark:bg-primary-800 p-4 rounded-lg shadow-lg">
                <p className="text-accent-600 font-display font-bold text-4xl">7+</p>
                <p className="text-sm text-primary-600 dark:text-primary-300">Years of experience</p>
              </div>
              <div className="absolute -top-8 -right-8 bg-white dark:bg-primary-800 p-4 rounded-lg shadow-lg">
                <p className="text-accent-600 font-display font-bold text-4xl">150+</p>
                <p className="text-sm text-primary-600 dark:text-primary-300">Projects completed</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-20 bg-primary-50 dark:bg-primary-800">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-sm font-medium uppercase tracking-wider text-accent-600">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
              <AnimatedText text="Principles that guide our work" />
            </h2>
            <p className="text-lg text-primary-600 dark:text-primary-300">
              These core values shape our approach and define who we are as a company.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="p-8 rounded-lg bg-white dark:bg-primary-900 shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-accent-100 dark:bg-accent-900">
                    <CheckCircle size={24} className="text-accent-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-primary-600 dark:text-primary-300">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-20 bg-white dark:bg-primary-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-sm font-medium uppercase tracking-wider text-accent-600">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
              <AnimatedText text="Meet the talented people behind our success" />
            </h2>
            <p className="text-lg text-primary-600 dark:text-primary-300">
              Our diverse team combines creativity, technical expertise, and industry experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-primary-50 dark:bg-primary-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-accent-600 text-sm mb-3">{member.role}</p>
                  <p className="text-primary-600 dark:text-primary-300 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats */}
      <section className="py-20 bg-accent-600">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
            {[
              { number: '150+', label: 'Projects Completed' },
              { number: '50+', label: 'Happy Clients' },
              { number: '7+', label: 'Years of Experience' },
              { number: '12', label: 'Industry Awards' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-4xl md:text-5xl font-display font-bold mb-2">{stat.number}</p>
                <p className="text-white/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;