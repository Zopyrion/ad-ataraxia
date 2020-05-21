const Parser = {
    get_path: function(url){
        const url_without_queries = url.split('?')[0];
        const split = url_without_queries.split('/');
        return '/' + split[3] + '/' + split[4] ;
    },

    str_clean: function(str) {
        str = str.replace(" ", "_")
        return str
    },

};

export default Parser;