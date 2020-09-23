const request = require('request');
const fs = require('fs');

const input = process.argv;

const options = {
  url: input[2],
  method: 'GET',
  path: input[3]
};
/*
request.get(options,(head, body, error) => {

  console.log('head', head); 
  console.log('body', body); 
  console.log('error', error); 

fs.writeFile('./index.html',[head, body, error],(err) => {
  const fsize = fs.statSync("index.html");
    if(!err){
       console.log("Download and saved"+ fsize + "bytes to ./index.html");
    }
  });
});
*/
request.get(options,(head,body,error) => {
  fs.writeFile('./index.html',(head,body,error),(err) => {
    const fsize = fs.statSync("./index.html");
    const fsizeInBytes = fsize["size"];
      if(!err){
         console.log("Downloaded and saved " + fsizeInBytes + " to ./index.html");
      }
    });
  });
  

