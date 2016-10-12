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
               comment+= '<div>' + comments[i] +  '</div>';
               } 
               var div=document.getElementById('commentlist');
               div.innerHTML=comment;
          }
       }
      };
    var inputcomment = document.getElementById('comments');
    var comminp=inputcomment.value;
    request.open('GET','http://aks681.imad.hasura-app.io/article1/submitcomment?comment='+comminp,true);
    request.send(null);
};