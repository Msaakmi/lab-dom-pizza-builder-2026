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
  const priceList = document.querySelectorAll(".panel.price>ul>li");
  const allPep = document.querySelectorAll(".pep")
  allPep.forEach(pep => {
    if (pizza.pepperoni === true){
      pep.style.visibility = "visible"
      priceList[0].style.display = "inherit"

    }else{
      pep.style.visibility =  "hidden"
      priceList[0].style.display = "none"
    }
  })

  const allMush = document.querySelectorAll(".mushroom")
  allMush.forEach(mush => {
    if (pizza.mushrooms === true){
      mush.style.visibility = "visible"
      priceList[1].style.display = "inherit"
    }else{
      mush.style.visibility =  "hidden"
      priceList[1].style.display = "none"
    }
  })

  const allGreenPeppers = document.querySelectorAll(".green-pepper")
  allGreenPeppers.forEach(greenpep => {
    if (pizza.greenPeppers === true){
      greenpep.style.visibility = "visible"
      priceList[2].style.display = "inherit"
    }else{
      greenpep.style.visibility =  "hidden"
      priceList[2].style.display = "none"
    }
  })

  const sauce = document.querySelector(".sauce")
    if (pizza.whiteSauce) {
      sauce.classList.add("sauce-white");
      priceList[3].style.display = "inherit"
    } else {
      sauce.classList.remove("sauce-white");
      priceList[3].style.display = "none"
    }

    const crust = document.querySelector(".crust")
    if (pizza.glutenFreeCrust) {
      crust.classList.add("crust-gluten-free");
      priceList[4].style.display = "inherit"
    } else {
      crust.classList.remove("crust-gluten-free");
      priceList[4].style.display = "none"

    }

    let precioTotal = 10
    for (let ingrediente in pizza) {
   if (pizza[ingrediente] === true) {
    if (ingrediente === "pepperoni") {
      precioTotal += 1
    } else if (ingrediente === "mushrooms") {
      precioTotal += 1 
    } else if (ingrediente === "greenPeppers") {
      precioTotal += 1
    } else if (ingrediente === "whiteSauce") {
      precioTotal += 3
    } else if (ingrediente === "glutenFreeCrust") {
      precioTotal += 5
    }
   }
   document.querySelector(".panel.price strong").innerHTML = "$" + precioTotal;
  }

}

const btnPep = document.querySelector(".btn.btn-pepperoni");
const btnMush = document.querySelector(".btn.btn-mushrooms");
const btnGreenPeppers = document.querySelector(".btn.btn-green-peppers");
const whiteSauce = document.querySelector(".btn-sauce");
const crust = document.querySelector(".btn-crust");

btnPep.onclick = function () {
  // TODO: change state
  // TODO: render new state
  if(pizza.pepperoni === true){
    pizza.pepperoni = false
  }else{
    pizza.pepperoni = true
  }

  btnPep.classList.toggle("active")
  renderPizza()
};

// TODO: other buttons

btnMush.onclick = function () {
  // TODO: change state
  // TODO: render new state
  if(pizza.mushrooms === true){
    pizza.mushrooms = false
  }else{
    pizza.mushrooms = true
  }

  btnMush.classList.toggle("active")

  renderPizza()
};

btnGreenPeppers.onclick = function () {
  // TODO: change state
  // TODO: render new state
  if(pizza.greenPeppers === true){
    pizza.greenPeppers = false
  }else{
    pizza.greenPeppers = true
  }

  btnGreenPeppers.classList.toggle("active")
  renderPizza()
};

whiteSauce.onclick = function () {
  // TODO: change state
  // TODO: render new state
  if (pizza.whiteSauce) {
    pizza.whiteSauce = false
  }else{
    pizza.whiteSauce = true
  }

  whiteSauce.classList.toggle("active")
  renderPizza()
};

crust.onclick = function () {
  // TODO: change state
  // TODO: render new state
  if (pizza.glutenFreeCrust) {
    pizza.glutenFreeCrust = false
  }else{
    pizza.glutenFreeCrust = true
  }

  crust.classList.toggle("active")
  renderPizza()
};



  