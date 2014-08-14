FROM     ubuntu
MAINTAINER Philip Morris <philiplmorris@googlemail.com>

RUN apt-get update
RUN apt-get -y install nodejs
RUN apt-get -y install git
RUN git clone https://github.com/Morriphi/drunken-bear.git
RUN (echo '#!/bin/bash'; echo 'nodejs ./drunken-bear/server.js $*') >> run-drunken-bear
RUN chmod 755 ./run-drunken-bear

EXPOSE 30000
