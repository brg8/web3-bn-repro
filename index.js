const Web3 = require("web3");
const myProvider = process.env["WEB3_TEST_PROVIDER"]

const web3 = new Web3(myProvider);
web3.eth.getFeeHistory([4, "latest", []]).then((fh) => {
  console.log(fh);
});