let  progress = document.querySelector('#progress-bar');
let  progress1 = document.querySelector('#progress-bar1');
let  progress2 = document.querySelector('#progress-bar2');
let  progress3 = document.querySelector('#progress-bar3');
const nsong = document.querySelector('#song'); 
const nsong1 = document.querySelector('#song1'); 
const nsong2 = document.querySelector('#song2');
const nsong3 = document.querySelector('#song3');
const pPause = document.querySelector('#play-pause'); 
const  pPause1 = document.querySelector('#play-pause1'); 
const  pPause2 = document.querySelector('#play-pause2');
const  pPause3 = document.querySelector('#play-pause4');
let progressBar1;
let progressBar2;
let progressBar3;
let progressBar4;
let played2 = true;
let playing =true;
let playing1 = true;
let playing2 = true;
document.querySelector('#progress-bar').type="hidden";
document.querySelector('.sol').style.display = "none";
document.querySelector('#progress-bar1').type="hidden";
document.querySelector('.sol1').style.display = "none";
document.querySelector('#progress-bar2').type="hidden";
document.querySelector('.sol2').style.display = "none";
document.querySelector('#progress-bar3').type="hidden";
document.querySelector('.sol3').style.display = "none";
function playPause() {
    if (playing) {
        nsong.play();
        pPause.src = "/icons/pause.png";
        nsong1.pause();
        pPause1.src="/icons/play.png";
        nsong2.pause();
        pPause2.src = "/icons/play.png";
        nsong3.pause();
        pPause3.src = "/icons/play.png";
        progressBar1 = progress;
        nsong1.currentTime = 0.00;
        nsong2.currentTime = 0.00;
        nsong3.currentTime = 0.00;
        playing = false;
        document.querySelector('.sol').style.display = "block";
        document.querySelector('#progress-bar').type ="range";
        document.querySelector('.sol1').style.display = "none";
        document.querySelector('#progress-bar1').type ="hidden";
        document.querySelector('.sol2').style.display = "none";
        document.querySelector('#progress-bar2').type = "hidden";
        document.querySelector('.sol3').style.display = "none";
        document.querySelector('#progress-bar3').type = "hidden";
        function updateProgressValue() {
            progressBar1.max = nsong.duration;
            progressBar1.value = nsong.currentTime;
            document.querySelector('.currentTime').innerHTML = (formatTime(Math.floor(nsong.currentTime)));
            if (document.querySelector('.durationTime').innerHTML === "NaN:NaN") {
                document.querySelector('.durationTime').innerHTML = "0:00";
            } else {
                document.querySelector('.durationTime').innerHTML = (formatTime(Math.floor(nsong.duration)));
            }
        };
    function formatTime(seconds) {
        let min = Math.floor((seconds / 60));
        let sec = Math.floor(seconds - (min * 60));
        if (sec < 10){ 
            sec  = `0${sec}`;
        };
        return `${min}:${sec}`;
    };
    setInterval(updateProgressValue, 500);
    } else 
    {
        pPause.src = "/icons/play.png";
        document.querySelector('#progress-bar').type="hidden";
        document.querySelector('.sol').style.display = "none";
        nsong.pause();
        playing = true;
    }
}
function playPause1() {
    if (playing1) {
        nsong1.play();
        pPause1.src = "/icons/pause.png";
        nsong3.pause();
        pPause3.src = "/icons/play.png";
        nsong.pause();
        pPause.src = "/icons/play.png";
        nsong2.pause();
        pPause2.src = "/icons/play.png";
        n=2;
        progressBar2 = progress1;
        nsong.currentTime=0.00;
        nsong2.currentTime=0.00;
        nsong3.currentTime = 0.00;
        playing1 = false;
        document.querySelector('.sol1').style.display = "block";
        document.querySelector('#progress-bar1').type="range";
        document.querySelector('#progress-bar').type="hidden";
        document.querySelector('.sol').style.display = "none";
        document.querySelector('#progress-bar2').type="hidden";
        document.querySelector('.sol2').style.display = "none";
        document.querySelector('#progress-bar3').type="hidden";
        document.querySelector('.sol3').style.display = "none";
        function updateProgressValue()
        {
        progressBar2.max = nsong1.duration;
        progressBar2.value = nsong1.currentTime;
            document.querySelector('.currentTime1').innerHTML = (formatTime(Math.floor(nsong1.currentTime)));
            if (document.querySelector('.durationTime1').innerHTML === "NaN:NaN") {
                document.querySelector('.durationTime1').innerHTML = "0:00";
            } else {
                document.querySelector('.durationTime1').innerHTML = (formatTime(Math.floor(nsong1.duration)));
            }  
        }
        function formatTime(seconds) {
            let min = Math.floor((seconds / 60));
            let sec = Math.floor(seconds - (min * 60));
            if (sec < 10){ 
                sec  = `0${sec}`;
            };
            return `${min}:${sec}`;
        };
        setInterval(updateProgressValue, 500);
    } else 
    {
        pPause1.src = "/icons/play.png"; 
        document.querySelector('.sol1').style.display = "none";
        document.querySelector('#progress-bar1').type="hidden";  
        nsong1.pause();
        playing1 = true;
    }
}
function playPause2() {
    if (playing2) {
        nsong2.play();
        pPause2.src = "/icons/pause.png";
        nsong3.pause();
        pPause3.src = "/icons/play.png";
        nsong.pause();
        pPause1.src = "/icons/play.png";
        nsong1.pause();
        pPause.src = "/icons/play.png";
        progressBar3 = progress2;
        nsong.currentTime=0.00;
        nsong1.currentTime=0.00;
        nsong3.currentTime=0.00;
        playing2 = false;
        document.querySelector('.sol2').style.display = "block";
        document.querySelector('#progress-bar2').type="range";
        document.querySelector('#progress-bar').type="hidden";
        document.querySelector('.sol').style.display = "none";
        document.querySelector('#progress-bar1').type="hidden";
        document.querySelector('.sol1').style.display = "none";
        document.querySelector('#progress-bar3').type="hidden";
        document.querySelector('.sol3').style.display = "none";
        function updateProgressValue()
        {
        progressBar3.max = nsong2.duration;
        progressBar3.value = nsong2.currentTime;
            document.querySelector('.currentTime2').innerHTML = (formatTime(Math.floor(nsong2.currentTime)));
            if (document.querySelector('.durationTime2').innerHTML === "NaN:NaN") {
                document.querySelector('.durationTime2').innerHTML = "0:00";
            } else {
                document.querySelector('.durationTime2').innerHTML = (formatTime(Math.floor(nsong2.duration)));
            }  
        }
        function formatTime(seconds) {
            let min = Math.floor((seconds / 60));
            let sec = Math.floor(seconds - (min * 60));
            if (sec < 10){ 
                sec  = `0${sec}`;
            };
            return `${min}:${sec}`;
        };
        setInterval(updateProgressValue, 500);
    } else 
    {
        pPause2.src = "/icons/play.png";
        document.querySelector('.sol2').style.display = "none";
        document.querySelector('#progress-bar2').type="hidden";  
        nsong2.pause();
        playing2 = true;
    }
}
function playPause4()
{
    if(played2)
    {
    nsong3.play();
    pPause3.src = "/icons/pause.png";
    played2 = false;
    pPause2.src = "/icons/play.png";
    nsong2.pause();
    pPause.src = "/icons/play.png";
    nsong.pause();
    pPause1.src = "/icons/play.png";
    nsong1.pause();
    progressBar4 = progress3;
    nsong.currentTime=0.00;
    nsong1.currentTime=0.00;
    nsong2.currentTime=0.00;
    progressBar4 = progress3;
    document.querySelector('.sol3').style.display = "block";
    document.querySelector('#progress-bar3').type ="range";
    document.querySelector('.sol').style.display = "none";
    document.querySelector('#progress-bar').type ="hidden";
    document.querySelector('.sol1').style.display = "none";
    document.querySelector('#progress-bar1').type ="hidden";
    document.querySelector('.sol2').style.display = "none";
    document.querySelector('#progress-bar2').type = "hidden";
    function updateProgressValue() {
        progressBar4.max = nsong3.duration;
        progressBar4.value = nsong3.currentTime;
        document.querySelector('.currentTime3').innerHTML = (formatTime(Math.floor(nsong3.currentTime)));
        if (document.querySelector('.durationTime3').innerHTML === "NaN:NaN") {
            document.querySelector('.durationTime3').innerHTML = "0:00";
        } else {
            document.querySelector('.durationTime3').innerHTML = (formatTime(Math.floor(nsong3.duration)));
        }
    };
     function formatTime(seconds) 
    {
    let min = Math.floor((seconds / 60));
    let sec = Math.floor(seconds - (min * 60));
    if (sec < 10){ 
        sec  = `0${sec}`;
    };
    return `${min}:${sec}`;
    };
setInterval(updateProgressValue, 500);
    }
    else
    {
        pPause3.src = "/icons/play.png";
        nsong3.pause();
        played2= true;
        document.querySelector('.sol3').style.display = "none";
        document.querySelector('#progress-bar3').type="hidden";  
    }
}
function changeProgressBar() {
    nsong.currentTime = progressBar1.value;
}
function changeProgressBar1() {
    nsong1.currentTime = progressBar2.value;
}
function changeProgressBar2() {
    nsong2.currentTime = progressBar3.value;
}
function changeProgressBar3() {
    nsong3.currentTime = progressBar4.value;
}
document.querySelector('#progress-bar').type="hidden";
document.querySelector('.sol').style.display = "none";
document.querySelector('#progress-bar1').type="hidden";
document.querySelector('.sol1').style.display = "none";
document.querySelector('#progress-bar2').type="hidden";
document.querySelector('.sol2').style.display = "none";
document.querySelector('#progress-bar3').type="hidden";
document.querySelector('.sol3').style.display = "none";