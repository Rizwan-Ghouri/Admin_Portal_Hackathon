// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
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
const db = getFirestore();


// let tblbody = document.getElementById("tblbody")
// const rendertbl = () => {
//     tblbody.innerHTML = ""
//     resultArr.forEach((data) => {
//         tblbody.innerHTML += `
//     //     <tr>
//     //         <td id="td1">${data.stdId}</td>
//     //         <td>${data.stdCourse}</td>
//     //         <td>${data.stdTotalmarks}</td>
//     //         <td>${data.stdMarks}</td>
//     //         <td>${data.stdGrade}</td>
//     //     </tr>
//     // `
//     })     
// }


const getResult = async () => {
    const getRefrence = collection(db, "Result")
    const tbldata = await getDocs(getRefrence)
    tbldata.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        resultArr.push({ ...doc.data(), id: doc.id })
        // console.log(resultArr);
    });
    // rendertbl()
}
getResult()


let resultArr = []
let heading = document.getElementById("heading")
let inptext = document.getElementById("inptext")

// show total student
inptext.addEventListener("click",function(){
    resultArr.filter(()=>{
        let length = resultArr.length
        heading.innerText = `Total Id : ${length}`
    })
})

// Dan in cnic input to filter the result 
inptext.addEventListener("keypress",function(){
    let filter = resultArr.filter(x=>{
        if (inptext.value == x.stdCNIC) {
            tblbody.innerHTML = ""
            tblbody.innerHTML += `
            <tr>
            <td>${x.stdId}</td>
            <td>${x.stdName}</td>
            <td>${x.stdCNIC}</td>
            <td>${x.stdCourse}</td>
            <td>${x.stdTotalmarks}</td>
            <td>${x.stdMarks}</td>
            <td>${x.stdGrade}</td>
            </tr>
            `
        }
    })
})

let home = document.getElementById("home")
// go back
home.addEventListener("click", () => {
    location.replace("dash.html")
})
