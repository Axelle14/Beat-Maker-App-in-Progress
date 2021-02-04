class DrumKit {
    constructor() {
        this.pads = document.querySelectorAll('.pad');
        this.playBtn = document.querySelector('.play')
        this.KickAudio = document.querySelectorAll('.Kick-sound');
        this.SnareAudio = document.querySelectorAll('.Snare-sound');
        this.HihatAudio = document.querySelectorAll('.Hihat-sound');
        this.index = 0;
        this.bpm = 150;
    }
    activePad() {
        this.classList.toggle("active");
    }
    repeat() {
        let step = this.index % 8;
        const activeBars = document.querySelectorAll(`.b${step}`);
        // Loop over the pads
        activeBars.forEach(bar => {
            bar.style.animation = `playTrack 0.3s alternate ease-in-out 2`;
            // Check if pads are active
            if (bar.classList.contains('active')) {
                //Check each sound
                if (bar.classList.contains('Kick-pad')) {
                    this.KickAudio.play();
                }
                if (bar.classList.contains('Snare-pad')) {
                    this.SnareAudio.play();
                }
                if (bar.classList.contains('Hihat-pad')) {
                    this.HihatAudio.play();
                }
            }
        });
        this.index++;
    }
    start() {
        const interval = (60 / this.bpm) * 1000;
        setInterval(() => {
            this.repeat()
        }, interval);
    }
}

const drumKit = new DrumKit();

drumKit.pads.forEach(pad => {
    pad.addEventListener("click", drumKit.activePad);
    pad.addEventListener('animationend', function () {
        this.style.animation = "";
    });
});

drumKit.playBtn.addEventListener('click', () => {
    drumKit.start();
})