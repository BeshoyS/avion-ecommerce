import { FC } from "react";
import { SocialLink, SocialLinksContainer } from "./SocialLinks.styled";
import { SocialLinksList } from "./SocialLinksList";

const SocialLinks: FC = () => {
  return (
    <SocialLinksContainer>
      {SocialLinksList?.map(({ title, icon, url }) => (
        <SocialLink
          key={title}
          href={url}
          title={title}
          aria-label={title}
          target="_blank"
          rel="noreferrer"
        >
          {icon}
        </SocialLink>
      ))}
    </SocialLinksContainer>
  );
};

export default SocialLinks;
