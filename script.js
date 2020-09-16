inames = []
iqtyp = []
iprice = []

function addItem(){
  
  inames.push(document.getElementById('pname').value)
  iqtyp.push(parseFloat(document.getElementById('pqty').value))
  iprice.push(parseFloat(document.getElementById('price').value))
  
  displayCart()
   
}

function displayCart(){
  
  
  cartdata = '<table><tr><th>Nombre del producto</th><th>Cantidad</th><th>Precio</th><th>Total</th></tr>';
  
  total = 0;
  
  for (i=0; i<inames.length; i++){
    total += iqtyp[i] * iprice[i]
    cartdata += "<tr><td>" + inames[i] + "</td><td>" + iqtyp[i] + "</td><td>" + iprice[i] + "</td><td>" + iqtyp[i] * iprice[i] + "</td><td><button onclick='delElement(" + i + ")'>Delete</button></td></tr>"
  }
  
  cartdata += '<tr><td></td><td></td><td></td><td>' + total + '</td></tr></table>'
  
  document.getElementById('cart').innerHTML = cartdata
  
}


function delElement(a){
  inames.splice(a, 1);
  iqtyp.splice(a, 1)
  iprice.splice(a, 1)
  displayCart()
}