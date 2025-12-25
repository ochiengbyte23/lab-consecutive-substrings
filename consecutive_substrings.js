function consecutiveSubstrings(string) {
  const result = [];
  const inputResult = "abc";

  for (i = 0; i < inputResult.length; i++) {
    for (j = i + 1; j < inputResult.length; j++) {
      const sliceInput = inputResult.slice(i, j);
      result.push(sliceInput);

    }
  }
  return result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;


