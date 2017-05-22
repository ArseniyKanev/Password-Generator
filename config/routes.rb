Rails.application.routes.draw do
  root 'application#home'
  get '*unmatched_route', to: 'application#home'
end
