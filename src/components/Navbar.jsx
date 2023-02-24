import logo from "../images/logo.svg";
import PageLinks from "../components/PageLinks";
import SocialLinks from "./SocialLinks";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <PageLinks typeLink="nav-links" classLink="nav-link" />

        <SocialLinks parentClass="nav-icons" childClass="nav-icon" />
        {/* <ul className="nav-icons">
          {socialLinks.map((socialLink) => {
            // deconstructing the object
            const { id, href, icon } = socialLink;
            return (
              <li key={id}>
                <a
                  href={href}
                  rel="noreferrer"
                  target="_blank"
                  className="nav-icon"
                >
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul> */}
      </div>
    </nav>
  );
};
export default Navbar;
