
const result = document.getElementById('result');
// const endPointURL = "https://newsapi.org/v2/everything?q=Apple&from=2022-07-28&sortBy=popularity&apiKey=dfd3382af46d4b4fbdfd7bd0b819994d"
const searchInput = document.getElementById('search-terms');
const searchBtn = document.getElementById('search-button');
const parameters = "q=&";
const apiKey = "&apiKey=dfd3382af46d4b4fbdfd7bd0b819994d"
const endPointURL = "https://newsapi.org/v2/everything?"



let showArticles = (article) => {
    result.innerHTML = "";
    // this function renders the image on the page
    let renderArticle = (item, index) => {
        //  
        result.innerHTML += `
        <div class="news-article-box">
        <img src="${item.urlToImage}">
        <h1 class="username">${item.title}</h1> 
        <h1 class="author">Author - ${item.author}</h1> 
        <h1 class="description">${item.description}</h1> 
        </div>
        `
    }
    // this functions loops through our images and runs renderImage for each one
    article.forEach(renderArticle);
}


// $.ajax({
//     type: "GET",
//     url: endPointURL,
//     success: function (data) {
//         console.log(data)
//         showArticles(data.articles);
//         // console.log(data.articles[0].author)
//     },
//     error: function (error) {
//         console.log("There is a problem");
//         console.log(error);
//     }

// });

// TRYING TO GET SEARCH WORKING

searchBtn.onclick = () => {
    searchString = searchInput.value;
    $.ajax({
        type: "GET",
        url: endPointURL + "q=&" + apiKey + searchString,
        success: function (data) {
            console.log(data)
            showArticles(data.articles);
        },
        error: function (error) {
            console.log("There is a problem");
            console.log(error);
        }

    });
}