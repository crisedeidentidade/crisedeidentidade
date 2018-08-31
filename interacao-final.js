var cnvw = document.getElementById('canvas').offsetWidth;
var cnvh = document.getElementById('canvas').offsetHeight;

//ARRAY ONDE SÃO COLOCADOS OS STRINGS COM AS PALAVRAS 
var sourceText = "FOMO MEME VEGAN IPHONE TINDER HIPER-ALTRUISMO FOMO MEME VEGAN IPHONE TINDER HIPER-ALTRUISMO";
var words = sourceText.split(" ");



var x = [],
    y = [],
    segNum = words.length + 1,
    segLength = 200,
    segHeight = 50,
    angle;

for (var i = 0; i < segNum; i++) {
    x[i] = 0;
    y[i] = 0;
}


function setup() {
    createCanvas(cnvw, cnvh);

    for (var i = 0; i < words.length - 1; i++) {
        fill(0);
        noStroke();
        textSize(segHeight);
        textAlign(CENTER);
        text(words[i], x[i] + segLength / 2, y[i] + segHeight / 4);
    };

}

function draw() {
    clear();
    
    push();
    fill(255);
    dragSegment(0, mouseX, mouseY);
    for (var i = 0; i < x.length - 2; i++) {
        dragSegment(i + 1, x[i], y[i]);
    }

    pop();
}


function dragSegment(i, xin, yin) {
    var dx = xin - x[i];
    var dy = yin - y[i];
    var angle = atan2(dy, dx);
    y[i] = yin - sin(angle) * (segLength - 25);
    x[i] = xin - cos(angle) * (segLength - 25);

    segment(x[i], y[i], angle);
    getwords(words[i], x[i], y[i], angle);

}


function getwords(array, x, y, a) {
    push();
    translate(x, y);
    rotate(a)
    fill(0)
    noStroke();
    textSize(30);
    textAlign(CENTER, CENTER);
    text(array, segLength / 2, 0)
    pop();
}


function segment(x, y, a) {
    push();
    translate(x, y);
    rotate(a);

    strokeWeight(2);
    fill(255);
    stroke(0);
    rect(0, -segHeight / 2, segLength, segHeight, 10);
    pop();

}
