/**
 * TodoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  create:async function(req, res){
   let params =req.allParams();
   console.log(params);
   let data = await Todo.create(params);
   let data1=await Todo.find({name:req.body.name});
   console.log(data1);
return res.redirect('back');

  },
};

