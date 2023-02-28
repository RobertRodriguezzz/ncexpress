const express = require("express");
const partnerRouter = express.Router();
const Partner = require("../models/partner");

partnerRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send all the partners to you");
  })

  .post((req, res) => {
    res.end(
      `Will add the partner: ${req.body.name} with description: ${req.body.description}`
    );
  })

  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /partners");
  })

  .delete((req, res) => {
    res.end("Deleting all partners");
  });

partnerRouter
  .route("/:partnerId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end(
      `Will send the details of the partner: ${req.params.partnerId} to you`
    );
  })

  .post((req, res) => {
    res.statusCode = 403;
    res.end(
      `POST operation not supported on /partners/${req.params.partnerId}`
    );
  })

  .put((req, res) => {
    res.write(`Updating the partners: ${req.params.partnerId}\n`);
    res.end(`Will update the partners: ${req.body.name}
      with description: ${req.body.description}`);
  })

  .delete((req, res) => {
    res.end(`Deleting partners: ${req.params.partnerId}`);
  });

// partnerRouter
//   .route("partners/:partnerId")
//   .get((req, res, next) => {
//     Campsite.findById(req.params.partnerId)
//       .then((campsite) => {
//         if (campsite) {
//           res.statusCode = 200;
//           res.setHeader("Content-Type", "application/json");
//           res.json(campsite.comments);
//         } else {
//           err = new Error(`Partner ${req.params.campsiteId} not found`);
//           err.status = 404;
//           return next(err);
//         }
//       })
//       .catch((err) => next(err));
//   })
//   .post((req, res, next) => {
//     Campsite.findById(req.params.partnerId)
//       .then((campsite) => {
//         if (campsite) {
//           campsite.comments.push(req.body);
//           campsite
//             .save()
//             .then((campsite) => {
//               res.statusCode = 200;
//               res.setHeader("Content-Type", "application/json");
//               res.json(campsite);
//             })
//             .catch((err) => next(err));
//         } else {
//           err = new Error(`Campsite ${req.params.partnerId} not found`);
//           err.status = 404;
//           return next(err);
//         }
//       })
//       .catch((err) => next(err));
//   })
//   .put((req, res) => {
//     res.statusCode = 403;
//     res.end(
//       `PUT operation not supported on /partners/${req.params.partnerId}/comments`
//     );
//   })
//   .delete((req, res, next) => {
//     Partner.findById(req.params.partnerId)
//       .then((campsite) => {
//         if (campsite) {
//           for (let i = campsite.comments.length - 1; i >= 0; i--) {
//             campsite.comments.id(campsite.comments[i]._id).remove();
//           }
//           campsite
//             .save()
//             .then((campsite) => {
//               res.statusCode = 200;
//               res.setHeader("Content-Type", "application/json");
//               res.json(campsite);
//             })
//             .catch((err) => next(err));
//         } else {
//           err = new Error(`Campsite ${req.params.campsiteId} not found`);
//           err.status = 404;
//           return next(err);
//         }
//       })
//       .catch((err) => next(err));
//   });

// partnerRouter
//   .route("partners/:partnerId")
//   .get((req, res, next) => {
//     Campsite.findById(req.params.campsiteId)
//       .then((campsite) => {
//         if (campsite && campsite.comments.id(req.params.commentId)) {
//           res.statusCode = 200;
//           res.setHeader("Content-Type", "application/json");
//           res.json(campsite.comments.id(req.params.commentId));
//         } else if (!campsite) {
//           err = new Error(`Partner ${req.params.partnerId} not found`);
//           err.status = 404;
//           return next(err);
//         } else {
//           err = new Error(`Comments ${req.params.commentId} not found`);
//           err.status = 404;
//           return next(err);
//         }
//       })
//       .catch((err) => next(err));
//   })
//   .post((req, res) => {
//     res.statusCode = 403;
//     res.end(
//       `POST operation not supported on /partners/${req.params.partnerId}/comments/${req.params.commentId}`
//     );
//   })
//   .put((req, res, next) => {
//     Campsite.findById(req.params.partnerId)
//       .then((campsite) => {
//         if (campsite && campsite.comments.id(req.params.commentId)) {
//           if (req.body.rating) {
//             campsite.comments.id(req.params.commentId).rating = req.body.rating;
//           }
//           if (req.body.text) {
//             campsite.comments.id(req.params.commentId).text = req.body.text;
//           }
//           campsite
//             .save()
//             .then((campsite) => {
//               res.statusCode = 200;
//               res.setHeader("Content-Type", "application/json");
//               res.json(campsite);
//             })
//             .catch((err) => next(err));
//         } else if (!campsite) {
//           err = new Error(`Campsite ${req.params.partnerId} not found`);
//           err.status = 404;
//           return next(err);
//         } else {
//           err = new Error(`Comment ${req.params.commentId} not found`);
//           err.status = 404;
//           return next(err);
//         }
//       })
//       .catch((err) => next(err));
//   })
//   .delete((req, res, next) => {
//     Campsite.findById(req.params.campsiteId)
//       .then((campsite) => {
//         if (campsite && campsite.comments.id(req.params.commentId)) {
//           campsite.comments.id(req.params.commentId).remove();
//           campsite
//             .save()
//             .then((campsite) => {
//               res.statusCode = 200;
//               res.setHeader("Content-Type", "application/json");
//               res.json(campsite);
//             })
//             .catch((err) => next(err));
//         } else if (!campsite) {
//           err = new Error(`Partner ${req.params.campsiteId} not found`);
//           err.status = 404;
//           return next(err);
//         } else {
//           err = new Error(`Comment ${req.params.commentId} not found`);
//           err.status = 404;
//           return next(err);
//         }
//       })
//       .catch((err) => next(err));
//   });

module.exports = partnerRouter;
