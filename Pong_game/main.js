const canvas = document.getElementById("game-window");
const ctx = canvas.getContext('2d');

canvas.height = 600;
canvas.width = 800;

const game = new Game();

//Bats.Draw();
function Animate(){
    game.Init();
    requestAnimationFrame(Animate);

}

Animate();



