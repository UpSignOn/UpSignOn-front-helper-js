<?php

namespace UpSignOn;

function getUpSignOnJSScript() {
  return file_get_contents("./module.js");
}
