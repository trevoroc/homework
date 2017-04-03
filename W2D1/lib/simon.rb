require 'byebug'

class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def play
    system("clear")
    until game_over
      take_turn
    end

    game_over_message
    reset_game
  end

  def take_turn
    show_sequence
    require_sequence

    unless game_over
      self.sequence_length += 1
      round_success_message
    end
  end

  def show_sequence
    add_random_color

    seq.each do |color|
      sleep(0.25)
      puts color
      sleep(0.5)
      system("clear")
    end
  end

  def require_sequence
    puts "Please enter the sequence below."
    puts "Example input: 'blue red blue green'"

    player_sequence = gets.chomp.split
    game_over = player_sequence != seq

    system("clear")
  end

  def add_random_color
    seq << COLORS.sample
  end

  def round_success_message
    puts "Wow, great memory! Ready for round #{sequence_length}?"
    sleep(3)
    system("clear")
  end

  def game_over_message
    puts "Aw man, you messed that one up. You got to round #{sequence_length}!"
    sleep(3)
  end

  def reset_game
    initialize
  end
end

if __FILE__ == $PROGRAM_NAME
  game = Simon.new
  game.play
end
