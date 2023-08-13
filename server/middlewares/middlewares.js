const checkCredentiaslMiddleware = (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(401).send({ message: "Credenciales incompletas" })
    }
    next();
}

module.exports = checkCredentiaslMiddleware;