#!/bin/bash

echo Loggin AWS ECR
    $(aws ecr get-login --region ap-southeast-1 --no-include-email)

sudo docker pull 192479299400.dkr.ecr.ap-southeast-2.amazonaws.com/athena:FE_18
sudo docker pull 192479299400.dkr.ecr.ap-southeast-2.amazonaws.com/athena:athena-nginx-front-end

sudo docker-compose -f /home/centos/docker-compose.deploy.yml up -d