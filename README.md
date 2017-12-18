# Rails 5.1 + Webpack + Vue.js + Vuex Demo App

## Description

Demo Single Page Application based on Ruby on Rails 5.1, using Vue.js + Vuex, compiled with Webpack.
This App has all the basic features you need to build a real world admin with:

- Forms (with progress and error callbacks)
- Authentication (Devise)
- Pagination (Kaminari)
- Dynamic search filters (Ransack)
- Websockets powered chat (ActionCable)

All of this is designed (hopefully!) with maintainability and readability in mind, slightly inspired by the Rails conventions.

You can read more about the how and why I built this App here: http://www.guillaume-barillot/

## Installation

```
git clone git@github.com:gbarillot/rails-vue-demo-app.git
cd rails-vue-demo-app
bundle exec rake db:prepare
bundle exec rake db:seed
foreman start
```

## Contribution

As noticed in the Blog Post, I am not a "Javascript developer", so if you have updates or corrections to propose, I'm open to any contribution.

Help and contribution in the Server Side Rendering field (SSR) are highly welcome!
