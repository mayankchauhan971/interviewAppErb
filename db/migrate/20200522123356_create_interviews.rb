class CreateInterviews < ActiveRecord::Migration[6.0]
  def change
    create_table :interviews do |t|
      t.date :date
      t.time :start
      t.time :end
      t.string :title

      t.timestamps
    end
  end
end
