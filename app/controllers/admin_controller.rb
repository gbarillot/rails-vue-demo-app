class AdminController < ApplicationController
  before_action :auth_user! 

  def index
    render template: 'admin'
  end

  private 

  # Proper redirect using I18n.locale
  # Devise's authenticate_user! doesn't handle I18n properly here
  def auth_user!
    redirect_to new_user_session_path unless current_user 
  end
end
