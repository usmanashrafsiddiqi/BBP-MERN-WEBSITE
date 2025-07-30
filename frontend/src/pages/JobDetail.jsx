import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Header from "../components/Header";
import Footer from "../components/Footer";

const jobs = {
  "customer-service-representative": {
    title: "Customer Service Representative",
    desc: "Be the friendly face of BRISKBOLD, helping customers with inquiries and providing world-class support.",
    location: "Dubai, UAE",
  },
  "sales-executive": {
    title: "Sales Executive",
    desc: "Join our sales team and drive business growth by building client relationships and closing deals.",
    location: "Dubai, UAE",
  },
  "back-office-assistant": {
    title: "Back Office Assistant",
    desc: "Support daily operations by managing administrative tasks, maintaining records, and ensuring smooth internal coordination.",
    location: "Dubai, UAE",
  },
};

const JobDetail = () => {
  const { slug } = useParams();
  const job = jobs[slug];
  const formRef = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nyodzzr",      // ✅ Replace with your service ID
        "template_mbxnqos",     // ✅ Replace with your template ID
        formRef.current,
        "saXL-vpWj09hGP4hz"     // ✅ Replace with your public key
      )
      .then(
        () => {
          setIsSubmitted(true);
          alert("✅ Application submitted!");
        },
        (error) => {
          console.error("FAILED...", error);
          alert("❌ Submission failed. Please try again.");
        }
      );
  };

  if (!job) {
    return <div className="p-10 text-center text-red-600">Job not found</div>;
  }

  return (
    <div className="p-4 bg-white overflow-hidden">
      <Header
        backgroundImage="/contactbg.jpg"
        showFilter={false}
        title={job.title}
        subtitle=""
        description="Explore the role and discover how you can grow with BRISKBOLD."
      />

      <section className="max-w-3xl mx-auto mt-12 p-6 bg-gray-50 rounded-xl shadow">
        <h2 className="text-2xl font-bold text-teal-800 mb-2">{job.title}</h2>
        <p className="text-gray-600 mb-4">{job.location}</p>
        <p className="text-gray-700 leading-relaxed">{job.desc}</p>

        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2">Apply Now</h3>

          {isSubmitted ? (
            <div className="bg-green-100 text-green-800 p-4 rounded-lg shadow mt-4">
              ✅ Thank you for applying! We’ll review your application and get back to you soon.
            </div>
          ) : (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input type="hidden" name="_subject" value={`New Job Application - ${job.title}`} />

              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full mt-1 px-4 py-2 border rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full mt-1 px-4 py-2 border rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Qualification</label>
                <input
                  type="text"
                  name="qualification"
                  required
                  className="w-full mt-1 px-4 py-2 border rounded-md"
                />
              </div>

              <button
                type="submit"
                className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700"
              >
                Submit Application
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JobDetail;
 