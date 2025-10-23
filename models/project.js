const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema(
    {
      SN : {
        type: Number,
        require: true,
      },
      Nameofproject: {
        type: String,
        require: true,
      },
      EPC : {
        type: String,
        require: true,
      },
      Projectproponent: {
        type : String,
        require: true,
      },
      Status: {
        type: String,
        require: true,
      },
    }
);
const Project = mongoose.model("Project", projectSchema);
module.exports = Project;