class InterviewParticipant < ApplicationRecord
  belongs_to :interview
  belongs_to :participant

  enum position: {interviewer: 0, interviewee: 1}
end
