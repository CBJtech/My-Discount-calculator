document.querySelector('form').onsubmit = function(){
    let original = document.querySelector('#original');
    let discount = document.querySelector('#discount');
    let demo = document.querySelector('#demo');
    document.querySelector('#dollar').innerHTML = '$'
    document.querySelector('#price').innerHTML = '<p style="margin-top: 1rem;"> Your new price is: </p>'
    demo.value =   ((100 - parseInt(discount.value)) / 100 )* parseInt(original.value); 

    original.value = '';
    discount.value = '';
    return false
}

document.querySelector('#percent').onkeyup = function(){
    document.querySelector('#percent').innerHTML = '%'
}