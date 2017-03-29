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

# Calculates values of the Gamma Function.
#
# n - The input for the function.
#
# Returns the result of evaluating the Gamma Function for n.
def gamma_fnc(n)
  return nil if n - 1 < 0

  return 1 if n - 1 <= 1
  (n - 1) * gamma_fnc(n - 1)
end
