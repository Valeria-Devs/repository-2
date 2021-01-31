moneyCofla = prompt("Ingresa el monto que tengas disponible Cofla :");
moneyRoberto = prompt("Ingresa el monto que tengas disponible Roberto :");
moneyPedro = prompt("Ingresa el monto que tengas disponible Pedro :");
var iceCost = [{ "iceNaem": "agua", "cost": 0.6 }, { "iceNaem": "crema", "cost": 1 }, { "iceNaem": "heladiz", "cost": 1.6 }, { "iceNaem": "heladovich", "cost": 1.7 }, { "iceNaem": "heladrdo", "cost": 1.8 }, { "iceNaem": "confites", "cost": 2.9 }, { "iceNaem": "pote", "cost": 2.9 }];

function payIce(moneyCofla) {
    var money = moneyCofla;
    let costMax = money;
    let before;
    let cash = 0;
    let nameOption;
    for (var i = 0; i < iceCost.length; i++) {
        before = costMax;
        if (before > iceCost[i]['cost']) {
            //   nameOption = iceCost[i - 1]['iceNaem'];
            nameOption = iceCost[i]['iceNaem'];
            cash = (money - (iceCost[i]['cost']));
        } else if (before === iceCost[i]['cost']) {
            nameOption = iceCost[i - 1]['iceNaem'] + iceCost[i]['iceNaem'];
            cash = (money - (iceCost[i]['cost']));
        } else {

        }

    }
    console.log('Con : ' + money + ' puedes comprar  ' + nameOption + ' tu cambio es ' + cash);
}

payIce(parseInt(moneyCofla));