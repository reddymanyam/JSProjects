let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
const btn = document.getElementById("btn");

btn.addEventListener("click", generateQR);

function generateQR() {

    if (qrText.value.trim().length > 0) {
        qrImage.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value.trim();
        imgBox.classList.add("show-img");
    } else {
        alert("enter the text")
    }
    console.log("button is clicked")
}