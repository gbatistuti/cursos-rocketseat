let inputElement = document.querySelector(".user");
let listElement = document.querySelector("#ul");

function listRepositories() {
    let user = inputElement.value;

    if (!user) return;

    axios.get("http://api.github.com/users/" + user + "/repos")
        .then((response) => {
            renderRepositories(response.data)
        })

}

function renderRepositories(repositories) {

    for (repo of repositories) {
        let liElement = document.createElement('li');
        let textElement = document.createTextNode(repo.name);

        liElement.appendChild(textElement);
        listElement.appendChild(liElement);
    }
}

