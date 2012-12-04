class Idea < ActiveRecord::Base
  attr_accessible :summary

  class << self
    def backlog
      self.where(:state => 'queued').order('position')
    end

    def pending
      self.where(:state => 'pending').order('position')
    end

    def in_progress
      self.where(:state => 'in-progress').order('position')
    end

    def recently_done
      self.where(:state => 'done', :completed_at => (14.days.ago)..(Time.now)).order('completed_at').limit(5)
    end

    def update_positions(ideas)
      ideas.each_with_index do |id, i| 
        idea = Idea.find(id)
        idea.position = i
        idea.save!
      end
    end
  end
end
