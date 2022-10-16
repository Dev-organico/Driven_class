
let food;
let price_food;

function change_leyout_food(marca){
    const buttom_selected = document.querySelector('.marcador1')
    

    if (buttom_selected !== null){
        buttom_selected.classList.remove('marcador1')
  
    }

    marca.classList.add('marcador1')
    
    food = document.querySelector(".marcador1 .texto-up").innerHTML
    
    alert(food)

    const price_cut = document.querySelector('.marcador1 .texto-bt').innerHTML.substring(2)
    price_food = Number(price_cut.replace(",","."))
    alert(price_food)

    if(food !== undefined && drink !== undefined && dessert!== undefined){
        change_menu()
    }

}

/*Fim food           */


let drink;
let price_drink;

function change_leyout_drink(marca){
    const buttom_selected = document.querySelector('.marcador2')

    if (buttom_selected !== null){
        buttom_selected.classList.remove('marcador2')
    }


    marca.classList.add('marcador2')

    drink = document.querySelector(".marcador2 .texto-up").innerHTML
    
    alert(drink)

    const price_cut = document.querySelector('.marcador2 .texto-bt').innerHTML.substring(2)
    price_drink = Number(price_cut.replace(",","."))
    alert(price_drink)

    if(food !== undefined && drink !== undefined && dessert!== undefined){
        change_menu()
    }

}

/*Fim drink     */

let dessert;
let price_dessert;


function change_leyout_dessert(marca){
    const buttom_selected = document.querySelector('.marcador3')

    if (buttom_selected !== null){
        buttom_selected.classList.remove('marcador3')
    }


    marca.classList.add('marcador3')

    dessert = document.querySelector(".marcador3 .texto-up").innerHTML
    
    alert(dessert)

    const price_cut = document.querySelector('.marcador3 .texto-bt').innerHTML.substring(2)
    price_dessert = Number(price_cut.replace(",","."))
    alert(price_dessert)

    if(food !== undefined && drink !== undefined && dessert!== undefined){
        change_menu()
    }
}

/* fim dessert*/
function change_menu(){
    const take_off = document.querySelector('.button')
    take_off.classList.add('desativado')

    const change = document.querySelector('.button-green')
    change.classList.remove('desativado')
    
}
