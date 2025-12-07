import { motion } from 'framer-motion';
import data from '../data/data.json';

const Skills = () => {
    return (
        <section id="skills" className="container section-padding">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="section-title">Skills</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {data.skills.map((skill, index) => (
                        <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            style={{
                                backgroundColor: 'var(--bg-secondary)',
                                padding: '1.5rem 1rem',
                                borderRadius: '4px', // Square edges as requested (minimal radius)
                                textAlign: 'center',
                                color: 'var(--text-primary)',
                                fontWeight: 500,
                                boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                                transition: 'transform 0.2s',
                                cursor: 'default'
                            }}
                            whileHover={{ y: -5, boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}
                        >
                            {skill}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
