/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
const mongoose = require('mongoose');
const url = `mongodb://localhost:27017/test`;

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(url);
}

const repoSchema = mongoose.Schema({
    // create a schema for the data
    fakeData: String
});

const Repo = mongoose.model('Repo', repoSchema);

const save = (data) => {
  // This function should save a repo or repos to
  // the MongoDB

  //destructure incoming data
  const { } = data;

  const doc = new Repo({
    //insert destructured data 
  });

    //   console.log(doc);
  doc.save((err, doc) => {
    if (err) {
      return console.error(err);
    }
    console.log(`${doc.strMeal} saved to the collection!`);
  });
};

module.exports.save = save;
