const fs = require("fs");

// fs.writfile("filename",content,callback-function);

// fs.writeFile("message.txt", "Hello ji  from node ", (err) => {
//   console.log("The File has been Saved ");
// });

fs.readFile("message.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
