//toggle
let button1=document.querySelector(".active");
let data=document.querySelector(".data");

button1.addEventListener("click", ()=>{
   data.classList.toggle("show");
});

//add
let name=document.querySelector(".name");
let email=document.querySelector(".email");
let age=document.querySelector(".age");
let profession=document.querySelector(".profession");
let btn=document.querySelector(".btn");
let table=document.querySelector("table")

let text=document.querySelector(".text");

btn.addEventListener("click", ()=> {
  let namevalue=name.value;
  let emailvalue=email.value;
  let agevalue=age.value;
  let prfvalue=profession.value;

  let result=`
  <tr>
  <td>${namevalue}</td>
  <td>${emailvalue}</td>
  <td>${agevalue}</td>
  <td>${prfvalue}</td>
</tr>


  `;
  table.innerHTML+=result;
  name.value="";
  email.value="";
  age.value="";
  profession.value="";
  
});

email.onblur=function(){
if(!email.value.includes('@') || !email.value.includes('.')){
     email.classList.add("invalid")
     text.innerHTML="password is invalid"
  }
  else{
    email.classList.remove("invalid");
    text.innerHTML="";
  }
}

