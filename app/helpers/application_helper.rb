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
  
end
