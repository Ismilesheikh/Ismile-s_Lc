const bcrypt = require('bcrypt');
const saltRounds = 10;

const myPlaintextPassword = 'password123';
bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    if (err) {
        console.error(err);
    } else {
        console.log(hash);
        // Store hash in your database.
    }
});
