//DOM node variables
const mainTable = document.getElementById('mainTable');
//Table buttons
const general = document.getElementById('general');
const tech = document.getElementById('tech');
const port = document.getElementById('portfolio');
//Table Section Ids
const generalEx = document.getElementById('generalEx');
const techEx = document.getElementById('techEx');
const portEx = document.getElementById('portEx');

//DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
    generalEvent();
    techEvent();
    portEvent();    
})

//General Table click event
const generalEvent = () => {
    general.addEventListener('click', (e) => {
      e.preventDefault();
  
      //DOM Function
      getGeneralEx();

      //Clear Tech for General Experience
      //getTechEx().textContent = "";
  
  }, {once : true});
}


//General DOM Functionality
function getGeneralEx(){
   //General experience
   const generalDiv = document.createElement('div')
   generalDiv.className = 'generalDiv'
   generalDiv.innerHTML = `
       <li class="list-group-item">Degree: Bachelor of Science in Public Relations and Digital Media</li>
       <li class="list-group-item">Hobbies: Reading, video games and watching any type of superhero or supernatural show</li>
       <li class="list-group-item">Family: Two floofy doggos and a wonderful partner</li>
   `
   generalEx.appendChild(generalDiv)
}

//Tech Table click event
const techEvent = () => {
   tech.addEventListener('click', (e) =>{
    e.preventDefault();

     //DOM function 
     getTechEx();
    
    //Clear General for Tech Experience
    
    
  }, {once : true});
 }


//Tech DOM function
function getTechEx(){
  //Tech experience
  const techDiv = document.createElement('div')
  techDiv.className = 'techDiv'
  techDiv.innerHTML = `
      <li class="list-group-item">JavaScript Proficiency from First Phase of the Bootcamp</li>
      <li class="list-group-item">Analyzed Technical Recruiting Tools for Better Implementation</li>
      <li class="list-group-item">Former Technical Support Specialist at WP Engine</li>
      <li class="list-group-item">Web Design and Advanced Coding Classes from Texas State Univeristy</li>
  `
  techEx.appendChild(techDiv)
}

//General Table click event
const portEvent = () => {
  port.addEventListener('click', (e) => {
    e.preventDefault();

    //DOM Function
    getPortEx();

    //Clear Tech for General Experience
    //getTechEx().textContent = "";

}, {once : true});
}


//General DOM Functionality
function getPortEx(){
 //General experience
 const portDiv = document.createElement('div')
 portDiv.className = 'portDiv'
 portDiv.innerHTML = `
     <li class="list-group-item"><a href="https://github.com/btomecsko/phase-1-final" target="_blank">Brandito's Refresco's</a></li>
 `
 portEx.appendChild(portDiv)
}
