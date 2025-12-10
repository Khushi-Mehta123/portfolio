import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import data from '../data/data.json';
import PropTypes from 'prop-types';

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            style={{
                backgroundColor: 'var(--card-bg)',
                borderRadius: '4px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
            }}
        >
            {/* Image container with blue tint overlay effect */}
            <div style={{
                position: 'relative',
                height: '200px',
                backgroundColor: 'var(--bg-secondary)', // Placeholder if no image
                overflow: 'hidden'
            }}>
                {project.images && project.images.length > 0 ? (
                    <div style={{
                        display: 'flex',
                        height: '100%',
                        width: '100%'
                    }}>
                        {project.images.slice(0, 3).map((img, idx) => (
                            <div key={idx} style={{ position: 'relative', height: '100%', overflow: 'hidden' }}>
                                <div
                                    className="project-overlay"
                                    style={{
                                        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                                        backgroundColor: 'var(--text-accent)', opacity: 0.4, zIndex: 1,
                                        transition: 'opacity 0.3s ease', mixBlendMode: 'multiply'
                                    }}
                                />
                                <img
                                    src={img}
                                    alt={`${project.title} ${idx + 1}`}
                                    className="project-img"
                                    style={{
                                        width: '100%', height: '100%', objectFit: 'cover',
                                        filter: 'grayscale(100%)', transition: 'filter 0.3s ease, transform 0.5s ease'
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                ) : project.image ? (
                    <>
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'var(--text-accent)',
                                opacity: 0.4, // The blue tint
                                zIndex: 1,
                                transition: 'opacity 0.3s ease',
                                mixBlendMode: 'multiply' // Creative effect
                            }}
                            className="project-overlay"
                        />
                        <img
                            src={project.image}
                            alt={project.title}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                filter: 'grayscale(100%)', // Start grayscale
                                transition: 'filter 0.3s ease, transform 0.5s ease'
                            }}
                            className="project-img"
                        />
                    </>
                ) : (
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#e0f2fe', // Very light blue placeholder
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--text-accent)'
                    }}>
                        <span>No Image</span>
                    </div>
                )}

                {/* CSS for hover effect injected locally or use styled components. 
                     Using style tag here for self-contained component logic as requested by simplicity.
                 */}
                <style>{`
                    .project-overlay:hover { opacity: 0 !important; }
                    .project-img:hover { filter: grayscale(0%) !important; transform: scale(1.05); }
                    /* Parent hover triggers child changes */
                    div:hover > .project-overlay { opacity: 0 !important; }
                    div:hover > .project-img { filter: grayscale(0%) !important; transform: scale(1.05); }
                 `}</style>
            </div>

            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>{project.title}</h3>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        {/* <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}><ExternalLink size={20} /></a> */}
                        {/* Assuming there might be a github link in future schema, using link for now */}
                    </div>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1 }}>
                    {project.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {project.tags.map(tag => (
                        <span key={tag} style={{
                            fontSize: '0.75rem',
                            color: 'var(--text-accent)',
                            fontFamily: 'monospace'
                        }}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

ProjectCard.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        image: PropTypes.string,
        images: PropTypes.arrayOf(PropTypes.string),
        tags: PropTypes.arrayOf(PropTypes.string),
        // link: PropTypes.string
    }).isRequired
};

const Projects = () => {
    return (
        <section id="projects" className="container section-padding">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="section-title">Some Things I've Built</h2>
                <div style={{
                    display: 'grid',
                    gap: '2rem'
                }}>
                    {data.projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
