< !--The core Firebase JS SDK is always required and must be listed first-- >
    <script src="https://www.gstatic.com/firebasejs/7.4.0/firebase-app.js"></script>

    <!--TODO: Add SDKs for Firebase products that you want to use
https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.4.0/firebase-analytics.js"></script>

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCMQPpyq_91U3MjHaYBFysCGC6KkDwWcsU",
    authDomain: "csp-gis-portfolio.firebaseapp.com",
    databaseURL: "https://csp-gis-portfolio.firebaseio.com",
    projectId: "csp-gis-portfolio",
    storageBucket: "csp-gis-portfolio.appspot.com",
    messagingSenderId: "375082006789",
    appId: "1:375082006789:web:33a0edfcc9fb1903229f6c",
    measurementId: "G-09QMSQ9S7Z"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();