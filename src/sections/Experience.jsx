import { motion } from 'framer-motion';
import data from '../data/data.json';
const Experience = () => {
    return (
        <section id="experience" className="container section-padding">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="section-title">Where I've Worked</h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {data.experience.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            style={{
                                borderLeft: '2px solid var(--border-color)',
                                paddingLeft: '1.5rem',
                                position: 'relative'
                            }}
                        >
                            {/* Timeline dot */}
                            <div style={{
                                position: 'absolute',
                                left: '-6px',
                                top: '0',
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                backgroundColor: 'var(--text-accent)'
                            }}></div>

                            <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                                {job.role} <span style={{ color: 'var(--text-accent)' }}>@ {job.company}</span>
                            </h3>
                            <p style={{
                                fontSize: '0.9rem',
                                color: 'var(--text-secondary)',
                                marginBottom: '1rem',
                                fontFamily: 'monospace'
                            }}>
                                {job.duration}
                            </p>
                            <p style={{ color: 'var(--text-secondary)', maxWidth: '700px' }}>
                                {job.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;
