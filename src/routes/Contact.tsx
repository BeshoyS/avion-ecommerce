import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <main className="w-11/12 mx-auto text-center py-10 flex flex-col gap-14">
      <h1 className="font-clashDisplay text-900">Contact</h1>
      <p>
        We are always keen to hear from people that would like to add a new
        perspectives to our team.
      </p>
      <section>
        <h5 className="font-clashDisplay text-600 mb-5">GET IN TOUCH</h5>
        <p>
          Got any questions? We look forward to answering all your requests.
        </p>
        <p>Monday - Friday: 08.00 - 17.00</p>
        <p>Saturday: 09.00 - 16.30</p>
      </section>
      <article>
        <h5 className="font-clashDisplay text-600 mb-5">E-MAIL</h5>
        <p>Orders: salesorder@qodestoir.com</p>
        <p>General inquiries: customerservice@qodestoir.com</p>
        <p>Service/claims: service@qodestoir.com</p>
      </article>
      <section>
        <h5 className="font-clashDisplay text-600 mb-5">PHONE</h5>
        <p>+48 123-456-789</p>
      </section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4132.461141943832!2d17.030479324661528!3d51.10945779036951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf782c2890c4b0cff!2sRynek!5e0!3m2!1sen!2spl!4v1674340983622!5m2!1sen!2spl"
        style={{ border: 0 }}
        className="w-full aspect-square"
        loading="lazy"
      ></iframe>
    </main>
  );
};

export default Contact;
