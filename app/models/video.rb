class Video < ApplicationRecord
    mount_uploader :file, VideoUploader
    has_one_attached :clip
end
