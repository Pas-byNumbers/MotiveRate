class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :email, :first_name, :last_name, :score, :tier
end