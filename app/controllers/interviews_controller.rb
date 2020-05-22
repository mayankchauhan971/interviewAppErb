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
    @interview = Interview.new
    puts("------------------------")
    puts(interview_params)
    puts(params)
    emails = params[:pemail]
    allEmails = emails.split(",")
    puts(emails)
    # @interview = Interview.create(:date => params[:interview][:date], :start => params[:interview][:start], :end => params[:interview][:end], :title => params[:interview][:title])
    @interview = Interview.create(interview_params)
    # allEmails.each do |email|
      # call the mailer
    # end

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

  def update
    @interview.update(interview_params)
    @participant = @interview.participant
    for participant in participants do
      # updation mails
    end
    respond_to do |format|
      if @interview.update(interview_params)
        format.html { redirect_to @interview, notice: 'Interview was successfully updated.' }
        format.json { render :show, status: :ok, location: @interview }
      else
        format.html { render :edit }
        format.json { render json: @interview.errors, status: :unprocessable_entity }
      end
    end
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
