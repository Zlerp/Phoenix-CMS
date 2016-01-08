class CreateItems < ActiveRecord::Migration
  def self.up
    create_table :items do |t|
      t.string :title
      t.string :caption
      t.string :url
      t.text :description
      t.integer :order
      t.string :image
      
      t.timestamps
    end
  end

  def self.down
    drop_table :items
  end
end