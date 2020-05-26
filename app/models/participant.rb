class Participant < ApplicationRecord
  has_one_attached :resume
  has_many :interview_participants,dependent: :destroy
  has_many :interviews, through: :interview_participants

  def serialize
    return self.attributes
  end
end