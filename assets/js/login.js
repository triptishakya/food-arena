document.getElementById('userLoginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Static email and password check
    if (email === 'test@gmail.com' && password === 'test') {
     // alert('Login successful!');
      toastr.success('Login successful!');
      window.location.href = window.location.origin;

      // Redirect to another page or do something else on successful login
    } else {
     // alert('Invalid email or password. Please try again.');
      toastr.error('Invalid email or password. Please try again.');
      window.location.href = window.location.origin;
    }
  });