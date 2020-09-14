const Courses = require('../models/Courses');

class CourseController {
  show(req, res, next) {
    Courses.findOne({ slug: req.params.slug })
      .then((courses) => {
        var course = courses.toObject();
        res.render('courses/show', { course });
      })
      .catch(next);
  }

  create(req, res, next) {
    res.render('courses/create');
  }

  store(req, res, next) {
    const course = new Courses({
      name: req.body.name,
      description: req.body.description,
      image:
        'https://img.youtube.com/vi/' + req.body.videoid + '/sddefault.jpg',
      videoId: req.body.videoid,
      level: req.body.level,
    });
    course
      .save()
      .then(() => res.redirect('/'))
      .catch(() => error);
  }
}
module.exports = new CourseController();
