let chess = "<table border='1'>";
chess += "<tbody>";
for (let row = 1; row <= 8; row++) {
    chess += "<tr>";
    for (let cell = 1; cell <= 8; cell++) {
        if (row % 2 != 0) {
            if (cell % 2 != 0) {
                chess += `<td class="white" onclick="alert('${row}-${cell}')"></td>`;
            } 
            else {
                chess += `<td class="black" onclick="alert('${row}-${cell}')"></td>`;
            }
        }
        else {
            if (cell % 2 != 0) {
                chess += `<td class="black" onclick="alert('${row}-${cell}')"></td>`;
            }
            else {
                chess += `<td class="white" onclick="alert('${row}-${cell}')"></td>`;
            }
        }
    }
    chess += "</tr>"
}
    chess += "</tbody>";
    chess += "</table>";
    document.write(chess);