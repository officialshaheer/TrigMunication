const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
email: String,
image: String,
posts: [{
	type: Schema.Types.ObjectId,
	ref: 'Post'
}]

});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);

/*User
- Email - string
- Password - string - this not needed to be created in the database, since it will auto create it.
- Username - string - this not needed to be created in the database. It will autogenerate as hash.
- image - string
- Posts - array of objects ref Posts
*/