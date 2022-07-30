const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3003
app.use(express.urlencoded({ extended: false}));
const koneksiDB = mysql.createConnection ({
    host: "localhost",
    user: "root",
    password: "Rizqi5701",
    database: "express"
})
koneksiDB.connect((err) => {
    if(err) {
        console.log("koneksi database gagal");
    }else{
        console.log("koneksi sukses");
    }
})
app.get("/express/foods", (req,res) => {
    let sql = "SELECT * FROM foods";
    koneksiDB.query(sql, ( err, result) =>{
        if(err) {
            res.send({
                msg: "gagal mengambil data",
                status: 500,
                err,
            })
        }else{
            res.send({
                msg: "sukses mengambil data",
                status: 200,
                data: result
            })
        }
    })
})
app.post("/express/foods", (req,res) =>{
    let {body} = req;
    let sql = "INSERT INTO foods SET ?";
    koneksiDB.query(sql,body,(err,result) =>{
        if(err) {
            res.send({
                msg: "gagal menginput data",
                status: 500,
                err,
            });
        }else{
            let newBody = {
                id: result.insertId,
                ...body,
            };
            res.send({
                msg: "input data sukses",
                status: 200,
                data: newBody,
            });
        }
    });
});
app.get("/express/foods", (req,res) => {
    let {id} = req.params;
    let sql = `SELECT * FROM foods WHERE id=${id}`;
    koneksiDB.query(sql, (err,result) =>{
        if(err){
            res.send({
                msg: "mengambil data gagal",
                status: 500,
                err,
            });
        }else{
            res.send({
                msg: "sukses mengambil data by id",
                status: 200,
                data: result
            });
        }
    })
})
app.listen(port , () =>{
    console.log("server berjalan di port "+port);
})