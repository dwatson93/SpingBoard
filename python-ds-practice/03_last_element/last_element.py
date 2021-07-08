def last_element(lst):
    if not lst:
        return print(None)
    else:
        print(lst[-1])

    """Return last item in list (None if list is empty.
    
        >>> last_element([1, 2, 3])
        3
        
        >>> last_element([]) is None
        True
    """
last_element([1, 2, 3])
last_element([])