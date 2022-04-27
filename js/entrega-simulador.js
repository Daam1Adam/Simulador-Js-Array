///Calculadora de cuotas

const cuota3 = (monto,cuotas) => monto * 1.7576 / cuotas;
const cuota6 = (monto,cuotas) => monto * 1.6383 / cuotas;
const cuota9 = (monto,cuotas) => monto * 1.6079 / cuotas;
const cuota12 = (monto,cuotas) => monto * 1.5609 / cuotas;

 let compra = [];
 let producto = prompt ("¿Qué producto quieres comprar?");
      compra.push(producto.toLocaleUpperCase());
      console.log(compra);
 let monto = parseFloat(prompt("Ingrese costo del producto"));
      compra.push(monto);
      console.log(compra);
 let cuotas = parseInt(prompt("¿Quieres comprarlo en 3, 6, 9 o 12 cuotas?"));
      compra.push(cuotas);
      console.log(compra);
 if (cuotas === 3) {
         alert("El monto fijo de tus cuotas es de " + cuota3(monto,cuotas).toFixed(2));
   }else if (cuotas === 6){
         alert("El monto fijo de tus cuotas es de " + cuota6(monto,cuotas).toFixed(2));
    }else if (cuotas === 9){
         alert("El monto fijo de tus cuotas es de " + cuota9(monto,cuotas).toFixed(2));
     }else if (cuotas === 12){  
        alert("El monto fijo de tus cuotas es de " + cuota12(monto,cuotas).toFixed(2));
      }else {
            alert("Operacion no valida");
  }
