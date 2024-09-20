let inputselect = document.getElementById("inputselect")
let Admin = document.getElementById("Admin")
let Student = document.getElementById("Student")
let btnEnter = document.getElementById("btnEnter")
// let typearr = []

window.btnenter = ()=>{
        Admin.disabled = true
        Student.disabled = true
    let type = {
        typeid : inputselect.value
    }
    // typearr.push(type)
    let gettype = type.typeid
    localStorage.setItem("input",`${gettype}`)
    if (gettype == "Admin") {
        // location.replace("dash.html")
        Admin.disabled = false
        Student.style.backgroundColor = "#f1bb47"
        inputselect.style.display = "none"
        btnEnter.style.display = "none"
        Admin.addEventListener("click",()=>{
            location.href = "login.html"
        })
    } else if (gettype == "Student") {
        Student.disabled = false
        Admin.style.backgroundColor = "#f1bb47"
        inputselect.style.display = "none"
        btnEnter.style.display = "none"
        Student.addEventListener("click",()=>{
            location.href ="login.html"
        })
    }    
}