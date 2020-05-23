class Interview < ApplicationRecord
  # does order matter, differetn results on changing order
  has_many :interview_participants,dependent: :destroy
  has_many :participants, through: :interview_participants

  def self.checkClash(participant, interview_params)
    prevInterviews = participant.interviews
    for prevInterview in prevInterviews do
      prevDate = prevInterview.start.to_date
      curDate =interview_params[:start].to_date
      prevStart = prevInterview.start
      prevEnd = prevInterview.end
      curStart = interview_params[:start]
      curEnd = interview_params[:end]
      puts("============")
      puts(curDate)
      puts(prevDate)
      puts("============")
      # (prevDate == curDate) and
      if (((prevStart > curEnd) or (curStart > prevEnd)))
        # isClash
        return false
      elseif (curDate == prevDate)
        return true
      else
        return false  
      end
    end
  end

  def self.clash(interview_params, emails)
    # check clash for each participant
    all_emails = emails.split(",")
    all_emails.each do |email|
      participant = Participant.find_by(email: email)
      if (checkClash(participant, interview_params))
        # clashOccured
        return true
      end
    end
    return false
  end

end
