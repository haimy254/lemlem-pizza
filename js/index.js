function calculatePrice(myform) {
  //Get selected data
  var elt = document.getElementById("size");
  var size = elt.options[elt.selectedIndex].value;

  var elt = document.getElementById("classypiza");
  var classypiza = elt.options[elt.selectedIndex].value;

  var elt = document.getElementById("piece");
  var piece = elt.options[elt.selectedIndex].value;

  var elt = document.getElementById("crust");
  var crust = elt.options[elt.selectedIndex].value;

  var elt = document.getElementById("toppings");
  var toppings = elt.options[elt.selectedIndex].value;

  var elt = document.getElementById("delivery");
  var delivery = elt.options[elt.selectedIndex].value;

  //convert data to integers
  size = parseInt(size);
  classypiza = parseInt(classypiza);
  piece = parseInt(piece);
  crust = parseInt(crust);
  toppings = parseInt(toppigs);
  delivery = parseInt(delivery);

  //calculate total value
  var total = size(size * piece) + classypiza + crust + toppings + delivery;

  //print value to  totalamount
  document.getElementById("totalamount").value = total;
}
