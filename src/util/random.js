const Random = {
    rand_str: function(size){
        return Math.random().toString(36).substring(size);
    },

};

export default Random;