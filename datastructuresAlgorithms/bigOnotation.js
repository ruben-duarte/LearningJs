let text = "learning Javascript";

function reversedString (string) {
    let reversed= "";
    for (let i=string.length; i>=0; i--){
        reversed += string[i];
        //console.log(i);
    }
    return reversed
}

a = reversedString(text)
console.log(a);
console.log("Hola");

function reverse(s) {
    var o = [];
    for (var i = s.length - 1, j = 0; i >= 0; i--, j++)
      o[j] = s[i];
    return o.join('');
  }


function reverse(s) {
var o = [];
for (var i = 0, len = s.length; i <= len; i++)
    o.push(s.charAt(len - i));
return o.join('');
}


function reverse(s) {
return s.split('').reverse().join('');
}


function reverse(s) {
var i = s.length,
    o = '';
while (i > 0) {
    o += s.substring(i - 1, i);
    i--;
}
return o;
}



function reverse(s) {
for (var i = s.length - 1, o = ''; i >= 0; o += s[i--]) { }
return o;
}

function reverse(s) {
return (s === '') ? '' : reverse(s.substr(1)) + s.charAt(0);
}

function reverse(s) {
function rev(s, len, o) {
    return (len === 0) ? o : rev(s, --len, (o += s[len]));
};
return rev(s, s.length, '');
}


function reverse(s) {
s = s.split('');
var len = s.length,
    halfIndex = Math.floor(len / 2) - 1,
    tmp;


    for (var i = 0; i <= halfIndex; i++) {
        tmp = s[len - i - 1];
        s[len - i - 1] = s[i];
        s[i] = tmp;
    }
    return s.join('');
    }


function reverse(s) {
if (s.length < 2)
    return s;
var halfIndex = Math.ceil(s.length / 2);
return reverse(s.substr(halfIndex)) +
        reverse(s.substr(0, halfIndex));
}


var reverser  = function(str){
let string = str.split('');

    for(i=0;i<string.length;i++){
        debugger;
        string.splice(i,0,string.pop());
    
    } 
    console.log(string.join())
}
reverser('abcdef')

function reverse(s){
    return [...s].reverse().join("");
}


function reverse(s){
    return s.split(/(?:)/u).reverse().join("");
}
