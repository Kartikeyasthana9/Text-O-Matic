from flask import Flask, render_template, request, redirect, url_for, jsonify
from summarization import *
app = Flask(__name__)


@app.route('/')
def index():
    return jsonify({'message': 'Hello World!'})

@app.route('/summarize/text', methods=['POST'])
def summarize():
    if request.method == 'POST':
        data = request.get_json()
        return jsonify({'summary': generate_summary(data['text'])})
    else:
        return jsonify({'message': 'Invalid request'})

@app.route('/summarize/file', methods=['POST'])
def summarize_file():
    if request.method == 'POST':
        data = request.get_json()
        return jsonify({'summary': generate_summary(data['file'])})
    else:
        return jsonify({'message': 'Invalid request'})
  

if __name__ == '__main__':
  app.run(host='127.0.0.1', port=8888, debug=True)
 