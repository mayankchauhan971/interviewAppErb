console.log("app.js loaded");
("use strict");

import Util from "./services/Util";
import Home from "./views/Home";
import Show from "./views/Show";
import New from "./views/New";
import Edit from "./views/Edit";
import Error404 from "./views/Error404"

const routes = {
  "/": Home,
  "/interviews/:id": Show,
  "/interviews/new": New,
  "/interviews/:id/edit": Edit
};

const router = async () => {
  const content = document.getElementById("page_container");

  let request = Util.parseRequestURL();
  console.log("request ");
  console.log(request);
  let parsedURL =
    (request.resource ? "/" + request.resource : "/") +
    (request.id ? "/" + request.id : "") +
    (request.verb ? "/" + request.verb : "");
  console.log("parsedURL ");
  console.log(parsedURL);
  let page = routes[parsedURL] ? routes[parsedURL] : Error404;

  content.innerHTML = await page.render();
  await page.after_render();
};

window.addEventListener("hashchange", router);
window.addEventListener("load", router); // recheck this line