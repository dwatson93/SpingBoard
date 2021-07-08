"""Python serial number generator."""


class SerialGenerator:
    def __init__(self, start):
        self.start = start
        self.rover = self.start
    
    def generate(self):
        print(self.start)
        self.start = self.start + 1

    def reset(self):
        self.start = self.rover


        
    """Machine to create unique incrementing serial numbers.
    
    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """

serial = SerialGenerator(100)
serial.generate()
serial.generate()
serial.reset()
serial.generate()