class Participant < ApplicationRecord
  has_many :interviews, through: :participants_to_interview
  has_many :participants_to_interview,dependent: :destroy
end