const bcrypt=require('bcrypt');
const SALT_ROUND=10;
module.exports={
async hashPassword(password){
try{
  return await bcrypt.hash(password, SALT_ROUND);

}catch (err) {
  return  res.serverError(err);

}
},
async comparePassword(password, hash){
  try {
    return await bcrypt.compare(password, hash);

  }catch (err) {
    return  res.serverError(err);

  }
}
};
