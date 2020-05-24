function convertToRoman(num) {
  // Convert the number into String and split it into individual digits
  var numString = num.toString().split('')

  // Add the appropriate number of 0 to each digit using Map

  var convertedNum = numString.map(function (num, index) {
    for (let i=index; i<numString.length-1; i++){
      num = num + "0";
    }
    num = Number(num);

    return num;
  });
  
  // Filter all the 0 digits
  var noZero = convertedNum.filter(x => x!=0);


  //Creates a function to convert a number into Roman Numeral, map the array above to the function
  function convertEachNum(num){
    if (num >= 1000){
      var firstDigit = parseInt(num.toString().charAt(0));
      var numArr = [];
      for (let i=1; i<= firstDigit; i++){
        numArr.push("M");
      }
      var totalNum = numArr.join("");
      return totalNum;
    } else if (num >= 100 && num <=300){
        var secondDigit = parseInt(num.toString().charAt(0));
        var numArr = [];
        for (let i=1; i<= secondDigit; i++){
          numArr.push("C");
        }
        var totalNum = numArr.join("");
        return totalNum;
    }else{
        var numReturn;

        switch(num){
            
            case 1: numReturn = "I"; break;
            case 2: numReturn = "II"; break;
            case 3: numReturn = "III"; break;
            case 4: numReturn = "IV"; break;
            case 5: numReturn = "V"; break;
            case 6: numReturn = "VI"; break;
            case 7: numReturn = "VII"; break;
            case 8: numReturn = "VIII"; break;
            case 9: numReturn = "IX"; break;
            case 10: numReturn = "X"; break;
            case 20: numReturn = "XX"; break;
            case 30: numReturn = "XXX"; break;
            case 40: numReturn = "XL"; break;
            case 50: numReturn = "L"; break;
            case 60: numReturn = "LX"; break;
            case 70: numReturn = "LXX"; break;
            case 80: numReturn = "LXXX"; break;
            case 90: numReturn = "XC"; break;
            case 400: numReturn = "CD"; break;
            case 500: numReturn = "D"; break;
            case 600: numReturn = "DC"; break;
            case 700: numReturn = "DCC"; break;
            case 800: numReturn = "DCCC"; break;
            case 900: numReturn = "CM"; break;
            
        }

        return numReturn;
    }


}

var romanNum = noZero.map(convertEachNum);
var finalResult = romanNum.join("");

return finalResult

}
  


convertToRoman(3999);