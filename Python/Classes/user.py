
class Users:

    usersGlobalId=0


    def __init__(self):
        Users.ExpensesGlobalId+=1
        self.id=Users.usersGlobalId
        self.users = [] 

        
    def AddUsers(self,name,phone,email,password):
       user_entry = {
            'id':self.id,
            'name': name,
            'phone': phone,
            'email': email,
            'password': password,


        } 
       self.users.append(user_entry) 
        

    def get_all_users(self):
        return self.users
    
    def get_user_by_name_and_password(self,name,password):
        return [user for user in self.user if user['name'] == name and user['password'] == password]

   