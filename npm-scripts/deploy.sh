#!/bin/bash

# 壓縮資料夾

tar zcvf resume.tar.gz ./dist

# 複製到 server 上

scp -r ./resume.tar.gz root@202.182.97.161:/root/resume.tar.gz

echo "copy files done"

# 解壓縮

ssh -tt root@202.182.97.161 "tar zxvf /root/resume.tar.gz"

# 刪除 server 檔案

ssh -tt root@202.182.97.161 "rm -r /var/www/html/resume"

echo "remove old files done"

# 搬移到 tomcat 內

ssh -tt root@202.182.97.161 "mv /root/dist/ /var/www/html/resume"

echo "move files done"

# 刪除本地的壓縮檔案

rm ./resume.tar.gz

# 刪除遠端的壓縮檔案

ssh -tt root@202.182.97.161 "rm /root/resume.tar.gz"
