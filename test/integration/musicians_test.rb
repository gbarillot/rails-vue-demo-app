require 'test_helper'

feature "Musicians" do

  describe "#index" do
    it "returns all musicians" do
      get api_musicians_path
      out = {
        "musicians"=>[
          {"id"=>113629430, "created_at"=>"December 18 2017 20:43", "name"=>"baz", "band"=>"The Rolling Stones"},
          {"id"=>298486374, "created_at"=>"December 18 2017 20:43", "name"=>"bar", "band"=>"The Rolling Stones"},
          {"id"=>980190962, "created_at"=>"December 18 2017 20:43", "name"=>"foo", "band"=>"The Beatles"}
        ]
      }

      assert_equal 3, json_response['musicians'].length
      assert_equal "baz", json_response['musicians'][0]['name']
    end
  end

  describe "#show" do
    it "returns a musician" do
      get api_musician_path(musicians(:one).id)
      out = {
        "musician"=> {
          "id"=>298486374,
          "created_at"=>"December 18 2017 20:43",
          "name"=>"bar",
          "band"=>"The Rolling Stones"
        }
      }

      assert_equal 200, last_response.status
      assert_equal "foo", json_response['musician']['name']
    end
  end

end
