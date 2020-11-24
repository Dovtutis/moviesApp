
const movies = [
    {
        image: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
        title: "Parasite",
        year: "2019",
        rating: "8.6",
        description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        comments: [],
        id: 0
    },
    {
        image: "https://m.media-amazon.com/images/M/MV5BM2EwMmRhMmUtMzBmMS00ZDQ3LTg4OGEtNjlkODk3ZTMxMmJlXkEyXkFqcGdeQXVyMjM5ODk1NDU@._V1_UX182_CR0,0,182,268_AL_.jpg",
        title: "The Queen's Gambit",
        year: "2020",
        rating: "8.8",
        description: "Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA. But child stardom comes at a price.",
        comments: [{
            name: "John",
            comment: "So boring, i fall asleep to it and hibernated through whole winter"
        }],
        id: 1
    },
    {
        image: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
        title: "Joker",
        year: "2019",
        rating: "8.5",
        description: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
        comments: [
            {
                name: "Marry",
                comment: "Put on a happy face :)"
            },
            {
                name: "Batman",
                comment: "My parents was not impressed with this"
            },
        ],
        id: 2
    },
    {
        image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg",
        title: "The Godfather",
        year: "1972",
        rating: "9.2",
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        comments: [],
        id: 3
    },
    {
        image: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR1,0,182,268_AL_.jpg",
        title: "Pulp Fiction",
        year: "1994",
        rating: "8.9",
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        comments: [],
        id: 4
    },
    {
        image: "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
        title: "The Shining",
        year: "1980",
        rating: "8.4",
        description: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
        comments: [{
            name: "Jane",
            comment: "Soundtrack is epic"
        }],
        id: 5
    },
]
const mainContainer = document.getElementById('mainContainer')
const moviePage = document.getElementById('moviePage')
const backButton = document.getElementById('backButton').onclick = backToList
let movieContainer = document.getElementById('movieContainer')
let commentsContainer
let selectedItem = []
let starRating = ""

function backToList () {
    moviePage.style.display = "none"
    mainContainer.style.display = "flex"
}

createMovies ()

function createMovies () {
    movies.map(item =>{

        starRating = ""
        createStarRating (Number(Math.round(item.rating)))

        mainContainer.innerHTML += `
        <div class="movieCard display_flex flex-column justify-content-center align-items-center">
            <div class="">
                <img src="${item.image}">
            </div>
            <div class="textAlignCenter fontSize30 margin5 fontBold">
                ${item.title}
            </div>
            <div class="textAlignCenter fontSize20 margin5">
                ${item.year}
            </div>
            <div class="textAlignCenter fontSize20 margin5">
                ${starRating}
            </div>
            <div class="margin5">
                <button id="aboutButton" onclick="openMovie(event)">About movie</button>
            </div>
        </div>
        `
    })
}

function createStarRating (num) {
    console.log(num)
    for (let i = 1; i <= num; i++){
        starRating +=
            `
        <i class="fas fa-star"></i>
        `
    }

    for (let i = 0; i < (10-num); i++){
        starRating +=
            `
            <i class="far fa-star"></i>
            `
    }
}

function openMovie (event) {

    selectedItem = []
    selectedItem = movies.filter(el => el.title === event.path[2].children[1].innerText)
    console.log(selectedItem)

    mainContainer.style.display = "none"
    moviePage.style.display = "block"
    movieContainer.style.display = "block"

    starRating = ""
    createStarRating (Number(Math.round(selectedItem[0].rating)))

    movieContainer.innerHTML =
        `
        <div class="display_flex spaceAround">
            <div>
                <img src="${selectedItem[0].image}">
            </div>
            <div class="display_flex flex-column justify-content-center align-items-center" id="infoContainer">
                <div class="textAlignCenter fontSize30 margin5 fontBold">
                    ${selectedItem[0].title}
                </div>
                <div class="textAlignCenter fontSize20 margin5">
                    ${selectedItem[0].year}
                </div>
                <div class="textAlignCenter fontSize20 margin5">
                    ${starRating}
                </div>
                <div class="textAlignCenter fontSize20 margin5">
                    ${selectedItem[0].description}
                </div>
            </div>
        </div>
        <div class="textAlignCenter margin20 fontSize30">
            Comments:
        </div>
        <div id="commentsContainer">
        
        </div>
        `
        commentsContainer = document.getElementById('commentsContainer')

    addComment ()

        movieContainer.innerHTML +=
        `
        <div class="display_flex justify-content-center">
            <div>
                <textarea name="comment" rows="10" cols="30" placeholder="Write your comment..." class="inputCommentBox"></textarea>
                <br><br>
                <input type="submit" id="aboutButton" onclick="saveComment(event)">
            </div>
        </div>
        `
}

function addComment () {
    console.log("labas")
    commentsContainer = document.getElementById('commentsContainer')
    commentsContainer.innerHTML = ""
    for (let i = 0; i < selectedItem[0].comments.length; i++) {
        console.log("testas")
        commentsContainer.innerHTML +=
            `
         <div class="display_flex justify-content-center comment textAlignCenter margin10 commentBox">
            <div>
                ${selectedItem[0].comments[i].name}: ${selectedItem[0].comments[i].comment} 
            </div>
        </div>
            `
    }
}

function saveComment (event) {
    console.log(event)

    let id = selectedItem[0].id
    console.log(id)
    console.log(event.path[1].children[0].value)

    let comment = {
        name: "User",
        comment: event.path[1].children[0].value
    }
    movies[id].comments.push(comment)

    console.log(movies)

    selectedItem = []
    selectedItem = movies.filter(el => el.title === event.path[3].children[0].children[1].children[0].innerText)

    console.log(selectedItem)

    addComment ()
}

