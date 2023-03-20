import express from "express";
import formidable from "formidable";
import { configs } from "./config.js";

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(configs.homePage);
});

app.post('/', (req, res, next) => {
  const form = formidable({ 
    multiples: true
  });

  form.on('fileBegin', function(name, file){
    file.filepath = configs.uploadDirectory + "/" + file.originalFilename;
  })
  .parse(req, (err, fields, files) => {
    if (err)
    {
      next(err);

      res.json({ 
        result: "Error"
      });

      return;
    }
    else
    {
      res.json({ 
        result: "Upload success"
      });
    }
  });
});

app.listen(configs.port, () => {
  console.log(`Server listening on ${configs.port}`);
});