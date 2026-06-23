import React from "react"
function Clima(){
    const temperatura = 18;
    let sensacion;
    let recomendacion;

    if(temperatura < 15){
        sensacion ="frio";
        recomendacion = "abrigate";
    }else if (temperatura <= 25 ){
        sensacion ="agradable";
        recomendacion = "Disfruta del dia"
    }else {
        sensacion = "caluroso";
        recomendacion = "mantente hidratado"}
    return(
        <div>
            <p>Temperatura: {temperatura}c</p>
            <p>Sensacion: {sensacion}</p>
            <p>Recomendacion:{recomendacion}</p>
        </div>
    );
}
export default Clima;