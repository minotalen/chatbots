const express = require("express");
const app = express();
const fs = require('fs').promises;
const MarkdownIt = require('markdown-it');

var md = new MarkdownIt({ html: true }).use(
  require('markdown-it-inline-comments')
  );

md = md.use(require('markdown-it-mark'));
md = md.use(require('markdown-it-container'), 'important');
md = md.use(require('markdown-it-smartarrows'));

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
  response.render('index');
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
