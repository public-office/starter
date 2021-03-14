#!/usr/bin/env sh

ssh root@159.65.41.239 /bin/bash << EOF
  cd /var/www/html
  git fetch
  git reset --hard origin/master
  cd xero
  npm install
  pm2 restart all
EOF
