<?php

namespace upsignon;

function getUpSignOnJSScript() {
  return file_get_contents("./module.js");
}

function getUpSignOnLink($url, $buttonId, $connectionToken) {
  $protocolUri = "upsignon://protocol/";
  $protocolUri = $protocolUri . "?url=" . rawurlencode($url);
  $protocolUri = $protocolUri . "&buttonId=" . rawurlencode($buttonId);
  if($connectionToken)
    $protocolUri = $protocolUri . "&connectionToken=" . rawurlencode($connectionToken);
  return $protocolUri;
}
