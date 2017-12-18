class Api::Admin::AdminController < Api::ApiController

  before_action :authenticate_user!

  def search_params
    if params[:q] != ''
      params[:q] ||= {}
    end
  end

end
