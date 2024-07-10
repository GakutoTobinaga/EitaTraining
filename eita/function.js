import _ from "lodash"
/**
 * 
 * @param {string} beverage 飲み物の名前
 * @param {number} age 年齢
 * @returns {null|boolean} 
 */
function processDrinkOrder(beverage,age) {
    if(typeof beverage !== 'string' || typeof age !== 'number') { //beverageが文字型以外またはageが数値型以外の場合はnullを返す
        console.log('正しい文字を入力してください')
        return null
    }
    if(beverage !== 'コーラ' && beverage !== 'ビール') { //飲み物がコーラ、ビール以外の場合はnullを返す
        console.log('飲み物が適切ではありません')
        return null
    }
    if(age < 0) { //年齢が０歳未満の場合はnullを返す
        console.log('正しい年齢を入力してください')
        return null
    }
    if (beverage === 'ビール' && age <= 19) { //１９歳以下でビールの場合はfalseを返す
        console.log('購入不可')
        return false
    } else {
        console.log('購入可能') //上記以外の場合はtrueを返す
        return true
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

const beverages = {'coke':150,'beer':250,'water':100,'tea':120}
console.log(beverages.coke);
console.log(beverages.beer);
console.log(beverages.water);
console.log(beverages.tea);
