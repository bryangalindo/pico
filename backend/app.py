from flask import Flask
import config as cfg

app = Flask(__name__)

@app.route('/ping')
def ping():
    return 'pong'

if __name__ == '__main__':
    app.run(debug=cfg.IS_DEBUG)
