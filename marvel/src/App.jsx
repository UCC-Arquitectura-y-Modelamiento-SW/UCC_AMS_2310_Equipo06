import './App.css'

function App() {

  async function feedData(){
    try{
        let response = await fetch("https://gateway.marvel.com/v1/public/stories?ts=1&apikey=0c4ac05ed6b12da442a0b192fa6574d2&hash=d95d6f1bbe2f4c62dffa961f92db080e")
        let resJson = await response.json();
        //console.log(resJson)
        let {data} = resJson;

        let cardList = document.querySelector("#list-cards")
        cardList.innerHTML = ""
        let resultsStories = [...data.results]
        console.log(data.results);
        console.log(resultsStories[0].comics.items[0].name,resultsStories[0].comics.items[0].resourceURI);
        //console.log(resultsStories[3].creators.items[0].name);
        resultsStories.forEach( (element,index)=>{
          
          let cardcontent = `<article class="cardresult">
                                      <h2>Comic: ${resultsStories[index].comics.items[0].name}</h2> 
                                      
                                      <div class="creatordetails">
                                        <span>Creador: </span>
                                        <span id="creatorname"> ${resultsStories[index].creators.items[0] ? resultsStories[index].creators.items[0].name :" Anonimo"  }</span>
                                      </div>
                                      <p class='cardtext'>
                                        ${resultsStories[index].title}
                                      
                                      </p>
                                      <div class="creatordetails">
                                        <span> Fuente "${resultsStories[index].comics.items[0].resourceURI}"></span>
                                      </div>
                                    </article>`;
          //console.log(element,index);
          cardList.insertAdjacentHTML("beforeend", cardcontent);
        })
        
        
        if(!response.ok){
            console.error(response)
        }
    }catch(error){
        console.error(error)
    }

}
feedData()

  return (
    <>
      <h1>Marvel Stories</h1>
      <div id="list-cards">
          {/* <article className="cardresult">
            <h2>esto es un titulo</h2>
            <div className="creatordetails">
              <span>Creador: </span>
              <span id="creatorname"> </span>
            </div>
            <p className='cardtext'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae consequuntur in rem quasi hic odit exercitationem velit, laborum placeat tempora molestiae. Voluptate quae voluptatibus optio ad minus nemo ducimus veniam.
            </p>
            <div className="creatordetails">
              <span>Comics</span> 
              <p className='cardtext'></p>
            </div>
          </article> */}
      </div>
    </>
  )
}

export default App
