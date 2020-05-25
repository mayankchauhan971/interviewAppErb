class InterviewMailer < ApplicationMailer
  def reminder_mail(interview, email)
    @interview = interview
    @email = email
    mail(to: email, subject: "REMINDER: UPCOMING INTERVIEW IN 30 MINUTES")
  end

  def updation_mail(interview, email)
    @interview = interview
    @email = email
    mail(to: email, subject: "UPDATE: INTERVIEW RESCHEDULED")
  end
end