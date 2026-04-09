![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | DOM Pizza Builder

<br>

## Introduccion

Tenemos hambre de una buena pizza recien hecha. Por supuesto, queremos pedirla online, ya que hablar con una persona solo retrasaria el consumo de pizza.

Hay un solo problema: el constructor de pizzas de nuestra pizzeria local **no funciona**. Esta vez la pizzeria tiene suerte, porque su cliente de hoy es un desarrollador web. Siempre escuchamos que los desarrolladores deben contribuir a su comunidad. No se me ocurre una contribucion mas significativa que ayudar a la gente a conseguir su pizza mas facilmente.

Tu mision es completar el archivo `js/index.js` para que el constructor de pizzas sea interactivo: los botones deben activar y desactivar ingredientes en la pizza, y el precio debe actualizarse automaticamente.

**Puedes ver una demo de la version terminada haciendo clic [aqui](https://lab-dom-pizza-builder.surge.sh)**.

<br>

## Requisitos

- Haz Fork de este repo
- Clona este repo

<br>

## Instrucciones de entrega

Una vez completado, ejecuta los siguientes comandos:

```bash
git add .
git commit -m "Solved lab"
git push origin master
```

Crea un Pull Request para que tus profesores puedan revisar tu trabajo.

<br>

## Instrucciones

El proyecto ya tiene toda la estructura HTML y los estilos CSS terminados. Tu unico trabajo es completar el archivo `js/index.js`.

La pizza se compone de varios ingredientes renderizados con CSS puro. Cada ingrediente es un conjunto de elementos `<section>` dentro de `#pizza`. Los botones del panel de control (`.panel.controls`) permiten activar y desactivar cada ingrediente.

El enfoque que vas a seguir se llama **estado + renderizado**: defines un objeto JavaScript que representa el estado actual de la pizza, los botones modifican ese estado, y una funcion `renderPizza()` lee el estado y actualiza el DOM para reflejarlo. De esta forma, el estado es la **unica fuente de verdad** de tu aplicacion.

<br>

---

### Iteracion 1: El objeto estado y el boton de pepperoni

#### 1.1 - Define el estado

Abre `js/index.js`. Veras que ya existe una variable `pizza` declarada como un objeto vacio. Tu primer paso es darle propiedades que representen cada ingrediente de la pizza. Como al cargar la pagina todos los ingredientes estan visibles, todos empiezan en `true`:

```js
const pizza = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: true,
  glutenFreeCrust: true,
};
```

#### 1.2 - Conecta el boton de pepperoni

El codigo inicial ya intenta seleccionar el boton de pepperoni. Sin embargo, **revisa con cuidado el selector CSS que se esta usando** y comparalo con la clase real del boton en el HTML. Si algo no coincide, corrigelo.

<details>
  <summary>Pista</summary>

Abre `index.html` y busca la clase del boton de pepperoni. Comparala con el selector que aparece en `index.js`. Hay un pequeno error tipografico (typo) en el archivo JavaScript que debes corregir.

</details>

Una vez que el selector sea correcto, programa el `onclick` del boton para que:

1. Cambie el valor de `pizza.pepperoni` a su valor contrario (`true` pasa a `false`, y viceversa).
2. Haga toggle de la clase `active` en el propio boton para que cambie su aspecto visual.
3. Llame a `renderPizza()`.

#### 1.3 - Implementa `renderPizza()` para el pepperoni

Dentro de `renderPizza()`, selecciona todos los elementos con la clase `.pep` (son las rodajas de pepperoni en el HTML). Recorrelos con un bucle y cambia su `style.visibility`:

- Si `pizza.pepperoni` es `true`, ponles `visibility` a `"visible"`.
- Si `pizza.pepperoni` es `false`, ponles `visibility` a `"hidden"`.

```js
// Ejemplo de como ocultar/mostrar un conjunto de elementos:
const items = document.querySelectorAll(".ejemplo");
items.forEach(function (item) {
  item.style.visibility = condicion ? "visible" : "hidden";
});
```

Prueba tu codigo en el navegador: al hacer clic en el boton de pepperoni, las rodajas deberian aparecer y desaparecer, y el boton deberia cambiar de aspecto.

<br>

---

### Iteracion 2: El resto de los toppings

Ahora que tienes el patron funcionando para el pepperoni, aplica la misma logica para los otros dos toppings: **mushrooms** (champiñones) y **green peppers** (pimientos verdes).

#### 2.1 - Boton de mushrooms

- Selecciona el boton con la clase `.btn-mushrooms`.
- En su `onclick`: cambia `pizza.mushrooms`, haz toggle de `active`, llama a `renderPizza()`.

#### 2.2 - Boton de green peppers

- Selecciona el boton con la clase `.btn-green-peppers`.
- En su `onclick`: cambia `pizza.greenPeppers`, haz toggle de `active`, llama a `renderPizza()`.

#### 2.3 - Extiende `renderPizza()`

Añade la logica para mushrooms y green peppers dentro de `renderPizza()`. Usa el mismo patron que ya tienes para el pepperoni, pero con los selectores correspondientes:

| Ingrediente    | Selector CSS de los elementos |
| -------------- | ----------------------------- |
| Pepperoni      | `.pep`                        |
| Mushrooms      | `.mushroom`                   |
| Green peppers  | `.green-pepper`               |

Cada grupo de elementos se oculta o muestra con `style.visibility` segun el valor de su propiedad en el estado.

<br>

---

### Iteracion 3: Salsa y masa

Los dos ingredientes restantes funcionan de forma diferente. En lugar de ocultar elementos, lo que hacemos es **añadir o quitar una clase CSS** que cambia su apariencia.

#### 3.1 - Salsa blanca (White sauce)

El elemento de la salsa en el HTML tiene la clase base `.sauce`. Cuando ademas tiene la clase `sauce-white`, se muestra como salsa blanca. Cuando no la tiene, se muestra como salsa roja (la por defecto).

- Selecciona el boton `.btn-sauce`.
- En su `onclick`: cambia `pizza.whiteSauce`, haz toggle de `active`, llama a `renderPizza()`.
- En `renderPizza()`: selecciona el elemento `.sauce` y, dependiendo de `pizza.whiteSauce`, añade o quita la clase `sauce-white`.

```js
// Puedes hacerlo con condicionales:
if (pizza.whiteSauce) {
  elemento.classList.add("nombre-clase");
} else {
  elemento.classList.remove("nombre-clase");
}
```

#### 3.2 - Masa sin gluten (Gluten-free crust)

El elemento `.crust` funciona igual. Cuando tiene la clase `crust-gluten-free`, muestra masa sin gluten. Cuando no la tiene, muestra masa normal.

- Selecciona el boton `.btn-crust`.
- En su `onclick`: cambia `pizza.glutenFreeCrust`, haz toggle de `active`, llama a `renderPizza()`.
- En `renderPizza()`: selecciona el elemento `.crust` y, dependiendo de `pizza.glutenFreeCrust`, añade o quita la clase `crust-gluten-free`.

<details>
  <summary>Pista</summary>

Tambien puedes usar `classList.toggle(className, force)`, donde el segundo parametro es un booleano que indica si la clase debe estar presente (`true`) o ausente (`false`):

```js
elemento.classList.toggle("mi-clase", condicionBooleana);
```

</details>

<br>

---

### Iteracion 4: Calculo del precio

El panel de precios (`.panel.price`) muestra el desglose de lo que cuesta cada ingrediente y el precio total. Necesitas que este panel se actualice dinamicamente segun el estado de la pizza.

#### 4.1 - Mostrar/ocultar los precios de cada ingrediente

Selecciona todos los elementos `<li>` dentro de `.panel.price ul`. Cada `<li>` corresponde a un ingrediente, en el mismo orden en que aparecen en el HTML:

| Indice | Ingrediente        | Precio |
| ------ | ------------------ | ------ |
| 0      | Pepperoni          | $1     |
| 1      | Mushrooms          | $1     |
| 2      | Green peppers      | $1     |
| 3      | White sauce        | $3     |
| 4      | Gluten-free crust  | $5     |

Dentro de `renderPizza()`, para cada `<li>`, muestra u oculta el elemento usando `style.display`:

- Si el ingrediente esta activo: `style.display = "inherit"`.
- Si el ingrediente esta desactivado: `style.display = "none"`.

#### 4.2 - Calcula y muestra el precio total

El precio base de la pizza es siempre **$10** (pizza de queso).

A ese precio, suma el coste de cada ingrediente que este activo:

- Pepperoni: **$1**
- Mushrooms: **$1**
- Green peppers: **$1**
- White sauce: **$3**
- Gluten-free crust: **$5**

Finalmente, selecciona el elemento `<strong>` dentro de `.panel.price` y actualiza su contenido con el precio total calculado:

```js
// Ejemplo de como actualizar el texto de un elemento:
elemento.innerHTML = "$" + precioTotal;
```

Prueba desactivando y activando ingredientes. El precio total deberia recalcularse correctamente cada vez. Con todos los ingredientes activos, el total es **$21**. Con solo la pizza base (todo desactivado), es **$10**.

<br>

---

Happy coding! :heart:
