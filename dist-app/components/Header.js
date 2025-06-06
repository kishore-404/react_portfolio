import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsx("header", { className: "header", id: "header", children: _jsxs("nav", { className: "nav container", children: [_jsx("a", { href: "https://mail.google.com/mail/?view=cm&fs=1&to=kishores.developer@gmail.com&su=Hiring%20Inquiry&body=Hi,%20I'm%20interested%20in%20hiring%20you!", target: "_blank", rel: "noopener noreferrer", className: "nav__link", children: _jsx("p", { className: "section__title", children: "Hire Me" }) }), _jsxs("div", { className: `nav__menu ${menuOpen ? "show-menu" : ""}`, id: "nav-menu", children: [_jsxs("ul", { className: "nav__list grid", children: [_jsx("li", { className: "nav__itemm", children: _jsxs("a", { href: "#home", className: "nav__link active-link lg:text-2xl", onClick: closeMenu, children: [_jsx("i", { className: "ri-home-line " }), " Home"] }) }), _jsx("li", { className: "nav__itemm", children: _jsxs("a", { href: "#skills", className: "nav__link", onClick: closeMenu, children: [_jsx("i", { className: "ri-code-line" }), " Skills"] }) }), _jsx("li", { className: "nav__itemm", children: _jsxs("a", { href: "#qualification", className: "nav__link", onClick: closeMenu, children: [_jsx("i", { className: "ri-book-line" }), " Qualifications"] }) }), _jsx("li", { className: "nav__itemm", children: _jsxs("a", { href: "#projects", className: "nav__link", onClick: closeMenu, children: [_jsx("i", { className: "ri-macbook-line" }), " Projects"] }) }), _jsx("li", { className: "nav__itemm", children: _jsxs("a", { href: "#contact", className: "nav__link", onClick: closeMenu, children: [_jsx("i", { className: "ri-chat-4-line" }), " Contact Me"] }) }), _jsx("li", { className: "nav__itemm", children: _jsxs("a", { href: "/Resume.pdf", target: "_blank", rel: "noopener noreferrer", className: "nav__link", onClick: closeMenu, children: [_jsx("i", { className: "ri-file-line" }), " Resume"] }) })] }), _jsx("div", { className: "nav__close", id: "nav-close", onClick: closeMenu, style: { cursor: "pointer" }, children: _jsx(RiCloseLine, { className: "ri-close-line" }) })] }), _jsxs("div", { className: "nav__buttons", children: [_jsx("div", { className: "change-theme", id: "theme-button", onClick: toggleTheme, style: { cursor: "pointer", fontSize: "24px" }, title: darkMode ? "Switch to Light Mode" : "Switch to Dark Mode", children: darkMode ? _jsx(RiSunLine, {}) : _jsx(RiMoonLine, {}) }), _jsx("div", { className: "nav__toggle", id: "nav-toggle", onClick: toggleMenu, style: { cursor: "pointer" }, children: _jsx(RiMenuLine, { className: "ri-menu-line" }) })] })] }) }));
}
export default Header;
