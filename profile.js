 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
 import { getFirestore,doc, setDoc,collection, getDocs} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
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

// let stdFname = document.getElementById("stdFname")
// let stdLname = document.getElementById("stdLname")
// let stdCnic = document.getElementById("stdCnic")

// window.btnSubmit = ()=>{
 
// }
let studentArr = []
let tblbody = document.getElementById("tblbody")

const rendertbl = () => {
    tblbody.innerHTML = ""
    studentArr.forEach((data)=>{
        tblbody.innerHTML += `
         <tr>
                <td>${data.stdFname}</td>
                <td>${data.stdLname}</td>
                <td>${data.stdEmail}</td>
                <td>${data.stdCnic}</td>
                <td>${data.selectType}</td>
                <td><button class="btnEdit" id="btnEdit">Edit</button></td>
              </tr>
        `
    //    console.log(get);
       
        // let btnEdit = document.getElementById("btnEdit").addEventListener("click",()=>{
        //     studentArr.forEach(x => {
        //         console.log(x);
        //     });
        // })
    //     let flag = false
    //     let btnEdit = document.getElementById("btnEdit")
    //     btnEdit.addEventListener("click",()=>{
    //     for (let i = 0; i < studentArr.length; i++) {
    //         const element = studentArr[i];
                
    //             let stdFname = document.getElementById("stdFname")
    //             let stdLname = document.getElementById("stdLname")
    //             let stdCnic = document.getElementById("stdCnic")
    //         let update = {
    //             updFName : studentArr[i].stdFname,
    //             updLName : studentArr[i].stdLname,
    //             updCnic : studentArr[i].stdCnic
    //         }
    //         flag = true
    //         console.log(update);  
    //         break;
            
    //         // let updFName = update.updFName += stdFname.value
    //         // let updLName = update.updLName += stdLname.value
    //         // let updCNIC = update.updCnic    += stdCnic.value
    //         // console.log(updFName);
    //         // console.log(updLName);
    //         // console.log(updCNIC);    
    //     }
    // })
    // if (flag = false) {
    //     console.log("not exit");
        
    // }

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


let home = document.getElementById("stdHome")
home.addEventListener("click", () => {
    location.replace("dash.html")
})

let signOut = document.getElementById("signOut")
signOut.addEventListener("click", () => {
    location.replace("login.html")
})
