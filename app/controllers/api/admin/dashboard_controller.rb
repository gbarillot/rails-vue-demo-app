class Api::Admin::DashboardController < Api::Admin::AdminController

  def index
    render json: {metrics: {musicians: Musician.count}}
  end

end
