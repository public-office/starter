#!/usr/bin/env sh

ssh root@SERVER_IP /bin/bash << EOF
  cd /var/www/html
  git fetch
  git reset --hard origin/master
  yarn
  yarn run build
EOF
