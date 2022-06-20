let bcc = "<table >";
bcc += "<tbody>";
for (let row = 0;row <= 9; row ++) {
    bcc += "<tr>";
    for (let cell = 2; cell <= 9; cell++) {
        if (cell % 2 != 0) {

            bcc += `<td class="le">${cell}x${row + 1}=${cell*(row+1)}`;
        }
        else {
            bcc += `<td class="chan">${cell}x${row + 1}=${cell*(row+1)}`;
        }
    }
    bcc += "</tr>";
}
bcc += "</tbody>";
bcc += "</table>";
document.write(bcc)