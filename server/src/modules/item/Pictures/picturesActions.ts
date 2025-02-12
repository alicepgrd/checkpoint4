import type { RequestHandler } from "express";
import picturesRepository from "./picturesRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const pictures = await picturesRepository.readAll();
    res.json(pictures);
  } catch (err) {
    next(err);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const pictureId = Number(req.params.id);
    const picture = await picturesRepository.read(pictureId);
    if (picture == null) {
      res.sendStatus(404);
    } else {
      res.json(picture);
    }
  } catch (err) {
    next(err);
  }
};

const add: RequestHandler = async (req, res, next) => {
  try {
    const newPicture = {
      title: req.body.title,
      description: req.body.description,
      image: req.body.image,
      user_id: req.body.user_id,
    };

    const insertId = await picturesRepository.create(newPicture);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    const pictureId = Number(req.params.id);
    const success = await picturesRepository.delete(pictureId);

    if (success) {
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

export default { browse, read, add, destroy };
