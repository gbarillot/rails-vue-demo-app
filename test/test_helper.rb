require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'

ENV['RAILS_ENV'] ||= 'test'

require 'rails/test_help'
require 'rack/test'
require 'capybara/rails'
require 'minitest'
require 'minitest/rails'
require 'minitest/spec'
require 'minitest/matchers'
require 'minitest-metadata'
require 'capybara/email'
require 'json-schema'

include Rails.application.routes.url_helpers
include ActionDispatch::TestProcess
include Warden::Test::Helpers

Rails.logger.level = 5
Dir[Rails.root.join('test/support/**/*.rb')].each { |f| require f }

class ActiveSupport::TestCase
  extend Minitest::Spec::DSL 
  parallelize(workers: 1)
  ActiveJob::Base.queue_adapter = :test

  fixtures :all
  self.use_transactional_tests = true

  register_spec_type(self) do |desc|
    desc < ActiveRecord::Base if desc.is_a?(Class)
  end

  def json_response
    JSON.parse(response.body)
  end
end

class ActionController::TestCase
  include Rails.application.routes.url_helpers
  include Devise::Test::ControllerHelpers
  include ActionCable::TestHelper
 
  self.use_transactional_tests = true
  
  Capybara.default_driver = :headless_chrome
  Capybara.javascript_driver = :headless_chrome
  Capybara.default_max_wait_time = 5 # seconds
end

class ActionDispatch::IntegrationTest
  include ResponseAssertions
  include Devise::Test::IntegrationHelpers
  include Rails.application.routes.url_helpers

  Capybara.register_driver :headless_chrome do |app|
    Capybara::Selenium::Driver.new(app, browser: :chrome)
  end

  Capybara.configure do |config|
    config.default_max_wait_time = 5 # seconds
    config.default_driver = :headless_chrome
    config.javascript_driver = :headless_chrome
  end
end