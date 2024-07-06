master_pwd = input("What is the master password")

def view():
    with open('passwords.txt', 'r') as f:
        for line in f.readlines():
            data = print(line.rstrip())
            user, passw = data.split("|")
            

def add():
    name = input("Account name: ")
    pwd = input("Password: ")
    
    with open('passwords.txt', 'a') as f:
        f.write(name + "|" + pwd + "\n")

while True:
      mode = input("Would you like to add a password or retrieve a password? (add/retrieve/quit) ").lower()
      if mode == 'quit':
        break
    
      if mode == 'view':
        view()
      elif mode == 'add':
        add()
      else:
        print("Invalid mode.")
        continue 
    