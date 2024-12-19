from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from flask_cors import CORS


app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000", "allow_headers": ["Content-Type"]}})

app.config['SQLALCHEMY_DATABASE_URI'] = 'mssql+pyodbc://DESKTOP-1EE5QAV/Correct-economics?driver=ODBC+Driver+17+for+SQL+Server'

db = SQLAlchemy(app)

class Expenses(db.Model):
    __tablename__ = 'expenses'
    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(255), nullable=True)
    date = db.Column(db.Date, nullable=False)
    amount = db.Column(db.Float, nullable=False)
    category = db.Column(db.String(255), nullable=True)
    paymentMethod = db.Column(db.String(255), nullable=True)

class Revenues(db.Model):
    __tablename__ = 'revenues'
    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(255), nullable=True)
    date = db.Column(db.Date, nullable=False)
    amount = db.Column(db.Float, nullable=False)
    category = db.Column(db.String(255), nullable=True)
    

@app.route('/')
def index():
    return "Welcome to the API. Use /api/expenses or /api/revenues."



@app.route('/api/expenses', methods=['POST'])
def add_expense():
    try:
        data = request.get_json()
        new_expense = Expenses(
        type=data['type'],
        date=datetime.strptime(data['date'], '%Y-%m-%d').date(),
        amount=data['amount'],
        category=data['category'],
        paymentMethod=data['paymentMethod']
)

        
        db.session.add(new_expense)
        db.session.commit()
        return jsonify({'message': 'Expense added successfully!'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 400  # Return error message


@app.route('/api/expenses', methods=['GET'])
def get_expenses():
    expenses = Expenses.query.all()
    return jsonify([{'id': expense.id, 'type': expense.type, 
                     'date': expense.date.strftime('%Y-%m-%d'), 'amount': expense.amount, 'category': expense.category,
                     'paymentMethod': expense.paymentMethod} for expense in expenses])

@app.route('/api/revenues', methods=['POST'])
def add_revenue():
    data = request.get_json()
    new_revenue = Revenues(
        type=data['type'],
        date=datetime.strptime(data['date'], '%Y-%m-%d').date(),
        amount=data['amount'],
        category=data['category'],

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
    with app.app_context():
        db.create_all()  # Create tables
    app.run(debug=True)
