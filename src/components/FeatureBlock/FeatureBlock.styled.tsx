import styled from "styled-components";

export const FeatureBlockContainer = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  color: var(--dark-primary);
  padding: var(--padding-small);
`;
export const FeatureBlockIcon = styled.div`
  color: inherit;
  font-size: 1.5rem;
`;
export const FeatureBlockHighlight = styled.h4`
  color: inherit;
  font-size: var(--h4-size);
`;
export const FeatureBlockDetails = styled.p`
  color: inherit;
`;
