module.exports = function(app, db) {
  const multer = require("multer");
  const path = require("path");

  var storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, "./uploads");
    },
    filename: function(req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    }
  });

  var upload = multer({
    storage: storage,
    fileFilter: function(reg, file, cb) {
      const filetypes = /jpeg|jpg|png|gif/;
      const extname = filetypes.test(
        path.extname(file.originalname).toLowerCase()
      );
      const mimetype = filetypes.test(file.mimetype);
      if (extname && mimetype) {
        return cb(null, true);
      } else {
        cb("Error: Images Only");
      }
    }
  });

  /* GET api listing. */
  app.get("/api/", (req, res, next) => {
    db.panoImg.findAll({}).then(result => {
      res.status(200).json(result);
    });
  });

  app.get("/api/:panoId", (req, res, next) => {
    db.panoImg
      .find({
        where: {
          id: req.params.panoId
        }
      })
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => {
        res.status(404).json({
          error: err
        });
      });
  });

  app.post("/api/", upload.single("image"), (req, res, next) => {
    db.panoImg
      .create({
        name: req.body.imgName,
        url: req.file.path,
        rotationSpeed: req.body.rotationSpeed,
        manualRotation: req.body.manualRotation
      })
      .then(result => {
        res.status(201).json(result);
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  });

  app.delete("/api/:panoId", (req, res, next) => {
    db.panoImg
      .destroy({
        where: {
          id: req.params.panoId
        }
      })
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  });
};
