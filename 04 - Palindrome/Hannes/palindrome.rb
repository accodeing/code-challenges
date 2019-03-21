require 'rspec'

def palindrome?(string)
  string.downcase == string.downcase.reverse && string.length > 0
end

describe 'palindrome?' do
  context 'when empty string' do
    subject { palindrome?('') }

    it 'returns false' do
      is_expected.to be false
    end
  end

  context 'when one character' do
    subject { palindrome?('a') }

    it 'returns false' do
      is_expected.to be true
    end
  end

  context 'when not given a palindrome' do
    specify "like 'abc'" do
      expect(palindrome?('abc')).to be false
    end

    specify "like 'abac'" do
      expect(palindrome?('abac')).to be false
    end
  end

  context 'when given a palindrome' do
    specify "like 'anna'" do
      expect(palindrome?('anna')).to be true
    end

    specify "like 'Kayak'" do
      expect(palindrome?('Kayak')).to be true
    end
  end

  context 'when given a palindrome with different cases' do
    specify "like 'KaYAk'" do
      expect(palindrome?('KaYAk')).to be true
    end
  end

  it "works for empty list" do
    expect(palindrome?('')).to eq false
  end

  it "detects simple palindrome" do
    expect(palindrome?('anna')).to eq true
    expect(palindrome?('pelle')).to eq false
  end

  it "detects complex palindrome" do
    expect(palindrome?('repaper')).to eq true
    expect(palindrome?('palindrome')).to eq false
  end
end
