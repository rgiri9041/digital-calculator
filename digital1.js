 let screen= document.getElementById('screen');
  let buttons = document.querySelectorAll('Button');
  let screValue = '';
  for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log('buttonText is', buttonText);
        if (buttonText=='*') {
            buttonText = '*';
            screValue +=buttonText;
            screen.value = screValue;
        }
        else if (buttonText == 'C') {
            screValue = 'screValue';
            screen.value ='';

        }
         else if (buttonText == '=') {
          screen.value = eval(screValue)
        }
        else{
            screValue +=buttonText;
            screen.value =screValue;
        }

    })

  }