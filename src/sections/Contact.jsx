import { motion } from 'framer-motion';
import data from '../data/data.json';

const Contact = () => {
    const email = data.socials.find(s => s.platform === 'Email')?.url || 'mailto:';

    return (
        <section id="contact" className="container section-padding" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                style={{ maxWidth: '600px', margin: '0 auto' }}
            >
                <h4 style={{ color: 'var(--text-accent)', marginBottom: '1rem' }}>What's Next?</h4>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Get In Touch</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <a
                    href={email}
                    style={{
                        display: 'inline-block',
                        padding: '1rem 2rem',
                        border: '1px solid var(--text-accent)',
                        borderRadius: '4px',
                        color: 'var(--text-accent)',
                        fontWeight: 500,
                        textDecoration: 'none',
                        transition: 'background-color 0.2s'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(37, 99, 235, 0.1)'}
                    onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                    Say Hello
                </a>
            </motion.div>
        </section>
    );
};

export default Contact;
