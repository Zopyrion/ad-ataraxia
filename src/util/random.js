const Random = {
    rand_key: function(size){
        return Math.random().toString(36).substring(size);
    },

};

export default Random;