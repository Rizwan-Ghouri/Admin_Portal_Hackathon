// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD3AMi3u5Qwv11z7tlUP6qcs9wZiMw2I3A",
    authDomain: "task-project-c94df.firebaseapp.com",
    projectId: "task-project-c94df",
    storageBucket: "task-project-c94df.appspot.com",
    messagingSenderId: "417078899457",
    appId: "1:417078899457:web:c83c679a9e86c17eb0a100",
    measurementId: "G-D6E0R7VF31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();



// let loginBtn = document.getElementById("btnlog")
// let inpSelect = document.getElementById("inputselect")
let inpEmail = document.getElementById("inpEmail")
let inpPass = document.getElementById("inpPass")
window.btnlog = () => {
    let loginData = {
        inpEmail: inpEmail.value,
        inpPass: inpPass.value
    }
    let checkType = []
    signInWithEmailAndPassword(auth, loginData.inpEmail, loginData.inpPass)
        .then(async (res) => {
            let id = res.user.uid
            // console.log(id);
            // ********************************//
            // get stduser
            const logRefrence = doc(db, "Student", id)
            const logSnap = await getDoc(logRefrence);
            // ********************************//
            // get exists stduser
            if (logSnap.exists()){
                console.log("Document data:", logSnap.data());
                checkType.push({ ...logSnap.data() })
                // ********************************//
                // get typecheck stduser
                checkType.forEach((gettype) => {
                    if (localStorage.getItem("input") == gettype.selectType) {
                        // localStorage.setItem("typeName", `${gettype.selectType}`)
                        let type = gettype.selectType
                        Swal.fire({
                            title: "Good job!",
                            text: `WellCome ${type}`,
                            icon: "success"
                        });
                        setTimeout(() => {
                            location.replace("dash.html")
                        }, 2000);
                    } 
                    else {
                        let type = localStorage.getItem("input")
                        Swal.fire({
                            title: "Error!",
                            text: `type not exists 0nly(${type})`,
                            icon: "error"
                          });
                    }
                    })
            }

        }).catch((err) => {
            let errCode = err.message
            Swal.fire({
                title: "Error!",
                text: `User not exists ${err}`,
                icon: "error"
              });
            // console.log(err);
        })
}