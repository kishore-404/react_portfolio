

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Kishore</h1>
        <p className="footer__subtitle">Full Stack Web Developer</p>

        <ul className="footer__list">
          <li>
            <a href="#home" className="footer__link">Home</a>
          </li>
          <li>
            <a href="#skills" className="footer__link">Skills</a>
          </li>
          <li>
            <a href="#projects" className="footer__link">Projects</a>
          </li>
        </ul>

        <ul className="footer__social" role="list" aria-label="Social media links">
          <li>
            <a
              href="https://www.linkedin.com/in/kishore-kumar-b8529b284/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="LinkedIn"
            >
              <i className="ri-linkedin-box-line" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/kishore-404"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="GitHub"
            >
              <i className="ri-github-line" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/mr_poppy.23/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="Instagram"
            >
              <i className="ri-instagram-line" aria-hidden="true"></i>
            </a>
          </li>
        </ul>

        <h3 className="footer__copy" role="contentinfo">
           Open to Work — Let’s Connect!
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
