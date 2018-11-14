from flask import Flask, request, jsonify, render_template
app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/getLista", methods=['POST'])
def gatDataFromJS():
    dataFromJS = request.get_json()
    print("data: " + str(dataFromJS))
    categorias = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec']
    data = [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    respuesta ={
        "categorias": categorias,
        "data": data
    }
    return jsonify(success=True, data=respuesta)

if __name__ == "__main__":
    app.run(host='localhost', port=8000, debug=True)

