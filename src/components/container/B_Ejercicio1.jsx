import { Contacto } from "../../models/A_Ejercicio1"

import React from 'react';
import PropTypes from 'prop-types';
import ContactoComponent from "../pure/forms/Props_Ejercicio1";



const ContactoListComponent = () => {

    const defaultContacto = new Contacto("Luna", "Herrera", "luna.herrera@gmail.com", false)

    return (
        <div>
            <h1>Tus contactos</h1>
           <ContactoComponent contacto={defaultContacto}></ContactoComponent>
        </div>
    );
};


ContactoListComponent.propTypes = {

};


export default ContactoListComponent;
