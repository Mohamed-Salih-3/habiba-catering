/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  UtensilsCrossed, 
  Users, 
  Calendar, 
  ChevronRight,
  Instagram,
  Facebook,
  Twitter,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const COLORS = {
  maroon: '#800000',
  gold: '#D4AF37',
  white: '#FFFFFF',
};

const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=2000&auto=format&fit=crop',
  muttonBiryani: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop',
  chicken65: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=800&auto=format&fit=crop',
  cooking: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop',
  serving: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
  vessels:  'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop',
  event: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop',
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-maroon shadow-lg py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
           <img src="src/habibalogo.jpeg" alt="Habiba Catering Logo" className="h-12 md:h-16 lg:h-24 w-auto"/>
            
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-white font-medium">
            {['About', 'Specialties', 'Offers', 'Gallery', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-gold transition-colors cursor-pointer"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gold text-maroon px-6 py-2 rounded-full font-bold hover:bg-white transition-all transform hover:scale-105"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-maroon border-t border-white/10 p-6 md:hidden flex flex-col gap-4 shadow-2xl"
            >
              {['About', 'Specialties', 'Offers', 'Gallery', 'Contact'].map((item) => (
                <button 
                  key={item} 
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-white text-lg font-medium text-left py-2 border-b border-white/5"
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gold text-maroon px-6 py-3 rounded-full font-bold text-center mt-2"
              >
                Book Now
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={IMAGES.hero} 
            alt="Delicious Biryani" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl font-bold mb-4 leading-tight">
              Habiba <span className="text-gold italic">Catering</span>
            </h1>
            <p className="text-xl md:text-3xl font-serif italic text-gold-light mb-6">
              Authentic Biryani for Every Celebration
            </p>
            <p className="text-lg md:text-xl text-zinc-200 mb-10 max-w-2xl mx-auto leading-relaxed">
              We specialize in preparing delicious traditional biryani for weddings, parties, family functions, and special occasions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-maroon text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gold hover:text-maroon transition-all flex items-center justify-center gap-2 shadow-xl"
              >
                Order for Event <ChevronRight size={20} />
              </button>
              <a 
                href="tel:+919876543210"
                className="bg-white text-maroon px-8 py-4 rounded-full font-bold text-lg hover:bg-zinc-100 transition-all flex items-center justify-center gap-2 shadow-xl"
              >
                <Phone size={20} /> Call Now
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 cursor-pointer"
          onClick={() => scrollToSection('offers')}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-gold rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Ramzan Special Offer Section */}
      <section id="offers" className="py-24 bg-zinc-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block bg-maroon/10 text-maroon px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-4"
            >
              Limited Time
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-maroon mb-4 flex items-center justify-center gap-3">
              🌙 Ramzan Special Offer
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Offer 1 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gold/20 flex flex-col"
            >
              <div className="h-64 relative">
                <img src={IMAGES.muttonBiryani} alt="Mutton Biryani" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute top-4 right-4 bg-gold text-maroon font-bold px-4 py-2 rounded-full shadow-lg">
                  Best Seller
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-maroon mb-2">Mutton Biryani – 1 KG</h3>
                <p className="text-zinc-600 mb-4">Authentic dum mutton biryani cooked with rich spices and premium quality meat.</p>
                <div className="bg-maroon/5 p-4 rounded-xl mb-6">
                  <p className="font-bold text-maroon mb-2 text-sm uppercase tracking-wider">Includes:</p>
                  <ul className="grid grid-cols-2 gap-2 text-sm text-zinc-700">
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-gold" /> Onion Raitha</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-gold" /> Brinjal Gravy</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-gold" /> Sweet</li>
                  </ul>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <div>
                    <span className="text-zinc-400 line-through text-sm">INR 2200</span>
                    <div className="text-3xl font-bold text-maroon">INR 2000</div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <a href="https://wa.me/919876543210" className="bg-green-600 text-white px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-green-700 transition-colors">
                      <MessageCircle size={16} /> WhatsApp
                    </a>
                    <a href="tel:+919876543210" className="bg-maroon text-white px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-maroon/90 transition-colors">
                      <Phone size={16} /> Call Now
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Offer 2 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gold/20 flex flex-col"
            >
              <div className="h-64 relative">
                <img src={IMAGES.chicken65} alt="Chicken 65" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute top-4 right-4 bg-gold text-maroon font-bold px-4 py-2 rounded-full shadow-lg">
                  Iftar Special
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-maroon mb-2">Chicken 65 – 1 KG</h3>
                <p className="text-zinc-600 mb-6">Crispy and spicy South Indian style Chicken 65 perfect for Iftar gatherings.</p>
                <div className="bg-maroon/5 p-4 rounded-xl mb-6">
                  <p className="text-sm text-zinc-700 italic">"The perfect companion for your Biryani feast, prepared with our secret spice blend."</p>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <div>
                    <span className="text-zinc-400 line-through text-sm">INR 450</span>
                    <div className="text-3xl font-bold text-maroon">INR 380</div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <a href="https://wa.me/919876543210" className="bg-green-600 text-white px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-green-700 transition-colors">
                      <MessageCircle size={16} /> WhatsApp
                    </a>
                    <a href="tel:+919876543210" className="bg-maroon text-white px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-maroon/90 transition-colors">
                      <Phone size={16} /> Call Now
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <p className="text-center mt-12 text-zinc-500 font-medium italic">
            Limited Ramzan Offer – Pre-book your order for Iftar gatherings and family events.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=800&auto=format&fit=crop" alt="Traditional Cooking" className="w-full h-auto" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gold rounded-2xl -z-0 opacity-20" />
              <div className="absolute -top-8 -left-8 w-32 h-32 border-4 border-maroon rounded-full -z-0 opacity-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-maroon mb-6">About Habiba Catering</h2>
              <p className="text-lg text-zinc-700 mb-6 leading-relaxed">
                Habiba Catering is known for preparing authentic and flavorful biryani for special occasions and events. With years of experience in traditional cooking, we provide high-quality catering services for weddings, parties, corporate events, and family gatherings.
              </p>
              <p className="text-lg text-zinc-700 mb-8 leading-relaxed">
                Our focus is on authentic taste, hygienic cooking, fresh ingredients, and timely delivery. Every grain of rice and every piece of meat is cooked to perfection by our master chefs.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-maroon/10 rounded-full flex items-center justify-center text-maroon shrink-0">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-maroon">Hygienic</h4>
                    <p className="text-sm text-zinc-500">Clean preparation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-maroon/10 rounded-full flex items-center justify-center text-maroon shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-maroon">Timely</h4>
                    <p className="text-sm text-zinc-500">Always on schedule</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section id="specialties" className="py-24 bg-maroon text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 border-2 border-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-96 h-96 border-2 border-white rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Specialties</h2>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Chicken Biryani', icon: <UtensilsCrossed /> },
              { title: 'Mutton Biryani', icon: <UtensilsCrossed /> },
              { title: 'Party Biryani Orders', icon: <Users /> },
              { title: 'Wedding Catering', icon: <Calendar /> },
              { title: 'Bulk Orders', icon: <CheckCircle2 /> },
              { title: 'Event Catering', icon: <Calendar /> },
            ].map((spec, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.03, backgroundColor: 'rgba(212, 175, 55, 0.1)' }}
                className="p-8 border border-white/20 rounded-2xl flex flex-col items-center text-center transition-all"
              >
                <div className="text-gold mb-4 p-3 bg-white/5 rounded-xl">
                  {React.cloneElement(spec.icon as React.ReactElement, { size: 32 })}
                </div>
                <h3 className="text-xl font-bold">{spec.title}</h3>
              </motion.div>
            ))}
          </div>

          <div className="mt-24">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gold mb-2">Catering for All Occasions</h3>
              <p className="text-white/70">We bring the feast to your special moments</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Weddings', 'Engagement Functions', 'Birthday Parties', 
                'Family Gatherings', 'Corporate Events', 'Religious Events'
              ].map((event, idx) => (
                <span key={idx} className="bg-white/10 px-6 py-3 rounded-full border border-white/10 font-medium">
                  {event}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-maroon mb-4">Why Choose Habiba Catering</h2>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Authentic Traditional Taste', desc: 'Recipes passed down through generations for that perfect dum flavor.' },
              { title: 'Experienced Biryani Masters', desc: 'Our chefs specialize exclusively in large-scale biryani preparation.' },
              { title: 'Fresh Ingredients', desc: 'We source only premium quality basmati rice and farm-fresh meat.' },
              { title: 'Hygienic Preparation', desc: 'Strict quality control and cleanliness in our dedicated kitchen.' },
              { title: 'Affordable Packages', desc: 'Premium catering services that fit your budget without compromise.' },
              { title: 'Large Quantity Orders', desc: 'Capable of handling orders for 50 to 5000+ guests with ease.' },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-4 p-6 rounded-2xl hover:bg-zinc-50 transition-colors"
              >
                <div className="shrink-0 w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-maroon mb-2">{item.title}</h4>
                  <p className="text-zinc-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-maroon mb-4">Our Gallery</h2>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[300px]">
            <motion.div whileHover={{ scale: 0.98 }} className="lg:col-span-2 lg:row-span-2 rounded-2xl overflow-hidden shadow-lg">
              <img src={IMAGES.hero} alt="Dum Biryani" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white font-bold text-xl">Authentic Dum Biryani</span>
              </div>
            </motion.div>
            <motion.div whileHover={{ scale: 0.98 }} className="rounded-2xl overflow-hidden shadow-lg">
              <img src={IMAGES.vessels} alt="Cooking in large vessels" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div whileHover={{ scale: 0.98 }} className="rounded-2xl overflow-hidden shadow-lg">
              <img src={IMAGES.serving} alt="Serving plates" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div whileHover={{ scale: 0.98 }} className="lg:col-span-2 rounded-2xl overflow-hidden shadow-lg">
              <img src={IMAGES.event} alt="Catering preparation" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact / Order Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-maroon rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            {/* Contact Info */}
            <div className="lg:w-1/3 p-12 lg:p-16 bg-gold text-maroon flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <Phone className="shrink-0 mt-1" />
                    <div>
                      <p className="font-bold uppercase text-xs tracking-widest mb-1 opacity-60">Call Us</p>
                      <p className="text-xl font-bold">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MessageCircle className="shrink-0 mt-1" />
                    <div>
                      <p className="font-bold uppercase text-xs tracking-widest mb-1 opacity-60">WhatsApp</p>
                      <p className="text-xl font-bold">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="shrink-0 mt-1" />
                    <div>
                      <p className="font-bold uppercase text-xs tracking-widest mb-1 opacity-60">Location</p>
                      <p className="text-xl font-bold">123 Biryani Street, Foodie Nagar, Chennai - 600001</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 flex gap-4">
                <a href="#" className="w-10 h-10 bg-maroon text-gold rounded-full flex items-center justify-center hover:bg-white hover:text-maroon transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-maroon text-gold rounded-full flex items-center justify-center hover:bg-white hover:text-maroon transition-all">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-maroon text-gold rounded-full flex items-center justify-center hover:bg-white hover:text-maroon transition-all">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:w-2/3 p-12 lg:p-16 text-white">
              <h2 className="text-4xl font-bold mb-8">Book Catering for Your Event</h2>
              <form className="grid md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest opacity-60">Name</label>
                  <input type="text" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest opacity-60">Phone Number</label>
                  <input type="tel" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors" placeholder="Your Phone" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest opacity-60">Event Date</label>
                  <input type="date" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest opacity-60">Number of People</label>
                  <input type="number" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors" placeholder="Approx. Guests" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-bold uppercase tracking-widest opacity-60">Event Type</label>
                  <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors">
                    <option className="bg-maroon">Wedding</option>
                    <option className="bg-maroon">Party</option>
                    <option className="bg-maroon">Corporate</option>
                    <option className="bg-maroon">Other</option>
                  </select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-bold uppercase tracking-widest opacity-60">Message</label>
                  <textarea rows={4} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors" placeholder="Tell us about your event requirements..."></textarea>
                </div>
                <div className="md:col-span-2 flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="bg-gold text-maroon px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all flex-grow">
                    Submit Inquiry
                  </button>
                  <a href="https://wa.me/919876543210" className="bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-700 transition-all flex items-center justify-center gap-2">
                    <MessageCircle size={20} /> WhatsApp Order
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-maroon font-serif font-bold text-xl">H</div>
                <span className="font-serif text-3xl font-bold tracking-tight">Habiba Catering</span>
              </div>
              <p className="text-zinc-400 max-w-md leading-relaxed">
                Authentic Biryani Catering Service. We bring the traditional taste of dum biryani to your special celebrations with premium quality and unmatched service.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-gold">Quick Links</h4>
              <ul className="space-y-4 text-zinc-400">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('specialties')} className="hover:text-white transition-colors">Our Specialties</button></li>
                <li><button onClick={() => scrollToSection('offers')} className="hover:text-white transition-colors">Special Offers</button></li>
                <li><button onClick={() => scrollToSection('gallery')} className="hover:text-white transition-colors">Gallery</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-gold">Contact</h4>
              <ul className="space-y-4 text-zinc-400">
                <li className="flex items-center gap-3"><Phone size={18} className="text-gold" /> +91 98765 43210</li>
                <li className="flex items-center gap-3"><MessageCircle size={18} className="text-gold" /> +91 98765 43210</li>
                <li className="flex items-start gap-3"><MapPin size={18} className="text-gold mt-1 shrink-0" /> Chennai, Tamil Nadu</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-sm">
            <p>© 2026 Habiba Catering. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        <motion.a 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://wa.me/919876543210"
          className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-colors"
        >
          <MessageCircle size={30} />
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="tel:+919876543210"
          className="w-14 h-14 bg-maroon text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-maroon/90 transition-colors"
        >
          <Phone size={28} />
        </motion.a>
      </div>

      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s infinite alternate ease-in-out;
        }
      `}</style>
    </div>
  );
}
