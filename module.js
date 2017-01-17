var fs = require('fs');

filterFiles = function(dirname, ext, callback) {
    fs.readdir(dirname, function(err, list) {
        if(err) {
            return callback(err);
        } else {
            var filteredList = list.filter(function(file) {
                var extension = file.split('.')[1];
                return extension === ext;
            });
            callback(null, filteredList);
        }
    });
};

module.exports = filterFiles;
