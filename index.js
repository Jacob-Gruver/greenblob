
const canvas = document.querySelector('#gameArea')

// let choice = document.getElementById('playButton')

let playFire = document.querySelector('#startButton')

let pauseFire = document.querySelector('#pauseButton')

// @ts-ignore
const ctx = canvas.getContext('2d')

let pause = true

let x = 100
let y = 100
const radius = 50
let speed = 10


let upPressed = false
let downPressed = false
let leftPressed = false
let rightPressed = false

function drawGame() {
    toggleGame()
    // if (pause = false) {
    //     requestAnimationFrame(drawGame)
    // }
    // requestAnimationFrame(drawGame)
    clearScreen()
    inputs()
    boundryCheck()
    drawGreenBlob()
}

function toggleGame() {
    console.log(playFire, pauseFire);
}

function boundryCheck() {
    //up
    if (y < radius) {
        y = radius
    }
    //down 
    if (y > canvas.clientHeight - radius) {
        y = canvas.clientHeight - radius
    }
    //left
    if (x < radius) {
        x = radius
    }
    //right 
    if (x > canvas.clientWidth - radius) {
        x = canvas.clientWidth - radius
    }
}

function inputs() {
    if (upPressed) {
        y = y - speed
    }
    if (downPressed) {
        y = y + speed
    }
    if (leftPressed) {
        x = x - speed
    }
    if (rightPressed) {
        x = x + speed

    }
}

// requestAnimationFrame(func)
// setInterval(drawGame, 1000)

function drawGreenBlob() {
    ctx.fillStyle = 'green';
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2)

    ctx.fill()
}

function clearScreen() {
    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight)
}

document.body.addEventListener('keydown', keyDown)
document.body.addEventListener('keyup', keyUp)

function keyDown(event) {
    // up direction
    if (event.keyCode == 38) {
        upPressed = true
    }

    // down direction
    if (event.keyCode == 40) {
        downPressed = true
    }

    // left direction
    if (event.keyCode == 37) {
        leftPressed = true
    }

    // right direction
    if (event.keyCode == 39) {
        rightPressed = true
    }

}

function keyUp(event) {
    // up direction
    if (event.keyCode == 38) {
        upPressed = false
    }

    // down direction
    if (event.keyCode == 40) {
        downPressed = false
    }

    // left direction
    if (event.keyCode == 37) {
        leftPressed = false
    }

    // right direction
    if (event.keyCode == 39) {
        rightPressed = false
    }
}

drawGame()