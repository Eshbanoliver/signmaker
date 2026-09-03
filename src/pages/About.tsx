import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Target, Zap, Shield, Monitor, X, ChevronLeft, ChevronRight, Images } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import './About.css';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const galleryImages = [
  { src: '/images/WhatsApp Image 2026-09-03 at 3.38.36 PM (1).jpeg', alt: 'Sign Making Work 1' },
  { src: '/images/WhatsApp Image 2026-09-03 at 3.38.36 PM.jpeg', alt: 'Sign Making Work 2' },
  { src: '/images/WhatsApp Image 2026-09-03 at 3.38.38 PM.jpeg', alt: 'Sign Making Work 3' },
  { src: '/images/WhatsApp Image 2026-09-03 at 3.38.39 PM (1).jpeg', alt: 'Sign Making Work 4' },
  { src: '/images/WhatsApp Image 2026-09-03 at 3.38.39 PM.jpeg', alt: 'Sign Making Work 5' },
  { src: '/images/WhatsApp Image 2026-09-03 at 3.38.40 PM.jpeg', alt: 'Sign Making Work 6' },
  { src: '/images/WhatsApp Image 2026-09-03 at 3.38.44 PM (1).jpeg', alt: 'Sign Making Work 7' },
  { src: '/images/WhatsApp Image 2026-09-03 at 3.38.44 PM.jpeg', alt: 'Sign Making Work 8' },
  { src: '/images/WhatsApp Image 2026-09-03 at 3.38.46 PM (1).jpeg', alt: 'Sign Making Work 9' },
  { src: '/images/WhatsApp Image 2026-09-03 at 3.38.46 PM.jpeg', alt: 'Sign Making Work 10' },
  { src: '/images/WhatsApp Image 2026-09-03 at 3.38.50 PM.jpeg', alt: 'Sign Making Work 11' },
  { src: '/images/WhatsApp Image 2026-09-03 at 3.38.51 PM (1).jpeg', alt: 'Sign Making Work 12' },
  { src: '/images/WhatsApp Image 2026-09-03 at 3.38.51 PM (2).jpeg', alt: 'Sign Making Work 13' },
  { src: '/images/WhatsApp Image 2026-09-03 at 3.38.51 PM.jpeg', alt: 'Sign Making Work 14' },
  { src: '/images/WhatsApp Image 2026-09-03 at 3.38.55 PM (1).jpeg', alt: 'Sign Making Work 15' },
  { src: '/images/WhatsApp Image 2026-09-03 at 3.38.55 PM (2).jpeg', alt: 'Sign Making Work 16' },
  { src: '/images/WhatsApp Image 2026-09-03 at 3.38.56 PM (1).jpeg', alt: 'Sign Making Work 17' },
  { src: '/images/WhatsApp Image 2026-09-03 at 3.38.56 PM.jpeg', alt: 'Sign Making Work 18' },
  { src: '/images/WhatsApp Image 2026-09-03 at 3.38.57 PM.jpeg', alt: 'Sign Making Work 19' },
  { src: '/images/WhatsApp Image 2026-09-03 at 3.38.58 PM.jpeg', alt: 'Sign Making Work 20' },
  { src: '/images/WhatsApp Image 2026-09-03 at 3.38.59 PM.jpeg', alt: 'Sign Making Work 21' },
  { src: '/images/WhatsApp Image 2026-09-03 at 3.39.00 PM (1).jpeg', alt: 'Sign Making Work 22' },
  { src: '/images/WhatsApp Image 2026-09-03 at 3.39.00 PM (2).jpeg', alt: 'Sign Making Work 23' },
  { src: '/images/sign_maker_workshop.webp', alt: 'Sign Maker Workshop' },
];

const About = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = useCallback(() => {
    setLightboxIndex(prev => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));
  }, []);

  const nextImage = useCallback(() => {
    setLightboxIndex(prev => (prev !== null ? (prev + 1) % galleryImages.length : null));
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, prevImage, nextImage]);
  return (
    <>
      <Helmet>
        <title>About Us | SIGN MAKER led board</title>
        <meta name="description" content="Learn about SIGN MAKER led board. We are Rajasthan's premier signage manufacturing and branding company with over a decade of experience." />
      </Helmet>

      <div className="page-header">
        <div className="container text-center">
          <motion.h1 initial="hidden" animate="visible" variants={fadeIn}>About <span className="highlight">Us</span></motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.2 }}>Your trusted partner in signage manufacturing, branding, and digital display solutions.</motion.p>
        </div>
      </div>

      {/* Company Story */}
      <section className="section">
        <div className="container grid grid-2 items-center gap-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="mb-2">Our Story</h2>
            <p className="mb-1">Founded over a decade ago in Udaipur, SIGN MAKER led board started with a simple vision: to help local businesses establish a strong visual identity. What began as a small workshop has now grown into Rajasthan's premier signage manufacturing facility.</p>
            <p className="mb-1">We have continuously invested in modern technology, from precision CNC routers to advanced laser cutting machines, ensuring that our products meet the highest standards of quality and durability.</p>
            <p>Today, with over 1000+ completed projects and a team of dedicated professionals, we continue to push the boundaries of creative signage and outdoor advertising.</p>
          </motion.div>
          <motion.div className="glass-card p-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Our Office" style={{ width: '100%', borderRadius: 'var(--radius-sm)' }} loading="lazy" />
          </motion.div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="expertise-section section relative">
        <div className="expertise-bg-shape shape-1"></div>
        <div className="expertise-bg-shape shape-2"></div>
        
        <div className="container text-center relative z-10">
          <motion.div 
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2>Our <span className="highlight">Expertise</span></h2>
            <p>Comprehensive solutions tailored to your brand's unique needs.</p>
          </motion.div>
          
          <div className="grid grid-3 text-left">
            <motion.div 
              className="expertise-card glass-card p-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="expertise-card-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1588694086658-9774643ce4c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}></div>
              <div className="expertise-card-overlay"></div>
              
              <div className="expertise-icon-wrapper mb-2">
                <Zap size={36} className="expertise-icon" />
                <div className="expertise-icon-glow"></div>
              </div>
              <h3 className="mb-1">Signage Manufacturing</h3>
              <p>In-house production of LED boards, 3D acrylic letters, glow signs, and custom metal letters using precision machinery.</p>
              <div className="expertise-card-border"></div>
            </motion.div>
            
            <motion.div 
              className="expertise-card glass-card p-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="expertise-icon-wrapper mb-2">
                <Target size={36} className="expertise-icon" />
                <div className="expertise-icon-glow"></div>
              </div>
              <h3 className="mb-1">Branding & Advertising</h3>
              <p>Strategic outdoor advertising, billboard placements, and comprehensive graphic design services.</p>
              <div className="expertise-card-border"></div>
            </motion.div>
            
            <motion.div 
              className="expertise-card glass-card p-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="expertise-card-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1510488214227-2b73719b48b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}></div>
              <div className="expertise-card-overlay"></div>
              
              <div className="expertise-icon-wrapper mb-2">
                <Monitor size={36} className="expertise-icon" />
                <div className="expertise-icon-glow"></div>
              </div>
              <h3 className="mb-1">Digital Displays</h3>
              <p>State-of-the-art LED screen walls, scrolling boards, and dynamic digital display solutions.</p>
              <div className="expertise-card-border"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section">
        <div className="container">
          <div className="section-title text-center">
            <h2>Our Process</h2>
            <p>A streamlined approach to bring your vision to life.</p>
          </div>
          <div className="process-timeline">
            {[
              { title: 'Consultation', desc: 'We start by understanding your brand, requirements, and budget.' },
              { title: 'Design', desc: 'Our creative team crafts detailed 2D/3D mockups for your approval.' },
              { title: 'Manufacturing', desc: 'Using premium materials, we build your signage in our modern facility.' },
              { title: 'Installation', desc: 'Expert technicians ensure safe, secure, and perfect installation.' },
              { title: 'Support', desc: 'We provide ongoing maintenance and dedicated after-sales support.' }
            ].map((step, idx) => (
              <div key={idx} className="process-step">
                <div className="step-number">{idx + 1}</div>
                <div className="step-content glass-card">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Trust */}
      <section className="section team-trust">
        <div className="container grid grid-2 gap-4">
          <div className="glass-card p-3">
            <Users size={40} className="mb-1" style={{ color: 'var(--primary)' }} />
            <h2 className="mb-2">Team Excellence</h2>
            <p className="mb-1">Our team is our greatest asset. Comprising seasoned designers, meticulous craftsmen, expert welders, and skilled installation technicians, we work cohesively to deliver perfection.</p>
            <p>Every member of our staff undergoes regular training to stay updated with the latest industry standards, materials, and safety protocols.</p>
          </div>
          <div className="glass-card p-3">
            <Shield size={40} className="mb-1" style={{ color: 'var(--primary)' }} />
            <h2 className="mb-2">Why Businesses Trust Us</h2>
            <ul className="trust-list">
              <li><CheckCircle size={20} /> Proven Track Record of 10+ Years</li>
              <li><CheckCircle size={20} /> Uncompromising Quality Standards</li>
              <li><CheckCircle size={20} /> Transparent Pricing & Timelines</li>
              <li><CheckCircle size={20} /> End-to-End Service Delivery</li>
              <li><CheckCircle size={20} /> Dedicated After-Sales Service</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section section" id="gallery">
        <div className="container">
          <motion.div
            className="section-title text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="gallery-title-icon">
              <Images size={32} />
            </div>
            <h2>Our <span className="highlight">Gallery</span></h2>
            <p>A glimpse into our craftsmanship — real projects, real quality.</p>
          </motion.div>

          <div className="gallery-masonry">
            {galleryImages.map((img, idx) => (
              <motion.div
                key={idx}
                className="gallery-item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 6) * 0.08, duration: 0.5 }}
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={() => openLightbox(idx)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                />
                <div className="gallery-item-overlay">
                  <span className="gallery-zoom-icon">&#x2B07;</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={e => e.stopPropagation()}
            >
              <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
                <X size={24} />
              </button>
              <button className="lightbox-nav lightbox-prev" onClick={prevImage} aria-label="Previous">
                <ChevronLeft size={28} />
              </button>
              <img
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].alt}
                className="lightbox-img"
              />
              <button className="lightbox-nav lightbox-next" onClick={nextImage} aria-label="Next">
                <ChevronRight size={28} />
              </button>
              <div className="lightbox-counter">
                {lightboxIndex + 1} / {galleryImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* About CTA Section */}
      <section className="about-cta-section section">
        <div className="container">
          <motion.div 
            className="about-cta-card glass-card text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-cta-glow"></div>
            <h2 className="mb-2">Let's Create Something <span className="highlight">Extraordinary</span> Together</h2>
            <p className="mb-3" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Whether you need assistance with designing a custom sign board or planning an outdoor branding campaign, our experts are here to help.
            </p>
            <div className="about-cta-buttons">
              <Link to="/contact" className="btn btn-primary">Get a Free Quote</Link>
              <a href="tel:08560005555" className="btn btn-secondary">Call Now</a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
