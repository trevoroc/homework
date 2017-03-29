# Calculates the sum from 1 to n (inclusive)
#
# n - The value to use as the limit.
#
# Returns the sum up to n.
def sum_to(n)
  return nil if n < 0

  return n if n <= 1
  n + sum_to(n - 1)
end

# Calculates the sum of the Fixnums in the given array.
#
# nums_array - An array of Fixnums.
#
# Returns the sum of all the elements of nums_array.
def add_numbers(nums_array)
  return nums_array.first if nums_array.length <= 1
  nums_array.first + add_numbers(nums_array[1..-1])
end
