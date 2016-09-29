console.log('Loaded!');
var element=document.getElementById("main-text");
element.onclick = function() {
  element.innerHTML='I am interested in Computer and electronics...';  
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
 
 var button=document.getElementById('counter');
 var counter=0;
 button.onclick = function() {
   counter=counter+1;
   var span=document.getElementById('count');
   span.innerHTML=counter.toString();
 };