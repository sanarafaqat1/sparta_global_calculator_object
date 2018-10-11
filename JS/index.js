var myNumber1;
var myNumber2;
// var myNumber3;

var calculate = {
  add:"+",
  sub:"-",
  multiply:"*",
  divide :"/",
};
var choice = prompt ("Normal or Advance");
if (choice == "normal") {
  var arithmetic = prompt("What type of regular calculation will you use (+, -, *, /)");

  switch (arithmetic) {
    case calculate.add:
    // if (choice == arithmetic)

      myNumber1 =parseInt(prompt("The First number"));
      myNumber2 = parseInt(prompt("The second number"));
      console.log(myNumber1+myNumber2);
        break;

    case calculate.sub:

    myNumber1 =parseInt(prompt("The First number"));
    myNumber2 = parseInt(prompt("The second number"));
    console.log(myNumber1-myNumber2);
      break;
    case calculate.multiply:
    myNumber1 =parseInt(prompt("The First number"));
    myNumber2 = parseInt(prompt("The second number"));
    console.log(myNumber1*myNumber2);
    break;
    case calculate.divide:
    myNumber1 =parseInt(prompt("The First number"));
    myNumber2 = parseInt(prompt("The second number"));
    console.log(myNumber1/myNumber2);
    break;

  }




}
