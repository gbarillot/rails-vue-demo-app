class CreateMusicians < ActiveRecord::Migration[5.1]
  def change
    create_table :musicians do |t|
      t.timestamps
      t.string :name
      t.string :band
    end
  end
end
