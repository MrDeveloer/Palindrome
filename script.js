function palidrome(myString){
 
    var input = myString.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    
    
    
    var reversedinput = input.split('').reverse().join('');
    
    
    if (input === reversedinput){
      document.write("<div>" + myString + " is a palidrome <div>")
    }
    else{
      document.write("<div>" + myString + " is not a palidrome <div>")
    }
  }
  
  
  palidrome("madam")