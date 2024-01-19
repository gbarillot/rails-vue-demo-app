# Rails + Vite + Vue + Pina Demo App

### This repo is no longer maintained 
Feel free to grab some ideas, but I will no longer update this codebase. 

## Description

Demo Single Page Application based on Ruby on Rails 7.0.2, using Vue 3 + Pina, compiled with Vite.
All the basic features you need to build a real world app with:

- **Front / Admin namespaces**
- **I18n** (server side + client side)
- **Forms** (with progress and error handling)
- **Authentication** (Devise)
- **Pagination** (Kaminari)
- **Dynamic search filters** (Ransack)
- **Websockets** (ActionCable)
- **Bootstrap like grid** (using CSS Grid layout)

All of this is designed with maintainability and readability in mind, slightly inspired by the Rails conventions.

This is the follow up of the previous Rails + Vue + Vuex app from 2017 which is still
available on the Rails6 branch.  

A lot of things has been updated/rewrote for this version, notably:

- Webpacker is now replaced by Vite
- Vue app in using Composition API 
- Vuex is now replaced by Pinia to handle state management
- No longer depends on JQuery for API calls (replaced by Axios)

Nonetheless, a lot of opinions and conventions from the previous version remain valid, you may have a look at the original blog post for details (https://guillaume.barillot.me/2017/12/02/how-to-organize-your-vue-files-in-a-rails-5-1-project-using-webpack/). 

Boostrapping the plumbing for basic stuff can take some time, but once you get the basic it's
pretty easy to extend and to get really efficient with Vue + Rails. With this example you have 
all you need to build up your new project in minutes.

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

Hot Module Reloading (HMR) is enabled by default. If you prefer to turn it off, set "hmr" to false 
in /vite.config.ts.
## Running tests

### Rails side

```
rails test
```

### JS side

```
yarn test
```

## A note on CSS
CSS is done right in the public/css/development directory.

Pros:
- No compile time, greatly speed up page load time in dev
- Allows CSS editing + saving directly from Chrome Devtools
- Easier / more fexible to manage imports

Cons:
- You should disable cache in DevTools in Dev
- As of today, not suitable for production!

The purpose of this repo is Vue + Vite + Rails, not CSS, so feel free to use whatever method 
you'd prefer to handle CSS. Sprocket is left as is and still works.

## Contributions

PR and feedbacks welcome!

## Licence

MIT
