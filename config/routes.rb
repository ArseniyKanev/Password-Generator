Rails.application.routes.draw do
  root 'application#home'

  namespace :api do
    namespace :v1 do
      resources :passwords, only: :create
    end
  end

  get '*unmatched_route', to: 'application#home'
end
