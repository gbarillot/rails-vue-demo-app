require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'

ENV['RAILS_ENV'] ||= 'test'

require 'rails/test_help'
require 'rack/test'
require 'capybara/rails'
require 'minitest'
require 'minitest/rails'
require 'minitest/rails/capybara'
require 'minitest/spec'
require 'minitest/matchers'
require 'minitest-metadata'
require 'capybara/email'
require 'json-schema'

include ActionDispatch::TestProcess
include Warden::Test::Helpers

Rails.logger.level = 5
Dir[Rails.root.join('test/support/**/*.rb')].each { |f| require f }

# See https://github.com/rails/rails/issues/31324
if ActionPack::VERSION::STRING >= "5.2.0"
  Minitest::Rails::TestUnit = Rails::TestUnit
end

class ActiveSupport::TestCase
  extend Minitest::Spec::DSL
  include Rack::Test::Methods
  include Devise::Test::IntegrationHelpers
  include Rails.application.routes.url_helpers
  include Capybara::Email::DSL

  def app
    Rails.application
  end

  def json_response
    JSON.parse(last_response.body)
  end

  before do
    @routes = Rails.application.routes
  end

  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  fixtures :all

  # Add more helper methods to be used by all tests here...
  self.use_transactional_tests = true

  register_spec_type(self) do |desc|
    desc < ActiveRecord::Base if desc.is_a?(Class)
  end

end

class ActionDispatch::IntegrationTest
  include ResponseAssertions

  default_url_options[:host] = "example.org"

  Capybara.register_driver :selenium do |app|
    Capybara::Selenium::Driver.new(app, browser: :chrome)
  end

  Capybara.current_driver = :selenium_chrome

  Capybara.configure do |config|
    config.default_max_wait_time = 5 # seconds
    config.default_driver        = :selenium
  end
end
