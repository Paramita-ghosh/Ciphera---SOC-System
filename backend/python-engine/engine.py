from flask import Flask, request, jsonify
from datetime import datetime, timedelta
from pymongo import MongoClient

app = Flask(__name__)

client = MongoClient("mongodb://localhost:27017/")
db = client["microsoc"]
logs = db["logs"]

@app.post("/check")
def check_log():
    log = request.get_json()

    ip = log["src_ip"]
    attack_type = log["attack_type"]
    now = datetime.utcnow()

    # RULE 1: SQLi → Always critical
    if attack_type == "SQLi":
        return jsonify({
            "action": "create_incident",
            "severity": "Critical",
            "reason": f"SQL Injection detected from {ip}"
        })

    # RULE 2: 5 failed logins in 2 minutes
    if attack_type == "FAILED_LOGIN":
        two_min_ago = now - timedelta(minutes=2)
        count = logs.count_documents({
            "src_ip": ip,
            "attack_type": "FAILED_LOGIN",
            "ts": {"$gte": two_min_ago}
        })

        if count >= 5:
            return jsonify({
                "action": "create_incident",
                "severity": "Critical",
                "reason": f"Brute force attempt from {ip}"
            })

    # default: no incident
    return jsonify({"action": "none"})

if __name__ == "__main__":
    app.run(port=5001)
