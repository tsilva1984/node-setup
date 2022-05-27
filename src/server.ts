import express from 'express';

const app = express();


app.get('/',(request,response)=>{
    return response.json({message:'World'});
})
 
app.listen(3333); 