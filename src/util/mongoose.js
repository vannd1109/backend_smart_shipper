module.exports = {
    multipleMongooseToObject: function(mongooses){
        return mongooses.map(mongoose => mongoose.toOject());
    },
    singleMongooseToObject: function(mongoose){
        return mongoose ? mongoose.toOject() : mongoose;
    }
};