const express = require("express");
var app = express();
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
// const productRoutes = require("./api/routes/products");
// const orderRoutes = require("./api/routes/orders");
const userRoutes = require("./api/routes/user");
// const inductionRoutes = require("./api/routes/induction");
// const employeeRoutes = require("./api/routes/employee");
// const leaveRoutes = require("./api/routes/leave");
// const holidayRoutes = require("./api/routes/holiday");
// const jobGradeWiseLeaveRoutes = require("./api/routes/jobGradeWiseLeave");
// const jobGradeWiseHolidayRoutes = require("./api/routes/jobGradeWiseHoliday");
const auditRoutes = require("./api/routes/audit");
const mongoose = require("mongoose");

// mongoose.connect(
//   "mongodb+srv://ritesh:" +
//     process.env.MONGO_PW +
//     "@cluster0.vrp9qso.mongodb.net/humanResource?retryWrites=true&w=majority"

// );
// mongoose.connect(
//   "mongodb+srv://ritesh:ritesh@cluster0.vrp9qso.mongodb.net/humanResource?retryWrites=true&w=majority"

// );
mongoose.connect(
  "mongodb+srv://expelee:expelee@cluster0.qadjvih.mongodb.net/expelee?retryWrites=true&w=majority"
);

app.use(morgan("dev"));
app.use("/uploads", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: false }));
//extract json data
app.use(bodyParser.json());
app.use(cors());
//routes which can handle request

// app.use((req, res, next) => {
//   res.header("Content-Type", "application/json");
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "*");
//   //   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Authorization");

//   if (req.method === "OPTIONS") {
//     res.header("Access-Control-Allow-Methods", "PUT,POST,PATCH,DELETE,GET");
//     return res.status(200).json({});
//   }
// });
// app.use("/products", productRoutes);
// app.use("/order", orderRoutes);
app.use("/user", userRoutes);
app.use("/audit", auditRoutes);
// app.use("/employee", employeeRoutes);
// app.use("/leave", leaveRoutes);
// app.use("/holiday", holidayRoutes);
// app.use("/jobGradeWiseLeave", jobGradeWiseLeaveRoutes);
// app.use("/jobGradeWiseHoliday", jobGradeWiseHolidayRoutes);
// app.use("/jobGrade", jobGradeRoutes);

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error?.message,
    },
  });
});
// app.use((req, res, next) => {
//   console.log("hiiii");
// });
module.exports = app;
