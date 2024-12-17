/*
Pattern 1:-

* * * * *
* * * * *
* * * * *
* * * * *
* * * * *
*/

function printPattern1(rows, columns) {
  for (let i = 0; i < rows; i++) {
    let bag = "";
    for (let j = 0; j < columns; j++) {
      j === columns - 1 ? (bag += "*") : (bag += "* ");
    }
    console.log(bag);
  }
}

printPattern1(5, 5);

/*
Pattern 2:- 

* 
* * 
* * *
* * * *
* * * * *
*/

function printPattern2(rows) {
  for (let i = 0; i < rows; i++) {
    let bag = "";
    for (let j = 0; j <= i; j++) {
      j === i ? (bag += "*") : (bag += "* ");
    }
    console.log(bag);
  }
}

printPattern2(5);

/*
Pattern 3:-

1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/

function printPattern3(rows) {
  for (let i = 1; i <= rows; i++) {
    let bag = "";
    for (let j = 1; j <= i; j++) {
      j === i ? (bag += j) : (bag += j + " ");
    }
    console.log(bag);
  }
}

printPattern3(5);

/*
Pattern 4:- 

1 
2 2 
3 3 3
*/

function printPattern4(rows) {
  for (let i = 0; i < rows; i++) {
    let bag = "";
    for (let j = 0; j <= i; j++) {
      j === i ? (bag += i + 1) : (bag += i + 1 + " ");
    }
    console.log(bag);
  }
}

printPattern4(5);

/*
Pattern 5:- 

* * *
* *
*

*/

function printPattern5(rows) {
  for (let i = 0; i < rows; i++) {
    let bag = "";
    const column = rows - i;
    for (let j = 0; j < column; j++) {
      j === column ? (bag += "*") : (bag += "* ");
    }
    console.log(bag);
  }
}

printPattern5(5);
