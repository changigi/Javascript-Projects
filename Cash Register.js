function checkCashRegister(price, cash, cid) {
    var changeRequired = cash - price;
    var changeDollar = Math.trunc(changeRequired);
    var changeCents = Math.ceil((changeRequired - changeDollar) * 100) / 100 ;

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


    //Find how much change to give for dollar amount
    function giveChangeDollar (changeDollarRequired){
        var changeRemainder = changeDollarRequired;
            if (changeRemainder > cidObj["ONE HUNDRED"]){
                resultObj["ONE HUNDRED"] = cidObj["ONE HUNDRED"];
                changeRemainder = changeRemainder - cidObj["ONE HUNDRED"];
            } else{
                resultObj["ONE HUNDRED"] = 0;
            };
            if (changeRemainder > cidObj["TWENTY"]){
                resultObj["TWENTY"] = cidObj["TWENTY"];
                changeRemainder = changeRemainder - cidObj["TWENTY"];
            }else{
                resultObj["TWENTY"] = 0;
            };
            if (changeRemainder > cidObj["TEN"]){
                resultObj["TEN"] = cidObj["TEN"];
                changeRemainder = changeRemainder- cidObj["TEN"]
            }else{
                resultObj["TEN"] = 0;
            };
            if (changeRemainder >= cidObj["FIVE"]){
                resultObj["FIVE"] = cidObj["FIVE"];
                changeRemainder = changeRemainder- cidObj["FIVE"]
            } else if (changeRemainder < cidObj["FIVE"]){
                resultObj["FIVE"] = Math.floor(changeRemainder/5)*5;
                changeRemainder = changeRemainder%5;
                resultObj["FIVE"] = 0;
                
            };
            if (changeRemainder <= cidObj["ONE"]){
                resultObj["ONE"] = changeRemainder;
            } else{
                status = "INSUFFICIENT_FUNDS"
            };
        
    }

    giveChangeDollar(changeDollar);

    //Find how much change to give in cents
    function giveChangeCents(changeCentsRequired){
        var centRemainder = changeCentsRequired;
        if (centRemainder <= cidObj["QUARTER"]){
            if (centRemainder % 0.25 == 0){
                resultObj["QUARTER"] = centRemainder;
                centRemainder = 0;
            } else{
                resultObj["QUARTER"] = Math.floor(centRemainder/0.25)*0.25;
                centRemainder = centRemainder % 0.25;
            }
        } else{
            resultObj["QUARTER"] = 0;
        }

        if (centRemainder <= cidObj["DIME"]){
            if (centRemainder % 0.10 == 0){
                resultObj["DIME"] = centRemainder;
                centRemainder = 0;
            } else{
                resultObj["DIME"] = Math.floor(centRemainder/0.10)*0.10;
                centRemainder = centRemainder % 0.10;
            }
        } else{
            resultObj["DIME"] = 0;
        }

        if (centRemainder <= cidObj["NICKEL"]){
            if (centRemainder % 0.05 == 0){
                resultObj["NICKEL"] = centRemainder;
                centRemainder = 0;
            } else{
                resultObj["NICKEL"] = Math.floor(centRemainder/0.05)*0.05;
                centRemainder = centRemainder % 0.05;
            }
        } else{
            resultObj["NICKEL"] = 0;
        }

        if (centRemainder <= cidObj["PENNY"]){
           resultObj["PENNY"] = Math.round(centRemainder*100)/100;
        } else{
            status = "INSUFFICIENT_FUNDS";
        }

        
    }

    giveChangeCents(changeCents);

  

    //Convert resultObj to an array, filter results that are 0;
    var resultArr = Object.entries(resultObj);

    //Check if resultArr reversed is same as cid
    var resultArrReversed = resultArr.reverse();
    
    function checkArr(x){
        for(let i=0; i<x.length; i++){
            if (x[i][1] != cid[i][1]){
                return false;
            }
            return true;
        }
    }

    var sameAsCid = checkArr(resultArrReversed);
    
    //Return final results
    var finalResult;

    

    if (status == "INSUFFICIENT_FUNDS"){
        finalResult = {status: "INSUFFICIENT_FUNDS", change: []};
    } else if (sameAsCid == true) {
        finalResult = {status: "CLOSED", change: cid};
    } else{
        var filteredArr = resultArr.filter(x => x[1]!=0);
        finalResult = {status: "OPEN", change: filteredArr};
    }
    
    console.log(finalResult);
    return finalResult;

   
    
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
  











