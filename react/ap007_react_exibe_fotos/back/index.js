const axiso = require('axios');
const express   = require ('express');
const app = express();
app.use(express.json());

app.get('/search', function(req, res){
    console.log(req.params);
    console.log(req.query);
    const pexelsClient = axios.create({
        baseURL: 'https://api.pexels.com/v1',
        headers: {
            Autorization:
            '563492ad6f91700001000001b9c8e1d0e7c8a9b2b4e5c3f1c8e1d'
        }
    });
    pexelsClient.get('/search', {
        params: {
            query: req.query.q,
        }
    })
    res.end();
})

