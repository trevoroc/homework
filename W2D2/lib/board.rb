class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @cups = Array.new(14) { Array.new}
    @names = [name1, name2]
    place_stones
  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
    (0..5).each { |i| 4.times { cups[i] << :stone } }
    (7..12).each { |i| 4.times { cups[i] << :stone } }
  end

  def valid_move?(start_pos)
    raise "Invalid starting cup" unless start_pos.between?(1, 14)
  end

  def make_move(start_pos, current_player_name)
    stones, cups[start_pos] = cups[start_pos], []
    current_pos = start_pos == 12 ? 0 : start_pos + 1

    until stones.empty?
      cups[current_pos] << stones.pop
      current_pos = current_pos == 12 ? 0 : current_pos + 1
    end

    render

    next_turn(current_pos)
  end

  def next_turn(ending_cup_idx)
    # helper method to determine what #make_move returns
    
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
  end

  def winner
  end
end
