function get_schedule(n: number, x: number[], round: number) {
    let schedule: number[][] = [[1, x[x.length - 1]]];

    for (let i = 0; i < x.length / 2 - 1; i++) {
        schedule.push([x[i], x[x.length - 2 - i]]);
    }

    return schedule;
}

function print_schedule(x: number[], num_rounds: number) {
    let schedule: number[][];
    let text: string = "";
    let output: HTMLParagraphElement = document.getElementById("output") as HTMLParagraphElement;

    for (let round = 0; round < num_rounds - 1; round++) {
        schedule = get_schedule(num_rounds, x, round);

        text = text + "<h5> Round " + round + "</h5>";
        for (let x of schedule) {
            text = text + `${x}<br/>`;
            // console.log(x);
        }
        text += "<br/>"
        output.innerHTML = text;
        console.log(`Round: ${round}`);

        x.unshift(x.pop());
    }
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

