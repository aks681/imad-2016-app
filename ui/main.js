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
 
 button.onclick = function() {
   var request = new XMLHttpRequest();
   request.onreadystatechange = function(){
       if(request.readyState === XMLHttpRequest.DONE ){
         if(request.status === 200){
          var counter = request.responseText;
          var span = document.getElementById('count');
          span.innerHTML = counter.toString();
         }
       }
   };
   request.open('GET','http://aks681.imad.hasura-app.io/counter',true);
   request.send(null);
 };