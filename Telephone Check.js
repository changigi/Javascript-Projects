function telephoneCheck(str) {
  if (str.length >= 14){
    if (str.length > 16 || str.charAt(0) != 1){
      return false;
    }
  }

  if (str.charAt(0) == "("){
    if (!(/\(\d{3}\)\d{3}\s?\-?\d{4}/).test(str)){
      return false;
    }
  }

  if (str.length == 11){
    if (str.charAt(0) != "("){
      return false;
    }
  }


    var regex = /[1]?\s?\d{3}-\d{3}-\d{4}/;
    var regex2 = /[1]?\s?\(\d{3}\)\s?\d{3}-\d{4}/;
    var regex3 = /[1]?\s?\d{3}\s?\d{3}\s?\d{4}/;
   
    if (regex.test(str) || regex2.test(str) || regex3.test(str)){
      return true;
    } else{
      return false;
    }
    
  }
  
  console.log(telephoneCheck("27576227382"));