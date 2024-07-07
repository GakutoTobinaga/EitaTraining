function displayInput() {
    var input = document.getElementById("inputField").value; // Get the input from the text field
    document.getElementById("displayArea").textContent = input; // Display the input in the span
}

function displayInputWithLastName() {
    var input = document.getElementById("inputField").value;
    document.getElementById("displayArea").textContent = input
}

function calculateBMI(height, weight) {
    if(height >= 2 || weight <= 0) {
        return false
    }  
        const bmi = (weight / (height ** 2))
        const roundedBmi = Math.round(bmi * 100) / 100
        return roundedBmi
}

function judgeBmi(a) {
    if(a === false) {
        throw new Error("正しい値を入力してください")
    } else if (a >= 25) {
        console.log('肥満体重');
        return false
    } else if (a < 18.5) {
        console.log('低体重');
        return false
    } else {
        console.log("普通体重")
        return true
    }
}

function BMICalculator() {
    const height = document.getElementById("heightInputField").value;
    const weight = document.getElementById("weightInputField").value;
    console.log(height)
    const BMI = calculateBMI(height, weight);
    console.log(BMI)
    document.getElementById("displayArea").textContent = BMI;
}