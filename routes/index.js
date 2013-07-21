
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index.html');
};

/*
 * GET simple thoughts partial
 */
exports.simpleThoughts = function(req, res) {
    res.render('simple-thoughts.html');
};

/*
 * GET deep thoughts partial
 */
exports.deepThoughts = function(req, res) {
    res.render('deep-thoughts.html');
};