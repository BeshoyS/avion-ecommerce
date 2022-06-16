import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const FooterLinksContainer = styled.section`
  color: var(--white);
  width: 48%;
  justify-self: flex-start;
  padding: 1rem 0;
`;
export const FooterLinksHeading = styled.h3`
  font-weight: normal;
  font-size: var(--h5-size);
`;
export const FooterLinksItem = styled(NavLink)`
  color: inherit;
  font-size: var(--body-small-size);
  display: block;
  margin: 0.8rem 0;
`;
