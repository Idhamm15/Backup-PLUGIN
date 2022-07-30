const {foods} = require('../models/')

module.exports = {
    getAllFoods: (req, res) => {
        foods.findAll()

        .then((data) => {
            res.status(200).send({
                message: "get all data makanan sukses",
                status: 200,
                data
            })
        })
        .catch((error) => {
            res.status(500).send({
            message: "get all data error",
            status: 500,
            error
        })
    })
},
postData: (req,res) => {
    let {body} = req;

    const newData = {
        ...body,
        image: req.image.url,
    };

    foods.create(body)
    .then((data) => {
        res.status(200).send({
            message: "create data makanan sukses",
            status: 200,
            data
        })
    })
    .catch((error) => {
        res.status(500).send({
        message: "create data error",
        status: 500,
        error
    })
})
}
}