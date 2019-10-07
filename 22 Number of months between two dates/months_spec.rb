require './months'

describe 'months' do
  context 'with a one month period' do
    subject { months('2019-01-01', '2019-01-31') }

    it { is_expected.to eq 1 }
  end

  context 'with a two months period' do
    subject { months('2019-01-01', '2019-02-28') }

    it { is_expected.to eq 2 }
  end

  context 'with a fraction of a january 2019' do
    subject { months('2019-01-01', '2019-01-10') }

    it { is_expected.to eq 0.32 }
  end

  context 'with a fraction of february 2019' do
    subject { months('2019-02-01', '2019-02-10') }

    it { is_expected.to eq 0.36 }
  end

  context 'with a fraction of two months' do
    subject { months('2019-01-10', '2019-02-15') }

    it { is_expected.to eq 1.25 }
  end

  describe 'rounding' do
    context 'with a fraction of a month' do
      subject { months('2019-01-01', '2019-01-12') }

      it 'rounds up to nearest two decimals' do
        is_expected.to eq 0.39
      end
    end
  end

  describe 'with a 13 months period' do
    subject { months('2019-04-01', '2020-04-30') }

    it { is_expected.to eq 13 }
  end
end
