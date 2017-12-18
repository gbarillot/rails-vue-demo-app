json.users @users.each do |user|
  json.id user.id
  json.created_at l(user.created_at, format: :default)
  json.email user.email
end

json.partial! partial: '/api/admin/shared/pagination', locals: {
  kind: @users,
  callback: 'UserStore/index'
}
