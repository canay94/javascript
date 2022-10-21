function calculaPrecioTotal(precio, porcentajeImpuestos)
{
  var gastosEnvio = 10;
  var precioConImpuestos = (1 + porcentajeImpuestos/100) * precio;
  var precioTotal = precioConImpuestos + gastosEnvio;

  return Number.parseFloat(precioTotal).toFixed(2);
}

var precioTotal = calculaPrecioTotal(23.34, 16);
console.log("Precio Total: ", precioTotal);
