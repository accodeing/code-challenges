RSpec.configure do |config|
  begin
    config.filter_run :focus
    config.run_all_when_everything_filtered = true

    config.default_formatter = 'doc' if config.files_to_run.one?

    config.order = :random
    Kernel.srand config.seed
  end
end
