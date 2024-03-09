document.addEventListener("DOMContentLoaded", () => {
  const links = document.links;
  console.log(links);

  for (let i = 0; i < links.length; i++) {
    const element = links[i];
    element.classList.add("interact-button");
    element.setAttribute("href", "javascript:void()");
    element.removeAttribute("target");
    // element.addEventListener("click", () => {
    //   ms_init();
    // });
  }

  const buttons = document.getElementsByTagName("button");

  for (let i = 0; i < buttons.length; i++) {
    const element = buttons[i];
    element.classList.add("interact-button");
    // element.addEventListener("click", () => {
    //   ms_init();
    // });
  }
});
