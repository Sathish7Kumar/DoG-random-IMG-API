function GET(){
    var dogUri = "https://dog.ceo/api/breeds/image/random";
    var img = document.getElementById("dog-img");
    fetch (dogUri)
    .then((resp) => resp.json())
    .then((data) =>{
        img.src = data.message;
    })
}