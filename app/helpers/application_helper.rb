module ApplicationHelper

  def ui_translations(section)
    translations = {current: I18n.t('.')[:vue][section]}
    translations.to_json.html_safe
  end

  def paginate(scope, default_per_page = scope.default_per_page)
    collection = scope.page(params[:page]).per((params[:per_page] || default_per_page).to_i)
    current, total, per_page = collection.current_page, collection.total_pages, collection.limit_value

    {
      current:  current,
      previous: (current > 1 ? (current - 1) : nil),
      next:     (current == total ? nil : (current + 1)),
      per_page: per_page,
      pages:    total,
      count:    collection.total_count
    }
  end

  def stylesheet_tag(file_name)
    target = "/css/development/#{file_name}" 

    if Rails.env.production? 
      # TODO: identify best way to figure out if compilation needed or not before serving cache
      app_path = Rails.root.join('public', 'css')
      out_base_name = "#{file_name.split('.css').first}"

      out_name = "#{out_base_name}-#{Time.now.to_i}.css"
      out_path = app_path.join('production', out_name)
      `npx lightningcss --minify --bundle --targets '>= 0.25%' #{app_path.join(file_name)} -o #{out_path}` 
      target = "/css/production/#{out_name}"
    end
  
    "<link rel=\"stylesheet\" href=\"#{target}\">".html_safe
  end
end
