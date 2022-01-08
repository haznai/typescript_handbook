function padLeft(padding: number | string, input: string) {
  // gotta narrow down the type
  if (typeof padding === "number") {
    // creates an array with padding + 1 fields
    // and joins them with an empty string
    return new Array(padding + 1).join(" ") + input;
  }

  return padding + input;
}

// testing with string and number inputs
console.log(padLeft(10, ":)"));
console.log(padLeft("hi ", ":)"));

// testing truthiness
function printAll(strs: string | string[] | null) {
  // only writing strs checks for truthiness
  if (strs && typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  }

  // never check solely for truthiness
  // else if (!!strs) would be error prone, the body of the if
  // statement would not execute for an empty string
  else if (typeof strs === "string") {
    console.log(strs);
  }
}
