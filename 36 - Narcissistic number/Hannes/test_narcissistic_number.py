# Run with python -m unittest -v test_narcissistic_number (-v for method name output)

import unittest

from narcissistic_number import narcissistic_number

class TestNarcissisticNumber(unittest.TestCase):
  def test_narcissistic_number(self):
    """
    With a narcissistic number
    """
    self.assertTrue(narcissistic_number(1))

  def test_another_narcissistic_number(self):
    """
    With another narcissistic number
    """
    self.assertTrue(narcissistic_number(2))

  def test_non_narcissistic_number(self):
    """
    With a non narcissistic number
    """
    self.assertFalse(narcissistic_number(51))
