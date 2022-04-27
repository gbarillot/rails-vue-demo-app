class Api::Admin::MusiciansController < Api::Admin::AdminController
  before_action :load_musician, except: [:index, :new, :create]

  def index
    @musicians = Musician.ransack(search_params)
                         .result
                         .page(params[:page])
                         .per(params[:per_page])
  end

  def show
  end

  def new
    @musician = Musician.new
  end

  def create
    sleep 2 # DELETE ME: Dummy emulation of a slow network so you can see the spinner in dev. mode
    @musician = Musician.create(musician_params)

    if @musician.errors.empty?
      head :ok
    else
      render json: {success: false, errors: @musician.errors.messages}.to_json, status: 422      
    end
  end

  def update
    if @musician.update(musician_params)
      head :ok
    else
      render json: {success: false, errors: @musician.errors.messages}.to_json, status: 422
    end
  end

  def destroy
    if @musician.destroy
      head :ok
    else
      render json: {success: false, errors: @musician.errors.messages}.to_json, status: 422
    end
  end

  private

    def musician_params
      params.require(:musician).permit(
        :name,
        :band
      )
    end

    def load_musician
      @musician = Musician.find(params[:id])
    end

end
