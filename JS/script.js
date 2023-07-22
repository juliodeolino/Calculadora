function add_parameter(parameter){
    document.querySelector("[name='display']").value += parameter
}

function calculate(){
    conta=document.querySelector("[name='display']").value
    document.querySelector("[name='display']").value = eval(conta)
}

function percentage(){
    conta=document.querySelector("[name='display']").value + '/ 100'
    document.querySelector("[name='display']").value = eval(conta)
}

function buttonAC(){
    document.querySelector("[name='display']").value =''
}