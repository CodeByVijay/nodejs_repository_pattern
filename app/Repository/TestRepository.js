const { Test } = require("../contracts/TestContract");
class TestRepository extends Test {
    async testAPI(req) {
        return req;
    }
}
module.exports = { TestRepository };
