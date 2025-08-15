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
    <div className="min-h-screen flex flex-col text-white bg-gradient-to-br from-indigo-900 via-purple-900 to-black">
      
      {/* Header section */}
      <Header
        backgroundImage="/crypto-bg.jpg"
        title="Buy Luxury Property in Dubai with Cryptocurrency"
        subtitle="Fast, secure, and global real estate transactions using crypto payments"
        showFilter={false}
      />

      {/* Supported Cryptos */}
      <motion.section
        className="max-w-5xl mx-auto px-4 py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="flex flex-wrap justify-center gap-8">
          {cryptoCoins.map((coin, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center p-5 rounded-xl bg-white/10 backdrop-blur-sm shadow-md hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.08 }}
            >
              <img src={coin.img} alt={coin.name} className="w-16 h-16 object-contain" />
              <span className="mt-3 text-sm font-medium">{coin.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Converter */}
      <motion.section
        className="max-w-lg mx-auto px-4 py-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-2xl font-semibold mb-6">USD to BTC Converter</h2>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="number"
            placeholder="Enter USD amount"
            value={usdAmount}
            onChange={(e) => setUsdAmount(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={handleConvert}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-all"
          >
            Convert
          </button>
        </div>
        {btcAmount !== null && (
          <p className="mt-4 text-lg">
            {usdAmount} USD ≈ <span className="font-bold">{btcAmount}</span> BTC
          </p>
        )}
      </motion.section>

      <Footer />
    </div>
  );
};

export default Crypto;
