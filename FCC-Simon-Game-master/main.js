var answer = []
var gameArr = []
var count = 0
var dis
var turn = 1

function generateGameArr(turn) {
    var arr = []
    for (let i = 0; i < turn; i++) {
        var t = parseInt(Math.random() * 4)
        arr.push(t)
    }
    console.log(arr);
    
    return arr
}

function displayGameArr(arr) {
    count = 0
    gameArr = arr;
    dis = setInterval("displayEle()", 2000)
}

function displayEle() {
    console.log("displayEle",count);
    $($("#" + gameArr[count])[0]).html("O")
    setTimeout(() => {
        $($("#" + gameArr[count])[0]).html("")
    }, 1000);
    setTimeout(() => {
        count += 1
    }, 1000);
    if (count === gameArr.length) {        
        clearInterval(dis)
        playGame()
    }
}  

function playGame() {
    console.log("playGame");    
    answer = []
    $(".gameBtn").attr("disabled", false)

}

function addAnswer() {
    console.log("click");
    
    var index = this.id
    answer.push(parseInt(index))
    console.log(answer);
    check(answer)
}
function check(arr) {
    console.log("check");    
    var t = gameArr.slice(0, answer.length)
    console.log(arr, t, gameArr);    
    if (t.toString() !== arr.toString()) {
        alert("You Lost !")
    }else if (arr.length === 6) {
        alert("Congratulations !")
    }else if (arr.length === gameArr.length) {
        console.log('turn+1');
        arr = []
        turn += 1
        playTurn(turn)
    }
}

function playTurn(turn) {
    $($("#id-turn")[0]).html(turn)
    $("#id-start").attr("disabled", true)
    $(".gameBtn").attr("disabled", true)
    gameArr = generateGameArr(turn)
    displayGameArr(gameArr)

}
$(".gameBtn").attr("disabled", true)
$(".gameBtn").click(addAnswer)
$("#id-start").on("click", function(){
    playTurn(turn);
});
$("#id-reset").click(function () {
    location.reload(true)
})
