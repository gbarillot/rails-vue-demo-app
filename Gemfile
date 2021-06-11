source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.6.5'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 6.0.2', '>= 6.0.2.1'

gem 'sqlite3'
gem 'bootsnap', '>= 1.4.2', require: false
gem 'puma', '~> 4.3'
gem 'sass-rails', '>= 6'
gem 'uglifier', '>= 1.3.0'
gem 'webpacker', '~> 4.0'
gem 'route_translator'
gem 'jbuilder', '~> 2.5'
gem 'kaminari'
gem 'ransack'
gem 'devise'
gem 'foreman'

# COMMENTED OUT: Turbolinks doesn't play well with SPA
# gem 'turbolinks', '~> 5'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  # Adds support for Capybara system testing and selenium driver
  gem 'minitest'
  gem 'minitest-focus'
  gem 'minitest-rails'
  gem 'minitest-rails-capybara'
  gem 'minitest-matchers'
  gem 'minitest-metadata'
  gem 'minitest-profiler'
  gem 'capybara-email'
  gem 'json-schema'
  gem 'warden'
  gem 'selenium-webdriver'
  gem 'webdrivers'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
