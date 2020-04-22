/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  'POST /companies':'companyController.create',
  'GET /companies':'companyController.find',
  'GET /companies/:id':'companyController.findOne',
  'PATCH /companies/:id':'companyController.update',
  'DELETE /companies/:id':'companyController.delete',


//JOBS ROUTES:
  'POST /jobs':'JobController.create',
  'GET /jobs':'JobController.find',

  // Appllication routes:
  'POST /applications':'ApplicationController.create',
  'GET /applications':'ApplicationController.find',

  //User Routes:
  'POST /user/login':'UserController.login',
  'POST /user/signup':'UserController.signup',

  //this routes for my login page:
 // 'POST /singup':'LoginController.create',
  //'POST /loginpage':'LoginController.find',
  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/singup' },


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
