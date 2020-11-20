var username = document.getElementById('name');
var password=document.getElementById('password');
var submit_button=document.getElementById('submit_button');
var table=document.getElementById('table');

submit_button.addEventListener('click',function(e){
    e.preventDefault()
    var newrow=table.insertRow(1)
    var newcell=newrow.insertCell(0)
    var newcell1=newrow.insertCell(1)
    newcell.innerHTML= username.value
    newcell1.innerHTML=password.value
    localStorage.setItem('name', `${username.value}, ${password.value}`)


})

console.log(localStorage.getItem('name'))
