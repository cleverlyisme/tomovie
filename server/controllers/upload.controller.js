const path = require("path");
const uuid = require("uuid-v4");

const storage = require("../configs/firebase.storage");

const uploadFile = async (req, res) => {
  try {
    const file = req.file;

    if (!file) throw new Error("No file to upload");

    const fileName = `${uuid()}${path.extname(file.originalname)}`;
    const blob = storage.file(fileName);
    const blobStream = blob.createWriteStream({
      resumable: false,
      metadata: {
        contentType: file.mimetype,
      },
    });

    blobStream.on("error", (err) => {
      throw new Error(err.message);
    });

    blobStream.on("finish", () => {
      const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${storage.name}/o/${fileName}?alt=media`;

      res.status(200).send(publicUrl);
    });
    blobStream.end(file.buffer);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = { uploadFile };
