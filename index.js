//DOM node variables
const general = () => document.getElementById('general');
const tech = () => document.getElementById('tech');
const mainTable = () => document.getElementById('mainTable');
const generalEx = () => document.getElementById('generalEx');
const techEx = () => document.getElementById('techEx');

//DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
   generalEvent();
   techEvent();
    
})

//General click event
const generalEvent = () => {
    general().addEventListener('click', renderGeneral)
}

//Tech click event

const techEvent = () => {
  tech().addEventListener('click', renderTech)
}

//General event handler
const renderGeneral = (e) =>{
    e.preventDefault();
   
    document.getElementById('generalEx').hidden = false;
    document.getElementById('techEx').hidden = true;
    techEx().textContent = "";

    //Initialize function 
    getGeneralEx();
    
}

//Tech event handler
const renderTech = (e) =>{
  e.preventDefault();
  
  document.getElementById('generalEx').hidden = true;
  document.getElementById('techEx').hidden = false;
  generalEx().textContent = "";

  //Initialize function 
  getTechEx();
  
}

//General DOM function
function getGeneralEx(){
   //build general experience
   const generalDiv = document.createElement('div')
   generalDiv.className = 'generalDiv'
   generalDiv.innerHTML = `
       <li class="list-group-item">Degree: Bachelor of Science in Public Relations and Digital Media</li>
       <li class="list-group-item">Hobbies: Reading, video games and watching any type of superhero or supernatural show</li>
       <li class="list-group-item">Family: Two beautiful doggoes and an amazing partner</li>
   `
   generalEx().appendChild(generalDiv)
}

//Tech DOM function
function getTechEx(){
  //build general experience
  const techDiv = document.createElement('div')
  techDiv.className = 'techDiv'
  techDiv.innerHTML = `
      <li class="list-group-item">JavaScript Proficiency from First Phase of the Bootcamp</li>
      <li class="list-group-item">Analyzed Technical Recruiting Tools for Better Implementation</li>
      <li class="list-group-item">Former Technical Support Specialist at WP Engine</li>
      <li class="list-group-item">Web Design and Advanced Coding Classes from Texas State Univeristy</li>
  `
  techEx().appendChild(techDiv)
}


