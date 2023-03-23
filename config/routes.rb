Rails.application.routes.draw do
  resources :videos
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post '/sermon', to: 'videos#create'
  get 'display', to: 'videos#show'
end
