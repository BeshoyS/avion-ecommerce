import styled from "styled-components";

interface Props {
  color: "dark" | "lightdark" | "light" | "transparent";
}

const handleBtnColorType = (mode: string) => {
  switch (mode) {
    case "dark":
      return {
        "background-color": "var(--white)",
        color: "var(--dark-primary)",
      };
    case "lightdark":
      return {
        "background-color": "var(--primary)",
        color: "var(--white)",
      };
    case "light":
      return {
        "background-color": "var(--dark-primary)",
        color: "var(--white)",
      };
    case "transparent":
      return {
        "background-color": "transparent",
        color: "var(--dark-primary)",
      };
    default:
      return;
  }
};

export const CustomButton = styled.button<Props>`
  padding: var(--padding-large);
  ${({ color }) => handleBtnColorType(color)};
  border: none;
  flex: 1;
  cursor: pointer;
`;
