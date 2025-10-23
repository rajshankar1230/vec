const mongoose = require("mongoose");
const nprojectSchema = new mongoose.Schema(
    {
      SN : {
        type: Number,
        require: true,
      },
      Nameofproject: {
        type: String,
        require: true,
      },
      Client: {
        type: String,
        require: true,
      },
      Projectproponent:{
       type : String,
       require: true,
      },
      Country:{
        type: String,
        require: true,
      },
      Status: {
        type: String,
        require: true,
      },
      }
    );
    const Nproject = mongoose.model("Nproject", nprojectSchema);
    module.exports = Nproject;