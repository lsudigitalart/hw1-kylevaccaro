function setup() {
	createCanvas(400, 400);
	background(20);
}

function draw() {
	// drawing code goes here
    noStroke()

    fill (255, 252, 230);
    ellipse(width / 2, height / 2, 300, 370);

    fill (0, 0, 0);
    ellipse(125, 220, 50, 150);
    ellipse(275, 220, 50, 150);

    fill (255);
    ellipse(125, 250, 15, 15);
    ellipse(275, 250, 15, 15);


    fill (255, 252, 230);
    ellipse(100, 150, 50, 150);
    ellipse(150, 310, 80, 70);
    ellipse(150, 150, 50, 150);
    ellipse(300, 150, 50, 150);
    ellipse(250, 310, 80, 70);
    ellipse(250, 150, 50, 150);
    

    fill (150, 100, 250);
    ellipse(200, 300, 50, 50);

    stroke (1)
    fill (255, 255, 255);
    rect (140, 340, 30, 30);
    rect (230, 340, 30, 30);
    rect (169, 340, 30, 30);
    rect (200, 340, 30, 30);


}
