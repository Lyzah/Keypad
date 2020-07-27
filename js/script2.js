var entry = "ENTRY";
document.querySelector(".entryview").innerText = entry;
const pinArray = [];
var storedPins;

(function setLogged(){
    
    storedPins = JSON.parse(localStorage.getItem("PinArray"));
    for (i = 0; i < storedPins.length; i++) {
        pinArray.push(storedPins[i]);
      }
    console.log("attempted log");
    var loggedNumber = pinArray.length
    document.querySelector(".logged").innerText = loggedNumber;
    
})();





function checkDuplicate(checkThis){
    
    
    
    var arrayLength = pinArray.length;

    for(let i = 0 ; i < arrayLength; i++) {
       // console.log("array select " +pinArray[i] + " vs " + checkThis);
        if(pinArray[i] === checkThis){
            document.querySelector(".status").style.opacity = 1;
            return true;
        }
    }
    return false;
    
}

function clearPin(){
    if(document.getElementById("clear").innerText == "AC"){
        pinArray.length = 0;
        localStorage["PinArray"] = JSON.stringify(pinArray);
        document.querySelector(".logged").innerText = "0";
    }
  

}

function storePin(){
    var str = document.querySelector(".resultview").innerText; 
    
    pinArray.push(str);
    document.querySelector(".logged").innerText = pinArray.length;
    localStorage["PinArray"] = JSON.stringify(pinArray);
    document.querySelector(".resultview").innerText = "";
    document.getElementById("clear").innerText = "AC";
    
}


function definePin(){
    var str = document.querySelector(".resultview").innerText;
    if(str.length < 4 || checkDuplicate(str) === true){
        
    }else{
        storePin();
    }

}




function checkClear(){
    var str = document.querySelector(".resultview").innerText;
    if(str.length >= 0){
        document.getElementById("clear").innerText = "C";
    }

}



function ButtonPress(clicked_id) {
  //  console.log("in buttonpress function");
    switch (clicked_id) {
        case 'clear':
            clearPin();
            document.querySelector(".status").style.opacity = 0;
            document.querySelector(".resultview").innerText = "";
            document.getElementById("clear").innerText = "AC";
            break;
        case 'zero':
            var str = document.querySelector(".resultview").innerText;
            console.log(str.length);
            checkClear();
            if (str.length > 3){
                break;
            } else{
                document.querySelector(".resultview").innerText += "0";
                break;
            }  

        case 'store':
            definePin();
            break;
        case 'one':
            var str = document.querySelector(".resultview").innerText;
            console.log(str.length);
            checkClear();
            if (str.length > 3){
                break;
            } else{
                document.querySelector(".resultview").innerText += "1";
                break;
            }  
        case 'two':
            var str = document.querySelector(".resultview").innerText;
            console.log(str.length);
            checkClear();
            if (str.length > 3){
                break;
            } else{
                document.querySelector(".resultview").innerText += "2";
                break;
            }  




        case 'three':
            var str = document.querySelector(".resultview").innerText;
            console.log(str.length);
            checkClear();
            if (str.length > 3){
                break;
            } else{
                document.querySelector(".resultview").innerText += "3";
                break;
            }  

        case 'four':
            var str = document.querySelector(".resultview").innerText;
            console.log(str.length);
            checkClear();
            if (str.length > 3){
                break;
            } else{
                document.querySelector(".resultview").innerText += "4";
                break;
            }  
        case 'five':
            var str = document.querySelector(".resultview").innerText;
            console.log(str.length);
            checkClear();
            if (str.length > 3){
                break;
            } else{
                document.querySelector(".resultview").innerText += "5";
                break;
            }  
        case 'six':
            var str = document.querySelector(".resultview").innerText;
            console.log(str.length);
            checkClear();
            if (str.length > 3){
                break;
            } else{
                document.querySelector(".resultview").innerText += "6";
                break;
            }  
        case 'seven':
            var str = document.querySelector(".resultview").innerText;
            console.log(str.length);
            checkClear();
            if (str.length > 3){
                break;
            } else{
                document.querySelector(".resultview").innerText += "7";
                break;
            }  
        case 'eight':
            var str = document.querySelector(".resultview").innerText;
            console.log(str.length);
            checkClear();
            if (str.length > 3){
                break;
            } else{
                document.querySelector(".resultview").innerText += "8";
                break;
            }  
        case 'nine':
            var str = document.querySelector(".resultview").innerText;
            console.log(str.length);
            checkClear();
            if (str.length > 3){
                break;
            } else{
                document.querySelector(".resultview").innerText += "9";
                break;
            }  



        default:
          console.log('Sorry, we are out of ' + expr + '.');
      }








  }