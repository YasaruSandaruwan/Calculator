function calc() {
    let number01 = document.getElementById("number01").value;
    let number02 = document.getElementById("number02").value;

    let op = document.getElementById("op").value;
    let lblOutput = document.getElementById("output");

    switch(op){
        case "+": lblOutput.textContent = parseFloat(number01) + parseFloat(number02); break;
        case "-": lblOutput.textContent = parseFloat(number01) - parseFloat(number02); break;
        case "*": lblOutput.textContent = parseFloat(number01) * parseFloat(number02); break;
        case "/": 
            if(parseFloat(number02) !== 0)
                lblOutput.textContent = parseFloat(number01) / parseFloat(number02); 
            else
                lblOutput.textContent = "Error: Division by zero"; 
            break;
    }
}
