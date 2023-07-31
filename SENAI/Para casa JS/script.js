function myFunction() {
    let msg = String("")
    let total = Number
    let div = document.querySelector("#div")
    let CPU = Number(form.cpu.value)
    let PM = Number(form.pm.value)
    let GPU = Number(form.gpu.value)
    let RAM = Number(form.ram.value)
    let ARM = Number(form.arm.value)
    let PAG = Number(form.pag.value)

    if (PAG == ("")) {
        msg = ("a")
    }
    if (ARM == ("")) {
        msg = ("a")
    }
    if (RAM == ("")) {
        msg = ("a")
    }
    if (GPU == ("")) {
        msg = ("a")
    }
    if (PM == ("")) {
        msg = ("a")
    }
    if (CPU == ("")) {
        msg = ("a")
    }
    if (msg != ("")) {
        div.innerHTML = `<p>Dados Invalidos</p>`
    }
    else {
        total = (CPU + PM + GPU + RAM + ARM)
        if (PAG == (1)) {
            total = String((total / 10) * 9)
            div.innerHTML = `<p>O preço da configuração escolhida é ${total} reais</p>`
        }
        if (PAG == (2)) {
            div.innerHTML = `<p>O preço da configuração escolhida é ${total} reais</p>`
        }
    }
} 