let canvas;
let snake, eatSnake;
let axesX, axesY, width, height;
let axesEatX, axesEatY, widthEat, heightEat;
let clearX, clearY, widthPlus, heightPlus;  
let counterEat = 1;
let tail = [];
window.addEventListener("DOMContentLoaded", () =>{

    // Al iniciar el juego la serpiente debe estar en una posición
    function show() {
        axesX = 200;
        axesY = 200;
        width = 10;
        height = 10;
        canvas = document.getElementById('tutorial');
        snake = canvas.getContext('2d');
        snake.fillStyle = "green";
        snake.fillRect(axesX, axesY, width, height);
        tail.push([axesX,axesY]);
        move();
        eat();
    }
    show();

});

    // Al presionar una tecla, la serpiente debe tomar un dirección
    function move() {
        document.addEventListener('keydown', (e) => {
            clearX = 0;
            clearY = 0;
            widthPlus = 0;
            heightPlus = 0;
            const keyName = e.key;
            console.log(keyName);
            switch (keyName) {
                case 'ArrowDown':
                    axesY += 10;
                    clearY = -10*counterEat;
                    break;
                case 'ArrowUp':
                    axesY -= 10;
                    clearY = 10*counterEat;
                    break;
                case 'ArrowLeft':
                    axesX -= 10;
                    clearX = 10*counterEat;
                    break;
                case 'ArrowRight':
                    axesX += 10;
                    clearX = -10*counterEat;
                    break;
            
                default:
                    return;
                
            }
            tail.push([axesX,axesY]);
            
            if (canvas.getContext){
            snake = canvas.getContext('2d');
            snake.fillStyle = "green";
            snake.fillRect(axesX, axesY, width, height);
            
            
            }
            if (axesX < 0 || axesX == 400 || axesY < 0 || axesY == 400  ) {
                alert("GAME OVER");
                location.reload();
                
            }

            else if (axesX == axesEatX && axesY == axesEatY) {
                counterEat++;
                eat();
                
            }else{
                snake.clearRect(tail[0][0], tail[0][1], width, height);
                tail.shift();

            }
            
            

        }); 
                        
    }

    // Comer o alimentar
    function eat() {
        axesEatX = (Math.floor(Math.random() * 40))*10;
        axesEatY = (Math.floor(Math.random() * 40))*10;
        widthEat = 10;
        heightEat = 10;
        // canvas = document.getElementById('tutorial');
        eatSnake = canvas.getContext('2d');
        eatSnake.fillStyle = "red";
        eatSnake.fillRect(axesEatX, axesEatY, widthEat, heightEat);
        
                        
    }
    
    

