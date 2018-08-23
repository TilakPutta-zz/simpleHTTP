const jobs = global.jobs;

module.exports = (req, res) => {
    let jobId = req.query.id;
    if (jobs.hasOwnProperty(jobId)) {
        let jobName = jobs[jobId].name;
        let message = {
            id: jobId,
            name: jobName
        }
        res.send({
            status: 0,
            message: message
        }, 200);
    } else {
        res.sendError({
            status: -1,
            message: 'Job not Found!'
        }, 404);
    }
}