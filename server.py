from flask import Flask, request, jsonify, render_template
app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/getLista", methods=['POST'])
def gatDataFromJS():
    data = request.get_json()
    print("data: " + str(data))
    return jsonify(success=True, data=data)

if __name__ == "__main__":
    app.run(host='localhost', port=8000, debug=True)

