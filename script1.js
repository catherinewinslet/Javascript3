const btns = document.querySelectorAll('.btn');
const screenval = document.querySelector('.screen-value');
const screenans = document.querySelector('.screen-ans');
const equalBtn = document.querySelector('#equal');
const clearBtn = document.querySelector('#clear');

screenans.value = '';

for(let i=0;i<btns.length;i++){
    btns[i].addEventListener('click', function(){
        let number = btns[i].getAttribute('data-num');
        screenval.value +=number;
    });
}

equalBtn.addEventListener('click',function(){
    if(screenval.value === ''){
        alert('enter a frickin value');
    }
    else{
    let value = eval(screenval.value);
    screenans.value = value;
    }
});

clearBtn.addEventListener('click', function(){
    screenval.value = '';
    screenans.value = '';
});