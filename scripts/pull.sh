#!/usr/bin/env sh

rsync -r -p -t -u -z --exclude=".*" -P -h -i --delete root@SERVER_IP:/var/www/html/content ./
