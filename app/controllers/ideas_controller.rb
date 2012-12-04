class IdeasController < ApplicationController
  def create
    idea = Idea.create!(params[:idea])
    redirect_to backlog_ideas_url
  end

  def backlog
    @ideas = Idea.backlog
  end
end
