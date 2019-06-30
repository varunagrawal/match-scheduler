function get_schedule(n: number, x: number[], round: number) {
    let schedule: number[][] = [[1, x[x.length - 1]]];

    for (let i = 0; i < x.length / 2 - 1; i++) {
        schedule.push([x[i], x[x.length - 2 - i]]);
    }

    return schedule;
}

function get_round_output(text: string, round: number, schedule: number[][]) {
    text += `<h5> Round ${round + 1} </h5>`;
    text += `<ul class="list-group">`;
    for (let x of schedule) {
        text = text + `<li class="list-group-item">${x[0]} - ${x[1]}</li>`;
        // console.log(x);
    }
    text += `</ul>`;
    text += `<br/><br/>`;

    return text;
}

function print_schedule(x: number[], num_rounds: number) {
    let schedule: number[][];
    let text: string = "";
    let output: HTMLParagraphElement = document.getElementById("output") as HTMLParagraphElement;

    for (let round = 0; round < num_rounds - 1; round++) {
        schedule = get_schedule(num_rounds, x, round);

        text = get_round_output(text, round, schedule);
        console.log(`Round: ${round}`);

        x.unshift(x.pop());
    }

    output.innerHTML = text;
}

function run_algorithm() {
    let num_rounds: number = +(document.getElementById("num_rounds") as HTMLInputElement).value;

    if (num_rounds % 2 == 1) {
        num_rounds += 1;
    }

    console.log(num_rounds);

    let x: number[] = []
    for (var i = 2; i <= num_rounds; i++) {
        x.push(i)
    }

    print_schedule(x, num_rounds);
}

document.getElementById("go").addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        (document.getElementById("go") as HTMLButtonElement).click();
    }
});