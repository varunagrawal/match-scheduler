function get_schedule(x, round) {
    var schedule = [[1, x[x.length - 1]]];
    for (var i = 0; i < x.length / 2 - 1; i++) {
        schedule.push([x[i], x[x.length - 2 - i]]);
    }
    return schedule;
}
function get_round_output(text, round, schedule, num_participants, odd) {
    text += "<h5> Round " + (round + 1) + " </h5>";
    text += "<ul class=\"list-group\">";
    var first, second;
    for (var _i = 0, schedule_1 = schedule; _i < schedule_1.length; _i++) {
        var x = schedule_1[_i];
        first = x[0], second = x[1];
        if (odd) {
            if (first === num_participants) {
                first = "bye";
            }
            else if (second === num_participants) {
                second = "bye";
            }
        }
        text = text + ("<li class=\"list-group-item\">" + first + " - " + second + "</li>");
    }
    text += "</ul>";
    text += "<br/><br/>";
    return text;
}
function print_schedule(x, num_participants, odd) {
    var schedule;
    var text = "";
    var output = document.getElementById("output");
    var num_rounds = num_participants - 1;
    for (var round = 0; round < num_rounds; round++) {
        schedule = get_schedule(x, round);
        text = get_round_output(text, round, schedule, num_participants, odd);
        console.log("Round: " + round);
        x.unshift(x.pop());
    }
    output.innerHTML = text;
}
function run_algorithm() {
    var num_participants = +document.getElementById("num_participants").value;
    var odd = false;
    if (num_participants % 2 == 1) {
        num_participants += 1;
        odd = true;
    }
    console.log("Number of participants: " + num_participants);
    var x = [];
    for (var i = 2; i <= num_participants; i++) {
        x.push(i);
    }
    print_schedule(x, num_participants, odd);
}
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("go").addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("go").click();
        }
    });
});
function check_input() {
    var input_box = document.getElementById("num_participants");
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