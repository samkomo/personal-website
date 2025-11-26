module Jekyll
  class BibliographyCounter < Generator
    safe true
    priority :low

    def generate(site)
      bib_file = File.join(site.source, '_bibliography', 'papers.bib')
      
      unless File.exist?(bib_file)
        site.data['publication_counts'] = {
          'articles' => 0,
          'inproceedings' => 0,
          'incollections' => 0
        }
        return
      end

      counts = {
        'articles' => 0,
        'inproceedings' => 0,
        'incollections' => 0
      }

      File.readlines(bib_file).each do |line|
        line = line.strip
        if line.start_with?('@article')
          counts['articles'] += 1
        elsif line.start_with?('@inproceedings')
          counts['inproceedings'] += 1
        elsif line.start_with?('@incollection')
          counts['incollections'] += 1
        end
      end

      site.data['publication_counts'] = counts
      Jekyll.logger.info "Bibliography Counter:", "Generated counts: #{counts.inspect}"
    end
  end
end

