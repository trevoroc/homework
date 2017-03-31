# Public: Class representing the Map data structure. This implementation will
# only use arrays.
class Map

  # Public: Initializes a new Map.
  def initialize
    @map = []
  end

  # Public: Adds a new key-value pair to this Map, or updates the value of an
  # existing key.
  #
  # key - The key to add/update.
  # value - The new value of key in this Map.
  #
  # Returns nothing.
  def assign(key, value)
    @map.each do |pair|
      k, _ = pair
      pair[1] = value if key == k
      return
    end

    @map << [key, value]
  end

  # Public: Retrieves the value of a specific key.
  #
  # key - The key whose value we wish to return.
  #
  # Returns the value associated with key in this Map, or nil if the key does
  # not exist.
  def lookup(key)
  end

  # Public: Removes a key-value pair from this Map.
  #
  # key - The key of the pair to be removed.
  #
  # Returns nothing.
  def remove(key)
  end

  # Public: Creates a copy of this Map.
  #
  # Returns the copy of this Map.
  def show
  end
end
