const Job = require('../models/Job');
const Random = require('../helpers/Random');
let jobs = global.jobs;

module.exports = (req, res) => {
    let jobName = req.body.name;
    let id = Random.getRandomId();
    jobs[id] = new Job({
        name: jobName
    });
    let message = {
        jobId: id
    };
    res.send({
        status: 0,
        message: message
    }, 201);
}