   // index id get
   let stdAdd = document.getElementById("stdAdd")
   let stdMarks = document.getElementById("stdMarks")
   let stdpro = document.getElementById("stdpro")
   let stdResult = document.getElementById("stdResult")
   let logIn = document.getElementById("logIn")
   let signOut = document.getElementById("signOut")
   
   let selectType = localStorage.getItem("input")
   let heading = document.getElementById("heading")
   let headName = heading.innerText = selectType;
   
   function hide() {
       if(heading.innerText == "Student") {
           stdAdd.style.display = "none"
           stdMarks.style.display = "none"
       }
       if (heading.innerText == "Admin") {
            stdResult.style.display = "none"
       }
   }
   hide();
   stdAdd.addEventListener("click",()=>{
       location.replace("stdadd.html")
   })
   stdMarks.addEventListener("click",()=>{
       location.replace("stdMark.html")
   })
   stdpro.addEventListener("click",()=>{
       location.replace("profile.html")
   })
   stdResult.addEventListener("click",()=>{
       location.replace("result.html")
   })
   signOut.addEventListener("click",()=>{
       location.replace("index.html")
   })
   