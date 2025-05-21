function generate_Hex_color() {
  let hex = "#";
  const hex_color_char = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    const color_char = hex_color_char[Math.floor(Math.random() * 16)];
    hex += color_char;
  }
  console.log(hex);
  

  return hex;
}


function getRed(){
    return Math.floor(Math.random() * 256);
}
function getGreen(){
    return Math.floor(Math.random() * 256);
}
function getBlue(){
    return Math.floor(Math.random() * 256);
}

const hex_button = document.getElementById("hex_button");
const hex_heading = document.getElementById("hex-heading")
const rgb_button = document.getElementById("rgb_button");
const rgb_heading = document.getElementById("rgb_heading");
const hex_color_generator = document.querySelector(".hex_color_generator");
const rgb_color_generator = document.querySelector(".rgb_color_generator");
const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const hex_copy_button = document.getElementById("hex_copy_button");
const rgb_copy_button = document.getElementById("rgb_copy_button");

hex_button.addEventListener('click', function(event){
    const current_color = generate_Hex_color();
  hex_color_generator.style.backgroundColor = current_color;
  hex_heading.innerHTML = current_color;
})

hex_copy_button.addEventListener('click', function(event){
    navigator.clipboard.writeText(hex_heading.innerHTML)
    .then(() => alert("Color code copied!"))
    .catch(() => alert("Copy failed!"));
})

rgb_button.addEventListener('click', function(event){
const current_red = getRed();
const current_green = getGreen();
const current_blue = getBlue();

rgb_color_generator.style.backgroundColor = `rgb(${current_red}, ${current_green}, ${current_blue})`;
rgb_heading.innerHTML = `rgb(${current_red}, ${current_green}, ${current_blue})`;
red.value = current_red;
green.value = current_green;
blue.value = current_blue;

})

rgb_copy_button.addEventListener('click', function(event){
    navigator.clipboard.writeText(rgb_heading.innerHTML)
    .then(() => alert("Color code copied!"))
    .catch(() => alert("Copy failed!"));
})

