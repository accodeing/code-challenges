require 'rspec'

def parse_markdown_heading(raw_string)
  stripped_string = raw_string.strip

  return raw_string unless stripped_string.start_with?(Regexp.new('#{1,6} '))

  parse_heading(stripped_string)
end

def parse_heading(markdown_heading)
  heading_level = markdown_heading.split(' ').first.length
  whitespace = 1

  heading = markdown_heading[heading_level + whitespace, markdown_heading.length]

  "<h#{heading_level}>#{heading.lstrip}</h#{heading_level}>"
end

describe 'parse_markdown_heading' do
  describe 'valid input' do
    context "given '# You know my method'" do
      subject { parse_markdown_heading('# You know my method') }

      it { is_expected.to eq('<h1>You know my method</h1>') }
    end

    context "given ###### There is nothing more deceptive than an obvious fact" do
      subject { parse_markdown_heading('###### There is nothing more deceptive than an obvious fact') }

      it { is_expected.to eq('<h6>There is nothing more deceptive than an obvious fact</h6>') }
    end

    context "given '## There is nothing like first-hand evidence'" do
      subject { parse_markdown_heading('## There is nothing like first-hand evidence')}

      it { is_expected.to eq('<h2>There is nothing like first-hand evidence</h2>') }
    end

    context "given '# A heading #including # hashes'" do
      subject { parse_markdown_heading('# A heading #including # hashes') }

      it { is_expected.to eq('<h1>A heading #including # hashes</h1>') }
    end

    context "given '### A heading  including spaces'" do
      subject { parse_markdown_heading('### A heading  including spaces') }

      it { is_expected.to eq('<h3>A heading  including spaces</h3>') }
    end

    context "given '#   Removes spaces before text'" do
      subject { parse_markdown_heading('#   Removes spaces before text') }

      it { is_expected.to eq('<h1>Removes spaces before text</h1>') }
    end

    context "given ' # Spaces at beginning of string'" do
      subject { parse_markdown_heading(' # Spaces at beginning of string') }

      it { is_expected.to eq('<h1>Spaces at beginning of string</h1>')}
    end

    context "given '# Spaces at end of string '" do
      subject { parse_markdown_heading('# Spaces at end of string ') }

      it { is_expected.to eq('<h1>Spaces at end of string</h1>') }
    end
  end

  describe "invalid input" do
    context "given '#2# An invalid heading'" do
      subject { parse_markdown_heading('#2# An invalid heading') }

      it { is_expected.to eq('#2# An invalid heading') }
    end

    context "given '####### A heading of level seven'" do
      subject { parse_markdown_heading('####### A heading of level seven') }

      it { is_expected.to eq('####### A heading of level seven') }
    end

    context "given '##No space between starting hashes heading'" do
      subject { parse_markdown_heading('##No space between starting hashes heading') }

      it { is_expected.to eq('##No space between starting hashes heading') }
    end
  end
end
