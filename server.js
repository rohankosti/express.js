import express from 'express';
import dotenv from 'dotenv';    
import jobpostRouter from './router/jobpost.js';
dotenv.config();

// import mongodb, {MongoClient, ObjectId} from 'mongodb';
// import dotenv from 'dotenv';    
// dotenv.config();


// const client = new MongoClient(process.env.MONGO_URL);
// const dbs_name = process.env.MONGO_DB;

// client.connect().then(() => 
// {
// console.log("MongoDB connected successfully");
// })
// .catch((err) => 
// {
// console.log("MongoDb Server Not Connected ! Error", err);
// });

// const dbs = client.db(dbs_name);

const app = express();
app.use(express.static('Public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(jobpostRouter);

// app.post('/storeJobVacancy',async (req, res) => {
//    const jobdata = req.body;
//   //  console.log(jobdata);
//    const collection = await dbs.collection('jobvecancy').insertOne(jobdata);
//    res.status(200).send({message:"Job Vacancy Posted Successfully"});
// });

// app.get('/jobvecancylist',async(req,res)=>{
//   const getjobpost =await dbs.collection('jobvecancy').find({}).toArray();
//   res.status(200).send(getjobpost);
// })

// app.post('/jobvecancysingledata',async (req,res)=>{
//     const bodyid = req.body.id;
//     const singledata = await dbs.collection('jobvecancy').findOne({_id:new ObjectId(bodyid)});
//     res.status(200).send(singledata);
// })
// app.put('/updatejobapplicationdata',async (req,res)=>{
//   const bodydata = req.body;
//   // console.log(bodydata);
  
//   const updatedcollection = await dbs.collection('jobvecancy').updateOne({_id:new ObjectId(bodydata.id)},{
//     $set:{
//      name:bodydata.name,
//      email:bodydata.email,
//      position:bodydata.position,
//      resume:bodydata.resume
//     }
//   });
//   res.status(200).send({message:"Job Vacancy Updated Successfully"});
// });

// app.delete('/deletejobapplicationdata',async(req,res)=>{
//   const bodydata = req.body;
//   const deletecollection = await dbs.collection('jobvecancy').deleteOne({_id:new ObjectId(bodydata.id)});
//   res.status(200).send({message:"Job Vacancy Deleted Successfully"});
// });


app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});