const screen = document.getElementById('screen');
const ctx = screen.getContext('2d');
let player = {
    x: (screen.width/2)-25,
    y: (screen.height/2)-25
};

let keys = {};
window.addEventListener('keydown', function(e) {
      keys[e.key] = true;
    });
window.addEventListener('keyup', function(e) {
      keys[e.key] = false;
    });



function tick() {
    ctx.clearRect(0, 0, screen.width, screen.height);
    
    keys['ArrowUp'] && (player.y -= 5);
    keys['ArrowDown'] && (player.y += 5);
    keys['ArrowLeft'] && (player.x -= 5);
    keys['ArrowRight'] && (square.x += square.speed);
    // this is the part where i make sure you dont go off screen and lose the player by accident (common mistake)
    (player.x < 0) && (player.x = 0);
    (player.y < 0) && (player.y = 0);
    (player.x + 50 > screen.width) && (player.x = screen.width - 50);
    (player.y + 50 > screen.height) && (player.y = screen.height - 50);

    ctx.fillStyle = 'white';
    ctx.fillRect(player.x, player.y, 50, 50);

    
    requestAnimationFrame(update);
}
