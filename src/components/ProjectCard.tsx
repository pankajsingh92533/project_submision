import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    category: string;
    description: string;
    imageUrl: string;
    link: string;
  };
  setIsHovering: (isHovering: boolean) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, setIsHovering }) => {
  return (
    <motion.div 
      className="group relative overflow-hidden rounded-lg shadow-lg bg-white dark:bg-primary-800"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-accent-600">
              {project.category}
            </span>
            <h3 className="text-xl font-semibold mt-1">{project.title}</h3>
          </div>
          
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-primary-50 dark:bg-primary-700 hover:bg-accent-100 dark:hover:bg-accent-900 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`View ${project.title} project`}
          >
            <ExternalLink size={18} className="text-primary-900 dark:text-white" />
          </motion.a>
        </div>
        
        <p className="text-sm text-primary-600 dark:text-primary-300 line-clamp-3">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;