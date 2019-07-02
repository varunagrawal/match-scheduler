function check_input() {
    const input_box: HTMLInputElement = document.getElementById("num_participants") as HTMLInputElement;
    const num_rounds: number = Number(input_box.value);

    let go_button: HTMLButtonElement = document.getElementById("go") as HTMLButtonElement;
    if (isNaN(num_rounds) || num_rounds <= 0) {
        go_button.disabled = true;
    } else {
        go_button.disabled = false;
    }
}