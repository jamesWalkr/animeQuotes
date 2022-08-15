const apiData = {
    url: "https://animechan.vercel.app/api/available/anime" 
}

const{url} = apiData

const apiUrl = `${url}`

//console.log(apiUrl)

fetch(apiUrl)
.then((data)=> (data.json()))
.then((anime)=> createAnimeList(anime))


const createAnimeList = (data) => {
    //console.log(data)
    const animeList = `
        <select onchange="loadByAnime(this.value)">
           <option>Choose an anime</option>
           ${Object.values(data).map(function(anime){
            return `<option>${anime}</option>`
           })}
       </select>
       `

       const animeDiv = document.querySelector(".anime")
       animeDiv.innerHTML = animeList
 }

 async function loadByAnime(anime){
    if(anime != "Choose an anime"){
        const response = await fetch(`https://animechan.vercel.app/api/quotes/anime?title=${anime}`)
        const data = await response.json()
        //console.log(data)
        createCharacter(data[0].character)
        createQuotes(data[0].quote)
        createCharacter(data[1].character)
        createQuotes(data[1].quote)
        createCharacter(data[2].character)
        createQuotes(data[2].quote)
        createCharacter(data[3].character)
        createQuotes(data[3].quote)
        createCharacter(data[4].character)
        createQuotes(data[4].quote)
        createCharacter(data[5].character)
        createQuotes(data[5].quote)
        createCharacter(data[6].character)
        createQuotes(data[6].quote)
        createCharacter(data[7].character)
        createQuotes(data[7].quote)
        createCharacter(data[8].character)
        createQuotes(data[8].quote)
        createCharacter(data[9].character)
        createQuotes(data[9].quote)
        
    }
 }

 function createCharacter(character,quotes){
    //console.log(character)
    document.getElementById("characters").innerHTML=`<div class="characters"><p>Character: ${character}</p></div>`
    document.getElementById("allquotes").innerHTML=`<div class ="quotes"><span>Quotes: ${quotes}</span>`
    
 }

 function createQuotes(quotes){
    //console.log(quotes)
    document.getElementById("allquotes").innerHTML=`<div class ="quotes"><span>Quotes: ${quotes}</span>`
 }

 