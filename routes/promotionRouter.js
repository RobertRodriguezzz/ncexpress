const express = require("express");
const promotionRouter = express.Router();
const Promotion = require("../models/promotion");

promotionRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send all the promotions to you");
  })
  .post((req, res) => {
    res.end(
      `Will add the promotion: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /promotions");
  })
  .delete((req, res) => {
    res.end("Deleting all promotions");
  });

promotionRouter
  .route("/:promotionId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end(
      `Will send the details of the promotion: ${req.params.promotionId} to you`
    );
  })
  .post((req, res) => {
    res.end(
      `POST operation not supported on /promotions/${req.params.promotionId}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end(
      `Updating the promotion: ${req.params.promotionId}.\n Will update the promotion: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .delete((req, res) => {
    res.end(`Deleting promotion: ${req.params.promotionId}`);
  });

// promotionRouter
//   .route("promotions/:promotionId")
//   .get((req, res, next) => {
//     Promotion.findById(req.params.promotionId)
//       .then((promotion) => {
//         if (promotion) {
//           res.statusCode = 200;
//           res.setHeader("Content-Type", "application/json");
//           res.json(promotion);
//         } else {
//           err = new Error(`Promotion ${req.params.promotionId} not found`);
//           err.status = 404;
//           return next(err);
//         }
//       })
//       .catch((err) => next(err));
//   })
//   .post((req, res, next) => {
//     Promotion.findById(req.params.promotionId)
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
//           err = new Error(`Promotion ${req.params.promotionId} not found`);
//           err.status = 404;
//           return next(err);
//         }
//       })
//       .catch((err) => next(err));
//   })
//   .put((req, res) => {
//     res.statusCode = 403;
//     res.end(
//       `PUT operation not supported on /promotions/${req.params.promotionId}/comments`
//     );
//   })
//   .delete((req, res, next) => {
//     Campsite.findById(req.params.promotionId)
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
//           err = new Error(`Promotion ${req.params.campsiteId} not found`);
//           err.status = 404;
//           return next(err);
//         }
//       })
//       .catch((err) => next(err));
//   });

// promotionRouter
//   .route("/:campsiteId/comments/:commentId")
//   .get((req, res, next) => {
//     Campsite.findById(req.params.campsiteId)
//       .then((campsite) => {
//         if (campsite && campsite.comments.id(req.params.commentId)) {
//           res.statusCode = 200;
//           res.setHeader("Content-Type", "application/json");
//           res.json(campsite.comments.id(req.params.commentId));
//         } else if (!campsite) {
//           err = new Error(`Campsite ${req.params.campsiteId} not found`);
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
//   .post((req, res) => {
//     res.statusCode = 403;
//     res.end(
//       `POST operation not supported on /campsites/${req.params.promotionId}/comments/${req.params.commentId}`
//     );
//   })
//   .put((req, res, next) => {
//     Campsite.findById(req.params.promotionId)
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
//           err = new Error(`Campsite ${req.params.campsiteId} not found`);
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
//           err = new Error(`Campsite ${req.params.campsiteId} not found`);
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

module.exports = promotionRouter;
