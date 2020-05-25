function checkCashRegister(price, cash, cid) {
    var changeRequired = cash - price;
    var changeDollar = Math.trunc(changeRequired);
    var changeCents = Math.ceil((changeRequired - changeDollar) * 100) / 100 ;
    var changeRemainder; 

    var status = "";
    var resultObj = {};

    //Convert cid array into Object
    function convertToObj (arr){
        var obj = {};
        for (let i=0; i<arr.length; i++){
            obj[arr[i][0]] = arr[i][1];
        }
        return obj;
    }

    var cidObj = convertToObj(cid);

    
    function giveChangeDollar (changeDollarRequired){
        var changeRemainder;
        
            if (changeDollarRequired > cidObj["TWENTY"]){
                resultObj["TWENTY"] = cidObj["TWENTY"];
                changeRemainder = changeRequired - cidObj["TWENTY"];
            };
            if (changeRemainder > cidObj["TEN"]){
                resultObj["TEN"] = cidObj["TEN"];
                changeRemainder = changeRemainder- cidObj["TEN"]
            };
            if (changeRemainder > cidObj["FIVE"]){
                resultObj["FIVE"] = cidObj["FIVE"];
                changeRemainder = changeRemainder- cidObj["FIVE"]
            } else if(changeRemainder < cidObj["FIVE"]){
                resultObj["FIVE"] = Math.trunc(changeRemainder/5)*5;
                changeRemainder = changeRemainder - resultObj["FIVE"];
                
            };

            


        return changeRemainder;
        
    }

    var changeRemaining = giveChangeDollar(changeDollar);

    console.log(resultObj);
    console.log(changeRemaining);
    

   
    var change;
    return change;
  }
  
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], 
  ["ONE HUNDRED", 100]]);
  
/*checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], 
["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}*/











