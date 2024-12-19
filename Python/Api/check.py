# import pyodbc
# print(pyodbc.drivers())
import pyodbc

conn_str = 'DRIVER={ODBC Driver 17 for SQL Server};SERVER=DESKTOP-1EE5QAV;DATABASE=Correct-economics;Trusted_Connection=yes;'
try:
    conn = pyodbc.connect(conn_str)
    print("Connection successful!")
except Exception as e:
    print("Connection failed:", e)
import pyodbc

import pyodbc

# conn_str = 'DRIVER={ODBC Driver 17 for SQL Server};SERVER=DESKTOP-1EE5QAV;DATABASE=Correct-economics;Trusted_Connection=yes;'
# cursor = conn.cursor()
# cursor.execute("SELECT 1")
# print(cursor.fetchone())
conn_str = 'DRIVER={ODBC Driver 17 for SQL Server};SERVER=DESKTOP-1EE5QAV;DATABASE=Correct-economics;Trusted_Connection=yes;'
try:
    conn = pyodbc.connect(conn_str)
    print("Connection successful!")
    cursor = conn.cursor()
    cursor.execute("SELECT 1")
    print(cursor.fetchone())
except Exception as e:
    print("Connection failed:", e)