(() => {
  document.getElementById("current-year").innerText = new Date().getFullYear();
})();

function sendMail(event) {
  event.preventDefault();

  var name = document.querySelector('[name="name"]').value;
  var company = document.querySelector('[name="company"]').value;
  var phone = document.querySelector('[name="phone"]').value;
  var email = document.querySelector('[name="email"]').value;
  var city = document.querySelector('[name="city"]').value;
  var service = document.querySelector('[name="service"]').value;
  var message = document.querySelector('[name="message"]').value;

  var subject = "New Enquiry from Website";

  var body =
    "Name: " +
    name +
    "\n" +
    "Company: " +
    company +
    "\n" +
    "Phone: " +
    phone +
    "\n" +
    "Email: " +
    email +
    "\n" +
    "City: " +
    city +
    "\n" +
    "Service Required: " +
    service +
    "\n\n" +
    "Message:\n" +
    message;

  window.location.href = "mailto:anchal.engineering.works@gmail.com" + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
}