class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.timestamps
      t.string :email
      t.string :name
    end
  end
end
