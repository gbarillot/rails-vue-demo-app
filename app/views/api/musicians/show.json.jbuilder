json.musician do
  json.id @musician.id
  json.name @musician.name
  json.band t(@musician.band, scope: 'bands')
end
