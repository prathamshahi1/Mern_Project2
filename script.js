document.getElementById("nutritionForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get user inputs
    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const activity = document.getElementById("activity").value;

    // Calculate BMR (Basal Metabolic Rate) using Mifflin-St Jeor Equation
    let bmr;
    if (gender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // Adjust BMR based on activity level
    let activityFactor;
    switch (activity) {
        case "sedentary":
            activityFactor = 1.2;
            break;
        case "light":
            activityFactor = 1.375;
            break;
        case "moderate":
            activityFactor = 1.55;
            break;
        case "active":
            activityFactor = 1.725;
            break;
    }

    const dailyCalories = Math.round(bmr * activityFactor);

    // Generate Nutrition Plan (this is a simplified example)
    const protein = Math.round(weight * 1.6);  // grams per day
    const carbs = Math.round(dailyCalories * 0.45 / 4);  // 45% of calories from carbs
    const fats = Math.round(dailyCalories * 0.25 / 9);  // 25% of calories from fats

    // Display result
    document.getElementById("result").innerHTML = `
        <h2>Nutrition Plan for ${name}</h2>
        <p>Calories: ${dailyCalories} kcal/day</p>
        <p>Protein: ${protein} grams/day</p>
        <p>Carbohydrates: ${carbs} grams/day</p>
        <p>Fats: ${fats} grams/day</p>
    `;
});
