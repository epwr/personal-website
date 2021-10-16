#!/bin/env ruby
#
# Author: Eric Power
# Description:
#     Gets all the top level functions from a ruby file (or a set of ruby files)

# Imports
require_relative './life-expectancy.rb'

#
@ages = 60..95
@starters = 60..70



# run
#
# Runs the main control flow of the program.
def optimize male=true

  # run life-expectancy.rb (requires the two .csv files passed as args)
  $output = false  # life-expectancy won't display it's information.
  m_probs, f_probs = run

  # For each startAge, calculate the sum of (the value of the startAge for dying at each age * probability of dying at that age)
  values = []
  @starters.each{ |startAge|
    value = 0
    @ages.each{ |age|
      value += calc_income(startAge, age) * (male ? m_probs[age-60][0] : f_probs[age-60][0])
    }
    values << [startAge, value]
  }
  puts "The best age to begin taking the CPP Retirement benefit for a #{male ? "man" : "woman"} is: #{values.sort_by { |x| x[1] }[-1][0]}"

end

def calc_income startAge, endAge
  default = 714.21
  annAmnt = (startAge > 65 ? ((startAge - 65) * 0.084 + 1) * default * 12 : (1 - (65- startAge) * 0.072) * default * 12)

  annAmnt * (endAge - startAge)
end

if __FILE__ == $0
  optimize
  optimize false
end
