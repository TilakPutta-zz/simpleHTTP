
module.exports = class Job {
    constructor(data) {
        for (const attribute in data) {
            if (data.hasOwnProperty(attribute)) {
                this[attribute] = data[attribute];
            }
        }
    }
}