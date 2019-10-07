require 'rspec'
require 'date'

def months(raw_start, raw_end)
  starting_at = Date.parse(raw_start) 
  ending_at = Date.parse(raw_end)

  count = 0

  count += more_than_one_year(starting_at, ending_at)

  starting_month = starting_at.month
  ending_month = ending_at.month

  if starting_month == ending_month
    days = days_in_month(starting_at.year, starting_month)

    return round_answer(count + (ending_at.day - starting_at.day + 1).to_f / days.to_f)
  end

  if ending_month - starting_month > 2
    count += ending_month - starting_month - 1
  end

  if starting_at.day == 1
    count += 1
  else
    count += fraction_of_starting_month(starting_at)
  end

  if ending_at.day == days_in_month(ending_at.year, ending_at.month)
    count += 1
  else
    count += fraction_of_ending_month(ending_at)
  end

  round_answer(count)
end
def round_answer(answer)
  answer.round(2)
end

def fraction_of_starting_month(date)
  total_days = days_in_month(date.year, date.month)
  (total_days - date.day + 1).to_f / total_days.to_f
end

def fraction_of_ending_month(date)
  total_days = days_in_month(date.year, date.month)
  date.day.to_f / total_days.to_f
end

def days_in_month(year, month)
  Date.new(year, month, -1).day
end

def more_than_one_year(starting_at, ending_at)
  return 0 if ending_at - starting_at <= 365

  (ending_at.year - starting_at.year) * 12
end
