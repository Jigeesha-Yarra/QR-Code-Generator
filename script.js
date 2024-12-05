// This initializes a new QR code generator using the QRCode library and binds it to the div with the class .qrcode.

let qrcode = new QRCode(document.querySelector(".qrcode")); 
let input = document.querySelector(".input");

// Generates a default QR code with the message "Why did you scan me?" when the page loads.
//  makeCode method takes a string as input and creates a QR code for that string.
qrcode.makeCode("Why did you scan me?"); 

input.addEventListener("keydown",(event) => {
    if(event.key === "Enter"){
        generateQRCode();
    }
})

function generateQRCode(){
    let text = input.value;
    if(text === ""){
        alert("Input field cannot be blank");
    }else{
        qrcode.makeCode(text); // Generate QR
    }
}
