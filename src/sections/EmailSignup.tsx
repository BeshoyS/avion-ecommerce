import { FC } from "react";
import emailImg from "../assets/sections/email_signup.png";
import { IoCheckmarkCircle } from "react-icons/io5";
import NewsletterSignup from "../components/NewsletterSignup";

const benefits: string[] = [
  "Exclusive offers",
  "Free events",
  "Large discounts",
];

const EmailSignup: FC = () => {
  return (
    <section
      style={{ backgroundImage: `url(${emailImg})` }}
      className={`md:text-center text-white p-6 md:py-20 bg-no-repeat bg-center bg-cover`}
    >
      <div className="md:w-1/2 mx-auto">
        <h2 className="font-clashDisplay text-600 md:text-800 mb-3">
          Join the club and get the benefits
        </h2>
        <p className="text-300 leading-150 mb-5 md:mb-7 md:w-2/3 md:mx-auto">
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop up stores and more
        </p>
        <div className="mb-7 md:flex gap-9 justify-center">
          {benefits &&
            benefits?.map((benefit, idx) => (
              <p key={idx} className="flex gap-2 items-center my-2">
                <IoCheckmarkCircle className="text-white" />
                <span>{benefit}</span>
              </p>
            ))}
        </div>
        <div>
          <NewsletterSignup
            inpStyle="text-darkPrimary placeholder:text-borderDark"
            btnStyle="text-white bg-darkPrimary"
          />
        </div>
      </div>
    </section>
  );
};

export default EmailSignup;
