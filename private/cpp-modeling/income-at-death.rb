#!/bin/env ruby
#
# Author: Eric Power
# Description:
#     Gets all the top level functions from a ruby file (or a set of ruby files)


@ages = 60..110
@starters = 60..70


# run
#
# Runs the main control flow of the program.
def run

  @ages.each {|age|
    max = 0
    best_age = 0
    @starters.each{ |start|
      income = calc_income start, age
      if income > max
        max = income
        best_age = start
      end
    }
    puts "Age: #{age}, Start: #{best_age}"
  }
end


def calc_income startAge, endAge
  default = 714.21
  annAmnt = (startAge > 65 ? ((startAge - 65) * 0.084 + 1) * default * 12 : (1 - (65- startAge) * 0.072) * default * 12)

  annAmnt * (endAge - startAge)
end

if __FILE__ == $0
  run
end
