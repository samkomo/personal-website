# Ensure assets resolve when baseurl is intentionally left blank locally.
# On GitHub Pages project builds, reuse the computed repository baseurl.
Jekyll::Hooks.register :site, :after_init do |site|
  config_baseurl = site.config['baseurl']

  next unless config_baseurl.to_s.strip.empty?

  github_baseurl = site.respond_to?(:github) ? site.github['baseurl'] : nil
  next if github_baseurl.to_s.strip.empty?

  site.config['baseurl'] = github_baseurl
end
