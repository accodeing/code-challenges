require 'rspec'

def lss( needle, haystack )
  return '' if needle == '' or haystack == ''
  return needle if haystack.include?( needle )

  one = lss( needle[0..-2], haystack )
  other = lss( needle[1..-1], haystack )

  return one.length >= other.length ? one : other
end

describe 'lss' do
  it "returns false for empty needle" do
    expect(lss('abc', '')).to eq ''
  end

  it "returns false for empty haystack" do
    expect(lss('abc', '')).to eq ''
  end

  it "returns false if needle does not exist in haystack" do
    expect(lss('abc', 'dsgfdhjg')).to eq ''
  end

  it "returns the full needle when it exists in haystack" do
    expect(lss('abc', 'khsgabcfdh')).to eq 'abc'
  end

  it "returns the first part of needle when it exists in haystack" do
    expect(lss('abc', 'khsgabfdh')).to eq 'ab'
  end

  it "returns the second part of needle when it exists in haystack" do
    expect(lss('abc', 'khsgbcfdh')).to eq 'bc'
  end

  it "returns the lexographically first part it finds of needle when several part exists in haystack" do
    expect(lss('abc', 'khsabgbcfdh')).to eq 'ab'
    expect(lss('abc', 'khsbcgabfdh')).to eq 'ab'
    expect(lss('abc', 'khsbcgabfdh')).to eq 'ab'
    expect(lss('abc', 'khsgadbfcfdh')).to eq 'a'
  end

  it "finds 'Four score and seven years ago' in the Gettisburg address" do
    expect(lss('Four score and seven years ago', 'Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.

Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this.

But, in a larger sense, we can not dedicate—we can not consecrate—we can not hallow—this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us—that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion—that we here highly resolve that these dead shall not have died in vain—that this nation, under God, shall have a new birth of freedom—and that government of the people, by the people, for the people, shall not perish from the earth.')).to eq 'Four score and seven years ago'
  end
end

RSpec::Core::Runner::run({}, STDERR, STDOUT)
