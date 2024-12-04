class Revenues:
    revenueglobalId=0
    def __init__(self,type,sum,date,category,id) :
        Revenues.revenueglobalId+=1
        self.id= Revenues.revenueglobalId
    def AddRevenue(self,type,sum,date,category):
        self.type=type,
        self.sum=sum,
        self.date=date,
        self.category=category
        Account.globalSum+=sum
    def GetAllRevenue():
        pass
    def GetRevnueByDate():
        pass



        