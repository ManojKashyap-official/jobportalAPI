module.exports={

  async create(req, res) {
    try {
      let params = req.allParams();
      console.log(params);
      if (!params.name) {
        return res.badRequest({err: 'the name is required field' });
      }
      const results = await Company.create({
        companyName:params.companyName,
        city:params.city,
        address:params.address,
        user: req.user
      });
      return res.ok(results);
    } catch (err){
      return res.serverError(err);
    }
  },
  find: async function(req, res){
    try{
    const findCompanies = await Company.find().populate('jobs');
      return  res.ok(findCompanies);
    } catch(err){
      return  res.serverError(err);
    }

  },


  findOne: async function(req, res){
    try{
      const findOneCompany= await  Company.findOne({id:req.params.id});
      return  res.ok(findOneCompany);
    }catch(err){
      return  res.serverError(err);
    }
  },


  update:async function(req, res){
    try{
      let params = req.allParams();
      let attributes={};
      if (params.name){
        attributes.name=params.name;
      }
      if (params.city){
        attributes.city=params.city;
      }
      if (params.address){
        attributes.address=params.address;
      }
      const result= await Company.update({id: req.params.id}, attributes);
      return  res.ok(result);

    }catch (err){
      return  res.serverError(err);
    }

  },
  delete:async function(req,res) {
    try {
      let params = req.allParams();
      const results = await Company.destroy({id:req.params.id});
      return res.ok(results);
    } catch (err) {
      return res.serverError(err);
    }

  }

};
