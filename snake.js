const snakeContainer = document.getElementById('snake');

const snakes = [
    { x: 50, y: 50, dx: 2, dy: 2, color: 'aqua' },
    { x: 200, y: 200, dx: -2, dy: -2, color: 'orange' },
    { x: 400, y: 100, dx: 3, dy: 1, color: 'red' }
];

function moverSerpiente() {
    snakes.forEach(snake => {
        snake.x += snake.dx;
        snake.y += snake.dy;

        if (snake.x + 50 > window.innerWidth || snake.x < 0) {
            snake.dx = -snake.dx;
        }
        if (snake.y + 50 > window.innerHeight || snake.y < 0) {
            snake.dy = -snake.dy;
        }
    });

    snakeContainer.innerHTML = '';

    snakes.forEach(snake => {
        const snakeBody = document.createElement('div');
        snakeBody.className = 'snake-body';
        snakeBody.style.left = snake.x + 'px';
        snakeBody.style.top = snake.y + 'px';
        snakeBody.style.background = snake.color;
        snakeContainer.appendChild(snakeBody);
    });

    requestAnimationFrame(moverSerpiente);
}

moverSerpiente();

