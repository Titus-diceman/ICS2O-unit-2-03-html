function enterClicked() {
  // input
  const street = document.getElementById("street").value
  const number = parseInt(document.getElementById("number").value)

  // output
  document.getElementById("address").innerHTML =
    "Your address is: " + number + ", " + street + "."
}
