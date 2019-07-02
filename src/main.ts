function get_schedule(x: number[], round: number) {
    let schedule: number[][] = [[1, x[x.length - 1]]];

    for (let i = 0; i < x.length / 2 - 1; i++) {
        schedule.push([x[i], x[x.length - 2 - i]]);
    }

    return schedule;
}

function get_round_output(text: string, round: number,
    schedule: number[][], num_participants: number, odd: boolean) {
    text += `<h5> Round ${round + 1} </h5>`;
    text += `<ul class="list-group">`;

    let first, second;

    for (let x of schedule) {
        [first, second] = x;
        if (odd) {
            if (first === num_participants) {
                first = "bye";
            } else if (second === num_participants) {
                second = "bye";
            }
        }

        // console.log(first, second);
        text = text + `<li class="list-group-item">${first} - ${second}</li>`;
        // console.log(x);
    }
    text += `</ul>`;
    text += `<br/><br/>`;

    return text;
}

function print_schedule(x: number[], num_participants: number, odd: boolean) {
    let schedule: number[][];
    let text: string = "";
    let output: HTMLParagraphElement = document.getElementById("output") as HTMLParagraphElement;

    let num_rounds = num_participants - 1;
    for (let round = 0; round < num_rounds; round++) {
        schedule = get_schedule(x, round);

        text = get_round_output(text, round, schedule, num_participants, odd);
        console.log(`Round: ${round}`);

        // rotate the participants
        x.unshift(x.pop());
    }

    output.innerHTML = text;
}

function run_algorithm() {
    let num_participants: number = +(document.getElementById("num_participants") as HTMLInputElement).value;

    let odd: boolean = false;
    if (num_participants % 2 == 1) {
        num_participants += 1;
        odd = true;
    }

    console.log(`Number of participants: ${num_participants}`);

    let x: number[] = []
    for (var i = 2; i <= num_participants; i++) {
        x.push(i)
    }

    print_schedule(x, num_participants, odd);
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("go").addEventListener("keyup", (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            (document.getElementById("go") as HTMLButtonElement).click();
        }
    });
});
