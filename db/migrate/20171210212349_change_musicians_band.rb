class ChangeMusiciansBand < ActiveRecord::Migration[5.1]
  def change
    change_column :musicians, :band, :integer
  end
end
