let mother = "mother's story";
let letter_mother = [];

let father = "father's story";
let letter_father = [];

let aunt = "aunt's story";
let letter_aunt = [];

let sister = "sister's story";
let letter_sister = [];

let brother = "brother's story";
let letter_brother = [];

let change = [];
let tree = [];
let videos = [];
let hall = [];

let Transparency = 0;
let screenOnoff = true;
let sceneNumber = 0;
let screenTotal;
let screenTotal2;
let currentTime = 0;
let passedTime = 0;

let x1= 162;
let y1= 404;
let x2= 306;
let y2= 404;
let x3= 448;
let y3= 333;
let x4= 89;
let y4= 253;
let x5= 210;
let y5= 282;
let x6= 329;
let y6= 286;
let x7= 448;
let y7= 264;
let x8= 95;
let y8= 113;
let x9= 216;
let y9= 168;
let x10= 334;
let y10= 179;
let x11= 448;
let y11= 193;
let x12= 174;
let y12= 48;
let x13= 245;
let y13= 52;
let x14= 316;
let y14= 56;
let x15= 395;
let y15= 47;

let x_1= 242;
let y_1= 404;
let x_2= 383;
let y_2= 404;
let x_3= 454;
let y_3= 404;
let x_4= 95;
let y_4= 320;
let x_5= 156;
let y_5= 339;
let x_6= 395;
let y_6= 340;
let x_7= 97;
let y_7= 180;
let x_8= 280;
let y_8= 220;
let x_9= 163;
let y_9= 100;
let x_10= 398;
let y_10= 108;
let x_11= 460;
let y_11= 120;
let x_12= 103;
let y_12= 40;
let x_13= 457;//////reset position
let y_13= 45;
let x_14= 93;
let y_14= 400;

let lengthSize= 60;
let resetButton;///////////watch!!!!!!!

function setup() {

    createCanvas(windowWidth, windowWidth/8);//windowHeight
    startTracking(); 
    textFont("Bradley Hand");
    textSize(100); //40
    resetSketch();
}

function draw() {

    background(0);

    for (let i = 0; i < 30; i++) {
        hall[i].display();
        hall[i].update();
    }

    for (let i = 0; i < 14; i++) {
        letter_mother[i].display();
        if (change[0] && change[5] && change[10]) {
            letter_mother[i].shake();
            letter_mother[i].time(); 
        }
    }

    for (let i = 0; i < 14; i++) {
        letter_father[i].display();
        if (change[1] && change[6] && change[11]) {
            letter_father[i].shake();
            letter_father[i].time();
        }
    }

    for (let i = 0; i < 12; i++) {
        letter_aunt[i].display();
        if (change[2] && change[7] && change[12]) {
            letter_aunt[i].shake();
            letter_aunt[i].time();
        }
    }

    for (let i = 0; i < 14; i++) {
        letter_sister[i].display();
        if (change[3] && change[8] && change[13]) {
            letter_sister[i].shake();
            letter_sister[i].time();
        }
    }

    for (let i = 0; i < 15; i++) {
        letter_brother[i].display();
        if (change[4] && change[9] && change[14]) {
            letter_brother[i].shake();
            letter_brother[i].time();
        }
    }

    stroke(200);
    for (let i = 0; i < 2; i++) { ////////////////////////////new tree
        push();
        tree[i].translates(i);
        tree[i].branch(120); 
        pop();
    }
 
    if((pieceX > x_1 && pieceX < x_1+lengthSize && pieceY > y_1 && pieceY < y_1+lengthSize)){
            fill(200);
            stroke(100);
            resetButton = 1;
            text("Try again", 250 + width / 4, height / 4);
            noStroke();
            fill(25);
        } else if((pieceX > x_2 && pieceX < x_2+lengthSize && pieceY > y_2 && pieceY < y_2+lengthSize)){
            fill(200);
            stroke(100);
            resetButton = 1;
            text("Try again", 250 + width / 4, height / 4);
            noStroke();
            fill(25);
        } else if((pieceX > x_3 && pieceX < x_3+lengthSize && pieceY > y_3 && pieceY < y_3+lengthSize)){
        
            fill(200);
            stroke(100);
            resetButton = 1;
            text("Try again", 250 + width / 4, height / 4);
            noStroke();
            fill(25);
        } else if((pieceX > x_4 && pieceX < x_4+lengthSize && pieceY > y_4 && pieceY < y_4+lengthSize)){
        
            fill(200);
            stroke(100);
            resetButton = 1;
            text("Try again", 250 + width / 4, height / 4);
            noStroke();
            fill(25);
        } else if((pieceX > x_5 && pieceX < x_5+lengthSize && pieceY > y_5 && pieceY < y_5+lengthSize)){
        
            fill(200);
            stroke(100);
            resetButton = 1;
            text("Try again", 250 + width / 4, height / 4);
            noStroke();
            fill(25);
        } else if((pieceX > x_6 && pieceX < x_6+lengthSize && pieceY > y_6 && pieceY < y_6+lengthSize)){
        
            fill(200);
            stroke(100);
            resetButton = 1;
            text("Try again", 250 + width / 4, height / 4);
            noStroke();
            fill(25);
        } else if((pieceX > x_7 && pieceX < x_7+lengthSize && pieceY > y_7 && pieceY < y_7+lengthSize)){
        
            fill(200);
            stroke(100);
            resetButton = 1;
            text("Try again", 250 + width / 4, height / 4);
            noStroke();
            fill(25);
        } else if((pieceX > x_8 && pieceX < x_8+lengthSize && pieceY > y_8 && pieceY < y_8+lengthSize)){
        
            fill(200);
            stroke(100);
            resetButton = 1;
            text("Try again", 250 + width / 4, height / 4);
            noStroke();
            fill(25);
        } else if((pieceX > x_9 && pieceX < x_9+lengthSize && pieceY > y_9 && pieceY < y_9+lengthSize)){
        
            fill(200);
            stroke(100);
            resetButton = 1;
            text("Try again", 250 + width / 4, height / 4);
            noStroke();
            fill(25);
        } else if((pieceX > x_10 && pieceX < x_10+lengthSize && pieceY > y_10 && pieceY < y_10+lengthSize)){
        
            fill(200);
            stroke(100);
            resetButton = 1;
            text("Try again", 250 + width / 4, height / 4);
            noStroke();
            fill(25);
        } else if((pieceX > x_11 && pieceX < x_11+lengthSize && pieceY > y_11 && pieceY < y_11+lengthSize)){
        
            fill(200);
            stroke(100);
            resetButton = 1;
            text("Try again", 250 + width / 4, height / 4);
            noStroke();
            fill(25);
        }else if((pieceX > x_12 && pieceX < x_12+lengthSize && pieceY > y_12 && pieceY < y_12+lengthSize)){
        
            fill(200);
            stroke(100);
            resetButton = 1;
            text("Try again", 250 + width / 4, height / 4);
            noStroke();
            fill(25);
        }else if((pieceX > x_13 && pieceX < x_13+lengthSize && pieceY > y_13 && pieceY < y_13+lengthSize && resetButton > 0)){
        
           console.log("resetSketch");
           resetSketch();
           resetButtton = 0;
        }
    else if((pieceX > x_14 && pieceX < x_14+lengthSize && pieceY > y_14 && pieceY < y_14+lengthSize)){////////////////////reset
           fill(200);
           stroke(100);
           resetButton = 1;
           text("Try again", 250 + width / 4, height / 4);
           noStroke();
           fill(25);
        }
    
    if ((pieceX > x1 && pieceX< x1+lengthSize && pieceY > y1 && pieceY < y1+lengthSize) && screenTotal && screenTotal2) { ////////////// mother1-----1/////////////
        currentTime = millis();
        screenTotal = !screenTotal;
        sceneNumber = 1;
        change[sceneNumber - 1] = !change[sceneNumber - 1]; 
        resetButton++;
    } else if ((pieceX< x1 || pieceX > (x1+lengthSize) || pieceY < y1 || pieceY > (y1 + lengthSize)) && sceneNumber == 1) {///////////////////////// reset code(this is )
        videos[0].pause();
        screenTotal = true;
        screenTotal2 = true;
        change[sceneNumber - 1] = true; // seeeeee
    } 
     if ((pieceX > x2 && pieceX< x2+lengthSize && pieceY > y2 && pieceY < y2+lengthSize) && screenTotal && screenTotal2) { ////////////// father1-------2/////////
        console.log('scene 2');
        currentTime = millis();
        screenTotal = !screenTotal;
        sceneNumber = 2;
        change[sceneNumber - 1] = !change[sceneNumber - 1];
        resetButton++;
    } else if ((pieceX < x2 || pieceX > x2+lengthSize || pieceY < y2 || pieceY > y2+lengthSize) && sceneNumber == 2) {
        videos[1].pause();
        screenTotal = true;
        screenTotal2 = true;
        change[sceneNumber - 1] = true;
    }
     if ((pieceX > x3 && pieceX< x3+lengthSize && pieceY > y3 && pieceY < y3+lengthSize) && screenTotal && screenTotal2) { ////////////// aunt1///////
        currentTime = millis();
        screenTotal = !screenTotal;
        sceneNumber = 3;
        change[sceneNumber - 1] = !change[sceneNumber - 1];
        resetButton++;
    } else if ((pieceX < x3 || pieceX > x3+lengthSize || pieceY < y3 || pieceY > y3+lengthSize) && sceneNumber == 3) {
        videos[2].pause();
        screenTotal = true;
        screenTotal2 = true;
        change[sceneNumber - 1] = true;
    }

     if((pieceX > x4 && pieceX< x4+lengthSize && pieceY > y4 && pieceY < y4+lengthSize) && screenTotal && screenTotal2){////////////// sister1////////
            currentTime = millis();
            screenTotal=!screenTotal;
            sceneNumber = 4;
            change[sceneNumber - 1]=!change[sceneNumber - 1];
            resetButton++;
        } else if((pieceX < x4 || pieceX > x4+lengthSize || pieceY < y4 || pieceY > y4+lengthSize) && sceneNumber == 4){
            videos[3].pause();
            screenTotal= true;
            screenTotal2= true;
            change[sceneNumber - 1]= true;
        }
     if((pieceX > x5 && pieceX< x5+lengthSize && pieceY > y5 && pieceY < y5+lengthSize) && screenTotal && screenTotal2){////////////// brother1////////
            currentTime = millis();
            screenTotal=!screenTotal;
            sceneNumber = 5;
            change[sceneNumber - 1]=!change[sceneNumber - 1];
            resetButton++;
        } else if((pieceX < x5 || pieceX > x5+lengthSize || pieceY < y5 || pieceY > y5+lengthSize) && sceneNumber == 5){
            videos[4].pause();
            screenTotal= true;
            screenTotal2= true;
            change[sceneNumber - 1]= true;
        }
     if((pieceX > x6 && pieceX < x6+lengthSize && pieceY > y6 && pieceY < y6+lengthSize) && screenTotal && screenTotal2){////////////// mother2//////
            currentTime = millis();
            screenTotal=!screenTotal;
            sceneNumber = 6;
            change[sceneNumber - 1]=!change[sceneNumber - 1];//sceneNumber - 1 == change number 
            resetButton++;
        } else if((pieceX < x6 || pieceX > x6+lengthSize || pieceY < y6 || pieceY > y6+lengthSize) && sceneNumber == 6){
            videos[5].pause();
            screenTotal= true;
            screenTotal2= true;
            change[sceneNumber - 1]= true;// seeeeee
        }
     if((pieceX > x7 && pieceX < x7+lengthSize && pieceY > y7 && pieceY < y7+lengthSize) && screenTotal && screenTotal2){////////////// father2////////
            currentTime = millis();
            screenTotal=!screenTotal;
            sceneNumber = 7;
            change[sceneNumber - 1]=!change[sceneNumber - 1];
            resetButton++;
        } else if((pieceX < x7 || pieceX > x7+lengthSize || pieceY < y7 || pieceY > y7+lengthSize) && sceneNumber == 7){
            videos[6].pause();
            screenTotal= true;
            screenTotal2= true;
            change[sceneNumber - 1]= true;
        }
      if((pieceX > x8 && pieceX < x8+lengthSize && pieceY > y8 && pieceY < y8+lengthSize) && screenTotal && screenTotal2){////////////// aunt2////////
            currentTime = millis();
            screenTotal=!screenTotal;
            sceneNumber = 8;
            change[sceneNumber - 1]=!change[sceneNumber - 1];
            resetButton++;
        } else if((pieceX < x8 || pieceX > x8+lengthSize || pieceY < y8 || pieceY > y8+lengthSize) && sceneNumber == 8){
            videos[7].pause();
            screenTotal= true;
            screenTotal2= true;
            change[sceneNumber - 1]= true;
        }
       if((pieceX > x9 && pieceX < x9+lengthSize && pieceY > y9 && pieceY < y9+lengthSize) && screenTotal && screenTotal2){////////////// sister2/////////
            currentTime = millis();
            screenTotal=!screenTotal;
            sceneNumber = 9;
            change[sceneNumber - 1]=!change[sceneNumber - 1];
            resetButton++;
        } else if((pieceX < x9 || pieceX > x9+lengthSize || pieceY < y9 || pieceY > y9+lengthSize) && sceneNumber == 9){
            //videos[8].pause();
            screenTotal= true;
            screenTotal2= true;
            change[sceneNumber - 1]= true;
        }
        if((pieceX > x10 && pieceX < x10+lengthSize && pieceY > y10 && pieceY < y10+lengthSize) && screenTotal && screenTotal2){////////////// brother2/////////
            currentTime = millis();
            screenTotal=!screenTotal;
            sceneNumber = 10;
            change[sceneNumber - 1]=!change[sceneNumber - 1];
            resetButton++;
        } else if((pieceX < x10 || pieceX > x10+lengthSize || pieceY < y10 || pieceY > y10+lengthSize) && sceneNumber == 10){
            videos[9].pause();
            screenTotal= true;
            screenTotal2= true;
            change[sceneNumber - 1]= true;
        }
        if((pieceX > x11 && pieceX < x11+lengthSize && pieceY > y11 && pieceY < y11+lengthSize) && screenTotal && screenTotal2){////////////// mother3//////////
            currentTime = millis();
            screenTotal=!screenTotal;
            sceneNumber = 11;
            change[sceneNumber - 1]=!change[sceneNumber - 1];//sceneNumber - 1 == change number
            resetButton++;
        } else if((pieceX < x11 || pieceX > x11+lengthSize || pieceY < y11 || pieceY > y11+lengthSize) && sceneNumber == 11){
            videos[10].pause();
            screenTotal= true;
            screenTotal2= true;
            change[sceneNumber - 1]= true;// seeeeee
        }
       if((pieceX > x12 && pieceX < x12+lengthSize && pieceY > y12 && pieceY < y12+lengthSize) && screenTotal && screenTotal2){////////////// father3////////
            currentTime = millis();
            screenTotal=!screenTotal;
            sceneNumber = 12;
            change[sceneNumber - 1]=!change[sceneNumber - 1];
            resetButton++;
        } else if((pieceX < x12 || pieceX > x12+lengthSize || pieceY < y12 || pieceY > y12+lengthSize) && sceneNumber == 12){
            videos[11].pause();
            screenTotal= true;
           screenTotal2= true;
            change[sceneNumber - 1]= true;
        }
        if((pieceX > x13 && pieceX < x13+lengthSize && pieceY > y13 && pieceY < y13+lengthSize) && screenTotal && screenTotal2){////////////// aunt3///////
            currentTime = millis();
            screenTotal=!screenTotal;
            sceneNumber = 13;
            change[sceneNumber - 1]=!change[sceneNumber - 1];
            resetButton++;
        } else if((pieceX < x13 || pieceX > x13+lengthSize || pieceY < y13 || pieceY > y13+lengthSize) && sceneNumber == 13){
            videos[12].pause();
            screenTotal= true;
            screenTotal2= true;
            change[sceneNumber - 1]= true;
        }
       if((pieceX > x14 && pieceX < x14+lengthSize && pieceY > y14 && pieceY < y14+lengthSize) && screenTotal && screenTotal2){////////////// sister3///////
            currentTime = millis();
            screenTotal=!screenTotal;
            sceneNumber = 14;
            change[sceneNumber - 1]=!change[sceneNumber - 1];
            resetButton++;
        } else if((pieceX < x14 || pieceX > x14+lengthSize || pieceY < y14 || pieceY > y14+lengthSize) && sceneNumber == 14){
            videos[13].pause();
            screenTotal= true;
            screenTotal2= true;
            change[sceneNumber - 1]= true;
        }
        if((pieceX > x15 && pieceX < x15+lengthSize && pieceY > y15 && pieceY < y15+lengthSize) && screenTotal && screenTotal2){////////////// brother3/////
            currentTime = millis();
            screenTotal=!screenTotal;
            sceneNumber = 15;
            change[sceneNumber - 1]=!change[sceneNumber - 1];
            resetButton++;
        } else if((pieceX < x15 || pieceX > x15+lengthSize || pieceY < y15 || pieceY > y15+lengthSize) && sceneNumber == 15){
            videos[14].pause();
            screenTotal= true;
            screenTotal2= true;
            change[sceneNumber - 1]= true;
        }
    

    if (sceneNumber == 1) {
        videoPlay(sceneNumber, 0);
    } else if (sceneNumber == 2) {
        videoPlay(sceneNumber, 1);
    } else if (sceneNumber == 3) {
        videoPlay(sceneNumber, 2);
    } else if (sceneNumber == 4) {
        videoPlay(sceneNumber, 3);
    } else if (sceneNumber == 5) {
        videoPlay(sceneNumber, 4);
    } else if (sceneNumber == 6) {
        videoPlay(sceneNumber, 5);
    } else if (sceneNumber == 7) {
        videoPlay(sceneNumber, 6);
    } else if (sceneNumber == 8) {
        videoPlay(sceneNumber, 7);
    } else if (sceneNumber == 9) {
        videoPlay(sceneNumber, 8);
    } else if (sceneNumber == 10) {
        videoPlay(sceneNumber, 9);
    } else if (sceneNumber == 11) {
        videoPlay(sceneNumber, 10);
    } else if (sceneNumber == 12) {
        videoPlay(sceneNumber, 11);
    } else if (sceneNumber == 13) {
        videoPlay(sceneNumber, 12);
    } else if (sceneNumber == 14) {
        videoPlay(sceneNumber, 13);
    } else if (sceneNumber == 15) {
        videoPlay(sceneNumber, 14);
    }


    if (!screenTotal2) { ///////////////////////comeback to main background(more smoooth)
        if (Transparency >= 0) {
            Transparency = Transparency - 10;
            fill(0, Transparency);
            noStroke();
            rect(0, 0, width, height);
        }
    }
    noFill();
    stroke(0);
    strokeWeight(2);
    rect(0, 0, width, height);
}

function mousePressed() {
  
    let fs = fullscreen();
    fullscreen(!fs);
}

function circleHit() {
    
    background(random(255), random(255), random(255));
    fill(0);
    ellipse(circleX, circleY, 50, 50);

    if (circleX < 200 && circleY < 250) {
        // 1st quadrant (adjust 200 and 250 as needed)
        //      fill(255, 0 0);
        //      ellipse(circleX, circleY, 200, 200);

    }

}

function resetSketch() {

    screenTotal = true;
    screenTotal2 = true;
    resetButton = 0;
    
    for (let i = 0; i < 30; i++) { 
        hall[i] = new Hall();
    }

    let x1 = 175;

    for (let i = 0; i < 14; i++) { 
        letter_mother[i] = new Letter_mother(mother.charAt(i), x1 + width / 4, height / 4); //parallel translation
        x1 += textWidth(mother.charAt(i));
    }

    let x2 = 185;

    for (let i = 0; i < 14; i++) {
        letter_father[i] = new Letter_father(father.charAt(i), x2 + width / 4, height / 4); //parallel translation
        x2 += textWidth(father.charAt(i));
    }

    let x3 = 220;

    for (let i = 0; i < 12; i++) { 
        letter_aunt[i] = new Letter_aunt(aunt.charAt(i), x3 + width / 4, height / 4); //parallel translation
        x3 += textWidth(aunt.charAt(i));
    }

    let x4 = 200;

    for (let i = 0; i < 14; i++) { 
        letter_sister[i] = new Letter_sister(sister.charAt(i), x4 + width / 4, height / 4); //parallel translation
        x4 += textWidth(sister.charAt(i));
    }

    let x5 = 200;

    for (let i = 0; i < 15; i++) {
        letter_brother[i] = new Letter_brother(brother.charAt(i), x5 + width / 4, height / 4); //parallel translation
        x5 += textWidth(brother.charAt(i));
    }

    for (let i = 0; i < 15; i++) {
        change[i] = true;
    }

    tree[0] = new Tree(width / 2, 0.5, 0.87);
    tree[1] = new Tree(width / 2, 0.87, 0.5);

    for (let i = 0; i < 15; i++) { ////////////////////////////////// many videos
        videos[i] = createVideo("video" + i + ".mp4");
        videos[i].hide();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function videoPlay(tempScene, tempVideo) {

    let videoNumber = tempVideo;
    
    if (sceneNumber == tempScene && !screenTotal) { ///////////////sceneNumber1 flowchart

        passedTime = millis() - currentTime;

        if (sceneNumber == 1 || sceneNumber == 6 || sceneNumber == 11) {
            for (let i = 0; i < 14; i++) {
                if (!change[sceneNumber - 1]) {
                    letter_mother[i].relocate();  
                }
            }
        } else if (sceneNumber == 2 || sceneNumber == 7 || sceneNumber == 12) {
            for (let i = 0; i < 14; i++) {
                if (!change[sceneNumber - 1]) {
                    letter_father[i].relocate();
                }
            }
        } else if (sceneNumber == 3 || sceneNumber == 8 || sceneNumber == 13) {
            for (let i = 0; i < 12; i++) {
                if (!change[sceneNumber - 1]) {
                    letter_aunt[i].relocate();
                }
            }
        } else if (sceneNumber == 4 || sceneNumber == 9 || sceneNumber == 14) {
            for (let i = 0; i < 14; i++) {
                if (!change[sceneNumber - 1]) {
                    letter_sister[i].relocate();
                }
            }
        } else if (sceneNumber == 5 || sceneNumber == 10 || sceneNumber == 15) {
            for (let i = 0; i < 15; i++) {
                if (!change[sceneNumber - 1]) {
                    letter_brother[i].relocate();
                }
            }
        }

        if (passedTime > 3000) {
            if (screenOnoff) {
                noStroke();
                fill(0, Transparency);
                Transparency = Transparency + 3;
                noStroke();
                rect(0, 0, width, height);
                if (Transparency > 240) {
                    Transparency = 0;
                    screenOnoff = !screenOnoff;
                }
            } else if (!screenOnoff) {
                fill(0);
                rect(0, 0, width, height);
                videos[videoNumber].play();
                tint(255, Transparency);
                image(videos[videoNumber], 0, 0, width, height);

                if (videos[videoNumber].time() < 2) {
                    if (Transparency < 245) {
                        Transparency = Transparency + 20;
                    }
                } else if ((videos[videoNumber].time() > videos[videoNumber].duration() - 2) && (videos[videoNumber].time() < videos[videoNumber].duration() - 0.5)) {
                    if (Transparency > 0) {
                        Transparency = Transparency - 20;
                    }
                } else if (videos[videoNumber].duration() - 0.5 < videos[videoNumber].time()) {

                    screenOnoff = true; //////// initial
                    Transparency = 250;
                    screenTotal = true;
                    screenTotal2 = false;
                    change[sceneNumber - 1] = true;/////////recheck
                }
            }
        }
    }
}



class Dandelion_full {


    constructor() {
        this.xtime = random(width);
        this.ytime = random(height);
        this.xRandom = random(width);
        this.increment = random(0.01, 0.05); // moving fast
        this.theta = 0;
        this.spectrum = random(PI + HALF_PI, TWO_PI);
        this.speed = random(-0.003, 0.003);
        this.c = color(200, 255);
        this.rootx = (sin(this.xtime) * 10) + this.xRandom; /////x bottom of stem
        this.rooty = height; /////y bottom of stem
    }

    display() {
        let len = noise(this.xtime) * (width / 5); ///////////length of hall(width/10)-original width/13

        let x = (sin(this.xtime) * 10) + this.xRandom; //////////// x of center
        let y = (sin(this.ytime) * 10) + height - height / 7; //////////// y of center(height/5)

        noFill();
        strokeWeight(1.5);
        beginShape(); ////////////////// stem
        curveVertex(this.rootx, this.rooty - 1);
        curveVertex(this.rootx, this.rooty);
        curveVertex((sin(this.xtime - 0.05) * 10) + this.xRandom, (sin(this.ytime - 0.05) * 10) + height - height / 9);
        curveVertex(x, y);
        curveVertex(x, y + 1);
        endShape();
        push();
        translate(x, y);

        for (let i = 0; i < this.spectrum; i += 0.1) {
            push();
            rotate(this.theta + i);
            noStroke();

            for (let i2 = 2; i2 >= 0; i2--) { /////////// shape of center
                fill(255 - 80 * i2, 100);
                ellipse(0, 0, len / 4 * (i2 + 1) / 3, len / 8 * (i2 + 1) / 3);
            }
            stroke(this.c);
            strokeWeight(0.3);
            line(0, 0, len, 0);
            translate(len, 0);

            for (let j = 0; j < TWO_PI; j += 0.5) {
                push();
                rotate(-this.theta - j);
                line(0, 0, len / 4, 0);
                pop();
            }
            pop();
        }
        pop();
    }

    update() {
        this.xtime += this.increment;
        this.ytime += this.increment;
        this.theta += this.speed;
    }
}

class Hall {

    constructor() {
        this.xtime = random(width);
        this.ytime = random(height);
        this.increment = random(0.005, 0.01); // moving fast
        this.theta = 0;
        this.spectrum = random(PI / 16, PI / 14); //random(PI/16, PI/4)--> origin
        this.speed = random(-0.03, 0.03);
        this.c = color(200, 255);
    }

    display() {
        let len = noise(this.xtime) * (width / 15); //width/13

        let x = noise(this.xtime) * width;
        let y = noise(this.ytime) * height + 100; //parallel translation
   
        push();
        translate(x, y);
        noStroke();
        
        for (let i = 2; i >= 0; i--) { /////////// shape of center
            fill(255 - 80 * i, 100);
            ellipse(0, 0, len / 4 * (i + 1) / 3, len / 4 * (i + 1) / 3);
        }

        for (let i = 0; i < this.spectrum; i += 0.1) {
            push();
            rotate(this.theta + i);
            stroke(this.c);
            strokeWeight(0.3);
            line(0, 0, len, 0);
            translate(len, 0);

            for (let j = 0; j < TWO_PI; j += 0.5) {
                push();
                rotate(-this.theta - j);
                line(0, 0, len / 4, 0);
                pop();
            }

            pop();
        }
        pop();
    }

    update() {
        this.xtime += this.increment;
        this.ytime += this.increment;
        this.theta += this.speed;
    }
}

class Letter_mother {

    constructor(character, Xpos, Ypos) {
        this.cha = character;
        this.currentX = this.homeX = Xpos;
        this.currentY = this.homeY = Ypos;
        this.rainbow = color(random(0, 50)); //100, 200
        this.xTime = random(1);
        this.yTime = random(1);
        this.increment = random(0.01, 0.015); //random(0.005, 0.01);
    }
    
    display() {
        textAlign(LEFT);
        
        if ((sceneNumber == 1 || sceneNumber == 6 || sceneNumber == 11) && !change[sceneNumber - 1]) {       
            fill(200);
            stroke(100);
        }else {
            stroke(100);
            noStroke();
            fill(this.rainbow);
        }
        text(this.cha, this.currentX, this.currentY);
    }
    
    shake() {
        this.currentX = noise(this.xTime) * width;
        this.currentY = noise(this.yTime) * height + 150; //parallel translation----> +200
    }

    time() {
        this.xTime += this.increment;
        this.yTime += this.increment;
    }
    
    relocate() {
        let distance = dist(this.currentX, this.currentY, this.homeX, this.homeY);
        let speed = map(distance, 50, 0, 10, 0);

        if (this.currentY != this.homeY && this.currentY > this.homeY) {
            this.currentY -= speed;
        } else if (this.currentY != this.homeY && this.currentY < this.homeY) {
            this.currentY += speed;
        } else {
            this.currentY = this.homeY;
        }
        if (this.currentX != this.homeX && this.currentX > this.homeX) {
            this.currentX -= speed;
        } else if (this.currentX != this.homeX && this.currentX < this.homeX) {
            this.currentX += speed;
        } else {
            this.currentX = this.homeX;
        }
    }
}

class Letter_father {

    constructor(character, Xpos, Ypos) {
        this.cha = character;
        this.currentX = this.homeX = Xpos;
        this.currentY = this.homeY = Ypos;
        this.rainbow = color(random(0, 50));
        this.xTime = random(1);
        this.yTime = random(1);
        this.increment = random(0.01, 0.015);
    }
    
    display() {
        textAlign(LEFT);
        
        if ((sceneNumber == 2 || sceneNumber == 7 || sceneNumber == 12) && !change[sceneNumber - 1]) {       
            fill(200);
            stroke(100);
        }else {
            stroke(100);
            noStroke();
            fill(this.rainbow);
        }
        text(this.cha, this.currentX, this.currentY);
    }
    
    shake() {
        this.currentX = noise(this.xTime) * width;
        this.currentY = noise(this.yTime) * height + 150; //parallel translation
    }

    time() {
        this.xTime += this.increment;
        this.yTime += this.increment;
    }
    
    relocate() {
        let distance = dist(this.currentX, this.currentY, this.homeX, this.homeY);
        let speed = map(distance, 50, 0, 10, 0);

        if (this.currentY != this.homeY && this.currentY > this.homeY) {
            this.currentY -= speed;
        } else if (this.currentY != this.homeY && this.currentY < this.homeY) {
            this.currentY += speed;
        } else {
            this.currentY = this.homeY;
        }
        if (this.currentX != this.homeX && this.currentX > this.homeX) {
            this.currentX -= speed;
        } else if (this.currentX != this.homeX && this.currentX < this.homeX) {
            this.currentX += speed;
        } else {
            this.currentX = this.homeX;
        }
    }
}

class Letter_aunt {

    constructor(character, Xpos, Ypos) {
        this.cha = character;
        this.currentX = this.homeX = Xpos;
        this.currentY = this.homeY = Ypos;
        this.rainbow = color(random(0, 50));
        this.xTime = random(1);
        this.yTime = random(1);
        this.increment = random(0.01, 0.015);
    }
    
    display() {
        textAlign(LEFT);
        
        if ((sceneNumber == 3 || sceneNumber == 8 || sceneNumber == 13) && !change[sceneNumber - 1]) {       
            fill(200);
            stroke(100);
        }else {
            stroke(100);
            noStroke();
            fill(this.rainbow);
        }
        text(this.cha, this.currentX, this.currentY);
    }
    
    shake() {
        this.currentX = noise(this.xTime) * width;
        this.currentY = noise(this.yTime) * height + 150; //parallel translation
    }

    time() {
        this.xTime += this.increment;
        this.yTime += this.increment;
    }
    
    relocate() {
        let distance = dist(this.currentX, this.currentY, this.homeX, this.homeY);
        let speed = map(distance, 50, 0, 10, 0);

        if (this.currentY != this.homeY && this.currentY > this.homeY) {
            this.currentY -= speed;
        } else if (this.currentY != this.homeY && this.currentY < this.homeY) {
            this.currentY += speed;
        } else {
            this.currentY = this.homeY;
        }
        if (this.currentX != this.homeX && this.currentX > this.homeX) {
            this.currentX -= speed;
        } else if (this.currentX != this.homeX && this.currentX < this.homeX) {
            this.currentX += speed;
        } else {
            this.currentX = this.homeX;
        }
    }
}

class Letter_sister {

    constructor(character, Xpos, Ypos) {
        this.cha = character;
        this.currentX = this.homeX = Xpos;
        this.currentY = this.homeY = Ypos;
        this.rainbow = color(random(0, 50));
        this.xTime = random(1);
        this.yTime = random(1);
        this.increment = random(0.01, 0.015);
    }
    
    display() {
        textAlign(LEFT);
        
        if ((sceneNumber == 4 || sceneNumber == 9 || sceneNumber == 14) && !change[sceneNumber - 1]) {       
            fill(200);
            stroke(100);
        }else {
            stroke(100);
            noStroke();
            fill(this.rainbow);
        }
        text(this.cha, this.currentX, this.currentY);
    }
    
    shake() {
        this.currentX = noise(this.xTime) * width;
        this.currentY = noise(this.yTime) * height + 150; //parallel translation
    }

    time() {
        this.xTime += this.increment;
        this.yTime += this.increment;
    }
    
    relocate() {
        let distance = dist(this.currentX, this.currentY, this.homeX, this.homeY);
        let speed = map(distance, 50, 0, 10, 0);

        if (this.currentY != this.homeY && this.currentY > this.homeY) {
            this.currentY -= speed;
        } else if (this.currentY != this.homeY && this.currentY < this.homeY) {

            this.currentY += speed;
        } else {
            this.currentY = this.homeY;
        }

        if (this.currentX != this.homeX && this.currentX > this.homeX) {
            this.currentX -= speed;
        } else if (this.currentX != this.homeX && this.currentX < this.homeX) {
            this.currentX += speed;
        } else {
            this.currentX = this.homeX;
        }
    }
}

class Letter_brother {

    constructor(character, Xpos, Ypos) {
        this.cha = character;
        this.currentX = this.homeX = Xpos;
        this.currentY = this.homeY = Ypos;
        this.rainbow = color(random(0, 50));
        this.xTime = random(1);
        this.yTime = random(1);
        this.increment = random(0.01, 0.015);
    }
    
    display() {
        textAlign(LEFT);
        if ((sceneNumber == 5 || sceneNumber == 10 || sceneNumber == 15) && !change[sceneNumber - 1]) {       
            fill(200);
            stroke(100);
        }else {
            stroke(100);
            noStroke();
            fill(this.rainbow);
        }
        text(this.cha, this.currentX, this.currentY);
    }
    
    shake() {
        this.currentX = noise(this.xTime) * width;
        this.currentY = noise(this.yTime) * height + 150; //parallel translation
    }

    time() {
        this.xTime += this.increment;
        this.yTime += this.increment;
    }
    
    relocate() {
        let distance = dist(this.currentX, this.currentY, this.homeX, this.homeY);
        let speed = map(distance, 50, 0, 10, 0);

        if (this.currentY != this.homeY && this.currentY > this.homeY) {
            this.currentY -= speed;
        } else if (this.currentY != this.homeY && this.currentY < this.homeY) {
            this.currentY += speed;
        } else {
            this.currentY = this.homeY;
        }

        if (this.currentX != this.homeX && this.currentX > this.homeX) {
            this.currentX -= speed;
        } else if (this.currentX != this.homeX && this.currentX < this.homeX) {
            this.currentX += speed;
        } else {
            this.currentX = this.homeX;
        }
    }
}


class Tree {

    constructor(position, leftLength, rightLength) {
        this.angle = PI / 6;
        this.x1 = position;
        this.x2 = position;
        this.leftLength = leftLength;
        this.rightLength = rightLength;
    }

    translates(i) {

        if (i == 0) {
            translate(this.x1, height);
        } else if (i == 1) {
            translate(this.x2, height);
        }
    }

    branch(len) {

        strokeWeight(len / 30);
        line(0, 0, 0, -len);
        translate(0, -len);


        if (len > 10) {
            push();
            rotate(this.angle);
            this.branch(len * this.leftLength); //0.5(origin)
            pop();
            push();
            rotate(-this.angle);
            this.branch(len * this.rightLength); // 0.67(orighin)-> 0.87
            pop();
        }
    }
}