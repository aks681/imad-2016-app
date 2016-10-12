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
 
 var submit = document.getElementById('submitbtn');
 submit.onclick = function() {
     var request = new XMLHttpRequest();
      request.onreadystatechange = function(){
       if(request.readyState === XMLHttpRequest.DONE ){
         if(request.status === 200){
              var names = request.responseText;
              names=JSON.parse(names);
              var list='';
              for (var i=0; i < names.length; i++){
               list+= '<li>' + names[i] +  '</li>';
               } 
               var ul=document.getElementById('namelist');
               ul.innerHTML=list;
          }
       }
      };
    var nameInput = document.getElementById('name');
    var nameinp=nameInput.value;
    request.open('GET','http://aks681.imad.hasura-app.io/submitname?name='+nameinp,true);
    request.send(null);
   
 };
 
 var submitII = document.getElementById('submitbtnII');
 submitII.onclick = function() {
     var request = new XMLHttpRequest();
      request.onreadystatechange = function(){
       if(request.readyState === XMLHttpRequest.DONE ){
         if(request.status === 200){
              var comments = request.responseText;
              comments=JSON.parse(comments);
              var text='';
              for (var i=0; i < comments.length; i++){
               text+= '<li>' + names[i] +  '</li>';
               } 
               var div=document.getElementById('commentlist');
               div.innerHTML=text;
          }
       }
      };
    var inputcomment = document.getElementById('comments');
    var comm=inputcomment.value;
    request.open('GET','http://aks681.imad.hasura-app.io/article1/submitcomment?comment='+comm,true);
    request.send(null);
   
 };
 