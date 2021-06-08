var mongoUtil = require('../../utils/mongoutil');
const db = mongoUtil.getDb();

function write(collection_name,data){
    db.collection(collection_name).insertOne(data),(err, res) => {
        if(err) {
            return console.log('Unable to connet to DB')
        }
        return(res.ops);
    };
}
function read(collection_name,data){
    console.log(collection_name);
    db.collection(collection_name).find(data).toArray((err,user) => {
        if(err) return console.log(err)
        return user;
    })
}

function del(collection_name,data){
    db.collection(collection_name).deleteOne(data)
    .then((res) => {
        return(res);
    }).catch((err) => {
        return(err)
    })
};

module.exports={
    read,
    write,
    del
};

