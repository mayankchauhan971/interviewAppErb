class Interview < ApplicationRecord
  has_many :participants_to_interview,dependent: :destroy
  has_many :participants, through: :participants_to_interview
end
