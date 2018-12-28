var cost = [1, 5, 50, 50, 1];
var amount = [0, 0, 0, 0, 0];
var follower = 0;
var likes = 0;
var energy = 100;
var day = 1;
var exp = [0, 0, 0, 0, 0];
/*var nickname = prompt("Enter your Nickname\n(No Harmfull Words)");
if(nickname == ""){
    nickname = "Guest" + Math.floor(Math.random() * 10001);
}*/
$("#buy1").click(function() {
    if(energy >= 2) {
        alert("Lets make a meme!");
    }
    else {
        alert("No more Energy left. Go to sleep or buy an Energy Drink!");
    }
});