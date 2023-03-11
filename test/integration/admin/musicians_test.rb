require 'test_helper'

describe Api::Admin::MusiciansController do
  describe "#index" do
    it "returns a 401 when not signed in" do
      get api_admin_musicians_path

      _(response.status).must_equal 401
    end

    it "returns all musicians when signed in" do
      sign_in users(:admin)
      get api_admin_musicians_path

      _(json_response['musicians'].length).must_equal 3
      _(json_response['musicians'][0]['name']).must_equal "baz"
    end
  end

  describe "#new" do
    before do
      sign_in users(:admin)
    end

    it "returns an initialized musician" do
      get new_api_admin_musician_path

      _(response.status).must_equal 200
      _(json_response['musician']['name']).must_be_nil
      _(json_response['musician']['band']).must_be_nil
    end
  end

  describe "#create" do
    before do
      sign_in users(:admin)
    end

    it "returns a musician when successfuly created" do
      post api_admin_musicians_path, params: {
        "musician" => {
          "name"=>"new test musician",
          "band"=>"acdc"
        }
      }

      _(response.status).must_equal 200
      _(json_response['musician']['name']).must_equal "new test musician"
    end
  end

  describe "#edit" do
    it "returns a musician when signed in" do
      sign_in users(:admin)
      get edit_api_admin_musician_path(musicians(:one).id)

      _(response.status).must_equal 200
      _(json_response['musician']['name']).must_equal "foo"
    end
  end

  describe "#update" do
    before do
      sign_in users(:admin)
    end

    it "returns a musician when successfuly created" do
      put api_admin_musician_path(musicians(:one).id), params: {
        "musician" => {
          "name"=>"edited test musician",
          "band"=>"beatles"
        }
      }

      _(response.status).must_equal 200
    end

    it "returns validation errors when musician is not valid" do
      put api_admin_musician_path(musicians(:one).id), params: {
        "musician" => {
          "name"=>"",
          "band"=>"beatles"
        }
      }

      _(response.status).must_equal 422
      _(json_response).must_equal ({
        "errors"=>{
          "name"=>[I18n.t('activerecord.errors.models.musician.attributes.name.blank')]
        }
      })
    end
  end

  describe "#destroy" do
    it "removes a musician" do
      assert_difference "Musician.count", -1 do
        sign_in users(:admin)
        delete api_admin_musician_path(musicians(:one).id)

        _(response.status).must_equal 200
      end
    end
  end
end
