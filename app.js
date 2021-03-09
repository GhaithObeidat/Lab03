var name = prompt('enter your name');
alert("Welcome " + name);
confirm("This is our first website demo");
function yourName(){
var color = prompt('What color do you prefer : red, blue, green?');
if (color == 'red') {
    document.body.innerText = String.fromCodePoint(0x1F600);
    document.write('<h1 style="color:red;">Welcome to ASAC</h1>');
}
else if (color == "blue") {
    document.body.innerText = String.fromCodePoint(0x1F600);
    document.write('<h1 style="color:blue;">Welcome to ASAC</h1>');
}
else if (color == 'green') {
    document.body.innerText = String.fromCodePoint(0x1F600);
    document.write('<h1 style="color:green;">Welcome to ASAC</h1>');
}
else {
    document.body.innerText = String.fromCodePoint(0x1F600);
    document.write('<h1>Welcome to ASAC</h1>');
    
}
}
yourName();



