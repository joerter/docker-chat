FROM node:6.2.2

RUN useradd --user-group --create-home --shell /bin/false app
ENV HOME=/home/app

USER app
WORKDIR $HOME/chat
