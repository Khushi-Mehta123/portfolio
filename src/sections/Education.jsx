import { motion } from 'framer-motion';
import data from '../data/data.json';

const Education = () => {
    return (
        <section id="education" className="container section-padding">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="section-title">Education</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {data.education.map((edu, index) => (
                        <div key={index} style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'baseline',
                            flexWrap: 'wrap',
                            borderBottom: '1px solid var(--border-color)',
                            paddingBottom: '1rem'
                        }}>
                            <div>
                                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>{edu.institution}</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>{edu.degree}</p>
                            </div>
                            <div style={{ color: 'var(--text-secondary)', fontFamily: 'monospace' }}>
                                {edu.duration}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Education;
