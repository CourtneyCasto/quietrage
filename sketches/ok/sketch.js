let y;
let num = 14;

function setup() {
    createCanvas(620, 360);
    background(102);
    noStroke();

    // Draw white bars
    fill(255);
    y = 60;
    for (let i = 0; i < num / 1.5; i++) {
        rect(0, y, 775, 10);
        y += 20;
    }

    // Gray bars
    fill(255, 0, 0);
    y = 40;
    for (let i = 0; i < num; i++) {
        ellipse(405, y, 130, 20);
        y += 20;
    }
    fill(0)
    y = 50;
    for (let i = 0; i < num; i++) {
        ellipse(425, y, 30, 20);
        y += 20;
    }

    // Thin lines
    y = 45;
    fill(0);
    for (let i = 0; i < num - 1; i++) {
        ellipse(120, y, 40, 15);
        y += 20;
    }
}
