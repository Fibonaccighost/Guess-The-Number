let n = Math.floor(Math.random() * 101)
console.log(n)

let guessCounter = 0

function main() {
    document.body.querySelector("button").addEventListener("click", () => {
        let a = prompt("Number", "0")
        a = parseInt(a);
        if (isNaN(a))
            return;
        guessCounter++;
        let b = (100 - guessCounter)
        if (a == n) {
            document.getElementById("guessDisplay").insertAdjacentHTML("beforeend",`<p>Victory! You Gussed it Right</p>`)
            document.getElementById("guessDisplay").insertAdjacentHTML("beforeend",`<p>Your Score is ${b}`)

        } else if (a < n) {
            document.getElementById("guessDisplay").insertAdjacentHTML("beforeend",`<p>The Number is Greater than ${a}</p>`)
        } else {
            document.getElementById("guessDisplay").insertAdjacentHTML("beforeend",`<p>The Number is Smaller than ${a}</p>`)
        }
    })
}

main()

