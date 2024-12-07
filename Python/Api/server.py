from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///Correct-economics.db'  # Example URI
db = SQLAlchemy(app)

class Expenses(db.Model):
    __tablename__ = 'expenses'
    id = db.Column(db.Integer, primary_key=True)
    amount = db.Column(db.Float, nullable=False)
    type = db.Column(db.String(255), nullable=True)
    date = db.Column(db.Date, nullable=False)
    category = db.Column(db.String(255), nullable=True)
    paymentMethod = db.Column(db.String(255), nullable=True)

class Revenues(db.Model):
    __tablename__ = 'revenues'
    id = db.Column(db.Integer, primary_key=True)
    amount = db.Column(db.Float, nullable=False)
    type = db.Column(db.String(255), nullable=True)
    date = db.Column(db.Date, nullable=False)
    category = db.Column(db.String(255), nullable=True)

@app.route('/')
def index():
    return "Welcome to the API. Use /api/expenses or /api/revenues."

@app.route('/api/expenses', methods=['POST'])
def add_expense():
    data = request.get_json()
    new_expense = Expenses(
        amount=data['amount'],
        type=data['type'],
        date=datetime.strptime(data['date'], '%Y-%m-%d').date(),
        category=data['category'],
        paymentMethod=data['paymentMethod']
    )
    db.session.add(new_expense)
    db.session.commit()
    return jsonify({'message': 'Expense added successfully!'}), 201

@app.route('/api/expenses', methods=['GET'])
def get_expenses():
    expenses = Expenses.query.all()
    return jsonify([{'id': expense.id, 'amount': expense.amount, 'type': expense.type, 
                     'date': expense.date.strftime('%Y-%m-%d'), 'category': expense.category,
                     'paymentMethod': expense.paymentMethod} for expense in expenses])

@app.route('/api/revenues', methods=['POST'])
def add_revenue():
    data = request.get_json()
    new_revenue = Revenues(
        amount=data['amount'],
        type=data['type'],
        date=datetime.strptime(data['date'], '%Y-%m-%d').date(),
        category=data['category']
    )
    db.session.add(new_revenue)
    db.session.commit()
    return jsonify({'message': 'Revenue added successfully!'}), 201

@app.route('/api/revenues', methods=['GET'])
def get_revenues():
    revenues = Revenues.query.all()
    return jsonify([{'id': revenue.id, 'amount': revenue.amount, 'type': revenue.type, 
                     'date': revenue.date.strftime('%Y-%m-%d'), 'category': revenue.category} 
                     for revenue in revenues])

if __name__ == '__main__':
    with app.app_context():  # Add application context
        db.create_all()  # Create tables
    app.run(debug=True)
