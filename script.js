/* =========================================
   SAVORA — JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================
       1. MOBILE NAVBAR
    ===================================== */

    const navLinks = document.querySelectorAll(".navbar .nav-link");
    const navbarCollapse = document.querySelector("#navbarContent");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (
                navbarCollapse &&
                navbarCollapse.classList.contains("show")
            ) {
                const bsCollapse =
                    bootstrap.Collapse.getInstance(navbarCollapse);

                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }

        });

    });


    /* =====================================
       3. RESERVATION FORM VALIDATION
    ===================================== */

    const reservationForm =
        document.getElementById("reservationForm");

    const formMessage =
        document.getElementById("formMessage");


    reservationForm.addEventListener("submit", function (event) {

        event.preventDefault();


        /* Get form fields */

        const name =
            document.getElementById("name");

        const email =
            document.getElementById("email");

        const date =
            document.getElementById("date");

        const guests =
            document.getElementById("guests");

        const message =
            document.getElementById("message");


        /* Get error elements */

        const nameError =
            name.parentElement.querySelector(".form-error");

        const emailError =
            email.parentElement.querySelector(".form-error");

        const dateError =
            date.parentElement.querySelector(".form-error");

        const guestsError =
            guests.parentElement.querySelector(".form-error");

        const messageError =
            message.parentElement.querySelector(".form-error");


        /* Clear previous errors */

        nameError.textContent = "";
        emailError.textContent = "";
        dateError.textContent = "";
        guestsError.textContent = "";
        messageError.textContent = "";

        formMessage.style.display = "none";
        formMessage.textContent = "";


        let isValid = true;


        /* =================================
           NAME VALIDATION
        ================================= */

        if (name.value.trim().length < 2) {

            nameError.textContent =
                "Please enter your name.";

            isValid = false;

        }


        /* =================================
           EMAIL VALIDATION
        ================================= */

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email.value.trim())) {

            emailError.textContent =
                "Please enter a valid email address.";

            isValid = false;

        }


        /* =================================
           DATE VALIDATION
        ================================= */

        if (date.value === "") {

            dateError.textContent =
                "Please select a preferred date.";

            isValid = false;

        }


        /* =================================
           GUEST VALIDATION
        ================================= */

        if (guests.value === "") {

            guestsError.textContent =
                "Please select the number of guests.";

            isValid = false;

        }


        /* =================================
           MESSAGE VALIDATION
        ================================= */

        if (message.value.trim().length < 10) {

            messageError.textContent =
                "Please enter at least 10 characters.";

            isValid = false;

        }


        /* =================================
           SUCCESS
        ================================= */

        if (isValid) {

            formMessage.textContent =
                "Reservation request submitted successfully! We will contact you shortly.";

            formMessage.style.display = "block";

            reservationForm.reset();

        }

    });


    /* =====================================
       4. SET MINIMUM RESERVATION DATE
    ===================================== */

    const dateInput =
        document.getElementById("date");

    const today =
        new Date().toISOString().split("T")[0];

    dateInput.setAttribute("min", today);


    /* =====================================
       5. NAVBAR SHADOW ON SCROLL
    ===================================== */

    const navbar =
        document.getElementById("mainNav");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {

            navbar.style.boxShadow =
                "0 8px 25px rgba(0, 0, 0, 0.18)";

        } else {

            navbar.style.boxShadow = "none";

        }

    });

});