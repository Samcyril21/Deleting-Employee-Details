let employees= [
    {
      name : 'Abhishek',
      organization : 'Pure Storage',
      empid : '11244',
      phoneNumber : 7250819791,
      address:'Bangalore'
    },
    {
      name : 'Jaideep',
      organization : 'Dell EMC',
      empid : '98673',
      phoneNumber : 987634512,
      address:'Jaipur'
    },
    {
      name : 'Sumit',
      organization : 'Inautix',
      empid : '87312',
      phoneNumber : 976436721,
      address:'Pune'
    },
    {
      name : 'Somreh',
      organization : 'Nike',
      empid : '87453',
      phoneNumber : 7659012436,
      address:'Bhubaneshwar'
    },
    {
      name : 'Lily',
      organization : 'Accenture',
      empid : '00987',
      phoneNumber : 6098345689,
      address:'Inodre'
    },
    {
      name : 'Roman',
      organization : 'Unacademy',
      empid : '76432',
      phoneNumber : 5643812564,
      address:'Bhatinda'
    },
    {
      name : 'Ashu',
      organization : 'Amazon',
      empid : '72332',
      phoneNumber : 7865098123,
      address:'Patiala'
    },
    {
      name : 'Ankit',
      organization : 'Microsoft',
      empid : '77632',
      phoneNumber : 9873245671,
      address:'Kolkata'
    }
  ]
  function showempfunction(){
   let container=document.getElementById('container');

   let div2=``;
   employees.forEach((ele,index)=>{
    div2=div2+`<div id=${index}>
    <p>Name : ${ele['name']}</p>
    <p>Organization : ${ele['organization']}<p/>
    <p>Empid : ${ele['empid']}</p>
    <p>Phone number : ${ele['phoneNumber']}</p>
    <p>Address : ${ele['address']}</p>
    <button id="conformation" onclick="conformation()">Delete</button> 
    </div>
    `
   })
   container.innerHTML=div2;
  }


  function conformation(x){
     let condiv=`<div id="conformationpop"><p>Do You Want To  Delete?</p><button onclick="deleting(${x})">Delete It!</button><button id="cancelbtn" onclick="cancellation()">Cancel It!</button> </div>`
     container.innerHTML=condiv;
  }

function deleting(empid){
    let divindex=employees.findIndex((element)=>element['Empid']==empid);
    employees.splice(divindex,1);
    let div3=`<div class="success"><p>Successfully Deleted!</p><br><button onclick="showempfunction()">Done</button></div>`
    showempfunction();
    container.innerHTML=div3;
}

function cancellation(){
  let div4=`<div id= id="cancelled"><p>Cancelled!</p><br><button onclick="showempfunction()">done</button>`
    showempfunction();
    container.innerHTML=div4;
}