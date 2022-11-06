const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  blogs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'blogs'
  }]
});

// using bcrypt to hash the password
userSchema.pre("save", async function (next) {
  const user = this;
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

// making sure that the users have the correct credentials
userSchema.methods.isValidPassword = async function (password) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);
  return compare;
};

// compiling the model
const userModel = mongoose.model("users", userSchema);

// export the model
module.exports = userModel;
