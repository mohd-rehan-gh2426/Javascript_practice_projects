const data = [
  {
    id: "1",
    question: "What are accordion components?",
    answer:
      "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.",
  },
  {
    id: "2",
    question: "What are they used for?",
    answer:
      "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.",
  },
  {
    id: "3",
    question: "Accordion as a musical instrument",
    answer:
      "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.",
  },
  {
    id: "4",
    question: "Can I create an accordion component with a different framework?",
    answer:
      "Yes of course, it is very possible to create an accordion component with another framework.",
  },
];

//taking the reference of the div in which we have to render the data of accordian.
const accordionWrapper = document.querySelector(".accordian");

//function to render the data on targeted div.
function createAccordionData() {
  accordionWrapper.innerHTML = data
    .map(function (dataItem) {
      return `
     <div class="accordian_item">
     <div class="accordian_title">
     <h3>${dataItem.question}</h3>
     <i class="fa-solid fa-arrow-up"></i>
    
     </div>
      <div class="accordian_content">
     <p>${dataItem.answer}</p>
     </div>
     </div>
     
     `;
    })
    .join(" "); // removing ,
}

createAccordionData();

//Target all accordian titles.
const getAccordianTitles = document.querySelectorAll(".accordian_title");
console.log(getAccordianTitles);


//Adding and removing toggle styling on click.
getAccordianTitles.forEach(function(currentTitle){
   currentTitle.addEventListener('click', function(event){
    if(currentTitle.classList.contains('active')){
    currentTitle.classList.remove('active');
   } else{
    let getAlreadyAddedActiveClasses = document.querySelectorAll('.active');

    getAlreadyAddedActiveClasses.forEach(function(currentActiveItem){
         currentActiveItem.classList.remove('active');
    })

    currentTitle.classList.add('active');
   }
  })
})



