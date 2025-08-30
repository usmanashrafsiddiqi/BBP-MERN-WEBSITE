import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"

const MortgageCalculator = () => {
  const [propertyPrice, setPropertyPrice] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculateMortgage = () => {
    const principal = propertyPrice - downPayment;
    const monthlyInterest = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    if (monthlyInterest === 0) {
      // No interest case
      const payment = principal / numberOfPayments;
      setMonthlyPayment(payment.toFixed(2));
    } else {
      const x = Math.pow(1 + monthlyInterest, numberOfPayments);
      const payment = principal * ((monthlyInterest * x) / (x - 1));
      setMonthlyPayment(payment.toFixed(2));
    }
  };

  return (
    <div className="p-2 md:p-4 bg-white overflow-hidden">
      <Header
        backgroundImage="/newcom.jpg"
        title="Mortgage Calculator"
        subtitle=""
        showFilter={false}
      />

      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          Make Smarter Home-Buying Decisions
        </h2>
        <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-6">
          Looking to buy a home in Dubai? Need help understanding your mortgage options?
        </p>
        <p className="text-center text-gray-500 text-base max-w-3xl mx-auto mb-12">
          Our easy-to-use mortgage calculator can help you figure out your monthly payments,
          upfront costs, and more. Buying a home is a big step, and with the right information,
          you can make the process smooth and stress-free.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Left Info Box */}
          <div
            className="relative rounded-2xl overflow-hidden h-full"
            style={{
              backgroundImage: "url('/10.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-[#0a324e]/80 z-0" />
            <div className="relative z-10 text-white p-6 md:p-10 h-full flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">How Does A Mortgage Work?</h3>
              <p className="text-base mb-4">To get a mortgage in Dubai, you’ll need to:</p>
              <ul className="list-disc list-inside space-y-3 text-sm md:text-base">
                <li>
                  <strong>Get Pre-Approval:</strong> This shows how much a lender is willing to lend you.
                </li>
                <li>
                  <strong>Pay a Deposit:</strong> This is usually 20% (or more) of the property’s price.
                </li>
                <li>
                  <strong>Repay Over Time:</strong> Your mortgage payments are made monthly over an agreed period.
                </li>
              </ul>
            </div>
          </div>

          {/* Right Form Box */}
          <div className="bg-gray-100 rounded-2xl p-6 md:p-10 shadow-md h-full">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Property Price (AED)
                </label>
                <input
                  type="number"
                  value={propertyPrice}
                  onChange={(e) => setPropertyPrice(Number(e.target.value))}
                  className="w-full border border-gray-300 rounded-full px-4 py-2"
                  placeholder="e.g. 9800000"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Down Payment AED
                </label>
                <input
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full border border-gray-300 rounded-full px-4 py-2"
                  placeholder="e.g. 1960000"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Interest Rate (%)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full border border-gray-300 rounded-full px-4 py-2"
                  placeholder="e.g. 4.5"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Loan Duration (Years)
                </label>
                <input
                  type="number"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="w-full border border-gray-300 rounded-full px-4 py-2"
                  placeholder="e.g. 25"
                />
              </div>

              {monthlyPayment && (
                <div className="mt-4">
                  <p className="text-lg font-semibold text-gray-700">
                    Monthly Payment <span className="text-blue-600">AED {monthlyPayment}</span>
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Note: This is an estimate. Contact our finance team for a customized plan.
                  </p>
                </div>
              )}

              <div>
                <button
                  onClick={calculateMortgage}
                  className="bg-red-700 text-white px-6 py-3 rounded-full hover:bg-red-800 transition text-sm font-medium w-full"
                >
                  CALCULATE MORTGAGE →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default MortgageCalculator;
