require 'sidekiq/api'
class DeleteInterviewMailJob < ApplicationJob
  queue_as :default
  def perform(interview_id)
    queue = Sidekiq::Queue.new
    queue.each do |job|
      puts("========================")
      puts(job)
      job.delete if job.interview.id == interview_id
    end
  end
end