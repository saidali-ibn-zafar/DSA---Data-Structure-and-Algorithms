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
      pattern_str += " ";
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

function printEquilateralTriangle() {
  for (let i = 5; i >= 1; i--) {
    let pattern_str = "";
    for (let j = 1; j <= 5 - i; j++) {
      pattern_str += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      pattern_str += "*";
    }
    console.log(pattern_str);
  }
}
printEquilateralTriangle();

// * * * * * * * * * * * * * * * * *
// ex pattern

function printPattern(rows) {
  for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }

  for (let i = rows - 1; i >= 1; i--) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}

printPattern(5);

// * * * * * * * * * * * * * * * * *
// ex pattern10

function printPattern(rows) {
  for (let i = 1; i <= rows * 2 - 1; i++) {
    let pattern = "";
    let maxStars;

    if (i <= rows) {
      maxStars = i;
    } else {
      maxStars = rows * 2 - i;
    }

    for (let j = 1; j <= maxStars; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}
printPattern(3);

// * * * * * * * * * * * * * * * * *
// ex pattern11

function printPattern(rows) {
  for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      if ((i + j) % 2 === 0) {
        pattern += "1 ";
      } else {
        pattern += "0 ";
      }
    }
    console.log(pattern);
  }
}

printPattern(5);

// * * * * * * * * * * * * * * * * *
// ex pattern12

function pattern12(N) {
  let spaces = 2 * (N - 1);

  for (let i = 1; i <= N; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j;
    }

    for (let j = 1; j <= spaces; j++) {
      row += " ";
    }

    for (let j = i; j >= 1; j--) {
      row += j;
    }

    console.log(row);
    spaces -= 2;
  }
}

const N = 5;
pattern12(N);

// * * * * * * * * * * * * * * * * *
// ex pattern13

function printPattern13(rowNum) {
  let k = 0;
  for (let i = 0; i <= rowNum; i++) {
    let row = "";

    for (let j = 0; j < i; j++) {
      k++;
      row += k + " ";
    }
    console.log(row);
  }
}

printPattern13(5);

// * * * * * * * * * * * * * * * * *
// ex pattern14

function printPattern14(rowNum) {
  const alphabet = "ABCDEFGHIGKLMNOPQRSTUVWXYZ";
  for (let i = 0; i <= rowNum; i++) {
    let row = "";
    let k = 0;
    for (let j = 0; j < i; j++) {
      row += alphabet.charAt(k);
      k++;
    }
    console.log(row);
  }
}

printPattern14(5);

// * * * * * * * * * * * * * * * * *
// ex pattern15

function printPattern15(rowNum) {
  const alphabet = "ABCDEFGHIGKLMNOPQRSTUVWXYZ";
  for (let i = rowNum; i >= 0; i--) {
    let row = "";
    let k = 0;
    for (let j = 0; j < i; j++) {
      row += alphabet.charAt(k);
      k++;
    }
    console.log(row);
  }
}

printPattern15(5);

// * * * * * * * * * * * * * * * * *
// ex pattern16

function printPattern16(rowNum) {
  const alphabet = "ABCDEFGHIGKLMNOPQRSTUVWXYZ";
  for (let i = 0; i <= rowNum; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += alphabet.charAt(i - 1);
    }
    console.log(row);
  }
}

printPattern16(5);

// * * * * * * * * * * * * * * * * *
// ex pattern17
