/**
 * JobController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


  /**
   * `JobController.create()`
   */
  create: async function (req, res) {
    try{
      let {title, description, salary, position, companyId}= req.allParams();
      if (!title){
        return  res.badRequest({err:'title is required filed'});
      }
      if(!position){
        return  res.badRequest({err:'position is required filed'});
      }
// create new job record in job detail:
     const jobdetail= await JobDetail.create({description,salary,position}).fetch();
      //create new record in job model:
      const  job= await Job.create({title, jobDetail:jobdetail.id, company:companyId}).fetch();
      return   res.ok(job);
    }catch (err) {
      return  res.serverError(err);
    }
    },






  /**
   * `JobController.find()`
   */
  find: async function (req, res) {
try{
  const findJobs= await Job.find({})
    .populate('jobDetail')
    .populate('company');
  return  res.ok(findJobs);
}catch(err){
  return res.serverError(err);
}
  }

};

