class Api::Admin::UsersController < Api::Admin::AdminController
  before_action :load_user, except: [:index, :new, :create]

  def index
    @users = User.search(search_params)
                 .result
                 .page(params[:page])
                 .per(params[:per_page])
  end

  def new
    @user = User.new
  end

  def edit
  end

  def create
    @user = User.create(user_params)

    if @user.errors.any?
      render json: {success: false, errors: @user.errors.messages}.to_json, status: 422
    else
      render template: '/api/admin/users/edit'
    end
  end

  def update
    if @user.update_attributes(user_params)
      render template: '/api/admin/users/edit'
    else
      render json: {success: false, errors: @user.errors.messages}.to_json, status: 422
    end
  end

  def destroy
    if @user.destroy
      head 200
    else
      render json: {success: false, errors: @user.errors.messages}.to_json, status: 422
    end
  end

  private

    def user_params
      params.require(:user).permit(
        :email,
        :password,
        :password_confirmation
      )
    end

    def load_user
      @user = User.find(params[:id])
    end

end
