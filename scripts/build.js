process.env.NODE_ENV = 'production';

let fs = require('fs-extra');
let path = require('path');
let webpack = require('webpack');
let config = require('../config/production');

fs.emptyDirSync(path.resolve('./build'));

webpack(config).run((error, status) => {
    if (error) {
        console.log(error.message);
        process.exit(1);
    }

    console.log();
    console.log('Compiled successfully.');
    console.log();
});
