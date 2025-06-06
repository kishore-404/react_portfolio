import { useEffect, useState } from "react";
import { RiCloseLine, RiMoonLine, RiMenuLine, RiSunLine } from "react-icons/ri";
function Header() {
    const [darkMode, setDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    // On mount, check localStorage or system preference
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setDarkMode(true);
            document.body.classList.add("dark-theme");
        }
        else {
            setDarkMode(false);
            document.body.classList.remove("dark-theme");
        }
    }, []);
    // When darkMode changes, update body class and localStorage
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-theme");
            localStorage.setItem("theme", "dark");
        }
        else {
            document.body.classList.remove("dark-theme");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);
    // Toggle dark mode handler
    const toggleTheme = () => setDarkMode((prev) => !prev);
    // Toggle menu open/close
    const toggleMenu = () => setMenuOpen((prev) => !prev);
    // Close menu on nav link click
    const closeMenu = () => setMenuOpen(false);
    return (<header className="header" id="header">
      <nav className="nav container">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kishores.developer@gmail.com&su=Hiring%20Inquiry&body=Hi,%20I'm%20interested%20in%20hiring%20you!" target="_blank" rel="noopener noreferrer" className="nav__link">
          <p className="section__title">Hire Me</p>
        </a>

        <div className={`nav__menu ${menuOpen ? "show-menu" : ""}`} id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__itemm">
              <a href="#home" className="nav__link active-link lg:text-2xl" onClick={closeMenu}>
                <i className="ri-home-line "></i> Home
              </a>
            </li>
            <li className="nav__itemm">
              <a href="#skills" className="nav__link" onClick={closeMenu}>
                <i className="ri-code-line"></i> Skills
              </a>
            </li>
            <li className="nav__itemm">
              <a href="#qualification" className="nav__link" onClick={closeMenu}>
                <i className="ri-book-line"></i> Qualifications
              </a>
            </li>
            {/* <li className="nav__itemm">
          <a href="#achievements" className="nav__link" onClick={closeMenu}>
            <i className="ri-trophy-line"></i> Achievements
          </a>
        </li> */}
            <li className="nav__itemm">
              <a href="#projects" className="nav__link" onClick={closeMenu}>
                <i className="ri-macbook-line"></i> Projects
              </a>
            </li>
            <li className="nav__itemm">
              <a href="#contact" className="nav__link" onClick={closeMenu}>
                <i className="ri-chat-4-line"></i> Contact Me
              </a>
            </li>
            <li className="nav__itemm">
              <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="nav__link" onClick={closeMenu}>
                <i className="ri-file-line"></i> Resume
              </a>
            </li>
          </ul>

          {/* Close button */}
          <div className="nav__close" id="nav-close" onClick={closeMenu} style={{ cursor: "pointer" }}>
            <RiCloseLine className="ri-close-line"/>
          </div>
        </div>

        <div className="nav__buttons">
          {/* Theme toggle */}
          <div className="change-theme" id="theme-button" onClick={toggleTheme} style={{ cursor: "pointer", fontSize: "24px" }} title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}>
            {darkMode ? <RiSunLine /> : <RiMoonLine />}
          </div>

          {/* Menu toggle */}
          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu} style={{ cursor: "pointer" }}>
            <RiMenuLine className="ri-menu-line"/>
          </div>
        </div>
      </nav>
    </header>);
}
export default Header;
