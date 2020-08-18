const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
title: String,
price: String,
description: String,
images: [ String ],
location: String,
lat: Number,
lng: Number,
author: {
	type: Schema.Types.ObjectID,
	ref: 'User'
},
reviews: [
	{
		types: Schema.Types.ObjectId,
		ref: 'Review'
	}
]
});

module.exports = mongoose.model('Post', PostSchema);


/*
Post
- Title - String
- Price - string
- Images -  array of strings
- Location - string
- latitude - number
- longitude - number
- Author - object id
- Reviews - array of objects
*/


