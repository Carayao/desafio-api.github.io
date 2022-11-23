async function obtenerDatosDiaActual() {
    const res = await fetch('https://mindicador.cl/api');
    const data = await res.json();

    return data;
}

async function obtenerDatosHistoricos(moneda, fecha) {
    const res = await fetch(`https://mindicador.cl/api/${moneda}/${fecha}`);
    const data = await res.json();

    return data;
}
/*obtenemos las propiedades como arreglo para obtener los nombres de la moneda de cambio*/
async function construyeSelect() {
    const data = await obtenerDatosDiaActual();
    const monedas = (Object.keys(data));
    let html = '<select name="noneda" id="moneda">';
    for (const codigo_moneda of monedas) {
        const moneda = data[codigo_moneda];
        if (data[codigo_moneda].unidad_medida == 'Pesos') {
           html += `<option value="${moneda.valor}">${moneda.nombre}</option>`
        }
    
    }
      html += '</select>' 
      
      const selector = document.querySelector('#selector');
      selector.innerHTML = html;
} 

construyeSelect();
