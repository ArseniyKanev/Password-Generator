class Api::V1::PasswordsController < ApplicationController
  def create
    words = params[:password][:words]
    out = []
    words.each_with_index do |e, i|
      out << words.permutation(i + 1).to_a.map(&:join)
    end
    render json: { data: out.flatten }
  end
end
