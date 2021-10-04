document.getElementById("eightGB").addEventListener('click', function () {
    const eightGB = document.getElementById("extraMemory");
    const changeByeightGBText = eightGB;
    changeByeightGBText.innerText = "0";
    const newChangeBy = changeByeightGBText.innerText;
    const newEightGb = parseInt(newChangeBy);
    // 8GB BEST PRICE

    const eightBestPrice = document.getElementById("Best-price");
    const eightBestPricetext = eightBestPrice.innerText;
    const eightnewBestPrice = parseInt(eightBestPricetext);

    // 8GB TOTAL PRICE

    let toTotalPrice = document.getElementById("total-price");
    const ToText = toTotalPrice.innerText;
    const conVert = parseInt(ToText);


    const eightGBTotal = eightnewBestPrice + newEightGb;
    toTotalPrice.innerText = eightGBTotal;




});
document.getElementById("sixteenGB").addEventListener('click', function () {
    const extraMemoryCost = document.getElementById("extraMemory");
    const changeBy = extraMemoryCost;
    changeBy.innerText = "180";
    const newOneeighty = changeBy.innerText;
    const afterConvert = parseInt(newOneeighty);

    // best price

    const BestPrice = document.getElementById("Best-price");
    const BestPriceText = BestPrice.innerText;
    const newBestPrice = parseInt(BestPriceText);

    // update TotalPrice

    let totalPrice = document.getElementById("total-price");
    const totalInerText = totalPrice.innerText;
    const newTotal = parseInt(totalInerText);



    let altimatTotal = newBestPrice + afterConvert;
    totalPrice.innerText = altimatTotal;


});

document.getElementById("twoFifty-six").addEventListener('click', function () {

    const extrastorageCost = document.getElementById("extraStorage");
    const storageCost = extrastorageCost;
    storageCost.innerText = "0";
    const newStorage = storageCost.innerText;
    const convertCost = parseInt(newStorage);

    const bestPriceFortwofiftysix = document.getElementById("Best-price");
    const newbestPriceforetwofiftysix = bestPriceFortwofiftysix.innerText;
    const priceFiftysix = parseInt(newbestPriceforetwofiftysix);

    // updating totalcost for 256GB

    let totalTwofiftysixPrice = document.getElementById("total-price");
    const newTotalTwofiftysixPrice = totalTwofiftysixPrice.innerText;
    const twofiftyConvert = parseInt(newTotalTwofiftysixPrice);

    let altimateTotalForTwofiftysix = convertCost + priceFiftysix;
    totalTwofiftysixPrice.innerText = altimateTotalForTwofiftysix;


    // console.log('clicked');
    // const convertCost = storageCost.innerText;
    // const newStorage = parseInt(convertCost);


});

document.getElementById("five-tweleve").addEventListener('click', function () {
    const extrastorageTwo = document.getElementById("extraStorage");
    const storageCostTwo = extrastorageTwo;
    extrastorageTwo.innerText = "100";
    const newextraStorage = storageCostTwo.innerText;
    const extraStoragetwo = parseInt(newextraStorage);

    // total price

    let totalPricefiveonetwo = document.getElementById("total-price");
    const newTotalfivetwelve = totalPricefiveonetwo.innerText;
    const newtotalfivetwlve = parseInt(newTotalfivetwelve);

    const additionForfiveteleve = extraStoragetwo + newtotalfivetwlve;
    totalPricefiveonetwo.innerText = additionForfiveteleve;


});

document.getElementById("ektera-bite").addEventListener('click', function () {
    // storage cost
    const extrastorafeForektera = document.getElementById("extraStorage");
    const ekTera = extrastorafeForektera;
    extrastorafeForektera.innerText = "180";
    const newStorafeForektera = ekTera.innerText;
    const convertForektera = parseInt(newStorafeForektera);

    // best price
    const bestPriceforektera = document.getElementById("Best-price");
    const newBestpriceforektera = bestPriceforektera.innerText;
    const priceForektera = parseInt(newBestpriceforektera);

    // memory cost

    const memoryCostForektera = document.getElementById("extraMemory");
    const mainExtramemory = memoryCostForektera.innerText;
    const totalMemory = parseInt(mainExtramemory);

    // total price
    let totalforEktera = document.getElementById("total-price");
    const newTotalforektera = totalforEktera.innerText;
    const totalektera = parseInt(newTotalforektera);

    const altimateTotalForektera = convertForektera + priceForektera + totalMemory;
    totalforEktera.innerText = altimateTotalForektera;
});

document.getElementById("prime-delivery").addEventListener('click', function () {
    // delivery cost
    const delivery = document.getElementById("deliveryCharge");
    const primeDelivery = delivery;
    delivery.innerText = "0";
    const newDelivery = primeDelivery.innerText;
    const convertDelivery = parseInt(newDelivery);

    // best price
    const bestpriceForprime = document.getElementById("Best-price");
    const newBestPriceforPrime = bestpriceForprime.innerText;
    const priceForPrime = parseInt(newBestPriceforPrime);

    // extra memory cost

    const memoryCostForprime = document.getElementById("extraMemory");
    const mainExtramemoryforPrime = memoryCostForprime.innerText;
    const totalMemory = parseInt(mainExtramemoryforPrime);

    // storage cost
    const storageForprime = document.getElementById("extraStorage");
    const extrasTorageforprime = storageForprime.innerText;
    const storaGeForprime = parseInt(extrasTorageforprime);

    // total price

    let totalPriceforprime = document.getElementById("total-price");
    const totalPrime = totalPriceforprime.innerText;
    const totakPrime = parseInt(totalPrime);

    const altimatetotalForprime = convertDelivery + priceForPrime + totalMemory + storaGeForprime;
    totalPriceforprime.innerText = altimatetotalForprime;




});

document.getElementById("cost-delivery").addEventListener('click', function () {
    // delivery cost
    const deliveryCost = document.getElementById("deliveryCharge");
    const costDelivery = deliveryCost;
    deliveryCost.innerText = "20";
    const newDeliveryForcost = costDelivery.innerText;
    const convertDeliveryforcost = parseInt(newDeliveryForcost);

    // best price
    const bestpriceForcost = document.getElementById("Best-price");
    const newBestPriceforCost = bestpriceForcost.innerText;
    const priceForCost = parseInt(newBestPriceforCost);

    // extra memory cost

    const memoryCostForcost = document.getElementById("extraMemory");
    const mainExtramemoryforCost = memoryCostForcost.innerText;
    const totalMemoryCost = parseInt(mainExtramemoryforCost);

    // storage cost
    const storageForcost = document.getElementById("extraStorage");
    const extrasTorageforcost = storageForcost.innerText;
    const storaGeForcost = parseInt(extrasTorageforcost);

    // total price

    let totalPriceforcost = document.getElementById("total-price");
    const totalCost = totalPriceforcost.innerText;
    const totakPrime = parseInt(totalCost);

    const altimatetotalForcost = convertDeliveryforcost + priceForCost + totalMemoryCost + storaGeForcost;
    totalPriceforcost.innerText = altimatetotalForcost;
});