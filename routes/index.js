
// home page
exports.home = function (req, res) {
	res.render ('index');
};

exports.students = function (req, res) {
	res.render ('students');
};

exports.subjects = function (req, res) {
	res.render ('subjects');
};

exports.questions = function (req, res) {
	res.render ('questions');
};

exports.noWhere = function (req, res) {
	res.send ('Page doesnt exist!');
};