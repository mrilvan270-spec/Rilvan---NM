let grandTotal = 0;

function addItem() {
  let name = document.getElementById("itemName").value;
  let price = parseFloat(document.getElementById("itemPrice").value);
  let qty = parseInt(document.getElementById("itemQty").value);

  if (!name || isNaN(price) || isNaN(qty)) {
    alert("Please fill all fields!");
    return;
  }

  let total = price * qty;
  grandTotal += total;

  // Add row to table
  let table = document.getElementById("billBody");
  let row = table.insertRow();
  row.insertCell(0).innerText = name;
  row.insertCell(1).innerText = "₹" + price.toFixed(2);
  row.insertCell(2).innerText = qty;
  row.insertCell(3).innerText = "₹" + total.toFixed(2);

  // Update grand total
  document.getElementById("grandTotal").innerText = "Grand Total: ₹" + grandTotal.toFixed(2);

  // Clear input
  document.getElementById("itemName").value = "";
  document.getElementById("itemPrice").value = "";
  document.getElementById("itemQty").value = 1;
}