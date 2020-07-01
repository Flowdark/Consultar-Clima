import React from 'react';
import PropTypes from "prop-types";

const Clima = ({ resultado }) => {

    const { name, main } = resultado;

    const kelvin = 273.15;

    if(!name) return null;

    return ( 
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es: </h2>
                <p className="temperatura">
                    { parseInt(main.temp - kelvin) } <span> &#x2103; </span>
                </p>
                <p>
                    Temperatura Máxima: { parseInt(main.temp_max - kelvin) } <span> &#x2103; </span>
                </p>
                <p>
                    Temperatura Mínima: { parseInt(main.temp_min - kelvin) } <span> &#x2103; </span>
                </p>
            </div>
        </div>
     );
}

Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}
 
export default Clima;