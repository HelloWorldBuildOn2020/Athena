#!/bin/bash

echo Loggin AWS ECR
    $(aws ecr get-login --region ap-southeast-2 --no-include-email)

docker pull 192479299400.dkr.ecr.ap-southeast-2.amazonaws.com/athena:FE_18
docker pull 192479299400.dkr.ecr.ap-southeast-2.amazonaws.com/athena:athena-nginx-front-end

docker-compose -f /home/centos/docker-compose.deploy.yml up -d