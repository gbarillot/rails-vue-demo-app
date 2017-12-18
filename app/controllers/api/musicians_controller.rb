class Api::MusiciansController < Api::ApiController

  def index
    @musicians = Musician.all
  end

  def show
    @musician = Musician.find(params[:id])
  end

end
