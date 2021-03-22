const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://shaddy:slimshaddy@cluster0.pkthh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
}, (err) => {
    if (!err) { console.log("database Connected"); }
    else { console.log("Error in Db connection : " + err); }
});

require('./logistic_reg.model');
require('./logistic.model');
require('./adminModel');
require('./pincodeModel');
