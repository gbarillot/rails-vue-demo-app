class Musician < ApplicationRecord
  paginates_per 5

  validates_presence_of :name, :band

  enum band: [:rolling_stones, :beatles, :acdc]
end
