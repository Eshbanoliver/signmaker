import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Services.css';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const Services = () => {
  const serviceItems = [
    'Outdoor Advertising', 'Graphic Design', 'Print Ads', 'TV & Video', 
    'Billboard Design and Consulting', 'Branding', 'Logo Design', 'Paid Advertising', 
    'ACP Glazing', 'Acrylic 3D Letters', 'Acrylic LED Letters', 'Acrylic Sign Boards', 
    'Brass Letters', 'Channel Letter', 'CNC Cutting', 'Creative Design', 
    'Fabric Board', 'Flex Boards', 'Glass Work', 'Glow Sign Board', 
    'LED Letters', 'LED Screen Wall', 'LED Sign Board Manufacturer', 'LED Board Maker', 
    'Laser and CNC Cutting', 'LED Board', 'LED Display', 'LED Display Board', 
    'LED Sign Board', 'LED Sign Board Manufacture', 'LED Sign Board Maker', 
    'Market Analysis', 'Marketing Strategy', 'SS & Brass Letters', 'Sign Letters', 
    'Sign Maker', 'Stainless Steel Letter', 'Steel Letter Board'
  ];

  // Each service has a unique image (AI-generated stored locally, or curated Unsplash)
  const serviceData: Record<string, { image: string; desc: string }> = {
    'Outdoor Advertising': {
      image: '/srv-outdoor.webp',
      desc: 'High-impact outdoor advertising that puts your brand in front of thousands every day.'
    },
    'Graphic Design': {
      image: '/srv-graphic.webp',
      desc: 'Creative graphic design services that transform your brand vision into compelling visuals.'
    },
    'Print Ads': {
      image: '/srv-print.webp',
      desc: 'Vibrant print advertisements crafted to capture attention and drive real customer action.'
    },
    'TV & Video': {
      image: '/srv-tv.webp',
      desc: 'Professional TV and video ad production that brings your brand story to life on screen.'
    },
    'Billboard Design and Consulting': {
      image: '/srv-billboard.webp',
      desc: 'Strategic billboard design and placement consulting for maximum audience reach and ROI.'
    },
    'Branding': {
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      desc: 'Comprehensive branding services that build a consistent, powerful identity for your business.'
    },
    'Logo Design': {
      image: '/srv-logo.webp',
      desc: 'Memorable logo design that communicates your brand\'s essence at a single glance.'
    },
    'Paid Advertising': {
      image: '/srv-paid.webp',
      desc: 'Data-driven paid advertising campaigns that maximize your budget and deliver measurable results.'
    },
    'ACP Glazing': {
      image: '/srv-acp.webp',
      desc: 'Premium aluminium composite panel glazing for a sleek, modern look on any building facade.'
    },
    'Acrylic 3D Letters': {
      image: '/srv-acrylic-3d.webp',
      desc: 'Stunning glossy acrylic 3D letters that give your storefront a premium, bold visual presence.'
    },
    'Acrylic LED Letters': {
      image: 'https://images.unsplash.com/photo-1554260570-e9689a3418b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      desc: 'Eye-catching acrylic letters with built-in LED backlighting for brilliant day and night visibility.'
    },
    'Acrylic Sign Boards': {
      image: '/srv-acrylic-boards.webp',
      desc: 'Durable and vibrant acrylic sign boards custom-made to showcase your brand perfectly.'
    },
    'Brass Letters': {
      image: '/srv-brass.webp',
      desc: 'Elegant polished brass letters that bring a touch of luxury and sophistication to your signage.'
    },
    'Channel Letter': {
      image: '/srv-channel.webp',
      desc: 'Professionally manufactured channel letters for illuminated, 3D building and retail fascia signs.'
    },
    'CNC Cutting': {
      image: '/srv-cnc.webp',
      desc: 'Precision CNC cutting services for intricate shapes and detailed custom signage fabrication.'
    },
    'Creative Design': {
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      desc: 'Innovative creative design solutions that make your brand stand out from the competition.'
    },
    'Fabric Board': {
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      desc: 'High-quality fabric boards with vivid print quality, perfect for trade shows and events.'
    },
    'Flex Boards': {
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      desc: 'Affordable and weatherproof flex boards with sharp, full-colour printing for any outdoor use.'
    },
    'Glass Work': {
      image: '/srv-glass.webp',
      desc: 'Custom frosted and etched glass work for office partitions, doors, and decorative branding.'
    },
    'Glow Sign Board': {
      image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      desc: 'Bright, energy-efficient glow sign boards that keep your business visible day and night.'
    },
    'LED Letters': {
      image: 'https://images.unsplash.com/photo-1510511233900-1982d92bd835?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      desc: 'Bold LED letters that illuminate your brand with consistent, long-lasting brilliance.'
    },
    'LED Screen Wall': {
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      desc: 'Stunning large-format LED screen walls for dynamic digital advertising and event displays.'
    },
    'LED Sign Board Manufacturer': {
      image: 'https://images.unsplash.com/photo-1567789884554-0b844b597180?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      desc: 'Rajasthan\'s trusted LED sign board manufacturer delivering quality boards at competitive pricing.'
    },
    'LED Board Maker': {
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      desc: 'Expert LED board makers crafting durable, high-brightness boards for all types of businesses.'
    },
    'Laser and CNC Cutting': {
      image: '/srv-cnc.webp',
      desc: 'Combined laser and CNC cutting services for ultra-precise, intricate custom fabrication work.'
    },
    'LED Board': {
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      desc: 'Versatile LED boards for retail, offices, and hospitality — custom-built to your specifications.'
    },
    'LED Display': {
      image: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      desc: 'High-resolution LED displays that present your brand message with stunning clarity and impact.'
    },
    'LED Display Board': {
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      desc: 'Premium LED display boards for indoor and outdoor use, engineered for all-weather performance.'
    },
    'LED Sign Board': {
      image: 'https://images.unsplash.com/photo-1520857014576-2c4f4c972b57?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      desc: 'Custom LED sign boards that grab attention and communicate your brand message day and night.'
    },
    'LED Sign Board Manufacture': {
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      desc: 'End-to-end LED sign board manufacture from raw materials to finished, installed signage.'
    },
    'LED Sign Board Maker': {
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      desc: 'Skilled LED sign board makers producing custom illuminated signs for every business type.'
    },
    'Market Analysis': {
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      desc: 'In-depth market analysis to identify opportunities and position your brand for maximum growth.'
    },
    'Marketing Strategy': {
      image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      desc: 'Holistic marketing strategies that align your branding, advertising, and signage for real impact.'
    },
    'SS & Brass Letters': {
      image: '/srv-brass.webp',
      desc: 'Premium stainless steel and brass letter combinations for a distinguished, professional look.'
    },
    'Sign Letters': {
      image: '/srv-sign-letters.webp',
      desc: 'Custom sign letters in various materials and finishes to suit every brand and budget.'
    },
    'Sign Maker': {
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      desc: 'Udaipur\'s premier sign maker delivering craftsmanship, creativity, and quality on every project.'
    },
    'Stainless Steel Letter': {
      image: '/srv-ss-letters.webp',
      desc: 'Corrosion-resistant stainless steel letters built for long-lasting exterior and interior use.'
    },
    'Steel Letter Board': {
      image: '/srv-steel-board.webp',
      desc: 'Robust steel letter boards combining industrial aesthetics with clean, professional branding.'
    },
  };

  return (
    <>
      <Helmet>
        <title>Our Services | SIGN MAKER led board</title>
        <meta name="description" content="Explore our extensive range of signage and branding services including LED Boards, Acrylic Letters, ACP Glazing, CNC Cutting, and Outdoor Advertising." />
      </Helmet>

      <div className="page-header">
        <div className="container text-center">
          <motion.h1 initial="hidden" animate="visible" variants={fadeIn}>Our <span className="highlight">Services</span></motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.2 }}>Comprehensive signage and branding solutions to illuminate your business.</motion.p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <motion.div 
            className="services-grid"
            variants={staggerContainer} initial="hidden" animate="visible"
          >
            {serviceItems.map((srv, idx) => {
              const data = serviceData[srv] || {
                image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                desc: `Professional ${srv.toLowerCase()} services tailored to your business needs.`
              };
              return (
                <motion.div key={idx} variants={fadeIn} className="glass-card srv-card with-shadow">
                  <h3>{srv}</h3>
                  <div className="srv-image-wrapper">
                    <img src={data.image} alt={srv} loading="lazy" />
                  </div>
                  <p className="srv-desc">{data.desc}</p>
                  <Link to="/contact" className="btn btn-primary btn-full">Contact Us</Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
      
      <section className="section glass">
        <div className="container text-center max-w-800" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="mb-2">Need a Custom Solution?</h2>
          <p className="mb-3">Don't see exactly what you're looking for? We specialize in custom signage tailored to your unique needs. Get in touch with our experts to discuss your project.</p>
          <Link to="/contact" className="btn btn-primary">Contact Us Today</Link>
        </div>
      </section>
    </>
  );
};

export default Services;
