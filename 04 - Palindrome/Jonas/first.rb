require 'rspec'

def detect( word )
  word.downcase[0...word.length / 2] == word.downcase.reverse[0...word.length / 2]
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

  context 'when empty string' do
    subject { detect('') }

    it 'returns true' do
      is_expected.to be true
    end
  end

  context 'when one character' do
    subject { detect('a') }

    it 'returns true' do
      is_expected.to be true
    end
  end

  context 'when not given a palindrome' do
    specify "like 'abc'" do
      expect(detect('abc')).to be false
    end

    specify "like 'abac'" do
      expect(detect('abac')).to be false
    end
  end

  context 'when given a palindrome' do
    specify "like 'anna'" do
      expect(detect('anna')).to be true
    end

    specify "like 'Kayak'" do
      expect(detect('Kayak')).to be true
    end
  end

  context 'when given a palindrome with different cases' do
    specify "like 'KaYAk'" do
      expect(detect('KaYAk')).to be true
    end
  end
end

RSpec::Core::Runner::run({}, STDERR, STDOUT)
