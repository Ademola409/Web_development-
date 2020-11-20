var username = document.getElementById('user_name')
var password = document.getElementById('password')
var phone = document.getElementById('phone')
var the_form = document.getElementById('the_form')

the_form.addEventListener(
    'submit', createuser);
function createuser(e){
    localStorage.setItem('register',username.value)
    if (username.value==""||undefined){
        alert('you still need to input your name');
    }
    else{
        e.preventDefault()
        console.log(username.value)
        location.href="dashboard.html"
    }
}
const local_item=(localStorage.getItem('register'))

function showcontent(){
    const showinfo=document.getElementById('show_info')
    showinfo=local_item
}
