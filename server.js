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
     content: 'This is just an article written for testing. The comments written on this article can be viewed across all the published three articles. Thank You for visiting this article.'
     },
    'article2': {
     title: 'Article #2',
     a: 'Home',
     head: 'Hey everyone and welcome to the second article',
     content: 'This is also an article written simply for no reason and is undergoing testing. Here, once you write a comment, you can view the comments written in other articles as well as this one. Again, thank you for visiting this article.'   
    },
    'article3': {
     title: 'Article #3',
     a: 'Home',
     head: 'Hey everyone and welcome to the third article',
     content: 'This is the final article published for testing. Same as previous two, once you write a comment here, The current comment as well as previous comments can be viewed below. Again, Thank You for visiting here. '  
    }
 };   

function articletemplate (data)
{
    var title=data.title;
    var a=data.a;
    var head=data.head;
    var content=data.content;
    var htmlfile = ` 
    <!doctype html>
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
            You've visited this page <span id="count">0</span> times..<br>
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
            <br><br>
            <h3> Comments Section </h3>
            <hr/>
            <br>
            <div class='footer'>
              <input type='text' id = 'comments' placeholder='Type Your Comments Here'></input>
              <input type='submit' value='Submit' id='submitbtn'></input>
              <br><br>
              <h4>Previous Comments</h4>
              <br>
              <div id='commentlist'>
              </div>
            </div>
         </div>
        <script type="text/javascript" src="/ui/main2.js">
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

app.get('/ui/100366.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '100366.jpg'));
});

app.get('/ui/80751.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '80751.jpg'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/main2.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main2.js'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
