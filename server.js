const express = require("express");
const app = express();
const fs = require('fs').promises;
const MarkdownIt = require('markdown-it');
var path = require("path");
var serveIndex = require('serve-index')


var md = new MarkdownIt({ html: true }).use(
  require('markdown-it-inline-comments')
  );

md = md.use(require('markdown-it-mark'));
md = md.use(require('markdown-it-container'), 'important');
md = md.use(require('markdown-it-smartarrows'));
const opts = {
  permalink: false,
  permalinkClass: 'header-anchor',
  permalinkSymbol: '¶',
  permalinkBefore: false
};
md = md.use(require('markdown-it-anchor'), opts)

const templatePath = './views/index.html';

app.engine('md', async function (filePath, options, callback) {
  let template = (await fs.readFile(templatePath)).toString();
  try {
    let file = await fs.readFile(filePath);
    let content = file.toString();
    let output = template.replace('<!-- RENDERED CONTENT -->', md.render(content))
    return callback(null, output);
  } catch (e) {
    return callback(e);
  }
})

app.set('views', './md') // specify the views directory
app.set('view engine', 'md') // register the template engine

app.use(express.static("public"));

app.get("/", (request, response) => {
  app.set('views', './md') // specify the views directory
  app.set('view engine', 'md') // register the template engine
  response.render('index');
});

// function getExtension(filename) {
//     var i = filename.lastIndexOf('.');
//     return (i < 0) ? '' : filename.substr(i);
// }

app.use(function(req, res, next) {
  // req.url = req.url.replace(".md","");
  next();
});

app.use('/people/', express.static('/md/people'), serveIndex('md/people', {'icons': true}))

app.use('/twine', express.static('views/twine'), serveIndex('views/twine', {'icons': true}))

app.get("/twine/:name", (req, res) => {
  app.set('views', path.join(__dirname, 'views'));
  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html');
  console.log(req.params.name, __dirname)
  res.render('twine/' + req.params.name);
  
  app.set('views', './md') // specify the views directory
  app.set('view engine', 'md') // register the template engine
});

app.use(function (request, response, next) {
  try {
    let path = request.url.split('?')[0]
    response.render(path.slice(1));
  } catch (e) {
    console.warn(e);
    next();
  }
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
