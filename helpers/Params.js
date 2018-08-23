module.exports = {
    getParams: (path, matchedPath) => {
        let sMatchedPath = matchedPath.split('/');
        let sPath = path.split('/');
        let result = {};
        for (let i=0; i<sMatchedPath.length; i++) {
            if (sMatchedPath[i].startsWith('<') && sMatchedPath[i].endsWith('>')) {
                result[sMatchedPath[i].slice(1, -1)] = sPath[i];
            }
        }
        return result;
    }
}