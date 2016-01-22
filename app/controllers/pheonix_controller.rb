class PheonixController < ApplicationController
  before_action :set_order, only: [:media, :news, :commercials]


  def index
    @disable_foot = true
  end

  def contact
  end

  def media
  end

  def about
  end

  def news
  end

  def commercials
  end

  private

    def set_order
      @item = Item.all.ordered
    end

end
