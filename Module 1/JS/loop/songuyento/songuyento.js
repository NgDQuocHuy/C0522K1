let number = Number(prompt("Nhập ... số nguyên tố đầu tiên"));
let uoc = 0;
let count = 0;
function check(number) {
    for (let N = 2; N < 1000; N++) {
        if (count < number) {
            for (let i = 1; i <= N; i++) {
                if (N % i == 0) {
                    uoc += 1;
                }
            }
            if (uoc == 2) {
                document.write(`${N}<br>`);
                count += 1;
            }
            uoc = 0;
        }
        else {
            break;
        }
    }
}
check(number);