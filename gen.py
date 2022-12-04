import os

files = os.listdir("raw")

countries = []
questions = {}
answers = {}

for fn in files:
    country = fn.split(".")[0]
    print("Found", country)
    countries.append(country)

    cq = []
    ca = []
    with open(os.path.join("raw", fn)) as f:
        for question in f:
            choices = []
            for i in range(4):
                choices.append(next(f).strip())
            answer = int(next(f)) - 1
            cq.append({
                "q": question.strip(),
                "a": choices,
            })
            ca.append(answer)
            next(f)
    questions[country] = cq
    answers[country] = ca

import json
with open("questions.js", "w") as f:
    f.write(f"const qcountries = {json.dumps(countries)};\n\n")
    f.write(f"const questions = {json.dumps(questions, indent = 2)};\n")

with open("answers.js", "w") as f:
    f.write(f"const answers = {json.dumps(answers, indent = 2)};\n")

print("OK")
