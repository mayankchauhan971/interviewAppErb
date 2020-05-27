class InterviewsController < ApplicationController
  before_action :set_interview, only: [:show, :edit, :update, :destroy]
  before_action :set_participant, only: [:show, :edit, :update, :destroy]

  def index
  end
  
  def home
    @interviews = Interview.all
    render json: @interviews
  end

  def show
    @participants = @interview.participants
    render :json => {
      interview: @interview,
      participants: @participants.map{|p| p.serialize}
    }
  end

  def new
    @interview = Interview.new
  end

  def edit
  end

  def create
    if (Interview.clash(interview_params, interview_params[:pemail]))
      respond_to do |format|
        format.html { redirect_to interviews_path, notice: 'Couldn,t create interview because of clash.' }
      end
    else
      @interview = Interview.new
      emails = interview_params[:pemail]
      allEmails = emails.split(",")
      roles = interview_params[:position]
      allRoles = roles.split(",")
      @interview = Interview.create(:start => interview_params[:start], :end => interview_params[:end], :title => interview_params[:title])

      allEmails.zip(allRoles).each do |email, role|
        # link participant and email for every interview
        curParticipant = Participant.find_or_create_by(email: email)
        @interviewParticipants = InterviewParticipant.create(:interview=> @interview, :participant => curParticipant, :position => role)
        # for testing
        # InterviewMailer.reminder_mail(@interview, email).deliver_now
        # InterviewMailer.reminder_mail(@interview).deliver_later(wait_until: @interview.start - 30.minutes)
      end

      respond_to do |format|
        if @interview.save
          format.html { redirect_to @interview, notice: 'Interview was successfully created.' }
          format.json { render :show, status: :created, location: @interview }
        else
          format.html { render :new }
          format.json { render json: @interview.errors, status: :unprocessable_entity }
        end
      end
    render json: @interview
    end
  end

  def update
    prevInterview = @interview
    @interview.update(:start => interview_params[:start], :end => interview_params[:end], :title => interview_params[:title])
    emails = interview_params[:pemail]
    allEmails = emails.split(",")
    allEmails.each do |email|
      # delete previous job
      DeleteInterviewMailJob.perform_now(prevInterview.id)
      # create new job
      InterviewMailer.updation_mail(@interview, email).deliver_now
      InterviewMailer.reminder_mail(@interview).deliver_later(wait_until: @interview.start - 30.minutes)
    end
    
    render json: @interview
  end

  def destroy
    @interview.destroy
    respond_to do |format|
      format.html { redirect_to interviews_url, notice: 'Interview was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    def set_interview
      @interview = Interview.find(params[:id])
    end

    def interview_params
      params.require(:interview).permit(:date, :start, :end, :title, :pemail, :position)
    end

    # refer to model
    def set_participant
      @participants = @interview.participants
    end
end
