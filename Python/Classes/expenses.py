from Account import Account

class Expenses:
    ExpensesGlobalId=0
    def __init__(self,sum,date,type,pymentMethod,category):
        Expenses.ExpensesGlobalId+=1
        self.id=Expenses.ExpensesGlobalId
        

    def AddExpenses(self,sum,date,type,pymentMethod,category):
        self.sum=sum
        self.date=date
        self.type=type
        self.pymentMethod=pymentMethod
        self.category=category
        Account.globalSum-=sum



        
    
        
