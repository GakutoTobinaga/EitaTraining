function bendingMachine(coin) {
    if(coin >= 100) {
        console.log('コーラ')
    } else if (coin < 0) {
        console.log('正常な値を入力してください')
    } else {
        console.log('お金が足りません')
    }
}

bendingMachine(120);
bendingMachine(90);
bendingMachine(-10)

function calculateBMI(height,weight) {
    console.log(weight / (height ** 2) * 10000);
}
calculateBMI(174,68);