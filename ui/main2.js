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
               var ul=document.getElementById('commentlist');
               ul.innerHTML=list;
          }
       }
      };
    var nameInput = document.getElementById('comments');
    var nameinp=nameInput.value;
    request.open('GET','http://aks681.imad.hasura-app.io/ui/article.html/submitcomment?comment='+nameinp,true);
    request.send(null);
   
 };