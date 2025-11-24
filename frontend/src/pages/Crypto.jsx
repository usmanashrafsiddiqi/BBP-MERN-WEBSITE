// src/pages/Crypto.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header"; // already contains Navbar
import Footer from "../components/Footer";
import { useTranslation } from 'react-i18next';


const Crypto = () => {
  const [usdAmount, setUsdAmount] = useState("");
  const [btcAmount, setBtcAmount] = useState(null);
   const {t} = useTranslation();
   const cryptoCoins = [
  { name: t("BITCOIN"), img: "/c1.png" },
  { name: t("ETHEREUM"), img: "/c2.png" },
  { name: t("BNB"), img: "/c3.png" },
  { name: t("USDT"), img: "/c4.png" },
  { name: t("SOLANA"), img: "/c5.png" },
];

const benefits = [
  { title: t("FAST_TRANSACTIONS"), desc:  t("FAST_TRANSACTIONS_TEXT") },
  { title:  t("SECURE_PAYMENTS"), desc:  t("SECURE_PAYMENTS_TEXT") },
  { title: t("GLOBAL_ACCESS"), desc: t("GLOBAL_ACCESS_TEXT") },
  { title: t("LOWER_FEES"), desc:t("LOWER_FEES_TEXT") },
  { title: t("POTENTIAL_GROWTH"), desc: t("POTENTIAL_GROWTH_TEXT") },
  { title:t("PRIVACY"), desc:t("PRIVACY_TEXT") },
];

const steps = [
  { title: t("CHOOSE_PROPERTY"), desc: t("CHOOSE_PROPERTY_TEXT") },
  { title:t("INITIATE_PAYMENT"), desc:t("INITITATE_PAYMENT_TEXT") },
  { title: t("CONFIRM_OWNERSHIP"), desc: t("CONFIRM_OWNERSHIP_TEXT") },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut" } },
};
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
        <div className="p-2 md:p-4 bg-white">
      {/* Header */}
      <Header
        backgroundImage="/crypto1.jpg"
        title={t("CRYPTO_HEADING")}
        subtitle={t("CRYPTO_TEXT")}
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
    {t("WHY_CHOOSE_HEADING")}
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
