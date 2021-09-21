function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifeir('https://teachablemachine.withgoogle.com/models/s3wFLThzg/model.json', modelReady);
   
}

function modelReady(){
classifier.classify(gotResults);
}