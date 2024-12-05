from Account import Account

class Expenses:
    ExpensesGlobalId=0
    def __init__(self):
        Expenses.ExpensesGlobalId+=1
        self.id=Expenses.ExpensesGlobalId
        self.expenses=[]
        

    def add_expense(self,amount,date,type,pymentMethod,category):
        expense_entry={
           'id':self.id,
           'amount':amount,
           'date':date,
           'type':type,
           'pymentMethod':pymentMethod,
           'category':category
        }
        Account.globalSum-=sum
        self.expenses.append(expense_entry)


    def get_all_expenses(self):
        return self.expenses
    


    def get_expense_by_date(self,date):
        return [expense for expense in self.expenses if ['date']==date]
    
    def get_expense_by_month(self,month):
        return [expense for expense in self.expenses if ['data'].month==month]
    
    def get_expense_by_month(self,year):
        return [expense for expense in self.expenses if ['data'].year==year]
    
    def get_expense_by_type(self,type):
        return [expense for expense in self.expenses if ['type']==type]
    
    def get_expense_by_type(self,pymentMethod):
        return [expense for expense in self.expenses if ['type']==pymentMethod]
    
    def get_expense_by_type(self,category):
        return [expense for expense in self.expenses if ['type']==category]




        
    
        
