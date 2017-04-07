class LRUCache

  def initialize(size)
    @store = []
    @size = size
  end

  def count
    @store.length
  end

  def add(el)
    if @store.include?(el)
      @store << @store.delete(el)
    elsif @store.length == @size
      @store.shift
      @store << el
    else
      @store << el
    end
  end

  def show
    p @store
    nil
  end
end
