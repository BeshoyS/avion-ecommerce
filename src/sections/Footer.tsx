import { FC } from "react";
import FooterLinks from "../components/FooterLinks";
import NewsletterSignup from "../components/NewsletterSignup";
import { footerLinksData } from "../data/footerLinks";
import { socialLinks } from "../data/socialLinks";

const Footer: FC = () => {
  return (
    <footer className="bg-darkPrimary text-white px-6 pt-10 md:px-20">
      <section className="grid gap-10 grid-cols-2 md:grid-cols-6">
        {footerLinksData?.map((data, idx) => (
          <FooterLinks key={idx} {...data} />
        ))}
        <section className="col-span-2 md:col-[4_/_span_3]">
          <h5 className="mb-4">Join our mailing list</h5>
          <NewsletterSignup
            inpStyle="bg-lightGray/[0.15] text-white placeholder:text-white"
            btnStyle="bg-white text-darkPrimary"
          />
        </section>
      </section>
      <section className="border-t border-t-primary mt-12 py-5 md:py-6 md:flex items-center justify-between">
        <p className="text-300 text-center md:text-left md:flex justify-between items-center">
          Copyright 2023 Avion LTD
        </p>
        <section className="hidden md:flex gap-6">
          {socialLinks?.map(({ name, icon, url }) => (
            <a className="text-700" href={url} title={name}>
              {icon}
            </a>
          ))}
        </section>
      </section>
    </footer>
  );
};

export default Footer;
