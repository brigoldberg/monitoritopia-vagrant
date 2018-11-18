'use strict';

angular.module('config', [])
  .constant('config', {
    'endpoint'        : "/api",
    'provider'        : "basic", // google, github, gitlab, keycloak, pingfederate, saml2 or basic
    'client_id'       : "",
    'colors'          : {}, // use default colors
    'severity'        : {}, // use default severity codes
    'audio'           : {} // no audio
  });
