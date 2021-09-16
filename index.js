function handleClick()
          {         
        var amountCorrect = 0;          
        for(var i = 1; i <= 5; i++) {
          var radios = document.getElementsByName('group'+i);
          for(var j = 0; j < radios.length; j++) {
            var radio = radios[j];
            if(radio.value == "correct" && radio.checked) {
              amountCorrect++;
            }
          }    
        }

            //alert("Correct Responses: " + amountCorrect);
            if(amountCorrect >= 3){
                (alert(`You are pass & you got ${amountCorrect} numbers`));
            }
            else if (amountCorrect <3 )
            {
                alert("You are fail")
            }
        }
        