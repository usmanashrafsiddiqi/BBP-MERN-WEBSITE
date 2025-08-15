// src/pages/Crypto.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header"; // already contains Navbar
import Footer from "../components/Footer";

const cryptoCoins = [
  { name: "Bitcoin", img: "/c1.png" },
  { name: "Ethereum", img: "/c2.png" },
  { name: "BNB", img: "/c3.png" },
  { name: "USDT", img: "/c4.png" },
  { name: "Solana", img: "/c5.png" },
];

const benefits = [
  { title: "Fast Transactions", desc: "Complete purchases in minutes, not weeks." },
  { title: "Secure Payments", desc: "Blockchain-backed security and transparency." },
  { title: "Global Access", desc: "Invest from anywhere without exchange hassles." },
  { title: "Lower Fees", desc: "Avoid high banking and processing costs." },
  { title: "Potential Growth", desc: "Benefit from crypto’s price appreciation." },
  { title: "Privacy", desc: "Keep your investments confidential." },
];

const steps = [
  { title: "Choose Property", desc: "Select your desired luxury property." },
  { title: "Initiate Payment", desc: "Send crypto securely from your wallet." },
  { title: "Confirm Ownership", desc: "Receive ownership documents instantly." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut" } },
};

const Crypto = () => {
  const [usdAmount, setUsdAmount] = useState("");
  const [btcAmount, setBtcAmount] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const BTC_RATE = 0.000025; // example conversion rate

  const handleConvert = () => {
    const usd = parseFloat(usdAmount);
    setBtcAmount(!isNaN(usd) ? (usd * BTC_RATE).toFixed(6) : null);
  };

  return (
    <div className="min-h-screen flex flex-col text-white bg-white ">
        <div className="p-2 md:p-4 bg-white overflow-hidden">
      {/* Header */}
      <Header
        backgroundImage="/crypto1.jpg"
        title="Buy Luxury Property in Dubai with Cryptocurrency"
        subtitle="Fast, secure, and global real estate transactions using crypto payments"
        showFilter={false}
      /></div>

  {/* Supported Cryptos */}
<motion.section
  className="max-w-5xl mx-auto px-4 py-12 bg-white"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeUp}
>
  <div className="flex flex-wrap justify-center gap-8">
    {cryptoCoins.map((coin, idx) => (
      <motion.div
        key={idx}
        className="flex flex-col items-center p-5 rounded-xl bg-gray-900 text-white shadow-md hover:shadow-2xl transition-all duration-300"
        whileHover={{ scale: 1.08 }}
      >
        <img src={coin.img} alt={coin.name} className="w-16 h-16 object-contain" />
        <span className="mt-3 text-sm font-medium">{coin.name}</span>
      </motion.div>
    ))}
  </div>
</motion.section>

{/* Why Choose Crypto */}
<motion.section
  className="max-w-6xl mx-auto px-4 py-16 bg-white"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeUp}
>
  <h2 className="text-3xl font-semibold text-center mb-12 text-gray-900">
    Why Choose Crypto for Real Estate?
  </h2>
  <div className="grid md:grid-cols-3 gap-8">
    {benefits.map((item, idx) => (
      <motion.div
        key={idx}
        className="p-6 rounded-xl bg-gray-900 text-white shadow-lg hover:shadow-2xl transition-all duration-300"
        whileHover={{ scale: 1.05 }}
      >
        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
        <p>{item.desc}</p>
      </motion.div>
    ))}
  </div>
</motion.section>

{/* Simple Payment Process */}
<motion.section
  className="max-w-4xl mx-auto px-4 py-16 text-center bg-white"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeUp}
>
  <h2 className="text-3xl font-semibold mb-12 text-gray-900">
    Simple Crypto Payment Process
  </h2>
  <div className="grid md:grid-cols-3 gap-8">
    {steps.map((step, idx) => (
      <motion.div
        key={idx}
        className="p-6 rounded-xl bg-gray-900 text-white shadow-lg hover:shadow-2xl transition-all duration-300"
        whileHover={{ scale: 1.05 }}
      >
        <span className="text-gray-400 text-4xl font-bold mb-4 block">
          {idx + 1}
        </span>
        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
        <p>{step.desc}</p>
      </motion.div>
    ))}
  </div>
</motion.section>


      <Footer />
    </div>
  );
};

export default Crypto;
