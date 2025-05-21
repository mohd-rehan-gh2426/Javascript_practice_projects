//Call using xhr.

const postListContainer = document.querySelector('.posts_lists_container');

function fetchUsingXHR (){
 const xhr = new XMLHttpRequest();
 xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
 xhr.responseType = 'json';
 xhr.send();

 xhr.onload = function(){
    if(xhr.status === 200){
        displayPostItems(xhr.response);
    } else{
        console.log('Some Error Occured');
        
    }
 }
}

fetchUsingXHR();

function displayPostItems(postItems){
  postListContainer.innerHTML = postItems.map(function(post){
    return `<div class="post-item">
  <h3>${post.title}</h3>
  <p>${post.body}</p>
  </div>`
  }).join(' ');
}