from flask import Flask, jsonify, request
from flask_cors import CORS
import random


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

@app.route('/api/sentiment', methods=['POST'])
def analyze_sentiment():
    data = request.json
    text = data.get("text", "")
    # Dummy sentiment logic
    sentiment = "positive" if "good" in text.lower() else "negative"
    return jsonify({"text": text, "sentiment": sentiment})


@app.route('/api/predict', methods=['POST'])
def predict():
    data = request.json
    value = data.get("value", 0)
    # Simulated prediction logic
    prediction = value * random.uniform(0.5, 1.5)
    return jsonify({"value": value, "prediction": prediction})

data_store = []

@app.route('/api/store', methods=['POST'])
def store_data():
    data = request.json
    data_store.append(data)
    return jsonify({"message": "Data stored successfully", "data": data})

@app.route('/api/retrieve', methods=['GET'])
def retrieve_data():
    return jsonify({"stored_data": data_store})
