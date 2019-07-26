axios.get("http://api.github.com/users/gbatistuti")
    .then(function(response){
        console.log(response.data.avatar_url);
    })
    .catch(function(error){
        console.warn(error);
    });
