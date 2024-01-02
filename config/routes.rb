Rails.application.routes.draw do
  mount ActionCable.server => '/cable'

  localized do
    devise_for :users, only: [:sessions]

    namespace :api, :defaults => { :format => 'json' } do
      resources :musicians, only: [:index, :show]

      namespace :admin do
        resources :dashboard, only: :index
        resources :musicians, except: :show
      end
    end

    get '/admin', to: 'admin#index', as: 'admin_root'
    match "/admin/*path", to: "admin#index", format: false, via: :get

    root :to => "application#index"
    match "*path", to: "application#index", format: false, via: :get
  end
end
