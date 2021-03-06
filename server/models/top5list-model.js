const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Top5ListSchema = new Schema(
    {
        name: { type: String, required: true },
        items: { type: [String], required: true },
        ownerEmail: { type: String },
        ownerUserName: {type: String},
        //likes: number,
        //dislikes: number,
        //comments: [String],
        //publishDate: String,
        //views: number

    },
    { timestamps: true },
)

module.exports = mongoose.model('Top5List', Top5ListSchema)
