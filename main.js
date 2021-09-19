Webcam.set({
    width: 300,
    height: 250,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach(camera);

function Take_Snapshot() {
    Webcam.snap(function (img) {
        document.getElementById("result").innerHTML = '<img src="' + img + '">';
    }
    );
}