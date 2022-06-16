
function check() {
    let used = Number(document.getElementById("used").value);
    let used2 = document.getElementById("used");
    let bac1 = document.getElementById("bac1");
    let bac2 = document.getElementById("bac2");
    let bac3 = document.getElementById("bac3");
    let bac4 = document.getElementById("bac4");
    let bac5 = document.getElementById("bac5");
    let bac6 = document.getElementById("bac6");
    let total = document.getElementById("total");
    let VAT = document.getElementById("VAT");
    let all = document.getElementById("all");
    const kwh1 = Number(used) * 1678;
    const kwh2 = (Number(used) - 50) * 1734;
    const kwh3 = (Number(used) - 100) * 2014;
    const kwh4 = (Number(used) - 200) * 2536;
    const kwh5 = (Number(used) - 300) * 2834;
    const kwh6 = (Number(used) - 400) * 2927;
    const monneyBac1 = 83900;
    const monneyBac2 = 86700;
    const monneyBac3 = 201400;
    const monneyBac4 = 253600;
    const monneyBac5 = 283400;
    const thueVat = 100 * 10;
    const total12 = 170600;
    const total123 = 372000;
    const total1234 = 6256000;
    const total12345 = 909000;
    if (used > 0 && used <= 50) {
        bac1.value = kwh1 + " VND";
        total.value = kwh1 + " VND";
        VAT.value = (kwh1) / thueVat + " VND";
        all.value = kwh1 + ((kwh1) / thueVat) + " VND";
    }
    else if (used > 50 && used <= 100) {
        bac1.value = monneyBac1 + " VND";
        bac2.value = kwh2 + " VND";
        total.value = kwh2 + monneyBac1 + " VND";
        VAT.value = (kwh2 + monneyBac1) / thueVat + " VND";
        all.value = kwh2 + monneyBac1 + ((kwh2 + monneyBac1) / thueVat) + " VND";
    }
    else if (used > 100 && used <= 200) {
        bac1.value = monneyBac1 + " VND";
        bac2.value = monneyBac2 + " VND";
        bac3.value = kwh3 + " VND";
        total.value = kwh3 + total12 + " VND";
        VAT.value = (kwh3 + total12) / thueVat + " VND";
        all.value = kwh3 + total12 + ((kwh3 + total12) / thueVat) + " VND";
    }
    else if (used > 200 && used <= 300) {
        bac1.value = monneyBac1 + " VND";
        bac2.value = monneyBac2 + " VND";
        bac3.value = monneyBac3 + " VND";
        bac4.value = kwh4 + " VND";
        total.value = kwh4 + total123 + " VND";
        VAT.value = (kwh4 + total123) / thueVat + " VND";
        all.value = kwh4 + total123 + ((kwh4 + total123) / thueVat) + " VND";
    }
    else if (used > 300 && used <= 400) {
        bac1.value = monneyBac1 + " VND";
        bac2.value = monneyBac2 + " VND";
        bac3.value = monneyBac3 + " VND";
        bac4.value = monneyBac4 + " VND";
        bac5.value = kwh5 + " VND";
        total.value = kwh5 + total1234 + " VND";
        VAT.value = (kwh5 + total1234) / thueVat + " VND";
        all.value = kwh5 + total1234 + ((kwh5 + total1234) / thueVat) + " VND";
    }
    else if (used > 400) {
        bac1.value = monneyBac1 + " VND";
        bac2.value = monneyBac2 + " VND";
        bac3.value = monneyBac3 + " VND";
        bac4.value = monneyBac4 + " VND";
        bac5.value = monneyBac5 + " VND";
        bac6.value = kwh6 + " VND";
        total.value = kwh6 + total12345 + " VND";
        VAT.value = (kwh6 + total12345) / thueVat + " VND";
        all.value = kwh6 + total12345 + ((kwh6 + total12345) / thueVat) + " VND";
    }

}
function reset() {
    bac1.value = null;
    bac2.value = null;
    bac3.value = null;
    bac4.value = null;
    bac5.value = null;
    bac6.value = null;
    total.value = null;
    VAT.value = null;
    all.value = null;
    used2.value = null;
    used2.focus();
}