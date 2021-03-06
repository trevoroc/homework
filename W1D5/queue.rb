# Public: Class representing the Queue data structure.
class Queue

  # Public: Initializes a new Queue.
  def initialize
    @queue = []
  end

  # Public: Enqueues a new element to the Queue.
  #
  # el - The Object to enqueue.
  #
  # Returns nothing.
  def enqueue(el)
    @queue.push(el)
  end

  # Public: Dequeues the first element from the Queue.
  #
  # Returns the dequeued element.
  def dequeue
    @queue.shift
  end

  # Public: Creates a copy of this Queue.
  #
  # Returns the copy of this Queue.
  def show
    self.dup
  end
end
