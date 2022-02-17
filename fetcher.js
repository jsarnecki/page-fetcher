const args = process.argv.slice(2);
const URL = args[0];
const localPath = args[1];

const request = require("request");
const fs = require("fs");

request(URL, (error, response, body) =>{
  console.log("error: ", error);
  console.log('status code: ', response.statusCode);
  // console.log('body: ', body);

  fs.writeFile(localPath, body, err => {
    if (err) {
      console.error(err)
      return
    }
    console.log("file written successful");
    let biteSize = body.length;
    //file written successfully
    console.log(`Downloaded and saved ${biteSize} bytes to ${localPath}`);

  })

});

