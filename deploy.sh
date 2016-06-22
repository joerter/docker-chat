#! /bin/bash

rsync ./docker-compose.production.yml chat@chat.johnoerter.me:/home/chat
ssh chat@chat.johnoerter.me docker-compose -f docker-compose.production.yml stop
ssh chat@chat.johnoerter.me docker pull joerter/docker-chat:latest
ssh chat@chat.johnoerter.me docker-compose -f docker-compose.production.yml up -d
