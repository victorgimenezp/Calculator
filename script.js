function getValues (){
    let firstnumber= Number(document.getElementById("firstNumber").value)
    let secondnumber= Number(document.getElementById("secondNumber").value)
    let operation= document.getElementById("operation") 
    let operationSelected= operation.options[operation.selectedIndex].value
    let answer= document.getElementById("answer") 

    answer.innerHTML = calculate(firstnumber,secondnumber,operationSelected)
}

function calculate (firstnumber,secondnumber,operation){
    switch(operation){
        case "+":
            return (firstnumber) + (secondnumber)
        case "-":
            return (firstnumber) - (secondnumber)
        case "*":
            return (firstnumber) * (secondnumber)
        case "/":
            return (firstnumber) / (secondnumber)
        default: 
            return ""
    }
}

