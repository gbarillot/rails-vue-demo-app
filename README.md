# Rails + Vite + Vue + Pina Demo App

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

## Important note on CSS!
The main branch is **experimenting** a [#NoBuild](https://world.hey.com/dhh/you-can-t-get-faster-than-no-build-7a44131c) approach, dropping the regular Sprockets asset pipeline
and moving back to a good ol' /public/css directory. 

Pros:
- No compile time, greatly speed up page load time in dev!
- Easier to copy/paste from browser console to .css files
- Easier / more fexible to manage imports

Cons:
- Don't forget to disable caching in dev.
- Works only on latest browsers
- Still some questions about deploys and caching in the wild...

As of 2024-01-02 it is still a cutting edge **experiment**, feel free to move back to Sprocket.

## Contributions

PR and feedbacks welcome!

## Licence

MIT
