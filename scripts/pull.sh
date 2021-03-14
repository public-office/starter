#!/usr/bin/env sh

rsync -r -p -t -u -z --exclude=".*" -P -h -i --delete root@159.65.41.239:/var/www/html/content ./
