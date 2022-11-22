const mongoose = require("mongoose");

const auditSchema = mongoose.Schema({
  auditName: {
    type: String,
  },
  contractAddr: {
    type: String,
  },
  auditLink: {
    type: String,
  },
  nftLink: {
    type: String,
  },
  status: {
    type: String,
  },
  image: {
    type: String,
  },
});

const auditDetail = mongoose.model("AuditDetail", auditSchema);
module.exports = auditDetail;
