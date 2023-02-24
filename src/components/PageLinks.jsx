import { pageLinks } from "../data";
import PageLink from "./PageLink";

const PageLinks = (props) => {
  const { typeLink, classLink } = props;

  return (
    <ul className={typeLink} id={typeLink}>
      {pageLinks.map((pageLink) => {
        return (
          <PageLink key={pageLink.id} {...pageLink} classLink={classLink} />
        );
      })}
    </ul>
  );
};
export default PageLinks;
