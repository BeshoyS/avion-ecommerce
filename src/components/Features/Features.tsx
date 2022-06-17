import { FC } from "react";
import FeatureBlock from "../FeatureBlock/FeatureBlock";
import {
  FeaturesBlocks,
  FeaturesContainer,
  FeaturesHeading,
} from "./Features.styled";
import { featuresList } from "./FeaturesList";

type Props = {};

const Features: FC = (props: Props) => {
  return (
    <FeaturesContainer>
      <FeaturesHeading>What makes our brand different</FeaturesHeading>
      <FeaturesBlocks>
        {featuresList?.map((feature, index) => (
          <FeatureBlock key={index} {...feature} />
        ))}
      </FeaturesBlocks>
    </FeaturesContainer>
  );
};

export default Features;
