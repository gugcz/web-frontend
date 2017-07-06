const sectionModel = require('../models/sections');

module.exports = async function sectionController(req, res) {
  const section = await sectionModel.getSection(req.params.sectionName);

  res.render('section/detail', {
    section
  });
};


