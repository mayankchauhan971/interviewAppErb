Rails.application.routes.draw do
  resources :participants
  resources :interviews

  # SPA ROUTES
  get '/home' => 'interviews#home'
  # get '/interviews/new' => 'interviews#new'
  # get '/interviews/:id' => 'interviews#show'

  # REACT ROUTES
  match '*path', to: 'interviews#index', via: :all

  root "interviews#index"
end
