class User < ApplicationRecord
  validates :username, :session_token, presence: true
  validates :password_digest, presence: { message: "Password can't be blank" }
  validates :password, length: { minimum: 6, allow_nil: true }

  before_validation :ensure_session_token

  def self.find_by_credentials(username, password)
    password_digest = BCrypt::Password.create(password)
    User.where(username: username, password_digest: password_digest)
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end
end
