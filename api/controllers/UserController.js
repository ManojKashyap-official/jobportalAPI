/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const Joi= require('joi');
module.exports = {


  /**
   * `UserController.signup()`
   */
  signup: async function (req, res) {
try{
      const schema=  Joi.object().keys({
        email:Joi.string().required().email(),
        password: Joi.string().required()
      });
//validation the email password:
  const {email, password}= await Joi.validate(req.allParams(), schema);
  const encryptedpassword= await UtilService.hashPassword(password);

  //create a new user:
  const user = await User.create({email, password:encryptedpassword}).fetch();


  //send the new user in response:
  return  res.ok(user);

}catch (err) {
  if(err.name==='ValidationError')
      return  res.badRequest({err});
return  res.serverError(err);
}
  },

  /**
   * `UserController.login()`
   */
  login: async function (req, res) {
    try{
      const schema= Joi.object().keys({
        email:Joi.string().required().email(),
        password: Joi.string().required()
      });
      //validation of email and password:
        const {email,password}= await Joi.validate(req.allParams(), schema);
        //login action and find user are register or not:
      const user= await  User.findOne({email});
      if(!user){
        return res.notFound({err:'user not found'});
      }
      //matched the password using bcrypt:
       const matchedPassword= await UtilService.comparePassword(password, user.password);
      if(!matchedPassword){
        return  res.badRequest({err:'unauthorized user '});
      }
      const token=JWTService.issuer({user: user.id},'1day');
      return  res.ok({token});
    }
    catch (err) {
      if(err.name==='ValidationError')
        return  res.badRequest({err});
      return  res.serverError(err);
    }
  }

};

