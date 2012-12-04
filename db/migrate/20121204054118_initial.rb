class Initial < ActiveRecord::Migration
  def change
    create_table :ideas do |t|
      t.text :summary, :null => false
      t.integer :position, :null => false, :default => 0
      t.string :state, :null => false, :default => 'queued'
      t.timestamp :completed_at
      t.timestamps
    end
  end
end
