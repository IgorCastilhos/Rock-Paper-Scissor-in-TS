function game(you: string, computer: string): number {
    if (you === computer) {
        return -1;
    }

    if (you === 's' && computer === 'p') {
        return 0;
    } else if (you === 'p' && computer === 's') {
        return 1;
    }

    if (you === 's' && computer === 'z') {
        return 1;
    } else if (you === 'z' && computer === 's') {
        return 0;
    }

    if (you === 'p' && computer === 'z') {
        return 0;
    } else if (you === 'z' && computer === 'p') {
        return 1;
    }

    return -1;
}

function main() {
    let you: string, computer: string, result: number;

    // @ts-ignore
    you = prompt("Enter s for STONE, p for PAPER and z for SCISSOR");

    const n = Math.floor(Math.random() * 100);

    if (n < 33) {
        computer = 's';
    } else if (n > 33 && n < 66) {
        computer = 'p';
    } else {
        computer = 'z';
    }

    result = game(you, computer);

    if (result === -1) {
        alert("Game Draw!");
    } else if (result === 1) {
        alert("Wow! You have won the game!");
    } else {
        alert("Oh! You have lost the game!");
    }
    console.log(`You choose: ${you} and Computer choose: ${computer}`);
}

// @ts-ignore
window.onload = main;
