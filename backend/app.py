from flask import Flask
from flask_cors import CORS
import config as cfg

app = Flask(__name__)
CORS(app, resources={
    r"/*": {
        "origins": ["https://picoai.io", "http://localhost:5173"],
        "methods": ["GET"],
        "allow_headers": ["Content-Type", "Accept"]
    }
})

@app.route('/ping')
def ping():
    return 'pong'

if __name__ == '__main__':
    app.run(debug=cfg.IS_DEBUG)
