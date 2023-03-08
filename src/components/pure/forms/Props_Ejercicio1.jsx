import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../../models/A_Ejercicio1';



const ContactoComponent = ({contacto}) => {
    return (
        <div>
            <h2>
                Nombre: {contacto.nombre}
            </h2>
            <h3>
                Descripcion: {contacto.apellido}
            </h3>
            <h5>
                Nivel: {contacto.email}
            </h5>
            <h5>
                Esta tarea esta: {contacto.conectado ? " Contacto En Línea": "Contacto No Disponible"}
            </h5>
        </div>
    );
};


ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ContactoComponent;
