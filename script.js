#!/usr/bin/env node
const ora = require("ora");

const spinner = ora("Executing post init script ");

new Promise((resolve) => {
  spinner.start();
  // console.log("Executing post init script");
  resolve();
})
  .then(() => {
    spinner.succeed();
  })
  .catch(() => {
    spinner.fail();
    throw new Error(
      "Something went wrong during the post init script execution"
    );
  });
