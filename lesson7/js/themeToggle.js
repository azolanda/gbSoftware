"use strict";

function themeToggle() {
    const themeCheckbox = document.querySelector(".theme-check");

    themeCheckbox.addEventListener('change', function () {
        if (this.checked) {
            console.log("Темная тема включена...");
            document.body.classList.add("dark-theme__color-beige");
            document.body.classList.add("dark-theme__dark-background-body");
            document.querySelector(".form-control").classList.add("dark-theme__dark-background-body");
            document.querySelector(".form-control").classList.add("dark-theme__search-field-border");
            document.querySelector("footer").classList.add("dark-theme__dark-background-footer");
            document.querySelector(".navbar").classList.add("dark-theme__dark-background-navbar");
            document.querySelectorAll(".navbar-nav .nav-link.active, .navbar-nav .nav-link.show").forEach(element => {
                element.classList.add("dark-theme__color-blue");
            });
            document.querySelector(".navbar-brand").classList.add("dark-theme__color-beige");
            document.querySelectorAll(".btn-outline-success").forEach(element => {
                element.classList.add("dark-theme__color-blue");
            });

            const styleSheet = document.createElement("style");
            styleSheet.innerText =
                `.dark__theme, input, textarea {
                        background: #071e2f !important; 
                        color: #ddd2bd;
                    } 
                    input::placeholder {
                        color: #1ba098 !important;
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
                    .navbar-toggler:focus, .form-select:focus, 
                    .form-select:focus-visible, .form-control:focus, 
                    .form-control:focus-visible {
                        border-color: #1ba098 !important;
                    }
                    .navbar-toggler:focus, .form-select:focus, .form-select:focus-visible, .form-control:focus, .form-control:focus-visible {
                        box-shadow: 0 0 0 .2rem rgba(4, 244, 200, 0.25);
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
                    .submit:hover {
                        background-color: #ddd2bd;
                        color: #1ba098;
                    }`;
            document.head.appendChild(styleSheet);
        } else {
            console.log("Возврат к светлой теме...");
            document.body.classList.remove("dark-theme__color-beige");
            document.body.classList.remove("dark-theme__dark-background-body");
            document.querySelector(".form-control").classList.remove("dark-theme__dark-background-body");
            document.querySelector(".form-control").classList.remove("dark-theme__search-field-border");
            document.querySelector("footer").classList.remove("dark-theme__dark-background-footer");
            document.querySelector(".navbar").classList.remove("dark-theme__dark-background-navbar");
            document.querySelectorAll(".navbar-nav .nav-link.active, .navbar-nav .nav-link.show").forEach(element => {
                element.classList.remove("dark-theme__color-blue");
            });
            document.querySelector(".navbar-brand").classList.remove("dark-theme__color-beige");
            document.querySelectorAll(".btn-outline-success").forEach(element => {
                element.classList.remove("dark-theme__color-blue");
            });

            const style = document.head.querySelector("style");
            if (style) {
                document.head.removeChild(style);
            }
        }
    });
}