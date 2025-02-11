const qrtext = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generatebtn = document.getElementById('generate');
const downloadbtn = document.getElementById('download');
const qrcontainer = document.querySelector('.qr-body');
let size=sizes.value;
generatebtn.addEventListener('click', (e) => {
    e.preventDefault();
    isemptyinput();
    
});


sizes.addEventListener('change', (e) => {
    size=e.target.value;
    isemptyinput();
    
});


function isemptyinput(){
    if(qrtext.value.length>0){
        generateQrcode();
    }else{
        alert("enter the text or url first");
    }
    
}

 
function generateQrcode() {
    qrcontainer.innerHTML = ""; // Clear previous QR code
   

    new QRCode(qrcontainer, {
        text: qrtext.value, // Fixed property name
        width: size,
        height: size,
        colorLight: "#fff", // Corrected key name (case-sensitive)
        colorDark: "#000"
    });
}

downloadbtn.addEventListener('click', ()=>{
    let img = document.querySelector('.qr-body img');
    if(img!==null){
        let imgAttr = img.getAttribute('src');
        downloadbtn.setAttribute('href',imgAttr);

    }else{
        downloadbtn.setAttribute('href',`${document.querySelector('canvas').toDataURL}`);
 
    }

});
