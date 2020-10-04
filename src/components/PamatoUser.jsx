import * as React from 'react';
import avatarSrc from '../images/avatar.jpg';

function PamatoUser() {
    return(
        <figure className="PamatoUser">
            <p>
                <span className="greeting">Hello,</span>
                <br/>
                <span className="username"> Nurahmat.</span>
            </p>
            <img src={avatarSrc} alt="Nurahmat" />
        </figure>
    )
}

export default PamatoUser;
