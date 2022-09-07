const fs = require("fs");

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

let newSmth = [];
let filesArr = [];
arr.map((file) => {
  const name = file.split("/").pop().split(".")[0] + "Dark";

  let smth = file.split("/").pop().split(".")[0];
  let lastLetter = smth[smth.length - 1];

  if (lastLetter === "A") {
    smth.split("").map((letter, index) => {
      if (letter === "A") {
        smth = smth.replace(letter, "Dark");
        newSmth.push(smth + "A");
      }
    });
  } else {
  }
});

console.log(newSmth);
