# Rails + Webpack + Vue.js + Vuex Demo App

## Description

Demo Single Page Application based on Ruby on Rails 5.2, using Vue.js + Vuex, compiled with Webpack.
All the basic features you need to build a real world app with:

- Front / Admin namespaces
- I18n (server side + client side)
- Forms (with progress and error handling)
- Authentication (Devise)
- Pagination (Kaminari)
- Dynamic search filters (Ransack)
- Websockets chat (ActionCable)

All of this is designed with maintainability and readability in mind, slightly inspired by the Rails conventions.

You can read more about the how and why I built this App here: http://www.guillaume-barillot.com/2017/12/02/how-to-organize-your-vue-files-in-a-rails-5-1-project-using-webpack/

## Installation

```
git clone git@github.com:gbarillot/rails-vue-demo-app.git
cd rails-vue-demo-app
bundle install
yarn install
bundle exec rails db:migrate
bundle exec rails db:seed
```

## Booting the app

```
foreman start
```

## Running tests

### Rails side

```
rails test
```

### JS side

```
yarn test
```

## Contributions

PR and feedbacks welcome!

## Licence

MIT
