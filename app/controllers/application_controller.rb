class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  around_action :set_locale_from_url

  def index
    render template: 'application'
  end

end
