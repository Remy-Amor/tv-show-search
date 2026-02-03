const formSubmit = document.querySelector("#submit");
const thumbnailElement = document.querySelector("#thumbnail");

async function searchTVImage(query) {
    try {
        let res = await axios.get(`https://api.tvmaze.com/singlesearch/shows?q=${query}`);
        return res.data.image.medium;
    } catch(e) {
        console.log(e)
    }
}

formSubmit.addEventListener("click", async function(event) {
    event.preventDefault();
    let query = document.querySelector("#search").value;
    let image = await searchTVImage(query);
    console.log(image);
    thumbnailElement.src = image;
})