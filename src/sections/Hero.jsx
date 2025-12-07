import { motion } from 'framer-motion';
import data from '../data/data.json';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
    const { name, role, summary, location } = data.profile;

    const iconMap = {
        GitHub: <Github size={24} />,
        LinkedIn: <Linkedin size={24} />,
        Email: <Mail size={24} />
    };

    return (
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingTop: '0'
        }} className="container">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                <h3 style={{ color: 'var(--text-accent)', fontSize: '1.1rem', marginBottom: '1rem', fontWeight: 500 }}>
                    Hi, my name is
                </h3>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <h1 style={{
                    fontSize: 'clamp(3rem, 7vw, 5rem)',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    lineHeight: 1.1,
                    marginBottom: '0.5rem'
                }}>
                    {name}.
                </h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <h2 style={{
                    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                    fontWeight: 700,
                    color: 'var(--text-secondary)',
                    marginBottom: '1.5rem'
                }}>
                    {role}.
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                style={{ maxWidth: '600px', marginBottom: '2rem' }}
            >
                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                    {summary} I'm based in {location}.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                style={{ display: 'flex', gap: '1.5rem' }}
            >
                {data.socials.map((social) => (
                    <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--text-primary)', transition: 'color 0.2s' }}
                        onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-accent)'}
                        onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                    >
                        {iconMap[social.platform] || social.platform}
                    </a>
                ))}
            </motion.div>
        </section>
    );
};

export default Hero;
