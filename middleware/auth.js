function requireAdmin(req, res, next) {

    if (req.session.isAdmin) {

        return next();

    }

    return res.redirect("/admin");

}

module.exports = requireAdmin;