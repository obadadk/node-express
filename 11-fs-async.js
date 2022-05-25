const { readFile, writeFile } = require("fs");

console.log("Starting");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.error(err);
    return;
  }

  const first = result;

  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.error(err);
      return;
    }

    const second = result;

    writeFile(
      "./content/result-sync.txt",
      `Here is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          error(err);
          return;
        }
        console.log("Done Write result");
      }
    );
  });
});

console.log("Done Task");
