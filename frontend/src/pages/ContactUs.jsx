import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
import ContactCTA from "../components/ContactCTA";

export default function ContactUs() {
  return (
    <div className="bg-[#f0f0f0]">
      {/* Hero */}
<section className="text-center py-16 text-black font-serif mb-1">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-gray-900 mt-2">
          Interested in our IT services or need advice? Then please get in touch and we’ll be glad to help.
        </p>
      </section>

      {/* Contact Info Cards */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6 ">
        <ContactCard 
          type="faq"
          title="FAQs"
          description="For quick answers to common questions, try our FAQ first."
          link="#"
        />
        <ContactCard
          type="hq"
          title="Headquarters"
          description="2307 Beverley Rd Brooklyn, New York 11226 United States."
          link="#"
        />
        <ContactCard
          type="hours"
          title="Working hours"
          description="Open Monday to Saturday From 07:00 AM to 18:00 PM"
          link="#"
        />
      </section>

      {/* Email */}
      <p className="text-center mt-6 text-gray-600">
        You can also email us at{" "}
        <a href="mailto:sales@example.com" className="text-sky-600 font-medium">
          home.algovexa@gmail.com
        </a>
      </p>

      {/* Form */}
      <ContactForm />

      {/* CTA */}
      <ContactCTA />
    </div>
  );
}
