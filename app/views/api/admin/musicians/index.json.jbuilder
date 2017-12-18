json.musicians @musicians.each do |musician|
  json.id musician.id
  json.created_at l(musician.created_at, format: :default)
  json.name musician.name
  json.band t(musician.band, scope: 'bands')
end

json.bands Musician.bands.each do |band, key|
  json.key key
  json.name t(band, scope: 'bands')
end

json.partial! partial: '/api/admin/shared/pagination', locals: {
  kind: @musicians,
  callback: 'MusicianStore/index'
}
