const mongoose = require("mongoose");

// 1 categorry of project mobile example ucan change with food also
const telivisionSchemas = new mongoose.Schema(
  {
    category: { type: String, required: true },
    title:{type:String,required:true},
    newPrice: { type: String, required: true },
    oldPrice: { type: String, required: true },
    img: { type: String, required: true },
    offer: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);


const Telivision = mongoose.model("image", telivisionSchemas);

// 2 schemas for clock
// 1 categorry of project mobile example ucan change with food also
const clockSchemas = new mongoose.Schema(
  {
    category: { type: String, required: true },
    title:{type:String,required:true},
    newPrice: { type: String, required: true },
    oldPrice: { type: String, required: true },
    image: { type: String, required: true },
    offer: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Clock = mongoose.model("clock1", clockSchemas); 


// laptop schemas 
const laptopSchema = new mongoose.Schema(
  {
    category: { type: String, required: true },
    title: { type: String, required: true },
    newPrice: { type: String, required: true },
    oldPrice: { type: String, required: true },
    image: { type: String, required: true },
    offer: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Laptop = mongoose.model("laptop", laptopSchema);

// mobile schemas 
const mobileSchema = new mongoose.Schema(
  {
    category: { type: String, required: true },
    title: { type: String, required: true },
    newPrice: { type: String, required: true },
    oldPrice: { type: String, required: true },
    image: { type: String, required: true },
    offer: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Mobile = mongoose.model("mobile", mobileSchema);

module.exports = { Telivision, Clock, Laptop, Mobile };