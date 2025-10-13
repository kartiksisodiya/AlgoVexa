import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    org: "",
    email: "",
    phone: "",
    companySize: "",
    inquiry: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-2xl p-10 max-w-4xl mx-auto mt-12 border border-gray-100"
    >
      {/* Grid layout for inputs */}
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <label className="text-xs font-semibold text-gray-700 tracking-wide">
            Full name *
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="e.g. John Doe"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full mt-2 px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-gray-700 tracking-wide">
            Organization *
          </label>
          <input
            type="text"
            name="org"
            placeholder="Company Name"
            value={formData.org}
            onChange={handleChange}
            className="w-full mt-2 px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-gray-700 tracking-wide">
            Work email address *
          </label>
          <input
            type="email"
            name="email"
            placeholder="name@company.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-2 px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-gray-700 tracking-wide">
            Phone number
          </label>
          <input
            type="text"
            name="phone"
            placeholder="Full Number (incl. prefix)"
            value={formData.phone}
            onChange={handleChange}
            className="w-full mt-2 px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-gray-700 tracking-wide">
            Company size *
          </label>
          <select
            name="companySize"
            value={formData.companySize}
            onChange={handleChange}
            className="w-full mt-2 px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
          >
            <option>Please Select</option>
            <option>1-10</option>
            <option>11-50</option>
            <option>51-200</option>
            <option>201-500</option>
            <option>500+</option>
          </select>
        </div>
        <div>
          <label className="text-xs font-semibold text-gray-700 tracking-wide">
            What is your inquiry about? *
          </label>
          <select
            name="inquiry"
            value={formData.inquiry}
            onChange={handleChange}
            className="w-full mt-2 px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
          >
            <option>Please Select</option>
            <option>IT Support</option>
            <option>Consulting</option>
            <option>Cloud Services</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      {/* Textarea */}
      <div className="mt-8">
        <label className="text-xs font-semibold text-gray-700 tracking-wide">
          How can we help you? *
        </label>
        <textarea
          name="message"
          placeholder="Let us know what you need."
          value={formData.message}
          onChange={handleChange}
          className="w-full mt-2 px-4 py-3 border rounded-lg shadow-sm h-32 resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Submit button */}
      <button
        type="submit"
        className="w-full bg-sky-500 text-white py-3 rounded-lg font-semibold mt-8 shadow-md hover:bg-blue-800 transition-all"
      >
        Submit
      </button>
    </form>
  );
}
