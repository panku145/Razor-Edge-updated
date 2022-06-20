const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const express = require("express");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const Authenticate = require("./middlewear/Authenticate");

const app = express();
app.use(cookieParser());

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "/"); // update to match the domain you will make the request from
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Special-Request-Header",
//   );
//   next();
// });

// const cors = require("cors");

// const corsOptions = {
//   origin: "http://localhost:3000",
//   credentials: true,
//   withCredentials: true,
// };

// app.use(cors(corsOptions));

// DB Conection URL || URI
dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT;
// const DB = process.env.DATABASE;

app.use(express.json());

require("./db/connection");

// Routers
const create = require("./router/create.js");
const get = require("./router/get.js");
const update = require("./router/update.js");
const deletes = require("./router/delete.js");
const homeCreate = require("./router/homeCreate.js");
const homeGet = require("./router/homeGet.js");
const homeUpdate = require("./router/homeUpdate.js");
const WhyRazorEdgeCreate = require("./router/WhyRazorEdgeCreate");
const WhyRazorEdgeGet = require("./router/WhyRazorEdgeGet");
const WhyRazorEdgeUpdate = require("./router/WhyRazorEdgeUpdate");
const productCreate = require("./router/productCreate");
const productGet = require("./router/productGet");
const ProductUpdate = require("./router/ProductUpdate");
const productDelete = require("./router/productDelete");
const solution2Create = require("./router/solution2Create");
const solution2Get = require("./router/solution2Get");
const solution2Update = require("./router/solution2Update");
const solution1Create = require("./router/solution1Create");
const solution1Update = require("./router/solution1Update");
const solution1Get = require("./router/solution1Get");
const blogGet = require("./router/blogGet");
const newsCreate = require("./router/newsCreate");
const newsGet = require("./router/newsGet");
const caseStudiesCreate = require("./router/caseStudiesCreate");
const caseSudiesGet = require("./router/caseSudiesGet");
const newsHeaderCreate = require("./router/newsHeaderCreate");
const newsHeaderGet = require("./router/newsHeaderGet");
const blogHeaderCreate = require("./router/blogHeaderCreate");
const blogHeaderGet = require("./router/blogHeaderGet");
const casestudyHeaderCreate = require("./router/casestudyHeaderCreate");
const casestudyHeaderGet = require("./router/casestudyHeaderGet");
const UpdateCreate = require("./router/UpdateCreate");
const upgateGet = require("./router/upgateGet");
const newsRoomCreate = require("./router/newsRoomCreate");
const newsRoomGet = require("./router/newsRoomGet");
const newsRoomUpdate = require("./router/newsRoomUpdate");
const blogPageCreate = require("./router/blogPageCreate");
const blogPageGet = require("./router/blogPageGet");
const blogPageUpdate = require("./router/blogPageUpdate");
const caseStudyPageCreate = require("./router/caseStudyPageCreate");
const caseStudyPageGet = require("./router/caseStudyPageGet");
const caseStudyPageUpdate = require("./router/caseStudyPageUpdate");
const testimonial = require("./router/testimonial");
const clientPage = require("./router/clientPage");
const clientGallery = require("./router/clientGallery");
const header = require("./router/header");
const partners = require("./router/partners");
const partnerService = require("./router/partnerService");
const careerPages = require("./router/careerPage");
const benefits = require("./router/benefits");
const careerGallery = require("./router/careerGallery");
const WREAccordian = require("./router/WREAccordian");
const PrivacyPolicys = require("./router/PrivacyPolicy");
const Disclaimers = require("./router/Disclaimer");
const homebullet = require("./router/homebullet");
const HomeAccordion = require("./router/HomeAccordion");
const HomeProductList = require("./router/HomeProductList");
const Footer = require("./router/Footer");
const DevelopmentJobs = require("./router/DevelopmentJobs");
const ManagementJobs = require("./router/ManagementJobs");
const OperationJobs = require("./router/OperationJobs");
const User = require("./router/User");

// API
app.use("/create", create);
app.use("/get", get);
app.use("/update", update);
app.use("/delete", deletes);
app.use("/home-create", homeCreate);
app.use("/home-get", homeGet);
app.use("/home-update", homeUpdate);
app.use("/why-razor-edge-create", WhyRazorEdgeCreate);
app.use("/why-razor-edge-get", WhyRazorEdgeGet);
app.use("/why-razor-edge-update", WhyRazorEdgeUpdate);
app.use("/product-create", productCreate);
app.use("/product-get", productGet);
app.use("/product-update", ProductUpdate);
app.use("/product-delete", productDelete);
app.use("/solution2-create", solution2Create);
app.use("/solution2-get", solution2Get);
app.use("/solution2-update", solution2Update);
app.use("/solution1-create", solution1Create);
app.use("/solution1-update", solution1Update);
app.use("/solution1-get", solution1Get);
app.use("/blogs-get", blogGet);
app.use("/news-create", newsCreate);
app.use("/news-get", newsGet);
app.use("/case-studies-create", caseStudiesCreate);
app.use("/case-studies-get", caseSudiesGet);
app.use("/news-header-create", newsHeaderCreate);
app.use("/news-header-get", newsHeaderGet);
app.use("/blog-header-create", blogHeaderCreate);
app.use("/blog-header-get", blogHeaderGet);
app.use("/casestudy-header-create", casestudyHeaderCreate);
app.use("/casestudy-header-get", casestudyHeaderGet);
app.use("/update-create", UpdateCreate);
app.use("/update-get", upgateGet);
app.use("/newsroom-create", newsRoomCreate);
app.use("/newsroom-get", newsRoomGet);
app.use("/newsroom-update", newsRoomUpdate);
app.use("/blogPage-create", blogPageCreate);
app.use("/blogPage-get", blogPageGet);
app.use("/blogPage-update", blogPageUpdate);
app.use("/casestudy-page-create", caseStudyPageCreate);
app.use("/casestudy-page-get", caseStudyPageGet);
app.use("/casestudy-page-update", caseStudyPageUpdate);
app.use("/testimonial", testimonial);
app.use("/clientPage", clientPage);
app.use("/clientgallery", clientGallery);
app.use("/header", header);
app.use("/partners", partners);
app.use("/partner-service", partnerService);
app.use("/careers", careerPages);
app.use("/benefits", benefits);
app.use("/career-gallery", careerGallery);
app.use("/wreaccordian", WREAccordian);
app.use("/privacy-policys", PrivacyPolicys);
app.use("/disclaimers", Disclaimers);
app.use("/homebullet", homebullet);
app.use("/homeaccordian", HomeAccordion);
app.use("/homeproductlist", HomeProductList);
app.use("/footer", Footer);
app.use("/development-jobs", DevelopmentJobs);
app.use("/management-jobs", ManagementJobs);
app.use("/operation-jobs", OperationJobs);
app.use("/user", User);

// app.use(express.static("public"));
app.use("/images", express.static("images"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("api running");
  });
}

app.listen(PORT, () => {
  console.log(`server is running at port no ${PORT}`);
});
