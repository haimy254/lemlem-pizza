$(document).ready(function () {
  let menuForm = $("#lm-menu-form");

  let size = $("#size");
  let sizeValue;

  let flavour = $("#flavour");
  let flavourValue;

  let number = $("#number");
  let numberValue;

  let crust = $("#crust");
  let crustValue;

  let toppings = $("#toppings");
  let toppingsValue;

  var delivery = false;
  let deliveryCharge = 100;

  let item = {};
  let orderedItemsArray = [];
  let orderedPricesArray = [];

  let totalCost;

  let sizePrices = {
    small: 200,
    medium: 250,
    large: 300,
    mega: 350,
  };

  let flavourPrices = {
    "Chicken Hawaiian": 120,
    "Chicken Macon Bbq": 110,
    "Peri Peri Chicken": 105,
    "Chicken Tikka": 130,
    "Veg Feast": 100,
    "Chicken Macon Bbq": 150,
    "Meat Deluxe": 105,
    "Cheese Burger": 107,
  };

  let crustPrices = {
    crispy: 210,
    stuffed: 200,
    "glutten free": 190,
  };

  let toppingsPrices = {
    "Roasted Tomatoes": 50,
    "Roasted Artichokes": 60,
    "Roasted Broccoli": 40,
    "grilled eggplant": 55,
    "grilled zucchini": 45,
  };

  $("#delivery").change(function () {
    delivery = $(this).prop("checked");
  });

  menuForm.on("submit", function (event) {
    event.preventDefault();

    sizeValue = size.val();
    flavourValue = flavour.val();
    numberValue = Number(number.val());
    crustValue = crust.val();
    toppingsValue = toppings.val();

    item = {
      size: sizeValue,
      flavour: flavourValue,
      number: numberValue,
      crust: crustValue,
      toppings: toppingsValue,
      cost:
        (sizePrices[sizeValue] +
          flavourPrices[flavourValue] +
          crustPrices[crustValue] +
          toppingsPrices[toppingsValue]) *
        numberValue,
    };

    orderedItemsArray = [item];
    orderedPricesArray = [...orderedPricesArray, item.cost];

    totalCost = orderedPricesArray.reduce((sum, num) => sum + num);

    $(".lm-ordered-items").removeClass("hide");

    let orderedItemsTableBody = $("#ordered-items-body");

    orderedItemsArray.map((item) => {
      markup = `<tr><td>${item.size}</td><td>${item.flavour}</td><td>${item.number}</td><td>${item.crust}</td><td>${item.toppings}</td><td>Kshs ${item.cost}</td></tr>`;

      return orderedItemsTableBody.append(markup);
    });

    $("#delivery-display").text(
      delivery ? "Yes | cost of delivery is Kshs 100" : "No"
    );
    $("#total-cost-display").text(
      delivery
        ? (totalCost = totalCost + deliveryCharge)
        : (totalCost = totalCost)
    );
  });
});

function clearCart() {
  if (confirm("note all current orders will be cleared")) {
    let orderedItemsTableBody = $("#ordered-items-body").html("");
    orderedItemsArray = [];
    orderedPricesArray = [];
    item = {};
    totalCost = 0;

    return true;
  }
  return false;
}

$("#another-order").on("click", function () {
  clearCart() ? $(".lm-ordered-items").addClass("hide") : "";
});

$("#check-out").on("click", function () {
  clearCart() ? $(".lm-ordered-items").addClass("hide") : "";
});
