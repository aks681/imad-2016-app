var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
   'article1': {
     title: 'Article #1',
     a: 'Home',
     head: 'Hey everyone and welcome to the first article',
     content: 'Hello Allll, this is just an article for no reason, more is following.....'
     },
    'article2': {
     title: 'Article #2',
     a: 'home',
     head: 'Hey everyone and welcome to the second article',
     content: 'Hello Allll, this is just an article for no reason, more is following.....'   
    },
    'article3': {
     title: 'Article #3',
     a: 'Home',
     head: 'Hey everyone and welcome to the third article',
     content: 'Hello Allll, this is just an article for no reason, more is following.....'  
    }
 };   

function articletemplate (data)
{
    var title=data.title;
    var a=data.a;
    var head=data.head;
    var content=data.content;
    var htmlfile = ` 
    <html>
    <head>
        <title>
            ${title}
        </title>
        <meta name='viewport' content='width=device-width  initial-scale=1'/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class='container'> 
         <div>
         <a href='/'>${a}</a>
         </div>
         <hr/>
            <h3 align='center' color='black'>
               ${head}
            </h3>
            <p>
                ${content}
            </p>
        </div>
        <br><br>
        <input type='text' id = 'comments' placeholder='Type Your Comments Here'></input>
        <input type='submit' value='Submit' id='submitbtn2'></input>
        <br>
        <div id='comment'>
        </div>
        <script type="text/javascript" src="/ui/main.js">
        </script>
    </body>
</html>
 `;
 return htmlfile;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter',function (req,res) {
   counter=counter+1;
   res.send(counter.toString());
});

var names=[];
app.get('/submitname',function(req,res){
   var name=req.query.name;
   names.push(name);
   res.send(JSON.stringify(names));
});

var comments=[];
app.get('/submitcomment',function(req,res){
   var comment=req.query.comment;
   comments.push(comment);
   res.send(JSON.stringify(comments));
});


app.get('/:articlename', function(req,res){
    var articlename=req.params.articlename;
    res.send(articletemplate(articles[articlename]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/me.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'me.jpg'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
