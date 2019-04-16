require 'rspec'

def sort(list)
  return list if list.empty?

  ordered_list = []

  list.each do |number|
    ordered_list.push(number) && next if ordered_list.empty?

    ordered_list.each_with_index do |ordered_number, ordered_list_index|
      if number < ordered_number
        ordered_list.insert(ordered_list_index, number) && break
      end

      if number > ordered_number && number <= ordered_number[ordered_list_index + 1]
        ordered_list.insert(ordered_list_index, number) && break
      end

      if ordered_list.size == ordered_list_index + 1 || number == ordered_number
        ordered_list.push(number) && break
      end
    end
  end

  return ordered_list
end

describe 'sort' do
  describe 'given a sorted list' do
    subject { sort([1,2,3,4]) }

    it 'returns the list as is' do
      is_expected.to eq([1,2,3,4])
    end
  end

  describe 'given an unordered list' do
    subject { sort([4,3,1,2]) }

    it 'sorts the list' do
      is_expected.to eq([1,2,3,4])
    end
  end

  describe 'given an empty list' do
    subject { sort([]) }

    it 'returns an empty list' do
      is_expected.to eq([])
    end
  end
end
