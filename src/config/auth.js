module.exports = {
    checkAccount: (req, res, next) => {
        if(req.isAuthenticated()) {
            return next()
        }
        req.flash('error_msg', 'Please log in to explore more');
        res.redirect('/login')
    }
}