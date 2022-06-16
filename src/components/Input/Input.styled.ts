import styled from "styled-components";

type Props = {
  dark?: boolean;
};

export const CustomInput = styled.input<Props>`
  --whitefirst: ${({ dark }) =>
    dark ? "var(--white)" : "var(--dark-primary)"};
  background-color: ${({ dark }) =>
    dark ? "rgba(255, 255, 255, 0.15)" : "var(--white)"};
  color: var(--whitefirst);
  padding: var(--padding-large);
  border: none;
  caret-color: var(--whitefirst);
  flex: 4;

  &::placeholder {
    color: var(--whitefirst);
    opacity: 0.4;
  }
  &:focus {
    border: none;
    outline: none;
  }
`;
