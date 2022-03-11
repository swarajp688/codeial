module.exports.index = function (req,res) {
    return res.json(200 , {
        data : {
            message:'posts api v1',
            posts:[],
        }
    })
}