//your JS code here. If required.
const form = document.getElementById('loginForm');
const username = document.getElementById('username');
const password = document.getElementById('password');
const checkbox = document.getElementById('checkbox');
const submit = document.getElementById('submit');
const existingBtn = document.getElementById('existing');

window.onload = function(){
	const saveUser = localStorage.getItem("username");
	const savePass = localStorage.getItem("password");

	if(saveUser && savePass){
		existingBtn.style.display = 'block';
	}
};
form.addEventListener('submit', (e)=>{
	e.preventDefault();

	const user = username.value.trim();
	const pass = password.value.trim();

	if(user && pass){
		alert("Logged in as " + user);

		if(checkbox.checked){
			localStorage.setItem("username", user);
			localStorage.setItem("password", pass);
		}else{
			localStorage.removeitem("username");
			localStorage.removeItem("password");
		}
		if(localStorage.getItem("username")){
			existingBtn.style.display = 'block';
		}else{
			existingBtn.style.display = 'none';
		}
	}
});
existingBtn.addEventListener('click', ()=>{
	const saveUser = localStorage.getitem("username");
	if(saveUser){
		alert("Logged in as " + saveUser);
	}
});







