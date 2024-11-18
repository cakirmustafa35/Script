document.getElementById("registrationForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let phone = document.getElementById("phone").value;

  // Hata mesajları için boşluk
  let usernameError = "";
  let emailError = "";
  let passwordError = "";
  let phoneError = "";

  // Kullanıcı adı doğrulama 
  if (username === "") {
    usernameError = "Kullanıcı adı boş bırakılamaz.";
  }

  // Email doğrulama 
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    emailError = "Geçerli bir email adresi girin.";
  }

  // Şifre doğrulama 
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (!password.match(passwordPattern)) {
    passwordError = "Şifre en az 8 karakter, bir büyük harf, bir küçük harf ve bir rakam içermelidir.";
  }

  // Telefon numarası doğrulama 
  const phonePattern = /^\d{10}$/;
  if (!phone.match(phonePattern)) {
    phoneError = "Geçerli bir telefon numarası girin (10 haneli).";
  }

  // Hata mesajlarını gösterme
  document.getElementById("usernameError").innerText = usernameError;
  document.getElementById("emailError").innerText = emailError;
  document.getElementById("passwordError").innerText = passwordError;
  document.getElementById("phoneError").innerText = phoneError;


  if (usernameError === "" && emailError === "" && passwordError === "" && phoneError === "") {
    alert("Başarıyla kayıt oldunuz!");
  }
});
