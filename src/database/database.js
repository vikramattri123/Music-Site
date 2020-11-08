const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/Music',{useNewUrlParser:true,useCreateIndex:true,useFindAndModify:false});
