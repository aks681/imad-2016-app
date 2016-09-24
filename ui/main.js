console.log('Loaded!');
var element=document.getElementById("main-text");
element.onclick = function() {
  element.innerHTML='Nothing Much about me anymore except that I was born on 21/10/1998';  
};
 var img=document.getElementById("img");
 var marginleft=0;
 function moveright()
 {
     marginleft=marginleft+5;
     img.style.marginLeft=marginleft+'px';
 }
 img.onclick = function() {
     var interval = setInterval(moveright,50);
 };