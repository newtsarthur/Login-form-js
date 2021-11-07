var pessoasCadrastadas = [
    {
        username: "Arthur",
        password: "sad",
        matri: "2858325"
    },
    {
        username: "Adriano",
        password: "jesus",
        matri: "2018799"
    },
    {
        username: "Gustavo",
        password: "onepiece",
        matri: "2633058"
    },
]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < pessoasCadrastadas.length; i++) {
		// check is user input matches username and password of a current index of the pessoasCadrastadas array
		if(username == pessoasCadrastadas[i].username && password == pessoasCadrastadas[i].password) {
			console.log(username + " Esta logado!!!")
			// stop the function if this is found to be true
            window.location.replace('../html/home.html')
			return
		}
	}
	console.log("Senha ou Usuario incorreto")
}

let dados = document.querySelector('.container');
for (let i = 0; i < pessoasCadrastadas.length; i++) {
    let Html = ` <div class="information" div-index="${i}">
        <div class="container">
            <h2 class="user">${pessoasCadrastadas[i].username}</h2>
        </div>
        <div class="container">
            <h2 class="matric">${pessoasCadrastadas[i].matri}</h2>
        </div>
    `;
    dados.insertAdjacentHTML("beforeend", Html);
}

{/* <tbody>
<tr>
    <td>
        ${pessoasCadrastadas[i].username}
    </td>
    <td>
        ${pessoasCadrastadas[i].matri}
    </td>
</tr>
</tbody> */}