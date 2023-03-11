class Musician < ApplicationRecord
  paginates_per 5

  validates_presence_of :name, :band

  enum band: [:rolling_stones, :beatles, :acdc]

  def self.ransackable_attributes(auth_object = nil)
    ["band", "name"]
  end
end
