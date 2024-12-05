from Account import Account

class Revenues:
    RevenuesGlobalId = 0

    def __init__(self):
        Revenues.RevenuesGlobalId += 1
        self.id = Revenues.RevenuesGlobalId
        self.revenues = [] 

    def add_revenue(self, amount, date, type,category):
        revenue_entry = {
            'id': self.id,
            'amount': amount,
            'date': date,
            'type': type,
            'category':category
        }
        Account.globalSum+=amount

        self.revenues.append(revenue_entry)

    def get_all_revenues(self):
        return self.revenues

    def get_revenue_by_date(self,date):
        return [revenue for revenue in self.revenues if revenue['date'] == date]
    
    def get_revenue_by_month(self,month):
        return[revenue for revenue in self.revenues if revenue['date'].month == month]
    
    def get_revenue_by_year(self,year):
        return[revenue for revenue in self.revenues if revenue['date'].year == year]
    
    def get_revenue_by_type(self,type):
        return[revenue for revenue in self.revenues if revenue['type'] == type]
    
    def get_revenue_by_category(self,category):
        return[revenue for revenue in self.revenues if revenue['category'] == category]
    