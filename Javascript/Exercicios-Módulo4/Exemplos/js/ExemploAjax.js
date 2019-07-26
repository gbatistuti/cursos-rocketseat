let xhr = new XMLHttpRequest();
xhr.open("GET", "http://api.github.com/users/gbatistuti");
xhr.send(null);

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText));
    }
}

