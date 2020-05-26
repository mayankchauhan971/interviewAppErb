Rails.application.routes.draw do
  resources :participants
  resources :interviews

  get '/home' => 'interviews#home'
  get '/interviews/new' => 'interviews#new'
  get '/interviews/:id' => 'interviews#show'
  root "interviews#index"
end
