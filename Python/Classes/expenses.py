from account import Account

class Expenses:
    ExpensesGlobalId=0
    def __init__(self,sum,date,type,pymentMethod,category):
        Expenses.ExpensesGlobalId+=1
        self.id=Expenses.ExpensesGlobalId
        self.expenses = [] 

        

    def AddExpenses(self,amount,date,type,pymentMethod,category):
       expense_entry = {
            'id': self.id,
            'amount': amount,
            'date': date,
            'type': type,
            'pymentMethod':pymentMethod,
            'category':category
        } 
       Account.globalSum-=amount  
       self.expenses.append(expense_entry) 
        

    def get_all_expenses(self):
        return self.expenses

    def get_expense_by_date(self,date):
        return [expense for expense in self.expenses if expense['date'] == date]
    
    def get_expense_by_month(self,month):
        return[expense for expense in self.expenses if expense['date'].month == month]
    
    def get_expense_by_year(self,year):
        return[expense for expense in self.expenses if expense['date'].year == year]
    
    def get_expense_by_type(self,type):
        return[expense for expense in self.expenses if expense['type'] == type]
    
    def get_expense_by_category(self,category):
        return[expense for expense in self.expenses if expense['category'] == category]
    


        
    
        
