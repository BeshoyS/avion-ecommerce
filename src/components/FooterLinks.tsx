import { FC } from "react";
import { Link } from "react-router-dom";
import { footerLinkDataTypes } from "../types";

type Props = footerLinkDataTypes;

const FooterLinks: FC<Props> = ({ heading, links }) => {
  return (
    <section>
      <h5 className="font-clashDisplay text-400 mb-3">{heading}</h5>
      <ul className="flex flex-col gap-3">
        {links?.map((link, idx) => (
          <li key={idx} className="text-300">
            <Link
              className="text-lightGray/[0.45] hover:text-lightGray transition-colors duration-200"
              to="/"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FooterLinks;
