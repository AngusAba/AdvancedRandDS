const Film = require("../models/Film");

exports.getFilms = async (req, res) => {
  try {
    const films = await Film.findAll();
    res.status(200).json(films);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getFilmById = async (req, res) => {
  try {
    const film = await Film.findByPk(req.params.id);
    if (film) {
      res.status(200).json(film);
    } else {
      res.status(404).json({ message: "Film not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createFilm = async (req, res) => {
  try {
    const newFilm = await Film.create(req.body);
    res.status(201).json(newFilm);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateFilm = async (req, res) => {
  try {
    const film = await Film.findByPk(req.params.id);
    if (film) {
      await film.update(req.body);
      res.status(200).json(film);
    } else {
      res.status(404).json({ message: "Film not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteFilm = async (req, res) => {
  try {
    const film = await Film.findByPk(req.params.id);
    if (film) {
      await film.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Film not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getFilmsByCategory = async (req, res) => {
  try {
    const films = await Film.findAll({ where: { categoryId: req.params.categoryId } });
    res.status(200).json(films);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getFilmsByLanguage = async (req, res) => {
  try {
    const films = await Film.findAll({ where: { languageId: req.params.languageId } });
    res.status(200).json(films);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
