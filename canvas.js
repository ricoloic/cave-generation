const scl = 20;

let canvas;
let map;

function setup() {
    map = caveGenerator(64, 30, 44, 5);
    console.log(map);
    canvas = createCanvas(map.width * scl, map.height * scl);
    const mainNodeDOM = canvas.parent();
    canvas.parent("canvas-container");
    mainNodeDOM.remove();
}

function draw() {
    background(255);
    noStroke();
    fill(30);
    map.forTiles((tileValue, x, y) => {
        if (!tileValue)
            rect(x * scl, y * scl, scl, scl);
    });
}
