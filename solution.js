moneyCofla = prompt("Ingresa el monto que tengas disponible Cofla :");
moneyRoberto = prompt("Ingresa el monto que tengas disponible Roberto :");
moneyPedro = prompt("Ingresa el monto que tengas disponible Pedro :");
var iceCost = [{ "iceNaem": "agua", "cost": 0.6 }, { "iceNaem": "crema", "cost": 1 }, { "iceNaem": "heladiz", "cost": 1.6 }, { "iceNaem": "heladovich", "cost": 1.7 }, { "iceNaem": "heladrdo", "cost": 1.8 }, { "iceNaem": "confites", "cost": 2.9 }, { "iceNaem": "pote", "cost": 2.9 }];


function payIce(name, money) {
    let money = money;
    let name = name;
    let costMax = 0;
    let before;
    var optionIce = [];
    let cash = 0;
    let nameOption;
    for (var i = 0; i < iceCost.length; i++) {
        before = costMax;
        if (costMax > iceCost[i]['cost']) {
            costMax = costMax;
            nameOption = iceCost[i]['iceNaem'];
            cash = money % iceCost[i]['cost'];
            if (before === iceCost[i]['cost']) {
                optionIce.push(iceCost[i - 1]);
                optionIce.push(iceCost[i]);
                cash = money % iceCost[i]['cost'];
            }
        } else {
            costMax = iceCost[i]['cost'];
            nameOption = iceCost[i]['iceNaem'];
            cash = money % iceCost[i]['cost'];
            if (before === iceCost[i]['cost']) {
                optionIce.push(iceCost[i - 1]);
                optionIce.push(iceCost[i]);
                cash = money % iceCost[i]['cost'];
            }
        }
    }
    console.table(name + 'tiene ' + money + cash);

}

payIce('cofla', moneyCofla);