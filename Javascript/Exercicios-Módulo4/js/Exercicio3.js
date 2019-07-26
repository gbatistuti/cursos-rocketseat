let inputElement = document.querySelector(".user");
let listElement = document.querySelector("#ul");


function renderRepositories(repositories) {
    listElement.innerHTML = "";

    for (repo of repositories) {
        let liElement = document.createElement('li');
        let textElement = document.createTextNode(repo.name);

        liElement.appendChild(textElement);
        listElement.appendChild(liElement);
    }
}

function renderLoading() {
    listElement.innerHTML = "";

    let textElement = document.createTextNode("Carregando...");
    let loadingElement = document.createElement("li");

    loadingElement.appendChild(textElement);
    listElement.appendChild(loadingElement);
}

function renderError() {
    listElement.innerHTML = "";

    let textElement = document.createTextNode("Usuário não encontrado!");
    let errorElement = document.createElement("li");

    errorElement.style.color = "#F00";

    errorElement.appendChild(textElement);
    listElement.appendChild(errorElement);
}

function listRepositories() {
    let user = inputElement.value;

    if (!user) return;

    renderLoading();

    axios.get("http://api.github.com/users/" + user + "/repos")
        .then((response) => {
            renderRepositories(response.data)
        })
        .catch(() => {
            renderError();
        })

}




