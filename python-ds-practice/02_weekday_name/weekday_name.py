
days = ["Sunday","monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


def weekday_name(day_of_week):
    if day_of_week in range(0,7):
        print(days[day_of_week])
    else:
        print(None)


    
weekday_name(1)

weekday_name(6)

weekday_name(7)

weekday_name(0)