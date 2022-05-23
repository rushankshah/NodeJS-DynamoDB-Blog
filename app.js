require("dotenv").config();
const dynamoose = require("dynamoose");

dynamoose.aws.sdk.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_DEFAULT_REGION,
});

const schema = new dynamoose.Schema({
  name: String,
  mobileNumber: Number,
});

const User = dynamoose.model("Users", schema);

const user = new User({
  name: "Rushank Shah",
  mobileNumber: 000000,
});

user.save((err) => {
  console.log(err);
});

User.get(000000).then((user) => {
  console.log(user);
});
