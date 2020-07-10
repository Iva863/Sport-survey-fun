const input = document.querySelector(".input");
const submit = document.querySelector("#submit");

function obavezno (){
  if (input.value.length == 0){
    alert("C'mon, you haven't given me all info :(");
    return false;
  } else {
    alert("Yassss, prepare your spandex!");
    return true;
  }
};

submit.addEventListener("click", obavezno);