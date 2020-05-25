class AddPositionToParticipants < ActiveRecord::Migration[6.0]
  def change
    add_column :interview_participants, :position, :integer
  end
end
