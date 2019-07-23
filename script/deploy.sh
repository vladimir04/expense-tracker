#!/bin/sh
ssh "admin@$1" <<EOF
 cd ~/expense-tracker
 git pull
 npm install
 pm2 restart all
 exit
EOF