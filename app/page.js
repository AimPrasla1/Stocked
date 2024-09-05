"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(`.${styles.featureItem}, .${styles.useCaseItem}`);

      sections.forEach((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            section.classList.add(styles.visible);
          } else {
            section.classList.remove(styles.visible);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Run on mount to make sure visible elements are correctly displayed
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSignUp = () => {
    const signUpSection = document.querySelector('.footer');
    if (signUpSection) {
      signUpSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className={styles.main}>
      {/* Header Section */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="Stocked Logo" width={150} height={40} />
        </div>
        <nav className={styles.nav}>
          <button className={styles.navButton}>Home</button>
          <button className={styles.navButton}>Features</button>
          <button className={styles.navButton}>Use Cases</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Welcome to Stocked</h1>
          <p>The future of inventory management, powered by <span className={styles.gradientText}>AI</span>.</p>
          <div className={styles.buttonGroup}>
            <button className={styles.signInButton}>Sign In</button>
            <button className={styles.signUpButton} onClick={scrollToSignUp}>Sign Up</button>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image src="/homepage-Photoroom.png" alt="Stocked Hero Image" width={700} height={700} />
        </div>
      </section>



      {/* Key Features Section */}
      <section className={styles.features}>
        <h2>Key Features</h2>
        
        <div className={styles.featureItem}>
          <div className={styles.featureText}>
            <h3>Inventory Tracking</h3>
            <p>Monitor and adjust inventory levels to avoid stockouts.</p>
          </div>
          <div className={styles.featureImage}>
            <Image src="/inventory-tracking.png" alt="Inventory Tracking" width={100} height={100} />
          </div>
        </div>
        
        <div className={styles.featureItem}>
          <div className={styles.featureText}>
            <h3>Seamless UI</h3>
            <p>Analytics and charts to visualize stock levels.</p>
          </div>
          <div className={styles.featureImage}>
            <Image src="/seamless-ui.png" alt="Seamless UI" width={100} height={100} />
          </div>
        </div>
        
        <div className={styles.featureItem}>
          <div className={styles.featureText}>
            <h3>AI Voice Recognition</h3>
            <p>Add, update, or remove inventory using voice commands.</p>
          </div>
          <div className={styles.featureImage}>
            <Image src="/ai-voice.png" alt="AI Voice Recognition" width={100} height={100} />
          </div>
        </div>
      </section>



      {/* Use Cases Section */}
      <section className={styles.useCases}>
        <h2>Use Cases</h2>
        <div className={styles.useCaseGrid}>
          <div className={styles.useCaseItem}>
            <h3>Manufacturers</h3>
            <p>Track materials and products from start to finish.</p>
          </div>
          <div className={styles.useCaseItem}>
            <h3>Wholesalers</h3>
            <p>Manage bulk inventory and streamline restocking processes.</p>
          </div>
          <div className={styles.useCaseItem}>
            <h3>Retailers & E-commerce</h3>
            <p>Stay on top of your stock levels across various platforms.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <h2>So what are you waiting for?</h2>
        <p>Sign up to be one of the first to access Stocked when it launches!</p>
        <form onSubmit={handleEmailSubmit} className={styles.emailForm}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </footer>
    </main>
  );
}
