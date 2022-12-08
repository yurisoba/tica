import os

files = os.listdir("raw")

countries = []
questions = {}
answers = {}
nq = 0

for fn in files:
    country = fn.split(".")[0]
    countries.append(country)

    cq = []
    ca = []
    with open(os.path.join("raw", fn)) as f:
        qs = f.read().strip().split("\n\n")
        nq += len(qs)
        print("Found", country + ":", len(qs), "questions")
        for q in qs:
            lines = q.strip().split("\n")
            cq.append({
                "q": lines[0].strip(),
                "a": [line.strip() for line in lines[1:-1]],
            })
            ca.append(int(lines[-1].strip()) - 1)

    questions[country] = cq
    answers[country] = ca

import json
with open("questions.js", "w") as f:
    f.write(f"const qcountries = {json.dumps(countries)};\n\n")
    f.write(f"const questions = {json.dumps(questions, indent = 2)};\n")

with open("answers.js", "w") as f:
    f.write(f"const answers = {json.dumps(answers, indent = 2)};\n")

print("OK", nq, "questions found.")
