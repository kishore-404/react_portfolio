import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { RiSendPlaneLine, RiArrowRightUpLine, RiChat3Line, RiArrowRightLine, } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
    const form = useRef(null);
    const sendEmail = (e) => {
        e.preventDefault();
        if (!form.current)
            return;
        const formEl = form.current;
        const userName = formEl.user_name?.value || "";
        const userEmail = formEl.user_email?.value || "";
        const userMessage = formEl.message?.value || "";
        // Immediately reset and show toast
        formEl.reset();
        toast.success("Message submitted!", {
            position: "top-right",
            autoClose: 2000,
            theme: "light",
        });
        // Fire off emails in background — no await, no blocking
        emailjs
            .sendForm("service_wwa3qq9", "template_8vmvfcr", formEl, "ID5dZkGU3mFS7dmD-")
            .catch((err) => {
            console.error("Admin email error:", err);
            // Optionally: notify admin via other means or log silently
        });
        emailjs
            .send("service_wwa3qq9", "template_3e4qm4e", {
            user_name: userName,
            user_email: userEmail,
            message: userMessage,
        }, "ID5dZkGU3mFS7dmD-")
            .catch((err) => {
            console.error("Auto-reply email error:", err);
            // Optional silent fail
        });
    };
    return (_jsxs("section", { className: "contact section", id: "contact", children: [_jsx("h2", { className: "section__title", children: "Contact Me" }), _jsx("span", { className: "section__subtitle", children: "Get in touch" }), _jsxs("div", { className: "contact__container container grid section__border", children: [_jsxs("div", { className: "contact__content", children: [_jsxs("h3", { className: "contact__title", children: [_jsx(RiChat3Line, {}), " Text me"] }), _jsxs("div", { className: "contact__info", children: [_jsxs("div", { className: "contact__data", children: [_jsx("span", { className: "contact__data-title", children: "Email" }), _jsx("span", { className: "contact__data-info", children: "kishores.developer@gmail.com" })] }), _jsxs("div", { className: "contact__data", children: [_jsx("span", { className: "contact__data-title", children: "WhatsApp" }), _jsx("span", { className: "contact__data-info", children: "+91 9500041579" }), _jsxs("a", { href: "https://api.whatsapp.com/send?phone=9500041579&text=Get in Touch \u2013 Let\u2019s Build Something Great!", target: "_blank", rel: "noopener noreferrer", className: "contact__button", children: ["Text me ", _jsx(RiArrowRightLine, {})] })] })] })] }), _jsxs("div", { className: "contact__content", children: [_jsxs("h3", { className: "contact__title", children: [_jsx(RiSendPlaneLine, {}), " Have a query for me?"] }), _jsxs("form", { ref: form, onSubmit: sendEmail, className: "contact__form", children: [_jsxs("div", { className: "contact__form-div", children: [_jsx("label", { className: "contact__form-tag", htmlFor: "user_name", children: "Name" }), _jsx("input", { type: "text", name: "user_name", id: "user_name", required: true, placeholder: "Your name", className: "contact__form-input" })] }), _jsxs("div", { className: "contact__form-div", children: [_jsx("label", { className: "contact__form-tag", htmlFor: "user_email", children: "Email" }), _jsx("input", { type: "email", name: "user_email", id: "user_email", required: true, placeholder: "Your email", className: "contact__form-input" })] }), _jsxs("div", { className: "contact__form-div contact__form-area", children: [_jsx("label", { className: "contact__form-tag", htmlFor: "message", children: "Message" }), _jsx("textarea", { name: "message", id: "message", required: true, placeholder: "Ask me something?", className: "contact__form-input" })] }), _jsxs("button", { type: "submit", className: "contact__button ms-5", children: ["Send ", _jsx(RiArrowRightUpLine, {})] })] })] })] }), _jsx(ToastContainer, { position: "top-center" // center top - easier to see on mobile
                , autoClose: 2000, hideProgressBar: false, newestOnTop: false, closeOnClick: true, rtl: false, pauseOnFocusLoss: true, draggable: true, pauseOnHover: true, theme: "dark" })] }));
};
export default Contact;
