const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    },
    (err) => {
        if (!err) {
            console.log(`___________________________________________________________`)
            console.log('> Database connection initiated...')
            console.log(`___________________________________________________________`)
        }
        else {
            console.log(`___________________________________________________________`)
            console.log('> Error occurred while connecting to the database > ' + err)
            console.log(`___________________________________________________________`)
        }
    }
)

require('./mail_list.model')
