const { all, byId } = require('../controllers/people');

module.exports = router => {
  router.get('/people/', all);
  router.get('/people/:id', byId);

  return router;
};