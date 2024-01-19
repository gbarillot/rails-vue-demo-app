source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

# Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"
gem "rails", "~> 7.1.2"

gem 'sprockets-rails'
gem 'sqlite3'
gem 'puma'
gem 'jbuilder'
gem 'redis'
gem 'bootsnap', require: false
gem 'vite_rails'
gem 'foreman'
gem 'route_translator'
gem 'kaminari'
gem 'ransack'
gem 'devise'
gem 'cypress-rails'

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]

group :development, :test do
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem "debug", platforms: %i[ mri mingw x64_mingw ]
end

group :development do
  # Use console on exceptions pages [https://github.com/rails/web-console]
  gem "web-console"
end

group :test do
  gem 'capybara'
  gem 'minitest'
  gem 'minitest-rails'
  gem 'minitest-spec-rails'
  gem 'minitest-focus'
  gem 'capybara-email'
  gem 'json-schema'
  gem 'warden'
  gem 'selenium-webdriver'
  gem 'webdrivers'
end
