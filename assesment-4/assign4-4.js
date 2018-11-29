const jwt = require('jsonwebtoken');

const user = {
    role: 'Dev',
    name: 'Person1',
    id: 12
}

var tokenGenerated;

jwt.sign({ user }, 'secretKey', { algorithm: 'HS512' }, function (err, token) {
    tokenGenerated = token;
    // console.log(err,token);
});
setTimeout(() => {
    jwt.verify(tokenGenerated, 'secretKey', function (err, decoded) {
        console.log(decoded.user);
    });
}, 1);



