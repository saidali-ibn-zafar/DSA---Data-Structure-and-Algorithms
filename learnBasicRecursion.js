// Print 1 To N Without Loop
// FIRST WAY
const print1ToN = (N) => {
  if (N <= 0) {
    return;
  }

  print1ToN(N - 1);
  console.log(N);
};

// print1ToN(10);

// SECOND WAY

const print1ToN_secondWay = (n, current = 1) => {
  if (current > n) {
    return;
  }

  console.log(current);
  print1ToN_secondWay(n, current + 1);
};

print1ToN_secondWay(10);

// = = = = =

// Print GFG n times
const print_GFG_N_Times = (n, text = "GFG") => {
  if (n <= 0) {
    return;
  }

  console.log(text);
  print_GFG_N_Times(n - 1);
};

// print_GFG_N_Times(10);

// = = = = =
