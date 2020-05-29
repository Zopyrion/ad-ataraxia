import React from 'react';
import { Remarkable } from 'remarkable';
import meta from "remarkable-meta";
import remarkableStripper from './sidenote.js'

class Markdown extends React.Component {

    render() {
        const md = new Remarkable({html: true});
        md.inline.ruler.enable([
            'footnote_inline',
            'ins',
            'mark',
            'sub',
            'sup'
        ]);

        //md.inline.ruler.push("sidenote", sidenoteRule, {});
        md.use(remarkableStripper)
        md.use(meta)


        const res = md.render(this.props.plaintext);


        return (
            <section>
                <div dangerouslySetInnerHTML={{__html: res}} />
            </section>
        );
    }

}






export default Markdown;