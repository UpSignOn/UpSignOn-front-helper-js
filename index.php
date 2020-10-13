<?php

namespace upsignon;

function getUpSignOnJSScript() {
  return file_get_contents("./module.js");
}
