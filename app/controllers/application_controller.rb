class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  
  around_action :set_locale_from_url
  rescue_from Exception, with: :render_error

  def index
    render template: 'application'
  end

  private
  def render_error(e)
    if e.class.name == "ActiveRecord::RecordNotFound"
      render json: {success: false, error: "Not found"}.to_json, status: 404
    else
      render json: {success: false, error: "Internal server error"}.to_json, status: 500
    end
  end
end
