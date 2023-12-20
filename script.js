var sum = 0;

while(true){
    var input = prompt("Enter a number, type 'end' to finish: ")

    if(input.toLocaleLowerCase() === 'end') break;

    var num = parseFloat(input);

    if(!isNaN(num)) sum += num;
    else{
        alert("Invalid input, insert numbers only.")
    }
}

alert("The total sum is: " + sum);