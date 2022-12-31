const { hello } = require("./hello-world.js");
const { addImage } = require("./add-image.js");
const { HelloWorldButton } = require("./components/hello-world-button");

hello();
addImage();
const helloWorld = new HelloWorldButton();
helloWorld.render();
