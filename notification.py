from pynotifier import Notification

Notification (

    title = "Instagram",
    
    description = "You have 18 unread messages",

    icon_path = r"C:\Users\sheetal kapoor\Desktop\Common Path\Git\favicon.ico",

    duration = 25,

    urgency = Notification.URGENCY_CRITICAL

).send()