import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";

const curYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks typeLink="footer-links" classLink="footer-link" />

      <SocialLinks parentClass="footer-icons" childClass="footer-icon" />

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{curYear}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
