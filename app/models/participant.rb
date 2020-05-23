class Participant < ApplicationRecord
  # added the first line because participant will go through it
  has_many :interview_participants,dependent: :destroy
  has_many :interviews, through: :interview_participants
end