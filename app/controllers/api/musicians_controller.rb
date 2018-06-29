class Api::MusiciansController < Api::ApiController

  def index
    @musicians = Musician.all
  end

  def show
    # Render a 500 to demonstrate how the front-end handles server side errors
    if params[:id] == "this-will-trigger-an-error"
      render json: {success: false}, status: 500
    else
      @musician = Musician.find(params[:id])
    end
  end

end
