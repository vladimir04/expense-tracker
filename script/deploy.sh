#!/bin/sh
ssh "admin@206.81.27.22" <<EOF
 cd ~/expense-tracker
 git pull
 npm install
 pm2 restart all
 exit
EOF