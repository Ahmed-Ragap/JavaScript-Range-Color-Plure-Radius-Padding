let inputs = document.querySelectorAll(".item input")
function handelDate() {
    const number = this.dataset.sizing || '';
    // console.log(number)
    document.documentElement.style.setProperty(`--${this.name}`, this.value + number)
}

inputs.forEach(input => input.addEventListener("change", handelDate));


inputs.forEach(input => input.addEventListener("mousemove", handelDate));
// console.log(inputs)