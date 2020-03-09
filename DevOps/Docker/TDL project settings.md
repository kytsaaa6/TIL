Docker image - ubuntu ver.16.04
=================================

컨테이너 상세
-------------
|Name|Description|Lib|Version|
|---------|---------------------|------|------|
|TDL_Front|Vue.js 프론트 컨테이너|-|-|
|TDL_Back|Node.js 백엔드 컨테이너|-|-|
|TDL_DB|Mysql DB 컨테이너|-|-|

컨테이너 환경 설정(적용 중..)
-----------------------
1. TDL_Front 
IP : 172.17.0.2
PORT : 8080:8080

docker run -i -t --name TDL_Front -p 8080:8080 ubuntu:16.04

apt-get update
apt upgrade
apt update

apt-get install vim

apt-get install net-tools

apt-get install nginx

nginx 방화벽 설정??

// nginx 포트 설정 및 경로 설정
vi /etc/nginx/sites-available/default 


2. TDL_Back
IP : 172.17.0.3:3000
PORT : 3000:3000

docker run -i -t --name TDL_Back -p 3000:3000 ubuntu:16.04

apt-get update

apt-get install vim

apt-get install net-tools



컨테이너 접속
docker exec -it TDL_Front /bin/bash
docker exec -it TDL_Back /bin/bash
