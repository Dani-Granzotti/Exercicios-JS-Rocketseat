function temHabilidade(skills) {
    var resultado = skills.indexOf("Javascript");

    if (resultado >= 0) {
        return true;
    } else {
        return false;
    }
}
var skills = ["Javascript", "ReactJS", "React Native"];

console.log(temHabilidade(skills));