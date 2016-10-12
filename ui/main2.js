var submit = document.getElementById('submitbtn');
 submit.onclick = function() {
     var request = new XMLHttpRequest();
      request.onreadystatechange = function(){
       if(request.readyState === XMLHttpRequest.DONE ){
         if(request.status === 200){
              var comments = request.responseText;
              comments=JSON.parse(comments);
              var list='';
              for (var i=0; i < comments.length; i++){
               list+= '<li>' + comments[i] +  '</li>';
               } 
               var ul=document.getElementById('commentlist');
               ul.innerHTML=list;
          }
       }
      };
    var inputcomment = document.getElementById('comments');
    var comminp=inputcomment.value;
    request.open('GET','http://aks681.imad.hasura-app.io/article1/submitcomment?comment='+comminp,true);
    request.send(null);
};