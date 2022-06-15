
function check() {
    let used = Number(document.getElementById("used").value);
    if (used > 0 && used <= 50) {
        document.getElementById("bac1").value = Number(used) * 1678 + " VND";
        document.getElementById("total").value = Number(used) * 1678 + " VND";
        document.getElementById("VAT").value = (Number(used) * 1678) / 100 * 10 + " VND";
        document.getElementById("all").value = Number(used) * 1678 + ((Number(used) * 1678) / 100 * 10) + " VND";
    }
    else if (used > 50 && used <= 100) {
        document.getElementById("bac2").value = (Number(used) - 50) * 1734 + " VND";
        document.getElementById("bac1").value = 83900 + " VND";
        document.getElementById("total").value = (Number(used) - 50) * 1734 + 83900 + " VND";
        document.getElementById("VAT").value = ((Number(used) - 50) * 1734 + 83900) / 100 * 10 + " VND";
        document.getElementById("all").value = (Number(used) - 50) * 1734 + 83900 + (((Number(used) - 50) * 1734 + 83900) / 100 * 10) + " VND";
    }
    else if (used > 100 && used <= 200) {
        document.getElementById("bac3").value = (Number(used) - 100) * 2014 + " VND";
        document.getElementById("bac1").value = 83900 + " VND";
        document.getElementById("bac2").value = 86700 + " VND";
        document.getElementById("total").value = (Number(used) - 100) * 2014 + 170600 + " VND";
        document.getElementById("VAT").value = ((Number(used) - 100) * 2014 + 170600) / 100 * 10 + " VND";
        document.getElementById("all").value = (Number(used) - 100) * 2014 + 170600 + (((Number(used) - 100) * 2014 + 170600) / 100 * 10) + " VND";
    }
    else if (used > 200 && used <= 300) {
        document.getElementById("bac4").value = (Number(used) - 200) * 2536 + " VND";
        document.getElementById("bac1").value = 83900 + " VND";
        document.getElementById("bac2").value = 86700 + " VND";
        document.getElementById("bac3").value = 201400 + " VND";
        document.getElementById("total").value = (Number(used) - 200) * 2536 + 372000 + " VND";
        document.getElementById("VAT").value = ((Number(used) - 200) * 2536 + 372000) / 100 * 10 + " VND";
        document.getElementById("all").value = (Number(used) - 200) * 2536 + 372000 + (((Number(used) - 200) * 2536 + 372000) / 100 * 10) + " VND";
    }
    else if (used > 300 && used <= 400) {
        document.getElementById("bac5").value = (Number(used) - 300) * 2834 + " VND";
        document.getElementById("bac1").value = 83900 + " VND";
        document.getElementById("bac2").value = 86700 + " VND";
        document.getElementById("bac3").value = 201400 + " VND";
        document.getElementById("bac4").value = 253600 + " VND";
        document.getElementById("total").value = (Number(used) - 300) * 2834 + 6256000 + " VND";
        document.getElementById("VAT").value = ((Number(used) - 300) * 2834 + 6256000) / 100 * 10 + " VND";
        document.getElementById("all").value = (Number(used) - 300) * 2834 + 6256000 + (((Number(used) - 300) * 2834 + 6256000) / 100 * 10) + " VND";
    }
    else if (used > 400) {
        document.getElementById("bac6").value = (Number(used) - 400) * 2927 + " VND";
        document.getElementById("bac1").value = 83900 + " VND";
        document.getElementById("bac2").value = 86700 + " VND";
        document.getElementById("bac3").value = 201400 + " VND";
        document.getElementById("bac4").value = 253600 + " VND";
        document.getElementById("bac5").value = 283400 + " VND";
        document.getElementById("total").value = (Number(used) - 400) * 2927 + 909000 + " VND";
        document.getElementById("VAT").value = ((Number(used) - 400) * 2927 + 909000) / 100 * 10 + " VND";
        document.getElementById("all").value = (Number(used) - 400) * 2927 + 909000 + (((Number(used) - 400) * 2927 + 909000) / 100 * 10) + " VND";
    }

}
function reset() {
    document.getElementById("bac1").value = null;
    document.getElementById("bac2").value = null;
    document.getElementById("bac3").value = null;
    document.getElementById("bac4").value = null;
    document.getElementById("bac5").value = null;
    document.getElementById("bac6").value = null;
    document.getElementById("total").value = null;
    document.getElementById("VAT").value = null;
    document.getElementById("all").value = null;
    document.getElementById("used").value = null;
    document.getElementById("used").focus();
}