// * * * * * * * * * * * * * * * * *
// ex pattern1
function pattern() {
  for (let i = 0; i < 5; i++) {
    let pattern_str = "";
    for (let j = 0; j < 5; j++) {
      pattern_str += "*";
    }
    console.log(pattern_str);
  }
}
pattern();

// * * * * * * * * * * * * * * * * *
// ex pattern2

function triangle_pattern() {
  let newStr = "";
  for (let i = 0; i < 5; i++) {
    newStr += "*";
    console.log(newStr);
  }
}
triangle_pattern();

// * * * * * * * * * * * * * * * * *
// ex pattern3

function triangle_nums_pattern() {
  let newStr = "";
  for (let i = 1; i <= 5; i++) {
    newStr += i;
    console.log(newStr);
  }
}
triangle_nums_pattern();

// * * * * * * * * * * * * * * * * *
// ex pattern4

function patternTriangleNums() {
  for (let i = 1; i <= 5; i++) {
    let pattern_str = "";
    for (let j = 1; j <= 5; j++) {
      if (i >= j) {
        pattern_str += i;
      }
    }
    console.log(pattern_str);
  }
}
patternTriangleNums();

// * * * * * * * * * * * * * * * * *
// ex pattern5

function patternTriangleReversed() {
  for (let i = 1; i <= 5; i++) {
    let pattern_str = "";
    for (let j = 1; j <= 5; j++) {
      if (i <= j) {
        pattern_str += "*";
      }
    }
    console.log(pattern_str);
  }
}
patternTriangleReversed();

// * * * * * * * * * * * * * * * * *
// ex pattern6

function reverse_pattern() {
  let new_str = "";
  for (let i = 5; i >= 1; i--) {
    new_str = "*".repeat(i);
    console.log(new_str);
  }
}

reverse_pattern();

// * * * * * * * * * * * * * * * * *
// ex pattern7

function reverse_pattern() {
  let new_str = "";
  for (let i = 5; i >= 1; i--) {
    new_str = `${i}`.repeat(i);
    console.log(new_str);
  }
}

reverse_pattern();

// * * * * * * * * * * * * * * * * *
// ex pattern8

function reverse_pattern() {
  for (let i = 5; i >= 1; i--) {
    let new_str = "";
    for (let j = 1; j <= i; j++) {
      new_str += j;
    }
    console.log(new_str);
  }
}
reverse_pattern();

// * * * * * * * * * * * * * * * * *
// ex pattern9

function printEquilateralTriangle() {
  for (let i = 1; i <= 5; i++) {
    let pattern_str = "";

    for (let j = 1; j <= 5 - i; j++) {
      pattern_str += "0";
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
      pattern_str += "*";
    }
    console.log(pattern_str);
  }
}
printEquilateralTriangle();

// ex pattern 9 with \n
function printPattern() {
  let pattern = "";
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5 - i; j++) {
      pattern += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      pattern += "*";
    }
    pattern += "\n";
  }

  console.log(pattern);
}

printPattern();

// * * * * * * * * * * * * * * * * *
// ex pattern10

function pattern() {
  for (let i = 0; i < 5; i++) {
    let pattern_str = "";
    for (let j = 0; j < 5; j++) {
      pattern_str += "*";
    }
    console.log(pattern_str);
  }
}
pattern();

// * * * * * * * * * * * * * * * * *
