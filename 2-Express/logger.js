const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time =  new Date().getFullYear();
    console.log(method, url, time);
    next(); // passing middleware to next middleware which is "/" this here i.e. home
}

module.exports = logger;