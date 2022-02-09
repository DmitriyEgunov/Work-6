function setNewPrice() {
    let price = 0;
    let prices = getPrices();
    let priceIndex = parseInt(select.value) - 1;
    if (priceIndex >= 0) {
        price = prices.prodTypes[priceIndex];
    }
    let quantity = Number(document.getElementById('second_value').value);
    let third_options_Div = document.querySelectorAll('#third_options input');
    third_options_Div.forEach(function (checkbox) {
        if (checkbox.checked) {
            let propPrice = prices.prodProperties[checkbox.name];
            if (propPrice !== undefined) {price += propPrice;}
        }
    });
    let s_p_s = document.getElementsByName('s_p_s');
    s_p_s.forEach(function (radio) {
        if (radio.checked) {
            let optionPrice = prices.prodOptions[radio.value];
            if (optionPrice !== undefined) {
                price += optionPrice;
            }
        }
    });
    let cou = document.getElementById('second_value');
    cou.addEventListener('input',function (){setNewPrice();});
    let s = document.getElementsByName('type');
    s[0].addEventListener('change', function (event) {
        let select = event.target;
        let second_product_r = document.getElementById('second_product_r');
        let third_options = document.getElementById('third_options');
        if (select.value === '1') {
            second_product_r.style.display = 'none';
            third_options.style.display = 'none';
            second_product_Sets();
            third_options_hide();
            document.getElementById('price').innerHTML =
                'Price is: ' + prices.prodTypes[0]*quantity + ' USD.';
        }
        else if (select.value === '2') {
            third_options_hide();
            second_product_r.style.display = 'block';
            third_options.style.display = 'none';
            document.getElementById('price').innerHTML =
                'Price is: ' + prices.prodTypes[1]*quantity + ' USD.';
        }
        else if (select.value === '3') {
            second_product_r.style.display = 'none';
            third_options.style.display = 'block';
            second_product_Sets();
            document.getElementById('price').innerHTML =
                'Price is: ' + prices.prodTypes[2]*quantity + ' USD.';
        } else {
        }
    });
    let price_pr = document.getElementById('price');
    price_pr.innerHTML = 'Price is: ' + price * quantity + ' USD.';
}
function getPrices() {
    return {
        prodTypes: [300, 800, 1200],
        prodOptions: {
            first: 200,
            second: 100,
            third: 50,
        },
        prodProperties: {
            firstS: 150,
            secondS: 300,
        },
    };
}
let elm = document.getElementById('second_product_Sets');
elm.style.display = 'none';
function second_product_Sets() {
    elm.checked = !elm.checked;
}
function third_options_hide() {
    document.getElementById('firstS').checked = false;
    document.getElementById('secondS').checked = false;
}
window.addEventListener('DOMContentLoaded', function () {
    let radioDiv = document.getElementById('second_product_r');
    radioDiv.style.display = 'none';
    let third_options11 = document.getElementById('third_options');
    third_options.style.display = 'none';
    let s = document.getElementsByName('type');
    let select = s[0];
    select.addEventListener('change', function () {setNewPrice();});
    let s_p_s = document.getElementsByName('s_p_s');
    s_p_s.forEach(function (radio) {
        radio.addEventListener('change', function () {setNewPrice();});
    });
    let third_options1 = document.querySelectorAll('#third_options input');
    third_options.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {setNewPrice();});
    });
    setNewPrice();
});