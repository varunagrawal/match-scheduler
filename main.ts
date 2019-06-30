function get_schedule(n: number, x: number[], round: number)
{
    let schedule: number[][] = [[1, x[x.length-1]]];

    for(let i=0; i < x.length/2 - 1; i++) {
        schedule.push([x[i], x[x.length-2-i]]);
    }

    return schedule;
}

function print_schedule(schedule: number[][])
{
    console.log("The schedule is:");
    for (let x of schedule) {
        console.log(x);
    }
}

let n: number = 8;

if (n % 2 == 1) {
    n += 1;
}

var x: number[] = []
for (var i=2; i <= n; i++)
{
    x.push(i)
}


console.log(x);

let schedule: number[][];

for (let round=0; round<n-1; round++) {
    schedule = get_schedule(n, x, round);
    print_schedule(schedule);

    x.unshift(x.pop());
}


