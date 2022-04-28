class Api::MusiciansController < Api::ApiController

  def index
    @musicians = Musician.all
  end

  def show    
    if params[:id] == "this-will-trigger-a-500"
      # Render a 500 to demonstrate how the front-end handles server side errors
      render json: {success: false}, status: 500
    elsif params[:id] == "this-will-trigger-a-401"
      # Render a 401 to demonstrate how the front-end handles server side errors
      render json: {success: false}, status: 401
    else
      @musician = Musician.find(params[:id])
    end
  end

end
