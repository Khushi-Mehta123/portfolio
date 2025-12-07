import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useTheme } from '../theme/ThemeContext';
import ThemeToggle from '../components/ThemeToggle';
import data from '../data/data.json';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Experience', to: 'experience' },
        { name: 'Education', to: 'education' },
        { name: 'Projects', to: 'projects' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <header
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 100,
                backgroundColor: scrolled ? 'var(--bg-primary)' : 'transparent',
                boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                transition: 'all 0.3s ease',
                padding: '1rem 0'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Logo/Name */}
                <div style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--text-accent)' }}>
                    <Link to="hero" smooth={true} duration={500} style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}>
                        {data.profile.name.split(' ')[0]}
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="desktop-nav" style={{ display: 'none', gap: '2rem', alignItems: 'center' }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-70}
                            activeClass="active"
                            style={{
                                cursor: 'pointer',
                                fontSize: '0.9rem',
                                color: 'var(--text-secondary)',
                                fontWeight: 500,
                            }}
                            className="nav-link"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href={data.profile.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            border: '1px solid var(--text-accent)',
                            color: 'var(--text-accent)',
                            padding: '0.5rem 1rem',
                            borderRadius: '4px',
                            fontSize: '0.9rem',
                            marginLeft: '1rem',
                            textDecoration: 'none'
                        }}
                    >
                        Resume
                    </a>
                    <ThemeToggle />
                </nav>

                {/* Mobile Toggle */}
                <div className="mobile-toggle" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <ThemeToggle />
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ color: 'var(--text-primary)' }}>
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            width: '70%',
                            height: '100vh',
                            backgroundColor: 'var(--bg-secondary)',
                            boxShadow: '-4px 0 15px rgba(0,0,0,0.1)',
                            zIndex: 99,
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '5rem 2rem',
                            gap: '2rem'
                        }}
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-70}
                                onClick={() => setMobileMenuOpen(false)}
                                style={{
                                    cursor: 'pointer',
                                    fontSize: '1.2rem',
                                    color: 'var(--text-primary)',
                                    fontWeight: 500
                                }}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href={data.profile.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                border: '1px solid var(--text-accent)',
                                color: 'var(--text-accent)',
                                padding: '0.8rem 1.5rem',
                                borderRadius: '4px',
                                fontSize: '1rem',
                                textAlign: 'center',
                                textDecoration: 'none'
                            }}
                        >
                            Resume
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
            <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        .nav-link:hover, .nav-link.active {
            color: var(--text-accent) !important;
        }
      `}</style>
        </header>
    );
};

export default Header;
