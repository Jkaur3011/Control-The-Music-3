leftwristx = 0;
leftwristy = 0;
rightwristx = 0;
rightwristy = 0;

function preload(){
    engkor1 = loadSound("EBeliever.mp3");
    engkor2 = loadSound("EDirtyLittleSecret.mp3");
    engkor3 = loadSound("EHowYouLikeThat.mp3");
    engkor4 = loadSound("ETeeth.mp3");
    engkor5 = loadSound("EUnholy.mp3");
    engkor6 = loadSound("KButIt'sDestiny.mp3");
    engkor7 = loadSound("KFlower.mp3");
    engkor8 = loadSound("KHereIAmAgain.mp3");
    engkor9 = loadSound("KPicturesOfMyHeart.mp3");
    engkor10 = loadSound("KSunset.mp3");
    hindi1 = loadSound("HAcchaSilaDiya.mp3");
    hindi2 = loadSound("HChorrDenge.mp3");
    hindi3 = loadSound("HDanceMeriRani.mp3");
    hindi4 = loadSound("HJhoomeJoPathaan.mp3");
    hindi5 = loadSound("HKusuKusu.mp3");
    hindi6 = loadSound("HMaanMeriJaan.mp3");
    hindi7 = loadSound("HManike.mp3");
    hindi8 = loadSound("HMercy.mp3");
    hindi9 = loadSound("HOSakiSaki.mp3");
    hindi10 = loadSound("HPasoori.mp3");
}

function setup(){
    canvas = createCanvas(600, 400);
    canvas.position(450, 220);

    video = createCapture(VIDEO);
    video.hide();

    mypN = ml5.poseNet(video, modelloaded);
    mypN.on('pose', gotPoses);
}

function modelloaded(){
    console.log("Posenet is loaded!");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);

        leftwristx = results[0].pose.leftWrist.x;
        leftwristy = results[0].pose.leftWrist.y;
        rightwristx = results[0].pose.rightWrist.x;
        rightwristy = results[0].pose.rightWrist.y;
    }
}

function draw(){
    image(video, 0, 0, 600, 450);
}