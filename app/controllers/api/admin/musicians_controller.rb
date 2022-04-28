class Api::Admin::MusiciansController < Api::Admin::AdminController
  before_action :load_musician, except: [:index, :new, :create]

  def index
    @musicians = Musician.ransack(search_params)
                         .result
                         .page(params[:page])
                         .per(params[:per_page])
  end

  def new
    @musician = Musician.new
  end

  def create
    sleep 1 # DELETE ME: Dummy emulation of a slow network so you can see the UI animation in dev. mode
    @musician = Musician.create(musician_params)

    if @musician.errors.empty?
      render template: '/api/admin/musicians/edit'
    else
      render json: {success: false, errors: @musician.errors.messages}.to_json, status: 422      
    end
  end

  def edit
  end

  def update
    sleep 1 # DELETE ME: Dummy emulation of a slow network so you can see the UI animation in dev. mode
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
