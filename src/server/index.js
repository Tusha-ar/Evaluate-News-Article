const express = require('express')
const result = {}
const cors = require('cors');
const bodyParser = require('body-parser');
var path = require('path')
const dotenv = require('dotenv');
dotenv.config();
var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.post('/test', function (req, res) {
    return textapi.sentiment({
      'url': req.body.url
    }, function(error, response) {
      if (error !== null) {
        console.log(error);
      }
      else{
        result['polarity'] = response.polarity
        result['subjectivity'] = response.subjectivity
        result['polarity_confidence'] = response.polarity_confidence
        result['subjectivity_confidence'] = response.subjectivity_confidence
        res.send(result)
      }
    });
})
