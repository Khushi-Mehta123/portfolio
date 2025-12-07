import data from '../data/data.json';

const Footer = () => {
    return (
        <footer style={{
            textAlign: 'center',
            padding: '2rem',
            color: 'var(--text-secondary)',
            fontSize: '0.9rem',
            marginTop: 'auto'
        }}>
            <p>Built with React & Vite by {data.profile.name}.</p>
            <div style={{ marginTop: '0.5rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                {data.socials.map(s => (
                    <a key={s.platform} href={s.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
                        {s.platform}
                    </a>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
