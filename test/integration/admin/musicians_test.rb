require 'test_helper'

feature "Musicians" do

  describe "#index" do
    it "returns a 401 when not signed in" do
      get api_admin_musicians_path

      assert_equal 401, last_response.status
    end

    it "returns all musicians when signed in" do
      sign_in users(:admin)
      get api_admin_musicians_path

      assert_equal 3, json_response['musicians'].length
      assert_equal "baz", json_response['musicians'][0]['name']
    end
  end

  describe "#new" do
    before do
      sign_in users(:admin)
    end

    it "returns an initialized musician" do
      get new_api_admin_musician_path

      assert_equal 200, last_response.status
      assert_nil json_response['musician']['name']
      assert_nil json_response['musician']['band']
    end
  end

  describe "#create" do
    before do
      sign_in users(:admin)
    end

    it "returns a musician when successfuly created" do
      post api_admin_musicians_path, {
        "musician" => {
          "name"=>"new test musician",
          "band"=>"acdc"
        }
      }

      assert_equal 200, last_response.status
      assert_equal "new test musician", json_response['musician']['name']
    end
  end

  describe "#edit" do
    it "returns a musician when signed in" do
      sign_in users(:admin)
      get edit_api_admin_musician_path(musicians(:one).id)

      assert_equal 200, last_response.status
      assert_equal "foo", json_response['musician']['name']
    end
  end

  describe "#update" do
    before do
      sign_in users(:admin)
    end

    it "returns a musician when successfuly created" do
      put api_admin_musician_path(musicians(:one).id), {
        "musician" => {
          "name"=>"edited test musician",
          "band"=>"beatles"
        }
      }

      assert_equal 200, last_response.status
      assert_equal "edited test musician", json_response['musician']['name']
    end

    it "returns validation errors when musician is not valid" do
      put api_admin_musician_path(musicians(:one).id), {
        "musician" => {
          "name"=>"",
          "band"=>"beatles"
        }
      }
      out = {"success"=>false, "errors"=>{"name"=>["can't be blank"]}}

      assert_equal 422, last_response.status
      assert_equal out, json_response
    end
  end

  describe "#destroy" do
    it "removes a musician" do
      assert_difference "Musician.count", -1 do
        sign_in users(:admin)
        delete api_admin_musician_path(musicians(:one).id)

        assert_equal 204, last_response.status
      end
    end
  end
end
