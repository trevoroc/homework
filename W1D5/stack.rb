# Public: Class implementing the Stack data structure.
class Stack

  # Public: Initializes a new Stack.
  def initialize
    @stack = []
  end

  # Public: Pushes a new element onto the Stack.
  #
  # el - The Object to push onto the Stack.
  #
  # Returns nothing.
  def add(el)
    @stack.push(el)
  end

  # Public: Pops an element from the Stack.
  #
  # Returns the element removed.
  def remove
    @stack.pop(el)
  end

  # Public: Creates a copy of this Stack.
  #
  # Returns a copy of the Stack.
  def show
  end
end
