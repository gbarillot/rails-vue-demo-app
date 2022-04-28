json.musician do
  json.id @musician.id
  json.name @musician.name
  json.band @musician.band
  json.bands Musician.bands.each do |name, _|
    json.key name
    json.name t(name, scope: 'bands')
  end
end
