#!/bin/env ruby
#
# Author: Eric Power
# Description:
#     Gets all the top level functions from a ruby file (or a set of ruby files)

# Config Variables
$output = true

# run
#
# Runs the main control flow of the program.
def run

  if ARGV.length != 2
    puts "Usage: life-expectancy.rb <male-survivors> <female-survivors>"
    puts "    Expects each file to be a csv with two columns: Age & Number of Survivors"
    exit 1
  end
  mfp = File.new(ARGV[0], "r")
  ffp = File.new(ARGV[1], "r")

  # Variables
  m_population = nil
  f_population = nil
  m_prev_survivors = nil
  f_prev_survivors = nil
  m_tot_probability = 0
  f_tot_probability = 0
  probs = []

  #puts "Age, Probability of Mortality (Male), Probability of Mortality (Female)"
  puts "<svg viewBox=\"0 0 306 150\">" if $output
  loop {
    mline = mfp.readline
    fline = ffp.readline
    mlcol, mrcol = mline.split('","')
    flcol, frcol = fline.split('","')

    if mlcol.match(/"\d+ years/) or flcol.match(/"\d+ years/)
      if mlcol != flcol
        puts "Error: male and female files do not have the same format" if $output
        exit 1
      end

      age = mlcol.match(/(\d+) years/)[1].to_i
      if age == 59
        m_population = mrcol.split(",").join().to_i
        f_population = frcol.split(",").join().to_i
        m_prev_survivors = m_population
        f_prev_survivors = f_population
      elsif age >= 60
        m_survivors = mrcol.split(",").join().to_i
        f_survivors = frcol.split(",").join().to_i

        m_survivors = mrcol.split(",").join().to_i
        f_survivors = frcol.split(",").join().to_i
        m_prob = (m_prev_survivors - m_survivors) / m_population.to_f
        f_prob = (f_prev_survivors - f_survivors) / f_population.to_f
        m_tot_probability += m_prob
        f_tot_probability += f_prob

        probs << [m_prob, f_prob]

        m_prev_survivors = m_survivors
        f_prev_survivors = f_survivors
      end
    end
    break if mfp.eof? or ffp.eof?
  }

  m_probs = []
  f_probs = []
  probs.each_with_index { |probs, i|
    m_prob, f_prob = probs
    age = i + 60

    m_probs << [m_prob, age]
    f_probs << [f_prob, age]

    gen_svg_plot(age, m_prob, f_prob)
  }

  tot_prob = 0.0
  median = nil
  percentile_30 = nil
  percentile_70 = nil
  m_probs.each{ |item|
    tot_prob += item[0]
    median = item[1] if tot_prob > 0.5 and median.nil?
    percentile_30 = item[1] if tot_prob > 0.7 and percentile_30.nil?
    percentile_70 = item[1] if tot_prob > 0.3 and percentile_70.nil?
  }
  show_details_men median, percentile_30, percentile_70
  tot_prob = 0.0
  median = nil
  percentile_30 = nil
  percentile_70 = nil
  f_probs.each{ |item|
    tot_prob += item[0]
    median = item[1] if tot_prob > 0.5 and median.nil?
    percentile_30 = item[1] if tot_prob > 0.7 and percentile_30.nil?
    percentile_70 = item[1] if tot_prob > 0.3 and percentile_70.nil?
  }
  show_details_women median, percentile_30, percentile_70

  # add_max_info m_max, f_max

  puts "</svg>" if $output
  STDERR.puts "Total Mortality Probability (Male, Female): #{m_tot_probability}, #{f_tot_probability}" if $output
  [m_probs, f_probs]
end



@width = 6
@vert_growth = 2000
@react = false

# gen_svg_plot
#
# Plot the probability of dying at each age for men and women
def gen_svg_plot(age, mp, fp)

  x_offset = (age - 60) * @width

  puts "<rect x=\"#{x_offset + 1}\" y=\"#{100 - mp * @vert_growth}\" width=\"2\" height=\"#{mp * @vert_growth}\" style=#{@react ? '{{' : '"'}fill: var(--accent-2)#{@react ? '}}' : '"'} />" if $output
  puts "<rect x=\"#{x_offset + 3}\" y=\"#{100 - fp * @vert_growth}\" width=\"2\" height=\"#{fp * @vert_growth}\" style=#{@react ? '{{' : '"'}fill: var(--accent-3)#{@react ? '}}' : '"'} />" if $output
  if age % 2 == 0
    puts "<text fontSize=\"4\" x=\"#{x_offset + (age < 100 ? 0.5 : -0.5)}\" y=\"105\">#{age}</text>" if $output
  end
end

# add_max_info
#
# Annotate the max probability for men and women.
def add_max_info m_max, f_max

  x_offset = (m_max[0] - 60) * @width

  puts "<line x1=\"#{x_offset + 1 - 40}\" y1=\"#{100 - m_max[1] * @vert_growth}\" x2=\"#{x_offset + 1}\" y2=\"#{100 - m_max[1] * @vert_growth}\" style=\"stroke: black; strokeWidth: 0.3;\" />" if $output
  puts "<line x1=\"#{x_offset + 3 - 40}\" y1=\"#{100 - f_max[1] * @vert_growth}\" x2=\"#{x_offset + 3}\" y2=\"#{100 - f_max[1] * @vert_growth}\" style=\"stroke: black; strokeWidth: 0.3;\" />" if $output

end


# show_details_men
#
#
def show_details_men age, perc30, perc70

  STDERR.puts age.nil? if $output

  puts "<line x1=\"20\" y1=\"114\" x2=\"20\" y2=\"149\" style=\"stroke: var(--accent-2); stroke-width: 3;\" />" if $output
  puts "<text fontSize=\"10\" x=\"23\" y=\"123\" >Men</text>" if $output
  puts "<text fontSize=\"8\" x=\"23\" y=\"132\" style=\"fill: var(--secondary-text-color);\"  >Median Age: #{age}</text>" if $output
  puts "<text fontSize=\"8\" x=\"23\" y=\"140\" style=\"fill: var(--secondary-text-color);\"  >30th Percentile: #{perc30}</text>" if $output
  puts "<text fontSize=\"8\" x=\"23\" y=\"148\" style=\"fill: var(--secondary-text-color);\"  >70th Percentile: #{perc70}</text>" if $output

end

# show_details_women
#
#
def show_details_women age, perc30, perc70

  puts "<line x1=\"100\" y1=\"114\" x2=\"100\" y2=\"149\" style=\"stroke: var(--accent-3); stroke-width: 3;\" />" if $output
  puts "<text fontSize=\"10\" x=\"103\" y=\"123\">Women</text>" if $output
  puts "<text fontSize=\"8\" x=\"103\" y=\"132\" style=\"fill: var(--secondary-text-color);\"  >Median Age: #{age}</text>" if $output
  puts "<text fontSize=\"8\" x=\"103\" y=\"140\" style=\"fill: var(--secondary-text-color);\"  >30th Percentile: #{perc30}</text>" if $output
  puts "<text fontSize=\"8\" x=\"103\" y=\"148\" style=\"fill: var(--secondary-text-color);\"  >70th Percentile: #{perc70}</text>" if $output

end

if __FILE__ == $0
  run
end
