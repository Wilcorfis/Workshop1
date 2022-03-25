import { characters } from "./data/data.js"

let array = [];

function shuffleArray(inputArray){
    inputArray.sort(()=> Math.random() - 0.5);
}


function ShowCard(data, container) {
    shuffleArray(characters);

    container.innerHTML = '';
    data.forEach(element => {
        const { id, img: imagen } = element;
        container.innerHTML += `
             <img class='card' src="img/image1.png" id=${id} />
          `
        document.getElementById(`${id}`).style.cssText += "width:350px" 
    });

}
let containercards = document.getElementById("containerCards")

ShowCard(characters, containercards);

document.addEventListener('click', ({ target }) => {
    if (target.classList.contains('card')) {
        let id = target.id;
        let puntos = document.getElementById("puntos");
        let vidas = document.getElementById("vidas");


        let elemento = characters.find(item => item.id == id);

        array.push(elemento)

        if (array.length < 3) {
            document.getElementById(id).setAttribute("src", elemento.image);



        }

        if (array.length == 2) {
            setTimeout(function () {




                if (array[0].image === array[1].image) {

                    puntos.textContent = parseInt(puntos.textContent) + 2;

                    if (puntos.textContent == 12) {
                        //ShowCard(characters, containercards);
                        //puntos.textContent = 0;
                        alert("ganaste")
                        location.reload();
                        
                    } else {
                        document.getElementById(array[0].id).style.cssText += "Visibility:hidden";
                        document.getElementById(array[1].id).style.cssText += "Visibility:hidden";

                        array.splice(0, 1);
                        array.splice(1, 1);
                        array.length = 0;
                    }

                } else {
                    if (array[0].image !== array[1].image) {
                        vidas.textContent = parseInt(vidas.textContent) - 1;

                        if (vidas.textContent == 0) {                
                            //vidas.textContent = 3;
                            alert("perdiste")
                            location.reload();
                         
                            
                        } else {

                            document.getElementById(array[0].id).setAttribute("src", "img/image1.png");
                            document.getElementById(array[1].id).setAttribute("src", "img/image1.png");
                            array.splice(0, 1);
                            array.splice(1, 1);
                            array.length = 0;
                        }
                    }
                }



            }, 3000);


        }




    }

})

