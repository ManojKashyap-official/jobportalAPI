/**
 * LoginController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  create:async function(req, res) {
    let params = req.allParams();
    console.log(params);
    let data11 = await Login.create(params);

    return res.view('pages/loginpage');

  },

  find:async function(req, res){
    let data2 = await Login.find({email:req.body.email});
    console.log(data2);


  },

  login:async function(req, res) {

    try{
    const  user= await Login.find({email:req.body.email},{pass:req.body.pass});
    return res.ok(user);
    if (!(email && pass))
    {
      res.send("No username or password specified!",500);
    }
    else{
    }
    }

    catch(err){
      return  res.serverError(err);
    }

  }
};
