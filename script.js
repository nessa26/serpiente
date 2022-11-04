let canvas;
        let axesX = 100, axesY = 100, width = 10, height = 10;
        let clearX, clearY, widthPlus, heightPlus;
    
        window.addEventListener("DOMContentLoaded", () =>{
            
            function draw(){

                console.log(height);
            }

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
                            clearY = -10;
                            break;
                        case 'ArrowUp':
                            axesY -= 10;
                            clearY = 10;
                            break;
                        case 'ArrowLeft':
                            axesX -= 10;
                            clearX = 10;

                            break;
                        case 'ArrowRight':
                            axesX += 10;
                            clearX = -10;


                            break;
                    
                        default:
                            console.log('medio pailas')
                            break;
                        
                    }
                    console.log(axesX);
                    canvas = document.getElementById('tutorial');
                    if (canvas.getContext){
                    let ctx = canvas.getContext('2d');
                    ctx.fillStyle = "green";
                    ctx.fillRect(axesX, axesY, width, height);
                    ctx.clearRect(axesX+clearX, axesY+clearY, width, height);
                    }

                });

                
                                
            }
            
            move();
            // draw();


        });