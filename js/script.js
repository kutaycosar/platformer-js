debugger;
//drawing variablelarini olusturma
let canvas;
let ctx;

// oyun variablarini olusturma
let gameLoop;
let player;

// runs once page has loaded
window.onload = function(){
    canvas = document.getElementById('game-canvas');

    ctx = canvas.getContext('2d');

    //setup key listeners

    //create player
    player = new Player(100, 400);
    

    //Start game loop

    gameLoop = setInterval(step, 1000/30); // 1 saniyede 30 kare demek

    function step(){
        player.step();

        //draw everything
        draw();
    }   

    function draw(){
        //clear the canvas
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, 1280, 720);

        //Draw the player
        player.draw();
    };
}