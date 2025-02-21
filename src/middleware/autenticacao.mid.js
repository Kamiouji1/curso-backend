const jwt = require('jsonwebtoken')

function autenticar(req, res, next){

    //Bearer TOKEN
    const auth = req.headers["authorization"]
    const token = auth && auth.split(' ')[1]
    if (!token) {
        return res.sendStatus(401)
    }else{
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) =>{
            if (err) return res.sendStatus(403)
            req.user = payload
            next()
        })
    }

}

module.exports = autenticar