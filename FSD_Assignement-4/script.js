function changeColor(){
    var body = document.body;
    var span = document.querySelector('.span-class');
    var button = document.querySelector('.button');
    var hexCode = '#';
    var hexDigits = '0123456789ABCDEF';
    for (var i = 0; i < 6; i++) {
    hexCode += hexDigits[Math.floor(Math.random() * 16)];
    }
    body.style.backgroundColor = hexCode;
    button.style.backgroundColor = hexCode;
    span.innerHTML = hexCode;
} 