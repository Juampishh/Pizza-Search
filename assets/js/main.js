let pizzas = [
    {
        Id: 1,
        nombre: "Pizza Especial",
        Ingredientes:["Ingredientes:"  ,"Jamon","Queso Muzarella","Aceitunas","Tomate"],
        Precio: 700
    }
,
    {
        Id:2,
        nombre:"Pizza Muzarella",
        Ingredientes:["Ingredientes: " ,"Queso Muzarella","Aceitunas","Tomate"],
        Precio:500
    }
,
    {   Id:3,
        nombre:"Pizza Primavera",
        Ingredientes:["Ingredientes" ,"Queso Muzarella","Aceitunas","Tomate","Lechuga","Morron","Huevo"],
        Precio:800
    }
,
  

    {  Id:4,
        nombre:"Pizza Capresse",
        Ingredientes:["Ingredientes: " ,"Queso Muzarella","Aceitunas","Tomate","Salame"],
        Precio:900
    }
    ,
    {
        Id:5,
        nombre:"Pizza de Anana",
        Ingredientes:["Ingredientes: " ,"Queso Muzarella","Aceitunas","Tomate","Anana"],
        Precio:900
    },
    {
        Id:6,
        nombre:"Pizza de Rucula",
        Ingredientes:["Ingredientes" ,"Queso Muzarella","Aceitunas","Tomate","Rucula"],
        Precio:500
    }
,
    {
        id:7,
        nombre:"Pizza 4 Quesos",
        ingredientes:["Ingredientes: " ,"Queso Muzarella","Queso Parmesano","Queso Cremoso", "Queso Cheddar"],
        precio:800
    }
,

];

//Nos traemos los elementos
const main = document.getElementById('main')
const container = document.getElementById('container');
const btn = document.getElementById('btn-card');
const form = document.getElementById('form');
const pizzaInfo = document.querySelector('.pizza-info');

const input = document.getElementById('input');




const removeCard = () =>{
    document.querySelector('.pizza-info').style.display = 'none';
}

// Buscamos la pizza
const findPizza = (value)=> pizzas.find(pizzas => pizzas.Id === value);

const showEmptyError = () =>{
    main.innerHTML += `
    <div class="empty-error">
        <h2>Por favor, ingrese un numero para que podamos buscar su pizza en el menu</h2>
        <i class="fa-solid fa-triangle-exclamation"></i>
        <button onclick="removeCard()" id="btn-card">❌</button>
    </div>
    `
}

const renderResult = (pizzas) =>{
    if(input.value > 8){
        main.innerHTML +=`
        <div class="empty-error">
        <h2>No se encontro una pizza con el id ingresado</h2>
        <i class="fa-solid fa-triangle-exclamation"></i>
        <button onclick="removeCard()" id="btn-card" >❌</button>
    </div>
        `;
    }else{
        main.innerHTML += `
        <div class="pizza-info">
            <img src="./assets/img/${pizzas.nombre}.png" alt="">
            <div class="name-price">
                <h2>${pizzas.nombre}</h2>
                <h3>$${pizzas.Precio}</h3>
                <p>${pizzas.Ingredientes}</p>
            </div>
            <button onclick="removeCard()" id="btn" >❌</button>
        </div>
        `
    }

    saveLocalStorage()
}



const searchPizza = (e) =>{
    e.preventDefault();
    const searchedValue = input.value;
    if(!searchedValue){
        showEmptyError()
        return;
    }
    const searchedPizza = findPizza(Number(searchedValue));
    renderResult(searchedPizza);
};

const init = () =>{
    form.addEventListener("submit",searchPizza);
};

const saveLocalStorage = () => {
    localStorage.setItem("Pizza",input.value)   
}

init()
