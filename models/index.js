const mongoose = require('mongoose');

mongoose.connect('mongodb://ericko:ericko_db123@localhost:27017/interior-design', 
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true, 
        useCreateIndex: true 
    }, 
    (err) => {
        if (!err) 
            { 
                console.log(`___________________________________________________________`)
                console.log('Database connection initiated...') 
                console.log(`___________________________________________________________`)
            }
        else { 
            console.log(`___________________________________________________________`)
            console.log('Error occurred while connecting to the database > ' + err) 
            console.log(`___________________________________________________________`)
            }
    }
)

require('./mail_list.model')