const stars = document.querySelectorAll(".star_container i");

stars.forEach(function (star) {
  star.addEventListener("mouseenter", function (event) {
    const current_star_id = parseInt(star.id.split("_")[1]);
    // console.log("hovered");
    // console.log(current_star);

    stars.forEach(function(s){
        s.classList.remove('active');
    })

    for(let i = 1; i <= current_star_id; i++){
        document.querySelector(`#star_${i}`).classList.add('active');
    }
  });
});


stars.forEach(function(star){
    star.addEventListener('click', function(event){
        const current_star_id = parseInt(star.id.split("_")[1]);
        document.querySelector('.star_count span').innerHTML = current_star_id; 

    })
})