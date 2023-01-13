const jwt = require('jsonwebtoken')
const {v4} = require('uuid')
const secret = AppConfig.SESSION_SECRET


exports.verifyToken = async (req, res, next) => {
    const token = req.headers.authorization
    try {
        const decoded = jwt.verify(token, secret);
        let id = decoded.user.id
        next(id)  
    }catch(err) {
        console.log(err)
        res.send(err)
    }
} 

exports.generateToken = async(req, res, next) => {
    try {
        let user = req.user
        let token = jwt.sign({
            user
          }, secret, { expiresIn: '1h' });
        next(token)
    } catch (error) {
        res.send(err)
    }
}