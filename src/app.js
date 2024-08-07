
const mongodb = require ('mongodb')

const mongoClient = mongodb.MongoClient

const connectionUrl = 'mongodb://127.0.0.1:27017'

// 127.0.0.1 => ip address for  =  localhost    كلمة لوكال هوست نفسها بتعمل مشاكل فى الكونكشن عند معظم الناس 
 
// name of database 


const dbname = 'proj-1' 

mongoClient.connect (connectionUrl , (error , res1)=>{
    if (error) {
        return console.log('error has occured')
    }
    console.log('all perf')



    /// answer Question 1
    const db =res1.db(dbname)
    db.collection('users').insertOne({
        name:'Hend',
        age:30
    }, (error, data) => {
        if(error){
            console.log('unable to added data')
        }
        console.log(data.insertedId)
    })
    db.collection('users').insertOne({
        name:'ahmad',
        age:30
    }, (error, data) => {
        if(error){
            console.log('unable to added data')
        }
        console.log(data.insertedId)
    })
    //////////////////////////////////////////////////
    /// answer Question 2
    db.collection('users').insertMany(
        [
            {
                name:'Hend',
                age:30
            },
            {
                name:'farah',
                age:30
            },
            {
                name:'ahmad',
                age:40
            },
            {
                name:'ayman',
                age:32
            },
            {
                name:'ali',
                age:20
            },
            {
                name:'yusra',
                age:27
            },
            {
                name:'jamela',
                age:27
            },
            {
                name:'omnia',
                age:27
            },
            {
                name:'kamelia',
                age:27
            },
            {
                name:'qamar',
                age:27
            }
        ],(error ,data) =>{
            if(error){
                console.log('unable to insert data')
            }else{
                console.log(data.insertedCount)
            }
        }

    )

    //////////////////////////////////////////////////
    /// answer Question 3
    db.collection('users').find({age:27}).count((error,users)=>{
        if(error){
            return console.log('error has occurred')
        }else{
            console.log(users)
        }        
    })
    //////////////////////////////////////////////////
    /// answer Question 3
    db.collection('users').find({age:27}).limit(3).toArray((error,users)=>{
        if(error){
            return console.log('error has occurred')
        }else{
            console.log(users)
        }        
    })
    //////////////////////////////////////////////////
    /// answer Question 4
    db.collection("users").updateMany({}, {
        $set: { name: "Osama" }
    }, {
        multi: true,
        limit: 4
    })
    .then((data1) => {
        console.log(data1.modifiedCount);
    })
    .catch((error) => {
        console.log(error);
    });
    //////////////////////////////////////////////////
    /// answer Question 5
    db.collection("users").updateMany({age:27}, {
        $inc: { age: 4 }
    }, {
        multi: true,
        limit: 4
    })
    .then((data1) => {
        console.log(data1.modifiedCount);
    })
    .catch((error) => {
        console.log(error);
    });
    //////////////////////////////////////////////////
    /// answer Question 6
    db.collection("users").updateMany({}, {
        $inc : {age:10}
    })
    .then((data1)=>{console.log(data1.modifiedCount)})
    .catch((error) => console.log(error))
    //////////////////////////////////////////////////
    /// answer Question 7
    db.collection("users").deleteMany({age:41})
    .then((data1)=>{console.log(data1.deletedCount)})
    .catch((error) => console.log(error))
})