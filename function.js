function processDrinkOrder(beverage,age) {
    if(beverage !== 'コーラ' && beverage !== 'ビール') {
        console.log('飲み物が適切ではありません')
        return null
    }
    if(beverage === 'コーラ' && age <= 19 || age >= 20) {
        console.log('購入可能')
        return true
    } else if (beverage === 'ビール' && age <= 19) {
        console.log('購入不可')
        return false
    } 
}
// processDrinkOrder('コーラ',19)
// processDrinkOrder('ビール',17)
// processDrinkOrder('ビール',25)
// processDrinkOrder('サイダー',35)

function trueorfalse(judge) {
    if (judge === true) {
        console.log('OK')
        return 'OK'
    } else {
        console.log('NG')
        return 'NG'
    }
}

const a = processDrinkOrder('コーラ',20);
const judge = trueorfalse(a);
console.log(judge);