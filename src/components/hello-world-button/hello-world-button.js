require("./hello-world.scss");

class HelloWorldButton {
  helloWorldButtonStyle = "hello-world-button";

  render() {
    const button = document.createElement("button");
    button.innerText = "Hello world";
    button.classList.add(this.helloWorldButtonStyle);

    const body = document.querySelector("body");

    button.onclick = () => {
      const p = document.createElement("p");
      p.innerText = "Hello world paragraph";
      p.classList.add("hello-world-text");

      body.appendChild(p);
    };

    body.appendChild(button);
  }
}

module.exports = {
  HelloWorldButton,
};
