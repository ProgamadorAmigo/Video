let video = document.getElementById("video1");

function diminuirVel() {

    video.playbackRate -= 0.1;

}

function retroceder() {

    video.currentTime -= 3;

}

function stop() {

    video.pause();

}

function play() {

    video.play();
    // video.currentTime = 0;

}

function avancar() {

    video.currentTime += 3;

}

function almentarVel() {

    video.playbackRate += 0.1;

}