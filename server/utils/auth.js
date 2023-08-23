const withAuth = (req, res, next) => {
    // If user isn't logged in, redirect to login route
    if (!req.session.loggedIn) {
        res.redirect('/login');
        req.session.wasRedirected = true;
        //console.log("\nREDIRECTION " + req.session.wasRedirected);
    } else {
        next();
    }
};

module.exports = withAuth;