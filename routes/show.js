const router = require('express').Router();
const File = require('../models/schema');

router.get('/:uuid', async(req,res) =>{
    try {
        const file = await File.findOne({uuid: req.params.uuid});

        if(!file) {
            return res.render('download', {error: 'Link has been expired' + err.message});
        }

        console.log('Successfully downloaded');
        return res.render('download', {
            uuid: file.uuid,
            filename: file.filename,
            fileSize: file.size,
            downloadLink: `${process.env.APP_BASE_URL}/files/download/${file.uuid}`
            // link url 
        });

    } catch (err) {
        return res.render('download', {error: 'Something went wrong' + err.message});
    }
});


module.exports = router;