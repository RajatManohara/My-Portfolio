/**
 * Rajat Manohara - Portfolio Script
 * Vanilla JavaScript (ES6+)
 * Strictly no frameworks.
 * java script
 */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
    /* ==================== INITIALIZE LUCIDE ICONS ==================== */
    if (window.lucide && typeof window.lucide.createIcons === "function") {
        window.lucide.createIcons();
    }

    /* ==================== DYNAMIC COPYRIGHT YEAR ==================== */
    const yearEl = document.getElementById("year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    /* ==================== MOBILE NAVIGATION ==================== */
    const navMenu = document.getElementById("nav-menu");
    const navToggle = document.getElementById("nav-toggle");
    const navClose = document.getElementById("nav-close");
    const navLinks = document.querySelectorAll(".nav__link");

    const openMenu = () => {
        if (!navMenu) return;
        navMenu.classList.add("show-menu");
        if (navToggle) navToggle.setAttribute("aria-expanded", "true");
        document.body.style.overflow = "hidden"; // Prevent body scroll while menu is open on mobile
    };

    const closeMenu = () => {
        if (!navMenu) return;
        navMenu.classList.remove("show-menu");
        if (navToggle) navToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
    };

    if (navToggle) {
        navToggle.addEventListener("click", openMenu);
    }

    if (navClose) {
        navClose.addEventListener("click", closeMenu);
    }

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            closeMenu();
        });
    });

    // Close on Escape key press
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && navMenu && navMenu.classList.contains("show-menu")) {
            closeMenu();
        }
    });

    /* ==================== STICKY HEADER & SCROLL UP ==================== */
    const header = document.getElementById("header");
    const scrollUpBtn = document.getElementById("scroll-up");

    const handleWindowScroll = () => {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;

        // Sticky header class
        if (header) {
            if (scrollY >= 50) {
                header.classList.add("scroll-header");
            } else {
                header.classList.remove("scroll-header");
            }
        }

        // Back to top button
        if (scrollUpBtn) {
            if (scrollY >= 400) {
                scrollUpBtn.classList.add("show-scroll");
            } else {
                scrollUpBtn.classList.remove("show-scroll");
            }
        }
    };

    window.addEventListener("scroll", handleWindowScroll, { passive: true });

    /* ==================== ACTIVE SECTION LINK HIGHLIGHTING ==================== */
    const sections = document.querySelectorAll("section[id]");

    const highlightActiveSection = () => {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;

        sections.forEach((current) => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute("id");
            if (!sectionId) return;

            const targetNavLink = document.querySelector(`.nav__menu a[href="#${sectionId}"]`);
            if (!targetNavLink) return;

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                targetNavLink.classList.add("active-link");
            } else {
                targetNavLink.classList.remove("active-link");
            }
        });
    };

    window.addEventListener("scroll", highlightActiveSection, { passive: true });

    /* ==================== TYPING ANIMATION ==================== */
    const typingElement = document.querySelector(".typing");
    const roles = [
        "Java Backend Development",
        "Spring Boot Architecture",
        "RESTful API Engineering",
        "Relational Database Systems",
        "Defensive Software Design"
    ];

    if (typingElement) {
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 90;

        const typeLoop = () => {
            const currentRole = roles[roleIndex];

            if (isDeleting) {
                typingElement.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 40;
            } else {
                typingElement.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 90;
            }

            if (!isDeleting && charIndex === currentRole.length) {
                isDeleting = true;
                typingSpeed = 2000; // Pause when word completed
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                typingSpeed = 400; // Pause before new word
            }

            setTimeout(typeLoop, typingSpeed);
        };

        // Start typing
        typeLoop();
    }

    /* ==================== SCROLL REVEAL (INTERSECTION OBSERVER) ==================== */
    if ("IntersectionObserver" in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("reveal-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px"
        });

        const revealTargets = document.querySelectorAll(
            ".section__header, .about__narrative, .about__card, .skills__category, .projects__card, .experience__group, .achievements__card, .contact__card, .contact__form-wrapper"
        );

        revealTargets.forEach((target) => {
            target.classList.add("reveal");
            revealObserver.observe(target);
        });
    }

    /* ==================== TOAST NOTIFICATION UTILITY ==================== */
    const toastContainer = document.getElementById("toast-container");

    const showToast = (message, duration = 3500) => {
        if (!toastContainer) return;

        const toast = document.createElement("div");
        toast.className = "toast";
        toast.setAttribute("role", "status");
        toast.innerHTML = `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00f5d4" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span>${escapeHTML(message)}</span>
        `;

        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = "0";
            toast.style.transform = "translateY(10px)";
            toast.style.transition = "all 0.3s ease";
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 300);
        }, duration);
    };

    // Helper to escape HTML strings
    function escapeHTML(str) {
        const div = document.createElement("div");
        div.textContent = str;
        return div.innerHTML;
    }

    /* ==================== COPY TO CLIPBOARD HANDLERS ==================== */
    // 1. Copy Email Button
    const copyEmailBtn = document.getElementById("copy-email-btn");
    const contactEmailText = document.getElementById("contact-email-text");

    if (copyEmailBtn && contactEmailText) {
        copyEmailBtn.addEventListener("click", async () => {
            const email = contactEmailText.textContent.trim();
            try {
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    await navigator.clipboard.writeText(email);
                } else {
                    fallbackCopy(email);
                }
                showToast("Email address copied to clipboard!");
            } catch (err) {
                console.error("Clipboard copy failed:", err);
                showToast("Failed to copy automatically. Email: " + email);
            }
        });
    }

    // Fallback for older browsers
    function fallbackCopy(text) {
        const tempInput = document.createElement("textarea");
        tempInput.value = text;
        tempInput.style.position = "fixed";
        tempInput.style.opacity = "0";
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
    }

    /* ==================== CONTACT FORM VALIDATION & MAILTO ==================== */
    const contactForm = document.getElementById("contact-form");
    const formStatus = document.getElementById("form-status");
    const copyMessageBtn = document.getElementById("copy-message-btn");

    const nameInput = document.getElementById("contact-name");
    const emailInput = document.getElementById("contact-email");
    const subjectInput = document.getElementById("contact-subject");
    const messageInput = document.getElementById("contact-message");

    const nameFeedback = document.getElementById("name-feedback");
    const emailFeedback = document.getElementById("email-feedback");
    const subjectFeedback = document.getElementById("subject-feedback");
    const messageFeedback = document.getElementById("message-feedback");

    // Email regex validation (RFC 5322 compliant simplified)
    const isValidEmail = (email) => {
        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return re.test(String(email).toLowerCase());
    };

    const validateField = (input, feedbackEl, condition, errorMessage) => {
        if (!condition) {
            input.classList.add("is-invalid");
            input.classList.remove("is-valid");
            if (feedbackEl) feedbackEl.textContent = errorMessage;
            return false;
        } else {
            input.classList.remove("is-invalid");
            input.classList.add("is-valid");
            if (feedbackEl) feedbackEl.textContent = "";
            return true;
        }
    };

    // Live validation listeners
    if (nameInput) {
        nameInput.addEventListener("blur", () => {
            validateField(nameInput, nameFeedback, nameInput.value.trim().length >= 2, "Please enter your name (minimum 2 characters).");
        });
        nameInput.addEventListener("input", () => {
            if (nameInput.classList.contains("is-invalid")) {
                validateField(nameInput, nameFeedback, nameInput.value.trim().length >= 2, "Please enter your name (minimum 2 characters).");
            }
        });
    }

    if (emailInput) {
        emailInput.addEventListener("blur", () => {
            validateField(emailInput, emailFeedback, isValidEmail(emailInput.value.trim()), "Please enter a valid email address.");
        });
        emailInput.addEventListener("input", () => {
            if (emailInput.classList.contains("is-invalid")) {
                validateField(emailInput, emailFeedback, isValidEmail(emailInput.value.trim()), "Please enter a valid email address.");
            }
        });
    }

    if (subjectInput) {
        subjectInput.addEventListener("blur", () => {
            validateField(subjectInput, subjectFeedback, subjectInput.value.trim().length >= 3, "Please provide a brief subject.");
        });
        subjectInput.addEventListener("input", () => {
            if (subjectInput.classList.contains("is-invalid")) {
                validateField(subjectInput, subjectFeedback, subjectInput.value.trim().length >= 3, "Please provide a brief subject.");
            }
        });
    }

    if (messageInput) {
        messageInput.addEventListener("blur", () => {
            validateField(messageInput, messageFeedback, messageInput.value.trim().length >= 10, "Message should be at least 10 characters long.");
        });
        messageInput.addEventListener("input", () => {
            if (messageInput.classList.contains("is-invalid")) {
                validateField(messageInput, messageFeedback, messageInput.value.trim().length >= 10, "Message should be at least 10 characters long.");
            }
        });
    }

    const validateForm = () => {
        const isNameValid = validateField(nameInput, nameFeedback, nameInput.value.trim().length >= 2, "Please enter your name (minimum 2 characters).");
        const isEmailValid = validateField(emailInput, emailFeedback, isValidEmail(emailInput.value.trim()), "Please enter a valid email address.");
        const isSubjectValid = validateField(subjectInput, subjectFeedback, subjectInput.value.trim().length >= 3, "Please provide a brief subject.");
        const isMessageValid = validateField(messageInput, messageFeedback, messageInput.value.trim().length >= 10, "Message should be at least 10 characters long.");

        return isNameValid && isEmailValid && isSubjectValid && isMessageValid;
    };

    const getFormattedMessageText = () => {
        const name = nameInput ? nameInput.value.trim() : "";
        const email = emailInput ? emailInput.value.trim() : "";
        const subject = subjectInput ? subjectInput.value.trim() : "";
        const message = messageInput ? messageInput.value.trim() : "";

        return `Sender: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`;
    };

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            if (!validateForm()) {
                if (formStatus) {
                    formStatus.className = "form-status is-active form-status--error";
                    formStatus.innerHTML = `<strong>Please fix the errors above</strong> before proceeding.`;
                }
                return;
            }

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const subject = subjectInput.value.trim();
            const message = messageInput.value.trim();

            const targetEmail = "rajat.manohara@placeholder.com";
            const emailSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject}`);
            const emailBody = encodeURIComponent(
                `Hello Rajat,\n\n${message}\n\n---\nSender: ${name}\nContact: ${email}`
            );

            const mailtoUrl = `mailto:${targetEmail}?subject=${emailSubject}&body=${emailBody}`;

            // Provide clear, honest feedback (Never fake a server submission)
            if (formStatus) {
                formStatus.className = "form-status is-active form-status--info";
                formStatus.innerHTML = `
                    <p><strong>Launching your email client...</strong></p>
                    <p>A pre-filled email to <code>${targetEmail}</code> has been prepared. If your mail client does not open automatically, click <em>"Copy Formatted Message"</em> to copy and send manually.</p>
                `;
            }

            // Trigger mailto link
            window.location.href = mailtoUrl;

            showToast("Opening default email client...");
        });
    }

    // 2. Copy Formatted Message Button
    if (copyMessageBtn) {
        copyMessageBtn.addEventListener("click", async () => {
            const formatted = getFormattedMessageText();
            if (!messageInput.value.trim()) {
                showToast("Please fill in some message content to copy.");
                return;
            }

            try {
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    await navigator.clipboard.writeText(formatted);
                } else {
                    fallbackCopy(formatted);
                }
                showToast("Formatted message copied to clipboard!");
                if (formStatus) {
                    formStatus.className = "form-status is-active form-status--success";
                    formStatus.innerHTML = `<strong>Message copied to clipboard!</strong> You can now paste it directly into your preferred email app.`;
                }
            } catch (err) {
                console.error("Clipboard copy failed:", err);
                showToast("Could not copy message automatically.");
            }
        });
    }
});
