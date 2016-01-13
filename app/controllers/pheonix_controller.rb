class PheonixController < ApplicationController
  def index
  end

  def contact
  end

  def media
    @item = Item.all
  end

  def about
  end

  def news
    @item = Item.all
  end

  def commercials
    @item = Item.all
  end

end
