<script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js"></script>
<script>
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDhIo2icBXVADCEgDB6c_ISag8M92fYVMU",
    authDomain: "rbox-info.firebaseapp.com",
    projectId: "rbox-info",
    storageBucket: "rbox-info.firebasestorage.app",
    messagingSenderId: "750702510",
    appId: "1:750702510:web:2469f35269bfa64d45c23f",
    measurementId: "G-QN4J8XYN6Z"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevents form from reloading the page

    // Get values from input fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
      // Add the user data to Firestore
      await db.collection('users').add({
        username: username,
        password: password
      });

      alert('User data saved!');
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Error saving user data.');
    }
  });
</script>
