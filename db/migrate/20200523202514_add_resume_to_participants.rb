class AddResumeToParticipants < ActiveRecord::Migration[6.0]
  def self.up
    add_column :participants, :resume, :binary, :limit => 10.megabyte
  end
  def self.down
    remove_column :participants, :resume
  end
end
