json.musician do
  json.name @musician.name
  json.bands Musician.bands.each do |name, _|
    json.key name
    json.name t(name, scope: 'bands')
  end
end
