const jobs = global.jobs;

module.exports = (req, res) => {
    let jobId = req.query.id;
    if (jobs.hasOwnProperty(jobId)) {
        delete jobs[jobId];
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