let counter = 0;
const sentence = "hello there from lighthouse labs";
for (let char of sentence) {
  if (char === [sentence.length]) {
    char += "\n";
  }
  counter += 50;
  setTimeout(() => {
    process.stdout.write(char);
  }, counter);
}
