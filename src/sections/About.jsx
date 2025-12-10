import { motion } from 'framer-motion';
import data from '../data/data.json';

const About = () => {
    return (
        <section id="about" className="container section-padding">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="section-title">About Me</h2>
                <div style={{ maxWidth: '800px', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                    <br />
                    <p>
                        {/* I'm a Software Engineer with one year of experience in building web applications, specializing in creating scalable, maintainable, and user-centric solutions. I work across both frontend and backend technologies, with practical experience in React, Node.js, Express, PostgreSQL, MongoDB, Angular, and Spring Boot. */}
                        <br />
                        I've contributed to a wide range of projects—including AI-powered financial insight platforms, investment management tools, HRMS systems, and banking modules—where I built interactive UIs, optimized backend APIs, and integrated third-party services.
                        <br />
                        I enjoy solving real-world problems through clean architecture and thoughtful engineering. Outside of work, I explore new technologies, practice DSA, and contribute to side projects. I'm passionate about continuous learning and building software that makes a meaningful impact.
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
