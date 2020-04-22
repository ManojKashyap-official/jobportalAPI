/**
 * ApplicationController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

create: async function(req, res){
  try{
    const {name, email, jobId}= req.allParams();
    if(!name){
      return  res.badRequest({err:'the name is required. '});
    }
    if(!email){
      return  res.badRequest({err:'the email is required. '});
    }
    if(!jobId){
      return  res.badRequest({err:'the jobId is required. '});
    }
      const candidate = await Candidate.create({name, email}).fetch();
      const app= await Application.create({candidate: candidate.id, job: jobId}).fetch();
      return  res.ok(app);
  }catch (err) {
    return  res.serverError(err);
  }
}
};

