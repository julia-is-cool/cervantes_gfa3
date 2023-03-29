function random() {
    var num1 = parseInt(Math.random()*20)+1;
    document.getElementById("ak").innerHTML = num1;
    var num2 = parseInt(Math.random()*20)+1;
    document.getElementById("mer").innerHTML = num2;
    var num3 = parseInt(Math.random()*20)+1;
    document.getElementById("kei").innerHTML = num3;

    if (num1 > num2 && num1 == num3) {
        document.getElementById("output").innerHTML = "The students with most confessions are Anne Kyle and Keiarra! (" + num1 + ")";
    }
    if (num1 > num3 && num1 == num2) {
        document.getElementById("output").innerHTML = "The students with most confessions are Anne Kyle and Merielle! (" + num1 + ")";
    }
    if (num2 > num1 && num2 == num3) {
        document.getElementById("output").innerHTML = "The students with most confessions are Merielle and Keiarra!  (" + num2 + ")";
    }
    if (num1 > num2 && num1 > num3) {
        document.getElementById("output").innerHTML = "The student with most confessions is Anne Kyle! (" + num1 + ")";
    }
    if (num2 > num1 && num2 > num3) {
        document.getElementById("output").innerHTML = "The student with most confessions is Merielle!  (" + num2 + ")";
    }
    if (num3 > num1 && num3 > num2){
        document.getElementById("output").innerHTML = "The student with most confessions is Keiarra! (" + num3 + ")";
    }

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    document.getElementById("letter").innerHTML = "The first letter of the student who confessed with the most effort: " + letters[Math.floor(Math.random() * letters.length)];

    var mins = num2*num3;
    var hr = Math.floor(mins/60);
    var time = mins-hr*60;
    document.getElementById("helo").innerHTML = "Average time it took to confess: (" + mins + "mins): " + hr + "hr " + time + "min";

}

