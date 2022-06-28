// Bài 5
let star = prompt("Nhập vào ngôi sao:")
var arrayStar = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
var arrayStar2 = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"];
function checkStar(star) {
    let indexStar = 0;
    let result = "";
    for (let i = 0; i < arrayStar.length; i++) {
        if (star == arrayStar[i]) {
            indexStar = i;
            for (let j = 0; j < arrayStar2.length; i++) {
                if (indexStar == j) {
                    result = arrayStar2[j];
                    return result;
                } else {
                    result = "Không tìm thấy chòm sao";
                    return result;
                }
            }
        } else {
            result = "Không tìm thấy sao";
            return result;
        }
    }
}
document.write(checkStar(star));