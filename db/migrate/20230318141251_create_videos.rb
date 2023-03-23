class CreateVideos < ActiveRecord::Migration[6.1]
  def change
    create_table :videos do |t|
      t.string :title
      t.date :date
      t.string :file

      t.timestamps
    end
  end
end
