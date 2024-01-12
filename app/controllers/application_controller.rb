class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  around_action :set_locale_from_url
  #rescue_from Exception, with: :render_error

  def index
    render template: 'application'
  end

  def set_locale
    I18n.locale = params[:locale] || session[:locale] || I18n.default_locale
    session[:locale] = I18n.locale
  end

  def self.default_url_options
    { locale: I18n.locale }
  end

  def after_sign_in_path_for(resource) 
    admin_root_path
  end

  private
  def render_error(e)
    if e.class.name == "ActiveRecord::RecordNotFound"
      render json: {error: "Not found"}.to_json, status: 404
    else
      render json: {error: "Internal server error"}.to_json, status: 500
    end
  end
end
