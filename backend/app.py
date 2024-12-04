from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests

@app.route('/api/hello', methods=['GET'])
def hello():
    return jsonify({"message": "Hello from Flask!"})

@app.route('/api/sum', methods=['POST'])
def calculate_sum():
    data = request.json
    result = sum(data.get("numbers", []))
    return jsonify({"sum": result})

if __name__ == '__main__':
    app.run(debug=True, port=5001)
