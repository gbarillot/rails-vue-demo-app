json.musicians @musicians.each do |musician|
  json.id musician.id
  json.created_at l(musician.created_at, format: :default)
  json.name musician.name
  json.band t(musician.band, scope: 'bands')
end
