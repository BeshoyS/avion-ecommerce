import { FC } from "react";
import { featuresDataTypes } from "../types";

type Props = featuresDataTypes;

const FeatureCard: FC<Props> = ({ icon, title, desc }) => {
  return (
    <section className="bg-lightGray flex-1">
      <div className="text-700 mb-4">{icon}</div>
      <article>
        <h3 className="font-clashDisplay text-400 mb-3">{title}</h3>
        <p className="text-300">{desc}</p>
      </article>
    </section>
  );
};

export default FeatureCard;
