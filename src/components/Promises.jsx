const Promises = () => {
    const aplicarDescuento = new Promise((resolve, reject)=>
    {
        const descuento = true;
        if (descuento) {
            resolve("El descuento fue aplicado")
        } else {
            reject ("no se pudo aplicar el descuento")
        }
    })
}