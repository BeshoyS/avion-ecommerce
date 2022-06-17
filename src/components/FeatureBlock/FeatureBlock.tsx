import { FC, ReactNode } from "react";
import {
  FeatureBlockContainer,
  FeatureBlockDetails,
  FeatureBlockHighlight,
  FeatureBlockIcon,
} from "./FeatureBlock.styled";

type Props = {
  icon: ReactNode;
  highlight: string;
  details: string;
};

const FeatureBlock: FC<Props> = ({ icon, highlight, details }) => {
  return (
    <FeatureBlockContainer>
      <FeatureBlockIcon>
        {icon}
      </FeatureBlockIcon>
      <FeatureBlockHighlight>{highlight}</FeatureBlockHighlight>
      <FeatureBlockDetails>
        {details}
      </FeatureBlockDetails>
    </FeatureBlockContainer>
  );
};

export default FeatureBlock;
