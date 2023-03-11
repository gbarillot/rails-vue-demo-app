class Api::Admin::AdminController < Api::ApiController
  before_action :authenticate_user!

  def search_params
    params[:q] ||= {} if params[:q] != ''
  end
end
