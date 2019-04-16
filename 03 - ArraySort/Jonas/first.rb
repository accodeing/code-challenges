require 'rspec'

def sort( list )
  return list if list == [] || list.length == 1
  (head, tail) = list.each_slice( list.length / 2 + (list.length.odd? ? 1 : 0) ).to_a

  sorted_head = sort( head );
  sorted_tail = sort( tail );

  head_index = tail_index = 0;
  result = []

  loop do
    loop do
      from_head = sorted_head[ head_index ]
      from_tail = sorted_tail[ tail_index ]

      if from_head.nil?
        result.push( from_tail )
        tail_index += 1
      elsif from_tail.nil?
        result.push( from_head )
        head_index += 1
      elsif from_head < from_tail
        result.push( from_head )
        head_index += 1
      else
        result.push( from_tail )
        tail_index += 1
      end

      break if tail_index >= tail.length && head_index >= head.length
    end
    break if tail_index >= tail.length && head_index >= head.length
  end

  return result
end

describe 'sort' do
  it "works for empty list" do
    expect(sort([])).to eq []
  end

  it "sorts simple list" do
    expect(sort([3,2,1])).to eq [1,2,3]
  end

  it "sorts complex list" do
    list = Array.new(100) { rand(1...9999) }
    expect(sort(list)).to eq list.sort
  end
end

RSpec::Core::Runner::run({}, STDERR, STDOUT)
