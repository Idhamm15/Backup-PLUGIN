const e = require ('express')
const jwt = require("jsonwebtoken");

module.exports = {
    checklogin : (req, res, next) => {
        const baerer = req.header('x-access-token');
        if(!baerer){
            res.status(404).send({
                msg: 'cannot access',
                status: 401,
                error: "you must login"
            })
        }else { 
            const token = baerer.split(" ")[1]
            try {
                const DecodedToken = jwt.verify(token, process.env.SECRET_KE);
                req.DecodedToken = DecodedToken
                next()
            } catch (error) {
                res.status(401).send({
                    msg: "cannot access",
                    status: 401,
                    error: "invalid token"
                })
            }
        }
    }
}

//proses otorisasi adalah pemberian hak akses