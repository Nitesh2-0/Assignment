document.addEventListener('DOMContentLoaded', (event) => {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navLinks.forEach(nav => nav.classList.remove('active'));
      this.classList.add('active');
    });
  });

  const contactUsBtn = document.querySelector('#btn');
  const contactForm = document.querySelector('.form-container');
  let isVisible = false;
  contactUsBtn.addEventListener('click', () => {
    if (isVisible) {
      contactForm.style.display = "none";
      isVisible = false;
    } else {
      contactForm.style.display = "block";
      isVisible = true;
    }
  });
});


$("#ajaxForm").submit(function (e) {
  e.preventDefault();
  var action = $(this).attr("action");
  $.ajax({
    type: "POST",
    url: action,
    crossDomain: true,
    data: new FormData(this),
    dataType: "json",
    processData: false,
    contentType: false,
    headers: {
      "Accept": "application/json"
    }
  }).done(function () {
    alert('The form was submitted successfully.')
    window.location.reload();
    
  }).fail(function () {
    alert('Smothing went wrong')
  });
});
