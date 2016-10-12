var submit = document.getElementById('submitbtn');
 submit.onclick = function() {
     var request = new XMLHttpRequest();
      request.onreadystatechange = function(){
       if(request.readyState === XMLHttpRequest.DONE ){
         if(request.status === 200){
              var comments = request.responseText;
              comments=JSON.parse(comments);
              var comment='';
              for (var i=0; i < comments.length; i++){
               comment+= comments[i] +  '<br>' + '<hr/>';
               } 
               var div=document.getElementById('commentlist');
               div.innerHTML=comment;
          }
       }
      };
    var inputcomment = document.getElementById('comments');
    var comminp=inputcomment.value;
    request.open('GET','http://aks681.imad.hasura-app.io/submitcomment?comment='+comminp,true);
    request.send(null);
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