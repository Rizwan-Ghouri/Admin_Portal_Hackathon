 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
 import { getAuth,createUserWithEmailAndPassword,deleteUser} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
 import { getFirestore,doc, setDoc,collection, getDocs,deleteDoc} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
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

 // stdadd get id
let stdFname = document.getElementById("stdFname")
let stdLname = document.getElementById("stdLname")
let stdEmail = document.getElementById("stdEmail")
let stdPass = document.getElementById("stdPass")
let stdCnic = document.getElementById("stdCnic")
let selectType = document.getElementById("stdselectType")

 // Submit stdadd 
window.btnSubmit = ()=>{
    let stdaddObj = {
        stdFname : stdFname.value,
        stdLname : stdLname.value,
        stdEmail : stdEmail.value,
        stdPass : stdPass.value,
        stdCnic : stdCnic.value,
        selectType : selectType.value
    }
    if (stdFname.value != ""&&stdLname.value != ""&&stdCnic.value != ""&&selectType.value) {        
        createUserWithEmailAndPassword(auth,stdaddObj.stdEmail,stdaddObj.stdPass)
        .then((res)=>{
             stdaddObj.id = res.user.uid;
            // console.log(stdaddObj.id);
            let refrence = doc(db,"Student",stdaddObj.id)
            setDoc(refrence,stdaddObj)
            .then((dbres)=>{
                // console.log(dbres);
                Swal.fire({
                    title: "Good job!",
                    text: dbres,
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
    
        }).catch((err)=>{
            Swal.fire({
                title: "Error!",
                text: err,
                icon: "error"
              });
            // console.log(err);
        })
        stdFname.value = ""
        stdLname.value = ""
        stdEmail.value = ""
        stdPass.value = ""
        stdCnic.value = ""
        selectType.value = ""
    } else {
        Swal.fire({
            title: "Error!",
            text: `Please input filled`,
            icon: "error"
          });
    }
}

let studentArr = []
let tblbody = document.getElementById("tblbody")

const rendertbl = () => {
    tblbody.innerHTML = ""
    studentArr.forEach((data)=>{
        tblbody.innerHTML += `
                <tr>
                        <td class="td1" id="td1">${data.id}</td>
                        <td id="td2">${data.stdFname}</td>
                        <td id="td3">${data.stdLname}</td>
                        <td id="td4">${data.stdEmail}</td>
                        <td id="td5">${data.stdCnic}</td>
                        <td id="td6">${data.selectType}</td>
                        <td><button class="btnEdit" id="btnEdit">Edit</button></td>
                        </tr>
                    `
           
            })      
        }

const getData = async () => {
    const getRefrence = collection(db,"Student")
    const td = await getDocs(getRefrence)
    td.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        studentArr.push({...doc.data(),id : doc.id})
        // console.log(studentArr);
    });
    rendertbl()
}
getData()

// header
let signOut = document.getElementById("signOut")
let stdHome = document.getElementById("stdHome")

stdHome.addEventListener("click",()=>{
    location.replace("dash.html")
})
signOut.addEventListener("click",()=>{
    location.replace("login.html")
})