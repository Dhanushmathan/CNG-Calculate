const tripDistanceEl = document.getElementById("trip-distance")
const fuelEffEl = document.getElementById("fuel-efficiency")
const fuelCostEl = document.getElementById("fuel-cost")
const calculateBtnEl = document.getElementById("calculateBtn")

calculateBtnEl.addEventListener('click', (event) => {
    event.preventDefault();

    if (tripDistanceEl.value === "") {
        alert("Enter the Distance value")
    } else {
        const distanceKM = tripDistanceEl.value
        const fuelEfficiently = fuelEffEl.value
        const fuelCost = fuelCostEl.value

        const result = (distanceKM / fuelEfficiently) * fuelCost

        const finalMsg = "Your fuel cost will be around: ₹" + result

        const showCost = document.getElementById("showCost")
        showCost.innerText = finalMsg
    }
});
