Rails.application.routes.draw do
  resources :participants
  resources :interviews

  root "interviews#index"
end
