class Item < ActiveRecord::Base
  mount_uploader :image, ImageUploader
  validates :order, uniqueness: true
  scope :ordered, -> { order(order: :asc) }
  scope :ordered_title, -> { order(order: :asc) }

end
