FROM ruby:3.2.2 

ENV LANG C.UTF-8

RUN curl https://deb.nodesource.com/setup_12.x | bash
RUN curl https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update -qq && \
    apt-get install -y sqlite3 libsqlite3-dev yarn software-properties-common npm

WORKDIR /app

RUN npm install npm@latest -g && \
    npm install n -g && n 20.2.0

COPY Gemfile Gemfile.lock ./
RUN bundle install

COPY package.json yarn.lock ./
RUN yarn install
