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

# Determines if the "ice cream shop" offers the user's favorite flavor.
#
# flavors - An array of the available flavors.
# favorite - The user's favorite flavor.
#
# Returns true if favorite is offered and false otherwise.
def ice_cream_shop(flavors, favorite)
  return flavors.first == favorite if flavors.length <= 1
  flavors.first == favorite || ice_cream_shop(flavors[1..-1], favorite)
end

# Reverses the string.
#
# str - The string to reverse.
#
# Returns the reversed string.
def reverse(str)
  return str if str.length <= 1
  reverse(str[1..-1]) + str[0]
end
