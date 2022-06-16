precdtion1 = "";
predction2 = "";
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}
console.log("ml5version", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json", modelloaded);

function modelloaded() {
    console.log("modelloaded");
}

function speak() {
    var synth = window.speechSynthesis;
    speakdata1 = "the first prediction is " + precdtion1;
    speakdata2 = "and the second prediction is " + precdtion2;
    var speakthis = new SpeechSynthesisUtterance(speakdata1 + speakdata2);
    synth.speak(speakthis)
}
function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img,gotresult);
}
function gotresult(error,results){
if (error) {
    console.error(error);
} else {
    console.log(results);
    document.getElementById("result_emotion_name").innerHTML=results[0].label;
    document.getElementById("result_emotion_name2").innerHTML=results[1].label;
    precdtion1=results[0].label;
    precdtion2=results[1].label;
    speak();
    if (result[0].label=="happy") {
        document.getElementById("update_emoji").innerHTML="&#128522;";
    }
    if (result[0].label=="sad") {
        document.getElementById("update_emoji").innerHTML="&#128532;";
    }
    if (result[0].label=="angry") {
        document.getElementById("update_emoji").innerHTML="&#128548;";
    }
    if (result[1].label=="happy") {
        document.getElementById("update_emoji2").innerHTML="&#128522;";
    }
    if (result[1].label=="sad") {
        document.getElementById("update_emoji2").innerHTML="&#128532;";
    }
    if (result[1].label=="angry") {
        document.getElementById("update_emoji2").innerHTML="&#128548;";
    }
}
}