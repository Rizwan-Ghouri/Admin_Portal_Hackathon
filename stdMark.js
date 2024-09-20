 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
 import { getFirestore,collection,addDoc,getDocs } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
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

 let stdId = document.getElementById("stdId")
 let stdCourse = document.getElementById("stdCourse")
//  let stdTotalmarks = document.getElementById("stdTotalmarks")
 let stdMarks = document.getElementById("stdMarks")
//  let stdGrade = document.getElementById("stdGrade")

 window.submit = () => {
    let stdResult = {
        stdId : stdId.value,
        stdCourse : stdCourse.value,
        stdTotalmarks : 100,
        stdMarks : stdMarks.value,
        stdGrade : stdGrade.value
    }    
    // console.log(stdResult);
    if (stdId.value != ""&&stdCourse.value != ""&&stdMarks.value != ""&&stdGrade.value) {        
        let refrence = collection(db,"Result")
        addDoc(refrence,stdResult)
        .then((dbres)=>{
            // console.log(dbres);
            Swal.fire({
                title: "Good job!",
                text: "Result Successfully",
                icon: "success"
              });
              setTimeout(()=>{
                location.reload()
              },2000)
        }).catch((dberr)=>{
            Swal.fire({
                title: "Error!",
                text: dberr,
                icon: "error"
              });
            // console.log(dberr);
        })
        stdId.value = ""
        stdCourse.value = ""
        stdMarks.value = ""
        stdGrade.value = ""
    } else {
        Swal.fire({
            title: "Error!",
            text: "Pleace input filled",
            icon: "error"
          });
    }
 }

let resultArr = []
let tblbody = document.getElementById("tblbody")

const rendertbl = ()=>{
    tblbody.innerHTML = ""
    resultArr.forEach((data)=>{
        tblbody.innerHTML += `
          <tr>
                <td>${data.stdId}</td>
                <td>${data.stdCourse}</td>
                <td>${data.stdTotalmarks}</td>
                <td>${data.stdMarks}</td>
                <td>${data.stdGrade}</td>
                <td><button class="btnEdit" id="btnEdit">Edit</button></td>
                <td><button class="btnDel" id="btnDel" >Delete</button></td>
              </tr>
        `
    })
}


const getResult = async () => {
    const getRefrence = collection(db,"Result")
    const tbldata = await getDocs(getRefrence)
    tbldata.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        resultArr.push({...doc.data(),id : doc.id})
        // console.log(resultArr);        
      }); 
      rendertbl()
}
getResult()


let signOut = document.getElementById("signOut")
let stdHome = document.getElementById("stdHome")

stdHome.addEventListener("click",()=>{
    location.replace("dash.html")
})
signOut.addEventListener("click",()=>{
    location.replace("login.html")
})