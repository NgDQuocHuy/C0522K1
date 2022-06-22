function submit() {
    let size = Number(document.getElementById("size").value);
    let min = Number(document.getElementById("min").value);
    let max = Number(document.getElementById("max").value);
    let number = [];
    let total = 0;
    let count = 0;
    let flag = true;
    let scp = 0;
    for (let i = 0; i < size; i++) {
        number[i] = Math.floor(Math.random() * (max - min + 1) + min);
    }
    document.getElementById("num1").value = number.toString();
    for (let i = 0; i < size; i++) {
        if (number[i] % 2 != 0) {
            total += number[i];
        }
    }
    document.getElementById("num2").value = total.toString();
    for (let i = 0; i < size; i++) {
        if (number[i] > 1) {
            for (let j = 2; j < number[i]; j++) {
                if (number[i] % j == 0) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                document.getElementById("num3").value += (number[i]+ ",");
                count += 1;
            }
            else {
                flag = true;
            }
        }
    }
    document.getElementById("num4").value = count;
    for (let i = 0; i < size; i++) {
        if (Number.isInteger(Math.sqrt(number[i]))) {
            scp += 1;
            document.getElementById("num5").value += (number[i]+ ","); 
        } 
    }
    document.getElementById("num6").value = scp;
}
