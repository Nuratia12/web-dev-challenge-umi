const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.use(express.static(path.join(__dirname,'..'))); 

app.get('/', (req, res) => {
        res.sendFile(__dirname, '..', 'challange', 'index.html');
})

app.get('/api/info',(req, res) => {
        res.json({
                pesan: "Halo ini dari node.js",
                waktu: new Date().toISOString()
        });
});

app.listen(3000, () => {
        console.log("server jalan di http://localhost:3000");
});