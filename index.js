function rollDice(){
    const count = document.getElementById("count").value;
    const result = document.getElementById("result");
    const resultImages = document.getElementById("resultImages");

    const values = [];
    const images = [];

    for (let i = 0; i < count; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="faces/${value}.png" alt="${value}" />`);
    }

    result.textContent = `Dice: ${values.join(", ")}`;
    resultImages.innerHTML = images.join("");
}