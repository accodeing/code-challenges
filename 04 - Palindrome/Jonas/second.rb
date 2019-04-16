require 'rspec'

def detect( word )
  from_start_index = 0
  from_end_index = word.length() -1
  loop do
    a = word[from_start_index]
    b = word[from_end_index]
    return false if a != b
    break if from_start_index >= from_end_index
    from_start_index += 1
    from_end_index -= 1
  end
  return true
end

describe 'detect' do
  it "works for empty list" do
    expect(detect('')).to eq true
  end

  it "detects simple palindrome" do
    expect(detect('anna')).to eq true
    expect(detect('pelle')).to eq false
  end

  it "detects complex palindrome" do
    expect(detect('repaper')).to eq true
    expect(detect('palindrome')).to eq false
  end
end

RSpec::Core::Runner::run({}, STDERR, STDOUT)
