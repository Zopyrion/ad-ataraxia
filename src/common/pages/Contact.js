import React from 'react';
import config from '../../autogen/config.json';


class Contact extends React.Component {
    render () {

        let contacts = [];

        for(const [key, value] of Object.entries(config.contacts)){
            const img = require('../../assets/icons/' + key + '.svg')
            contacts.push(
                <div key={key}>
                    <a className="picref" target="_blank" rel="noopener noreferrer" href={value}>
                        <img className="icon" src={img} alt={key} height={50} width={50}/>
                    </a>
                </div>
            );
        }

        return (
            <article>
                <section>
                    <h1>Contact</h1>
                    { contacts }
                </section>
            </article>
        )
    }
}

export default Contact;