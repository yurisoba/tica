function get_radio(name){return document.querySelector(`input[name="${name}"]:checked`).value;}
function delay(time) {return new Promise(resolve => setTimeout(resolve, time));}
function rerp(rf, l) {return Math.floor(rf() * l.length);}
function sfc32(a, b, c, d) {
    return function() {
      a >>>= 0; b >>>= 0; c >>>= 0; d >>>= 0; 
      var t = (a + b) | 0;
      a = b ^ b >>> 9;
      b = c + (c << 3) | 0;
      c = (c << 21 | c >>> 11);
      d = d + 1 | 0;
      t = t + d | 0;
      c = c + t | 0;
      return (t >>> 0) / 4294967296;
    }
}

let init_state = {
    country_idx: null,
    country: "",
    qs: [],
};
let i_country;
let qr;

function country_dialog()
{
    const dlg = document.createElement("section");
    dlg.classList.add("nes-container");
    dlg.classList.add("with-title");
    const title = document.createElement("h3");
    title.innerText = "Where are you from?";
    title.classList.add("title");
    dlg.appendChild(title);

    const select_container = document.createElement("div");
    select_container.classList.add("nes-select");
    dlg.appendChild(select_container);
    const select = document.createElement("select");
    select_container.appendChild(select);
    i_country = select;
    const opt = document.createElement("option");
    opt.setAttribute("value", "");
    opt.setAttribute("disabled", "");
    opt.setAttribute("selected", "");
    opt.setAttribute("hidden", "");
    opt.innerText = "?";
    select.appendChild(opt);

    for (const country of countries) {
        const copt = document.createElement("option");
        copt.setAttribute("value", country);
        copt.innerText = country;
        select.appendChild(copt);
    }

    document.body.appendChild(dlg);

}

function question_dialog(q, title, name)
{
    const dlg = document.createElement("section");
    dlg.classList.add("nes-container");
    dlg.classList.add("with-title");
    const t = document.createElement("h3");
    t.innerText = title;
    t.classList.add("title");
    dlg.appendChild(t);

    const qt = document.createElement("h4");
    qt.innerText = q.q;
    dlg.appendChild(qt);

    let idx = 0;
    for (const answer of q.a) {
        const lbl = document.createElement("label");
        const input = document.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("name", name);
        input.setAttribute("value", idx);
        input.classList.add("nes-radio");
        lbl.appendChild(input);
        const span = document.createElement("span");
        span.innerText = answer;
        lbl.appendChild(span);
        dlg.appendChild(lbl);
        const br = document.createElement("br");
        dlg.appendChild(br);
        idx++;
    }

    document.body.appendChild(dlg);
}

function qrcode_dialog()
{
    const dlg = document.createElement("section");
    // dlg.classList.add("qr");
    dlg.classList.add("nes-container");
    qr = new QRCode(dlg, {
        text: "STRING",
        correctLevel: QRCode.CorrectLevel.M,
    });
    document.body.appendChild(dlg);

    setInterval(() => {
        let s = "";
        s += `${i_country.value};`;
        s += `c=${init_state.country_idx};`;
        for (let i = 0; i < init_state.qs.length; i++) {
            const n = `q${i}`;
            s += `q=${init_state.qs[i]};a=${get_radio(n)};`;
        }

        qr.makeCode(s);
    }, 1000);
}

function index()
{
    document.body.innerText = "";
    let qc = 0;
    for (const qidx of init_state.qs) {
        question_dialog(questions[init_state.country][qidx], `Q${qc+1}`, `q${qc}`);
        qc++;
    }
    country_dialog();
    qrcode_dialog();
}

function intro()
{
    const rand = sfc32(0x9E3779B9, 0x243F6A88, 0xB7E15162, Date.now());
    for (let i = 0; i < 15; i++) rand();

    const start = document.createElement("button");
    start.classList.add("nes-btn");
    start.classList.add("is-primary");
    start.innerText = "START";
    start.onclick = async () => {
        document.body.innerText = "";
        const span = document.createElement("span");
        document.body.appendChild(span);

        for (let i = 0; i < 10; i++) {
            const idx = rerp(rand, qcountries);
            span.innerText = qcountries[idx];
            init_state.country_idx = idx;
            await delay(500);
        }
        init_state.country = span.innerText;

        // draw 3 questions
        const qarray = [], qs = [];
        for (let i = 0; i < questions[init_state.country].length; i++) {
            qarray.push(i);
        }
        for (let i = 0; i < init_state.qs.length; i++) {
            const idx = rerp(rand, qarray);
            qs.push(qarray[idx]);
            qarray.splice(idx, 1);
        }
        init_state.qs = qs;

        document.body.innerText = "";

        const next = document.createElement("button");
        next.classList.add("nes-btn");
        next.classList.add("is-primary");
        next.innerText = `${init_state.country} >`;
        next.onclick = index;
        document.body.appendChild(next);
    };
    document.body.appendChild(start);
}

intro();


// https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript
// https://stackoverflow.com/questions/9071573/is-there-a-simple-way-to-make-a-random-selection-from-an-array-in-javascript-or
