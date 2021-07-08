def number_compare(a, b):
    if a == b:
        print("These Numbers Are Equal")
    elif a > b:
        print(f"{a} is Greater Than {b}")
    else:
        print(f"{b} is Greater Than {a}")

    """Report on whether a>b, b>a, or b==a
    
        >>> number_compare(1, 1)
        'Numbers are equal'
        
        >>> number_compare(-1, 1)
        'Second is greater'
        
        >>> number_compare(1, -2)
        'First is greater'
    """
number_compare(1, 1)
number_compare(-1, 1)
number_compare(1, -2)
