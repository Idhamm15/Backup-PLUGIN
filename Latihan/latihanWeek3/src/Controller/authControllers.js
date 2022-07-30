const {users, Sequelize} = require ('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//const res = require('express/lib/response');
const Op = Sequelize.op;


module.exports = {
    signup: (req, res) =>{
        const{body} = req;
        const saltround = 10;

        body.password = bcrypt.hashSync(body.password, saltround);
        console.log(body);

        users.create(body)
        .then((data) => {
            res.status(200).send({
                msg: "signup succesfull",
                status: 200,
                data
            })        
    })
.catch ((err) =>{
    res.status(500).send({
        msg: "signup failed",
        status: 500,
        err
    })
})
},
signin: async(req, res) => {
    const {body} = req;

    let finsUser = await users.finsOne({
        where: {
            [Op.or] : [
                {username: body.username}, {email: body.username}
            ]}
        })
    
        if (findUser === null){
            res.status(404).send({
                msg: 'sign-in error',
                status: 404,
                err: 'user not found'
            })
        }
        const isValidPassword = bcrypt.compareSync(
            body.password,
            findUser.dataValues.password
        );
        if (!isValidPassword) {
            res.status(403).send({
                msg: 'sign-in error',
                status: 403,
                error: "password is invalid"
            })
        }
        const payload = {
            id: finsUser.dataValues.id,
            username: finsUser.dataValues.username,
            email: finsUser.dataValues.email
        }
        const token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 86400,
        })
        delete findUser.dataValues.password;
        res.status(200).send({
            msg: 'sign-in success',
            status: 200,
            data: {...finsUser.dataValues, token},
        })
    }
}