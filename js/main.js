function get_schedule(n, x, round) {
    var schedule = [[1, x[x.length - 1]]];
    for (var i = 0; i < x.length / 2 - 1; i++) {
        schedule.push([x[i], x[x.length - 2 - i]]);
    }
    return schedule;
}
function print_schedule(x, num_rounds) {
    var schedule;
    var text = "";
    var output = document.getElementById("output");
    for (var round = 0; round < num_rounds - 1; round++) {
        schedule = get_schedule(num_rounds, x, round);
        text = text + "<h5> Round " + round + "</h5>";
        for (var _i = 0, schedule_1 = schedule; _i < schedule_1.length; _i++) {
            var x_1 = schedule_1[_i];
            text = text + (x_1 + "<br/>");
        }
        text += "<br/>";
        output.innerHTML = text;
        console.log("Round: " + round);
        x.unshift(x.pop());
    }
}
function run_algorithm() {
    var num_rounds = +document.getElementById("num_rounds").value;
    if (num_rounds % 2 == 1) {
        num_rounds += 1;
    }
    console.log(num_rounds);
    var x = [];
    for (var i = 2; i <= num_rounds; i++) {
        x.push(i);
    }
    print_schedule(x, num_rounds);
}
function check_input() {
    var input_box = document.getElementById("num_rounds");
    var num_rounds = Number(input_box.value);
    var go_button = document.getElementById("go");
    if (isNaN(num_rounds) || num_rounds <= 0) {
        go_button.disabled = true;
    }
    else {
        go_button.disabled = false;
    }
}
//# sourceMappingURL=main.js.map