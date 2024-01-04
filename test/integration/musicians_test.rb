require 'test_helper'

#describe Api::MusiciansController do
class TestApi::MusiciansController < Minitest::Test
  #describe "#index" do
    def returns_all_musicians
      get api_musicians_path

      # _(json_response['musicians'].length).must_equal 3
      # _(json_response['musicians'][0]['name']).must_equal "baz"
    end
  #end

  # describe "#show" do
  #   it "returns a musician" do
  #     get api_musician_path(musicians(:one).id)

  #     _(response.status).must_equal 200
  #     _(json_response['musician']['name']).must_equal "foo"
  #   end
  # end
end
