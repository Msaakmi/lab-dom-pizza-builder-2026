// Define pizza state

const pizza = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: true,
  glutenFreeCrust: true,
};

function renderPizza() {
  // TODO: render state
  const allPep = document.querySelectorAll(".pep")
  allPep.forEach(pep => {
    if (pizza.pepperoni === true){
      pep.style.visibility = "visible"
    }else{
      pep.style.visibility =  "hidden"
    }
  })

}

const btnPep = document.querySelector(".btn.btn-pepperoni");

btnPep.onclick = function () {
  // TODO: change state
  // TODO: render new state
  if(pizza.pepperoni === true){
    pizza.pepperoni = false
    console.log(pizza.pepperoni)
  }else{
    pizza.pepperoni = true
  }
  btnPep.classList.toggle("active")
  renderPizza()
};

// TODO: other buttons
