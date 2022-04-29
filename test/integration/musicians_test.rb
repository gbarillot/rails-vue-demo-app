require 'test_helper'

describe Api::MusiciansController do

  describe "#index" do
    it "returns all musicians" do
      get api_musicians_path

      assert_equal 3, json_response['musicians'].length
      assert_equal "baz", json_response['musicians'][0]['name']
    end
  end

  describe "#show" do
    it "returns a musician" do
      get api_musician_path(musicians(:one).id)

      assert_equal 200, response.status
      assert_equal "foo", json_response['musician']['name']
    end
  end

end
