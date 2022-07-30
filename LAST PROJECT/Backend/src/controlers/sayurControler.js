const {foods, kategori} = require ('../models')

module.exports = {

    getAll : (req, res) => {
        foods.findAll({
            include:[{
                model:kategori,
                as: 'kategoris',
                attributes: ['nama_kategori'],
            }]
        })

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
    postFoods: (req, res) => {
        let{body} = req;

        const newData = {
            ...body,
            image: req.image.url,
        }; 
        foods.create(newData)
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
    editFoods: (req, res) => {
        let{id} = req.params;
        let{body} = req;

        foods.update(body, {
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
    deleteFoods: (req, res) => {
        let{id} = req.params;
        foods.destroy({
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
    getFoodsByID: (req, res) =>{
        let{id} = req.params;
        foods.findOne({
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