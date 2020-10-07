from pynotifier import Notification

Notification (

    title = "Instagram",
    
    description = "You have 18 unread messages",

    icon_path = r"favicon Path",

    duration = 25,

    urgency = Notification.URGENCY_CRITICAL

).send()

# Hope you like this small app
