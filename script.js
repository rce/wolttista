setInterval(loop, 100)

function loop() {
  getDeliveryTextElements().forEach(e => {
    const deliveryColor =
      hasPrice(e, '0.00') ? 'lightgreen' :
      hasPrice(e, '3.90') ? 'yellow' :
      hasPrice(e, '5.90') ? 'orange' :
      'gray'
    hilight(e, deliveryColor)
  })
}

function getDeliveryTextElements() {
  return document.querySelectorAll('[data-localization-key="venue-info.delivery-price-estimate"]')
}

function hilight(e, backgrounColor) {
  e.style.backgroundColor = backgrounColor
  e.style.color = 'black'
}

function hasPrice(e, price) {
  return e.textContent.replace(',', '.').indexOf(price) !== -1
}
