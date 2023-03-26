Rails.application.routes.draw do
  resources :users
  resources :videos
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post '/sermon', to: 'videos#create'
  post '/signup', to: 'users#create'
  get 'display', to: 'videos#show'
end
