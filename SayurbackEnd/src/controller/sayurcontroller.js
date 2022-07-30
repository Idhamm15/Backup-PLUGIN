const{s} = require('../models')

module.exports = {
    getAll : (req, res) => {
        s.findAll()
        .then((data) => {
            res.send({
                msg : "succes get all data",
                status : 200,
                data
            })

        })
        .catch((err) => {
            res.send ({
                msg : 'failed get all data',
                status : 500,
                err
            })
        }) 
        
    },
    postsayur: (req, res) => {
        let{body} = req;
        
        s.create(body)
        .then((data) => {
            res.send({
                msg: 'succes post data ',
                status :200,
                data
            })
            .catch((err) => {
                res.send({
                    msg: 'failed post data',
                    status: 500,
                    err
                })
            })
        })
    },

    editsayur: (req, res) => {
        let{id} = req.params;
        let{body} = req;

        s.update(body, {
            where:{id}
        })
        .then((data) => {
            res.send({
                msg : 'succes edit data',
                status: 200,
                data
            })
        })
        
        .catch((err) => {
            res.send({
                msg : 'error',
                status : 500,
                data
            })
        })
    },
    deletesayur: (req, res) => {
        let{id} = req.params;
        s.destroy({
            where:{id}
        })
        .then((data) => {
            res.send({
                msg : 'succes hapus data',
                status: 200,
                data
            })
        })
        
        .catch((err) => {
            res.send({
                msg : 'error hapus data',
                status : 500,
                data
            })
        })
    },
    getsayurByID: (req, res) =>{
        let{id} = req.params;
        s.findOne({
            where:{id}
        })
        .then((data)=> {
            res.send({
                msg: 'succes get by data id',
                status : 200,
                data
            })

        })
        .catch((err) => {
            res.send({
                msg : 'failed get data by id',
                status : 500,
                err
            })
        })
    }

}