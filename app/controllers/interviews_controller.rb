class InterviewsController < ApplicationController
  before_action :set_interview, only: [:show, :edit, :update, :destroy]
  before_action :set_participant, only: [:show, :edit, :update, :destroy]

  def index
    @interviews = Interview.all
  end

  def show
  end

  def new
    @interview = Interview.new
  end

  def edit
  end

  def create
    if (Interview.clash(interview_params, interview_params[:pemail]))
      redirect_to interviews_path
      flash.alert = "Clash of Interviews, Couldn't create the interview."
    else
      @interview = Interview.new
      emails = interview_params[:pemail]
      allEmails = emails.split(",")
      @interview = Interview.create(:start => interview_params[:start], :end => interview_params[:end], :title => interview_params[:title])

      allEmails.each do |email|
        # link participant and email for every interview
        curParticipant = Participant.find_or_create_by(email: email)
        @interviewParticipants = InterviewParticipant.create(:interview=> @interview, :participant => curParticipant )
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
    end
  end

  def update
    @interview.update(:start => interview_params[:start], :end => interview_params[:end], :title => interview_params[:title])
    # @participant = @interview.participant
    # for participant in participants do
    #   # updation mails
    # end
    redirect_to @interview
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
      params.require(:interview).permit(:date, :start, :end, :title, :pemail)
    end

    # refer to model
    def set_participant
      @participants = @interview.participants
    end
end
