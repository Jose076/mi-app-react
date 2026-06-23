import react from "react"

function Perfil(){
    const nombre = "Jose Ariel";
    const profesion = "Desarollador web";
    const experiencia = "4";
    const disponible = true;
    return (
        <div>{}
            <h2>{nombre}</h2>
            <p>{profesion}</p>
            <p>{experiencia} años experiencia de experiencia</p>
            <p>{disponible ? "Disponible para contratar" :"No disponible"}</p>
        </div>
    );
}
export default Perfil;