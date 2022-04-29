source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

# Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"
gem "rails", "~> 7.0.2", ">= 7.0.2.3"

gem "sprockets-rails"
gem "sqlite3", "~> 1.4"
gem "puma", "~> 5.0"
gem "jbuilder"
gem "redis", "~> 4.0"
gem "bootsnap", require: false
gem 'vite_rails'
gem 'foreman'
gem 'route_translator'
gem 'kaminari'
gem 'ransack'
gem 'devise'
gem "sassc-rails"

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]

group :development, :test do
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem "debug", platforms: %i[ mri mingw x64_mingw ]
end

group :development do
  # Use console on exceptions pages [https://github.com/rails/web-console]
  gem "web-console"
  gem "spring"
end

group :test do
  gem "capybara"
  gem 'minitest'
  gem 'minitest-focus'
  gem 'minitest-matchers'
  gem 'minitest-metadata'
  gem 'minitest-profiler'
  gem 'capybara-email'
  gem 'json-schema'
  gem 'warden'
  gem 'selenium-webdriver'
  gem 'webdrivers'
end
