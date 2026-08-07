/* ===========================
   CONTACT FORM
=========================== */
emailjs.init("CagesBp9twa2PORNq");

const form_alert = document.querySelector(".form-alert");
const btn = document.querySelector("button#submit");

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // alert("Thank you! Your message has been received.");

    // if (window.history.replaceState) {
    //   window.history.replaceState(null, null, window.location.href);
    // }

    btn.innerHTML = "Sending...";

    const serviceID = "default_service";
    const templateID = "template_u3hop5m";

    form_alert.style.display = "block";
    console.log(this);
    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn.innerHTML = "Send Message";
        form_alert.querySelector("p").innerHTML = "Sent!";
      },
      (err) => {
        btn.innerHTML = "Send Message";
        form_alert.querySelector("p").innerHTML = JSON.stringify(err);
      },
    );

    this.reset();

    setTimeout(() => {
      form_alert.style.display = "none";
    }, 3000);
  });

// function isValidEmail(email) {
//   const pattern =
//     /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//   return pattern.test(email);
// }
