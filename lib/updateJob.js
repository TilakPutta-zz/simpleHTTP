const jobs = global.jobs;

module.exports = (req, res) => {
    let jobId = req.query.id;
    let newJobName = req.query.name;
    if (jobs.hasOwnProperty(jobId)) {
        jobs[jobId].name = newJobName;
        res.send({
            status: 0,
            message: true
        }, 200);
    } else {
        res.sendError({
            status: -1,
            message: 'Job not Found!'
        }, 404);
    }
}