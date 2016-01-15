module YoutubeHelper
  def embedVideo(youtube_url)
    youtube_id = youtube_url.split("=").last
    content_tag(:iframe, nil, src: "//www.youtube.com/embed/#{youtube_id}", id: "modal-iframe")
  end
end
