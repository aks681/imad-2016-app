 var submitII = document.getElementById('submitbtnii');
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
               var ul=document.getElementById('commentlist');
               ul.innerHTML=text;
          }
       }
      };
    var inputcomment = document.getElementById('comments');
    var comm=inputcomment.value;
    request.open('GET','http://aks681.imad.hasura-app.io/ui/article.html/submitcomment?comment='+comm,true);
    request.send(null);
   
 };