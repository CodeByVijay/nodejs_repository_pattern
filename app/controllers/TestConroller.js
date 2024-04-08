const { TestRepository } = require("../Repository/TestRepository");

const testRepository = new TestRepository();

const testAPI = (req, res) => {
  testRepository.testAPI(req)
        .then(result => {
            // Assuming testAPI returns some data
            res.send(result);
        })
        .catch(error => {
            // Handle errors appropriately
            console.error(error);
            res.status(500).send("Internal Server Error");
        });
};

module.exports = {
  testAPI,
};
