"use strict";

function themeToggle() {
    const themeCheckbox = document.querySelector(".theme-check");

    themeCheckbox.addEventListener('change', function () {
        const style = document.head.querySelector("style");
        if (this.checked) {
            console.log("Темная тема включена...");
            document.body.classList.add("dark-theme__color-beige");
            document.body.classList.add("dark-theme__dark-background-body");
            document.querySelector(".form-control").classList.add("dark-theme__dark-background-body");
            document.querySelector(".navbar").classList.add("dark-theme__dark-background-navbar");
            document.querySelector("footer").classList.add("dark-theme__dark-background-footer");
            document.querySelectorAll(".navbar-nav .nav-link.active, .navbar-nav .nav-link.show").forEach(element => {
                element.classList.add("dark-theme__color-blue");
            });
            document.querySelector(".navbar-brand").classList.add("dark-theme__color-beige");
            document.querySelectorAll(".btn-outline-success").forEach(element => {
                element.classList.add("dark-theme__color-blue");
            });

            const innerText =
                `.dark__theme, input, textarea {
                        background: #071e2f !important; 
                        color: #ddd2bd;
                    } 
                    input::placeholder {
                        color: #1ba098 !important;
                    } 
                    .navbar-toggler {
                        background-color: #1ba098;
                    }
                    .btn-dark {
                        --bs-btn-bg: #1ba098; 
                        --bs-btn-border-color: #1ba098; 
                        --bs-btn-hover-bg: #1ba098; --bs-btn-hover-border-color: #1ba098; --bs-btn-active-bg: #1ba098; --bs-btn-active-border-color: #1ba098;
                        --bs-btn-disabled-bg: #1ba098;
                        --bs-btn-disabled-border-color: #1ba098;
                        color: #ddd2bd;
                    }
                    .btn-outline-success {
                        --bs-btn-color: #1ba098;
                        --bs-btn-border-color: #1ba098;
                        --bs-btn-hover-color: wheat;
                        --bs-btn-hover-bg: #1ba098;
                        --bs-btn-hover-border-color: #1ba098;
                        --bs-btn-active-color: #fff;
                        --bs-btn-active-bg: #1ba098;
                        --bs-btn-active-border-color: #1ba098;
                        --bs-btn-disabled-color: #1ba098;
                        --bs-btn-disabled-border-color: #1ba098;
                    }
                    .btn-outline-success:hover {
                        color: #ddd2bd !important;
                    }
                    .card-settings {
                        background: rgb(2, 8, 13) !important;
                    }
                    .text-body-secondary {
                        color: #deb992 !important;
                    }
                    a {
                        color: #1ba098;
                    }
                    input {
                        color: #1ba098 !important;
                    }
                    .form-control {
                        border-color: #1ba098;
                    }
                    .navbar-toggler:focus, .form-select:focus, 
                    .form-select:focus-visible, .form-control:focus, 
                    .form-control:focus-visible {
                        border-color: #1ba098 !important;
                    }
                    .navbar-toggler:focus, .form-select:focus, .form-select:focus-visible, .form-control:focus, .form-control:focus-visible {
                        box-shadow: 0 0 0 .2rem rgba(4, 244, 200, 0.25);
                        box-shadow: 0 0 0 .2rem #24dbd0d6;
                    }
                    .card-header-tabs .nav-link.active {
                        background-color: #071e2f;
                        border-color: #051622;
                        border-bottom-color: #071e2f;
                        color: #ddd2bd;
                    }
                    .toggle:hover .toggle-switch:before {
                        box-shadow: 0 0 0 1px #1ba098;
                    }
                    .toggle-checkbox:checked+.toggle-switch {
                        background: #1ba098;
                    }
                    .settings__text{
                        border-bottom-color: #ddd2bd21;
                    }                    
                    .submit:hover {
                        background-color: #ddd2bd;
                        color: #1ba098;
                    }`;

            if (style) {
                style.innerText += innerText;
            } else {
                const styleSheet = document.createElement("style");
                styleSheet.innerText = innerText;
                document.head.appendChild(styleSheet);
            }
        } else {
            console.log("Возврат к светлой теме...");
            document.body.classList.remove("dark-theme__color-beige");
            document.body.classList.remove("dark-theme__dark-background-body");
            document.querySelector(".form-control").classList.remove("dark-theme__dark-background-body");
            document.querySelector(".navbar").classList.remove("dark-theme__dark-background-navbar");
            document.querySelector("footer").classList.remove("dark-theme__dark-background-footer");
            document.querySelectorAll(".navbar-nav .nav-link.active, .navbar-nav .nav-link.show").forEach(element => {
                element.classList.remove("dark-theme__color-blue");
            });
            document.querySelector(".navbar-brand").classList.remove("dark-theme__color-beige");
            document.querySelectorAll(".btn-outline-success").forEach(element => {
                element.classList.remove("dark-theme__color-blue");
            });

            // const style = document.head.querySelector("style");
            if (style) {
                document.head.removeChild(style);
            }
        }
    });
}

function fontToggle() {
    const fontCheckbox = document.querySelector(".font-check");

    fontCheckbox.addEventListener('change', function () {
        let style = document.head.querySelector("style");
        if (this.checked) {
            // document.body.style.removeProperty("font-size");
            if (style) {
                style.innerText +=
                    `body, .btn { font-size: 1.2rem !important; }
                    h1 { font-size: 3rem; }
                    h5, legend { font-size: 1.75rem; }
                    input::placeholder { font-size: 1.1rem; }
                    .navbar-brand { font-size: 1.3rem; }`;
            } else {
                style = document.createElement("style");
                style.innerText =
                    `body, .btn { font-size: 1.2rem !important; }
                    h1 { font-size: 3rem; }
                    h5, legend { font-size: 1.75rem; }
                    input::placeholder { font-size: 1.1rem; }
                    .navbar-brand { font-size: 1.3rem; }`;
                document.head.appendChild(style);
            }
            // document.body.classList.add("body__big-font");
        } else {
            // document.body.classList.remove("body__big-font");
            if (style) {
                const firstIndexBody = style.innerText.indexOf(`body, .btn { font-size: 1.2rem !important; }`);
                sliceStyle(firstIndexBody, style);

                // console.log(firstIndexH1);
                // if (firstIndexBody !== -1) {
                //     const lastIndexBody = style.innerText.indexOf(`}`, firstIndexBody);
                //     const innerText = style.innerText.slice(0, firstIndexBody) + style.innerText.slice(lastIndexBody + 1);
                //     style.innerText = innerText;
                // }

                const firstIndexH1 = style.innerText.indexOf(`h1 { font-size: 3rem; }`);
                sliceStyle(firstIndexH1, style);

                const firstIndexH5 = style.innerText.indexOf(`h5, legend { font-size: 1.75rem; }`);
                sliceStyle(firstIndexH5, style);

                const firstIndexPlaceholder = style.innerText.indexOf(`input::placeholder { font-size: 1.1rem; }`);
                sliceStyle(firstIndexPlaceholder, style);

                const firstIndexBrand = style.innerText.indexOf(`.navbar-brand { font-size: 1.3rem; }`);
                sliceStyle(firstIndexBrand, style);
            }
            // document.body.style.setProperty('font-size', '1rem', 'important');
        }
    });
}

function sliceStyle(firstIndex, stylesheet) {
    if (firstIndex !== -1) {
        console.log(firstIndex);
        const lastIndex = stylesheet.innerText.indexOf(`}`, firstIndex);
        const innerText = stylesheet.innerText.slice(0, firstIndex) + stylesheet.innerText.slice(lastIndex + 1);
        console.log(innerText);
        stylesheet.innerText = innerText;
    }
}