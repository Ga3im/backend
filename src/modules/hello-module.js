function hello(name) {
  if (name) {
    console.log(`Hello ${name}`);
  } else {
    console.log("Enter a name");
  }
}
module.exports = hello;
