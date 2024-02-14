const service = require("../services/admin.service");

const importMovies = async (req, res) => {
  try {
    await service.importMovies();

    res.status(200).send("Imported movies successfully");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = {
  importMovies,
};
