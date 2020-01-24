/* var userNum = +prompt("введите номер квартиры");

if (userNum > 0 && userNum < 21) {
    alert('Подьезд первый')

} else if (userNum > 20 && userNum < 49) {
    alert('Второй подьезд')

} else if (userNum > 48 && userNum < 91) {
    alert('Третий подьезд')



} else {
    alert('Такой квартиры нет')
} */

/* - */

function searchPorch(flat, numPorchs, flatsinonePorch) {
    for (var numPorch = 1, ; numPorch <= numPorchs; numPorch++) {
        var minInPorchFlat = numPorch * flatsinonePorch - flatsinonePorch + 1
        var maxInPorchFlat = numPorch * flatsinonePorch - flatsinonePorch
        if (minInPorchFlat <= flat && maxInPorchFlat >= flat) {
            return numPorch
        }
    }
}



var john = ['john', 123456];
var jane=  ['jane', 654321];
var alex = ['alex', 987654];

var users = [['john', 123456], ['jane', 654321], ['alex', 987654],]



function checkUser(user,baseUsers){
    for(var i = 0; i < baseUsers.length;i++){
        if(baseUsers[i][0] == user[0] && baseUsers[i][1] == user[1]){
            return true
        }
    }
}




var User = prompt('введите имя!')
var UserPass = prompt('введите пароль!')

var userArr = [User, UserPass]

var check = checkUser(userArr,users)

if(check){
    alert('Вы не в системе')
}else{
    alert('Вы не в системе')
}