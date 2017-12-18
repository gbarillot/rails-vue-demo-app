class Api::Admin::DashboardController < Api::Admin::AdminController

  def index
    metrics = {
      metrics: {
        musicians: Musician.all.count,
        users: User.all.count
      }
    }

    render json: metrics.to_json
  end

end
