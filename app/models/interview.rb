class Interview < ApplicationRecord
  has_many :interview_participants,dependent: :destroy
  has_many :participants, through: :interview_participants

  def self.checkClash(participant, interview_params)
    prevInterviews = participant.interviews
    prevInterviews.each do |prevInterview|
      prevStart = prevInterview.start
      prevEnd = prevInterview.end
      curStart = Time.parse(interview_params[:start]).getutc
      curEnd = Time.parse(interview_params[:end]).getutc
      unless ((prevStart > curEnd) or (curStart > prevEnd))
        # clashOccured
        return true  
      end
    end
    return false
  end

  def self.clash(interview_params, emails)
    # check clash for each participant
    all_emails = emails.split(",")
    all_emails.each do |email|
      participant = Participant.where(email: email).first
      if participant.nil?
        puts("New Participant")
      elsif (checkClash(participant, interview_params))
        # clashOccured
        return true
      end
    end
    return false
  end

end
