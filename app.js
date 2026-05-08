function generateQR() {
    let text = document.getElementById("text").value;
    if(!text) {
        swal(
            {
                title: 'Error!',
                text: 'Please enter your text or URL',
                icon: 'error'
            }
        )
return;
}
let qr =  "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(text);
document.getElementById("qrBox").innerHTML = "<img src='" + qr + "'>";
}