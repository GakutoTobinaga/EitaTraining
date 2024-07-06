function vendingMachine(coin) {
    if(coin >= 100) {
        console.log('コーラ')
    } else if (coin < 0) {
        console.log('正常な値を入力してください')
    } else {
        console.log('お金が足りません')
    }
}

vendingMachine(120);
vendingMachine(90);
vendingMachine(-10);

function calculateBMI(height, weight) {
    if(height >= 2 || weight <= 0) {
        console.log('正しい値を入力してください')
    } else {
        const bmi = (weight / (height ** 2))
        console.log(Math.round(bmi * 100) / 100);
    }
}

calculateBMI(1.74,68);