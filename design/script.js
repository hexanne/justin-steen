document.querySelector('.switch').addEventListener('change',()=>{
if(document.querySelector('.switch').checked == false) {
document.querySelector('.details').style.height = "0px";
}else if (document.querySelector('.switch').checked == true){
document.querySelector('.details').style.height = "auto"; }});
document.querySelector('.switch1').addEventListener('change',()=>{
if(document.querySelector('.switch1').checked == false) {
document.querySelector('.details1').style.height = "0px";
}else if (document.querySelector('.switch1').checked == true){
document.querySelector('.details1').style.height = "auto"; }});
document.querySelector('.switch2').addEventListener('change',()=>{
if(document.querySelector('.switch2').checked == false) {
document.querySelector('.details2').style.height = "0px";
}else if (document.querySelector('.switch2').checked == true){
document.querySelector('.details2').style.height = "auto"; }});