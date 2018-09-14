Rails.application.routes.draw do

  root 'topics#index'

  resources :topics

  namespace :api, format: 'json' do
    resources :topics
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
