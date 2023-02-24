const PageLink = ({ id, href, text, classLink }) => {
  return (
    <li key={id}>
      <a href={href} className={classLink}>
        {id === 4 && classLink === "footer-link" ? "featured" : text}
      </a>
    </li>
  );
};
export default PageLink;
