
/**
 * Plugin for Remarkable Markdown processor which transforms $..$ and $$..$$ sequences into math HTML using the
 * Katex package.
 */
module.exports = (md, options) => {
    const sign = '@';
    const opts = options || {};
    const delimiter = opts.delimiter || sign;


    /**
     * Render the contents as KaTeX
     */
    function renderKatex(tokens, idx){
        const res = '<label for="sn-demo"\n' +
            '       class="margin-toggle sidenote-number">\n' +
            '</label>\n' +
            '<input type="checkbox"\n' +
            '       id="sn-demo"\n' +
            '       class="margin-toggle"/>\n' +
            '<span class="sidenote">' + tokens + '</span>\n'


        return res;
    }


    /**
     * Look for '$' or '$$' spans in Markdown text. Based off of the 'fenced' parser in remarkable.
     */
    const parseInlineKatex = (state, silent) => {
        const start = state.pos, max = state.posMax;
        let pos = start, marker;

        if (state.src.charAt(pos) !== delimiter) return false;
        ++pos;
        while (pos < max && state.src.charAt(pos) === delimiter) ++pos;

        marker = state.src.slice(start, pos);
        if (marker.length > 2) return false;

        let matchStart = pos, matchEnd = pos;
        while ((matchStart = state.src.indexOf(delimiter, matchEnd)) !== -1) {
            matchEnd = matchStart + 1;

            while (matchEnd < max && state.src.charAt(matchEnd) === delimiter)
                ++matchEnd;

            if (matchEnd - matchStart === marker.length) {
                if (!silent) {
                    var content = state.src.slice(pos, matchStart)
                        .replace(/[ \n]+/g, ' ')
                        .trim();
                    state.push({type: 'katex', content: content, block: marker.length > 1, level: state.level});
                }

                state.pos = matchEnd;
                return true;
            }
        }

        if (! silent) state.pending += marker;
        state.pos += marker.length;

        return true;
    };

    md.inline.ruler.push('katex', parseInlineKatex, options);
    md.renderer.rules.katex = (tokens, idx) => renderKatex(tokens[idx].content, tokens[idx].block);
    md.renderer.rules.katex.delimiter = delimiter;
};