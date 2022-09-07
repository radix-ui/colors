const fs = require("fs");

// generate an array of all file names in a directory
const getFiles = (dir, files_) => {
  files_ = files_ || [];
  const files = fs.readdirSync(dir);
  for (const i in files) {
    const name = dir + "/" + files[i];
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files_);
    } else {
      files_.push(name);
    }
  }
  return files_;
};

const arr = getFiles("../src/dark");
// console.log(arr);

let newSmth = [];
let filesArr = [];
arr.map((file) => {
  const name = file.split("/").pop().split(".")[0] + "Dark";
  // filesArr.push(name);

  let smth = file.split("/").pop().split(".")[0];
  // find last letter of the file name
  let lastLetter = smth[smth.length - 1];

  if (lastLetter === "A") {
    // map through all letters of smth
    smth.split("").map((letter, index) => {
      // if letter is "A" then replace it with "Dark"
      if (letter === "A") {
        smth = smth.replace(letter, "Dark");
        // console.log(smth);
        newSmth.push(smth + "A");
      }
    });
  } else {
  }
});

console.log(newSmth);
