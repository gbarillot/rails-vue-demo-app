source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '~> 5.2.0'
gem 'sqlite3'
gem 'bootsnap'
gem 'puma', '~> 3.7'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'webpacker'
gem 'coffee-rails', '~> 4.2'
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
  gem 'chromedriver-helper'
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
