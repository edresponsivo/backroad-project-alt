import { socialLinks } from "../data";
import SocialLink from "./SocialLink";

const SocialLinks = (props) => {
  const { parentClass, childClass } = props;
  return (
    <ul className={parentClass}>
      {socialLinks.map((socialLink) => {
        return (
          <SocialLink
            key={socialLink.id}
            {...socialLink}
            childClass={childClass}
          />
        );
      })}
    </ul>
  );
};
export default SocialLinks;
