import styled from "styled-components";

export const EmailSignUpContainer = styled.section`
  flex: 1;
  align-self: flex-start;
  padding: 1rem 0;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const EmailSignUpHeading = styled.h3`
  font-weight: normal;
  font-size: var(--h5-size);
`;

export const FormContainer = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  margin: 0.8rem 0;
`;
