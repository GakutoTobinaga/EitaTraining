// function vendingMachine(coin) {
//     if(coin >= 100) {
//         console.log('コーラ')
//     } else if (coin < 0) {
//         console.log('正常な値を入力してください')
//     } else {
//         console.log('お金が足りません')
//     }
// }

// vendingMachine(120);
// vendingMachine(90);
// vendingMachine(-10);

function calculateBMI(height, weight) {
    if(height >= 2 || weight <= 0) {
        return false
    } else {
        const bmi = (weight / (height ** 2))
        const roundedBmi = Math.round(bmi * 100) / 100
        return roundedBmi
    }
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

const bmi = calculateBMI(1.7, 50) //BMIの値が出る
const result = judgeBmi(bmi) //診断結果が出る
console.log(result);

console.log(judgeBmi(calculateBMI(1.7, 50)));