init();
function init(){
var count=10;
var resbtn = document.querySelector("#resbtn");
var form = document.querySelector("#frm");

form.addEventListener("submit", Check);
resbtn.addEventListener("click", resetFunction);

var letterbutton = document.querySelector(".letterbutton");
var alfabet = "aąbcćdeęfghijklłmnńoóprsśtuywzźż";
var index;
var animals= ["tygrys", "łoś", "aligator", "halibut", "sandacz", "wielbłąd", "sęp", "sowa", "wiewiórka", "papuga", 
"koń", "flaming", "indyk", "foka", "morszczuk", "flądra", "żubr", "mucha", "mintaj", "szerszeń", "delfin", "rekin", 
"anakonda", "antylopa", "borsuk", "byk", "bocian", "bóbr", "baran", "bizon", "fretka", "bawół",
"chomik", "czapla", "dzik", "drozd", "daniel", "gęś", "gołąb","gepard", "homar", "hiena", "kuropatwa", "kaczka", "kuna",
"kret", "lew", "lis", "lama", "owca", "małpa", "mamut", "muł", "nietoperz", "osa", "osioł", "orka", "puma", "pawian",
"panda", "ryś", "sum", "lin", "sieja", "struś","sroka", "trzmiel",  "sielawa", "troć", "łosoś", "wilk"];
var anim = animals[Math.floor(Math.random() * animals.length)];
anim = anim.split("");
var remain = anim.length;
var arr = [];
for (var i=0; i<anim.length; i++)
{
arr[i] ="_ ";
}
document.getElementById("word").innerHTML = arr.join("");

function Check(e)
{
    e.preventDefault();
var litera =document.getElementById("text").value;

if (anim.indexOf(litera) == -1 && alfabet.indexOf(litera) != -1 && litera.length == 1)
{
if (count >0){
count--;
document.getElementById("lit").innerHTML +=litera +", ";
}
document.getElementById("counter").innerHTML =count;

}
if (alfabet.indexOf(litera) != -1 && litera.length == 1 && anim.indexOf(litera) != -1){
if (count >0){
document.getElementById("lit").innerHTML +=litera+", ";
}
}
for (var j=0; j<anim.length; j++)
{
if (litera == anim[j] && alfabet.indexOf(litera) != -1)
{
if (count>0){
arr[j] = litera;
}
remain--;
}

}
document.getElementById("word").innerHTML = arr.join("");

index = alfabet.indexOf(litera);
if(index != -1)
{
alfabet = alfabet.split("");
alfabet.splice(index,1);
alfabet = alfabet.join("");
}
if (remain == 0)
{
document.getElementById("end").innerHTML = "Gratulacje wygrałeś!";
document.getElementById("oo").innerHTML = "";
letterbutton.setAttribute("disabled", "disabled");
}
if (count == 0)
{
document.getElementById("word").innerHTML = anim.join("");
document.getElementById("counter").innerHTML = "0";
document.getElementById("end").innerHTML = "Niestety nie udało Ci się";
letterbutton.setAttribute("disabled", "disabled");
}
}

function resetFunction() {
    location.reload();
}
}