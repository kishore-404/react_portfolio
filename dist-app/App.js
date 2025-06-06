import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import SkillsSection from "./components/SkillsSection";
import Qualification from "./components/Qualification.tsx";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer.tsx";
import { initUIEffects } from "./utils.tsx";
function App() {
    useEffect(() => {
        initUIEffects();
    }, []);
    return (_jsxs("div", { className: "overflow-x-hidden", children: [_jsx(Header, {}), _jsx(Banner, {}), _jsx(SkillsSection, {}), _jsx(Qualification, {}), _jsx(Projects, {}), _jsx(Contact, {}), _jsx(Footer, {})] }));
}
export default App;
