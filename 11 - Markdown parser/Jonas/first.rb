require 'rspec'

class Markdown
  def clean( string )
    string.strip
  end

  def lex( string )
    string.split(/\n+/)
  end

  def tokenize( string )
    case string
    when /^([#]+\ )/
      # Header
      level = $1.strip.length
      if level < 7
        "<h#{level}>#{ string.gsub(/^[#]+\ /, '') }</h#{level}>\n"
      else
        "<p>#{ string }</p>\n"
      end
    else
      "<p>#{ string }</p>\n"
    end
  end

  def parse( string )
    lines = lex( string )
    lines.each_with_object('') do |line, result|
      result << tokenize( clean( line ))
    end
  end
end

describe Markdown do
  subject{ Markdown.new }
  describe 'parse' do
    describe 'headers' do
      it "works for simple h1 cases" do
        expect( subject.parse( "# test" )).to eq "<h1>test</h1>\n"
      end

      it "works for simple h2 cases" do
        expect( subject.parse( "## test" )).to eq "<h2>test</h2>\n"
      end

      it "works for simple h3 cases" do
        expect( subject.parse( "### test" )).to eq "<h3>test</h3>\n"
      end

      it "works for simple h4 cases" do
        expect( subject.parse( "#### test" )).to eq "<h4>test</h4>\n"
      end

      it "works for simple h5 cases" do
        expect( subject.parse( "##### test" )).to eq "<h5>test</h5>\n"
      end

      it "works for simple h6 cases" do
        expect( subject.parse( "###### test" )).to eq "<h6>test</h6>\n"
      end

      it "works for simple h7 cases" do
        expect( subject.parse( "####### test" )).to eq "<p>####### test</p>\n"
      end

      it "works with leading spaces cases" do
        expect( subject.parse( "  # test" )).to eq "<h1>test</h1>\n"
      end

      it "works with # in the string" do
        expect( subject.parse( "# #test" )).to eq "<h1>#test</h1>\n"
      end

      it "works for headers with leading spaces" do
        expect( subject.parse( "    # test" )).to eq "<h1>test</h1>\n"
      end

      it "works for headers with trailing spaces" do
        expect( subject.parse( "# test    " )).to eq "<h1>test</h1>\n"
      end

      it "works for headers with leading and trailing spaces" do
        expect( subject.parse( "    # test    " )).to eq "<h1>test</h1>\n"
      end

      it "works for headers with spaces" do
        expect( subject.parse( "# test case" )).to eq "<h1>test case</h1>\n"
      end
    end
  end

  describe 'full' do
    it "works for complex examples" do
      md = <<-MD
        # A header
        This is a paragraph of text.

        ######## This is another.

        ## Another header
        And this is a third.
      MD

      html = <<~HTML
        <h1>A header</h1>
        <p>This is a paragraph of text.</p>
        <p>######## This is another.</p>
        <h2>Another header</h2>
        <p>And this is a third.</p>
      HTML
      expect( subject.parse( md )).to eq html
    end
  end
end

RSpec::Core::Runner::run({}, STDERR, STDOUT)
