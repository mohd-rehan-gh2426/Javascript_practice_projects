const data = [
  {
    id: "1",
    question: "What is Islam?",
    answer:
      "Islam is a monotheistic Abrahamic religion revealed to the Prophet Muhammad ﷺ through the Qur'an. It emphasizes submission to the will of Allah (God) and living a righteous life according to His guidance.",
  },
  {
    id: "2",
    question: "What are the Five Pillars of Islam?",
    answer:
      "The Five Pillars of Islam are Shahadah (faith), Salah (prayer), Zakah (charity), Sawm (fasting in Ramadan), and Hajj (pilgrimage to Makkah). These pillars are the foundation of a Muslim’s faith and practice.",
  },
  {
    id: "3",
    question: "What is the Qur'an?",
    answer:
      "The Qur'an is the holy book of Islam, revealed by Allah to the Prophet Muhammad ﷺ through the Angel Jibreel (Gabriel). It is the ultimate source of guidance for Muslims in all aspects of life.",
  },
  {
    id: "4",
    question: "Who is Prophet Muhammad ﷺ?",
    answer:
      "Prophet Muhammad ﷺ is the last and final messenger of Allah. He was sent to guide humanity and conveyed the message of Islam. His life is the perfect example (Uswatun Hasanah) for Muslims to follow.",
  },
];

const accordianWrapper = document.querySelector('.accordian');

function createAccordionData(){
    accordianWrapper.innerHTML = data.map(function(dataItem){
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
        
        `
    }).join(" ");
}


createAccordionData();


const allAccordianTitles = document.querySelectorAll('.accordian_title');

allAccordianTitles.forEach(function(currentTitle){
  currentTitle.addEventListener('click', function(){
    if(currentTitle.classList.contains('active')){
        currentTitle.classList.remove('active');
    } else{
       let getAllActiveClasses = document.querySelectorAll('.active');
       getAllActiveClasses.forEach(function(activeClass){
          activeClass.classList.remove('active');
       }) 

       currentTitle.classList.add('active');
    }
  })
})
