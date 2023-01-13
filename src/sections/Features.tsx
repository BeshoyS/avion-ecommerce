import { FC } from "react";
import FeatureCard from "../components/FeatureCard";
import { featuresData } from "../data/featuresData";

type Props = {};

const Features: FC = (props: Props) => {
  return (
    <section className="px-6 py-12 md:mx-20 md:px-0">
      <h2 className="font-clashDisplay text-600 w-4/5 mb-9 md:text-center md:w-full md:mb-12">
        What makes our brand different
      </h2>
      <div className="grid gap-9 sm:grid-cols-2 md:grid-cols-4 justify-between">
        {featuresData?.map(({ icon, title, desc }, idx) => (
          <FeatureCard key={idx} icon={icon} title={title} desc={desc} />
        ))}
      </div>
    </section>
  );
};

export default Features;
