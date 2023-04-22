(function(){
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            let value = event.target.dataset.num;
            screen.value += value;
        })
    });

    equal.addEventListener('click', function(event) {
        if(screen.value === ''){
            screen.value = "";
        }else{
            console.log(screen.value)
            
        }
    })
    
}) ();