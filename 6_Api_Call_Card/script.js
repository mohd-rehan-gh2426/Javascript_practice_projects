const card_container = document.querySelector('.card_container');
const requestUrl = 'https://randomuser.me/api/?results=10';


const xhr = new XMLHttpRequest();
xhr.open('GET',requestUrl);
xhr.onreadystatechange = function(){
    if(this.readyState == 4){
       const data = JSON.parse(this.responseText);
       console.log(data);
       console.log(typeof data);
       data.results.forEach(function(dataItem){
        const card = document.createElement('div');
        card.classList.add('card');

        const image = document.createElement('img');
        image.src = dataItem.picture.large;

        const name = document.createElement('p');
        name.innerText = `${dataItem.name.first} ${dataItem.name.last}`;

        card.appendChild(image);
        card.appendChild(name);
        card_container.appendChild(card);
       })
       
       

    }
}

xhr.send();