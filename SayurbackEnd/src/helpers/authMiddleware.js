const jwt = require("jsonwebtoken");

module.exports = {
    checkLogin : (req, res, next) => {
        const bearer = req.header("x-access-token")
        if(!bearer){
            res.status(401).send({
                msg : 'cant access',
                status : 401,
                error : 'you must be logged in'
            })
        }else{
            const token = bearer.split(" ")[1]
            try{
                const decodeToken = jwt.verify(token, process.env.SECRET_KEY)
                req.decodeToken = decodeToken;
                next()
            } catch (error){
                res.status(401).send({
                    msg: 'cant access',
                    status: 401,
                    error: 'invalid token',
                })
            }
        }
    }
}