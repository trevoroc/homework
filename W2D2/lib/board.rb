require "byebug"

class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @cups = Array.new(14) { Array.new }
    @names = [name1, name2]
    place_stones
  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
    (0..5).each { |i| 4.times { cups[i] << :stone } }
    (7..12).each { |i| 4.times { cups[i] << :stone } }
  end

  def valid_move?(start_pos)
    raise "Invalid starting cup" unless [1..6].concat([7..12]).include?(start_pos)
  end

  def make_move(start_pos, current_player_name)
    # debugger
    start_pos -= 1 if start_pos.between?(1, 6)
    skip = current_player_name == @names.first ? 13 : 6

    stones, cups[start_pos] = cups[start_pos].dup, []
    current_pos = start_pos + 1 == skip ? (start_pos + 2) % 14 : start_pos + 1

    until stones.empty?
      if current_pos == skip
        current_pos = (current_pos + 1) % 14
        next
      end

      cups[current_pos] << stones.pop
      current_pos = (current_pos + 1) % 14 unless stones.empty?
    end

    render

    next_turn(current_pos)
  end

  def next_turn(ending_cup_idx)
    # helper method to determine what #make_move returns
    if ending_cup_idx != 6 && ending_cup_idx != 13 &&
       cups[ending_cup_idx].length == 1
      :switch
    elsif ending_cup_idx == 6 || ending_cup_idx == 13
      :prompt
    else
      ending_cup_idx
    end
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    cups[0..5].all? { |cup| cup.empty? } || cups[7..12].all? { |cup| cup.empty? }
  end

  def winner
    return :draw if cups[6].length == cups[13].length
    cups[6].length > cups[13].length ? @names.first : @names.last
  end

end
