var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
   article1: {
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
    </body>
</html>
 `;
 return htmlfile;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articlename', function(req,res){
    var articlename=req.params.articlename;
    res.send(articletemplate(articles[articlename]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
