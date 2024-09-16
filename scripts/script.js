function convert(){
    let select1 = document.querySelector("#select-1").value
    let select2 = document.querySelector("#select-2").value     
    let numberInput = document.querySelector("#numberInput").value
    let price = document.querySelector("#price")
    let message = document.querySelector("#message")

    let dollar = {
        dollar : numberInput,
        real : 5.6,
        euro : 0.9,
        yuan : 7.09,
        iene : 140.5,
        bitcoin : 0.000017,
        ethereum : 0.00042,
    }

    let real = {
        real : numberInput,
        dollar : 0.18,
        euro : 0.16,
        yuan : 1.26,
        iene : 24.94,
        bitcoin : 0.0000030,
        ethereum : 0.000075,
    }
    
    let euro = {
        euro : numberInput,
        dollar : 1.11,
        real : 6.25,
        yuan : 7.87,
        iene : 155.88,
        bitcoin : 0.000019,
        ethereum : 0.00047,
    }

    let yuan = {
        yuan : numberInput,
        dollar : 0.14,
        euro : 0.13,
        real : 0.79,
        iene : 19.81,
        bitcoin : 0.0000024,
        ethereum : 0.000060,
    }

    let iene = {
        iene : numberInput,
        dollar : 0.0071,
        euro : 0.0064,
        yuan : 0.05,
        real : 0.04,
        bitcoin : 0.0000001212,
        ethereum : 0.0000030,
    }

    let bitcoin = {
        bitcoin : numberInput,
        dollar : 58588.00,
        euro : 52834.00,
        yuan : 415612.00,
        iene : 8233561.00,
        real : 330134.80,
        ethereum : 24.85,
    }

    let ethereum = {
        ethereum : numberInput,
        dollar : 2357.76,
        euro : 2125.76,
        yuan : 16725.48,
        iene : 331305.00,
        bitcoin : 0.04,
        real : 13285.00,
    }

    // console.log(select1)
    // console.log(select2)

    ///////   DOLLAR   /////////////////////////////////////////////
    if(select1 == "US Dollar" && select2 == "US Dollar"){
        n1 = Object(dollar.dollar)
        n2 = Object(dollar.dollar)
        result = n1 * n2
        plural = "Dollares"
        if(n1 && n2 > 1){
            result = n1 * n2
            price.innerHTML = `${n1} ${plural} é igual a ${n2} ${plural}`
            message.innerHTML = `Cotação do dia 15/09/24`
        }else{
            result = n1 * n2
            price.innerHTML = `${n1} ${select1} é igual a ${n2} ${select2}`
            message.innerHTML = `Cotação do dia 15/09/24`
        }
        // price.innerHTML = `${n1} ${select1} é igual a ${n2} ${select2}`
        // message.innerHTML = `Cotação do dia 15/09/24`
        // console.log("o resultado foi "+ result)
    } else if(select1 == "US Dollar" && select2 == "Real"){
        n1 = Object(dollar.dollar)
        n2 = Object(dollar.real)
        result = n1 * n2
        if(n1 > 1){
            select1 = "Dollares"
        }
        if(result > 1){
            select2 = "Reais"
        }
        price.innerHTML = `${n1} ${select1} é igual a ${result} ${select2}`
        message.innerHTML = `Cotação do dia 15/09/24`
        // console.log("o resultado foi "+ result)
    }else if(select1 == "US Dollar" && select2 == "Euro"){
        n1 = Object(dollar.dollar)
        n2 = Object(dollar.euro)
        result = n1 * n2
        if(n1 > 1){
            select1 = "Dollares"
        }
        if(result > 1){
            select2 = "Euros"
        }
        price.innerHTML = `${n1} ${select1} é igual a ${result} ${select2}`
        message.innerHTML = `Cotação do dia 15/09/24`
        // console.log("o resultado foi "+ result)
    }else if(select1 == "US Dollar" && select2 == "Yuan"){
        n1 = Object(dollar.dollar)
        n2 = Object(dollar.yuan)
        result = n1 * n2
        if(n1 > 1){
            select1 = "Dollares"
        }
        if(result > 1){
            select2 = "Yuans"
        }
        price.innerHTML = `${n1} ${select1} é igual a ${result} ${select2}`
        message.innerHTML = `Cotação do dia 15/09/24`
        // console.log("o resultado foi "+ result)
    }else if(select1 == "US Dollar" && select2 == "Iene"){
        n1 = Object(dollar.dollar)
        n2 = Object(dollar.iene)
        result = n1 * n2
        if(n1 > 1){
            select1 = "Dollares"
        }
        if(result > 1){
            select2 = "Ienes"
        }
        price.innerHTML = `${n1} ${select1} é igual a ${result} ${select2}`
        message.innerHTML = `Cotação do dia 15/09/24`
        // console.log("o resultado foi "+ result)
    }else if(select1 == "US Dollar" && select2 == "Bitcoin"){
        n1 = Object(dollar.dollar)
        n2 = Object(dollar.bitcoin)
        result = n1 * n2
        if(n1 > 1){
            select1 = "Dollares"
        }
        if(result > 1){
            select2 = "Bitcoins"
        }
        price.innerHTML = `${n1} ${select1} é igual a ${result} ${select2}`
        message.innerHTML = `Cotação do dia 15/09/24`
        // console.log("o resultado foi "+ result)
    }else if(select1 == "US Dollar" && select2 == "Ethereum"){
        n1 = Object(dollar.dollar)
        n2 = Object(dollar.ethereum)
        result = n1 * n2
        if(n1 > 1){
            select1 = "Dollares"
        }
        if(result > 1){
            select2 = "Ethers"
        }
        price.innerHTML = `${n1} ${select1} é igual a ${result} ${select2}`
        message.innerHTML = `Cotação do dia 15/09/24`
        // console.log("o resultado foi "+ result)
    }
    ///////   REAL   /////////////////////////////////////////////
    else if(select1 == "Real" && select2 == "Real"){
        n1 = Object(real.real)
        n2 = Object(real.real)
        plural = "Reais"
        if(n1 && n2 > 1){
            result = n1 * n2
            price.innerHTML = `${n1} ${plural} é igual a ${n2} ${plural}`
            message.innerHTML = `Cotação do dia 15/09/24`
        }else{
            result = n1 * n2
            price.innerHTML = `${n1} ${select1} é igual a ${n2} ${select2}`
            message.innerHTML = `Cotação do dia 15/09/24`
        }
        // result = n1 * n2
        // price.innerHTML = `${n1} ${select1} é igual a ${n2} ${select2}`
        // message.innerHTML = `Cotação do dia 15/09/24`
        // console.log("o resultado foi "+ result)
    } else if(select1 == "Real" && select2 == "US Dollar"){
        n1 = Object(real.real)
        n2 = Object(real.dollar)
        result = n1 * n2
        if(n1 > 1){
            select1 = "Reais"
        }
        if(result > 1){
            select2 = "Dollares"
        }
        price.innerHTML = `${n1} ${select1} é igual a ${result} ${select2}`
        message.innerHTML = `Cotação do dia 15/09/24`
        // console.log("o resultado foi "+ result)
    }else if(select1 == "Real" && select2 == "Euro"){
        n1 = Object(real.real)
        n2 = Object(real.euro)
        result = n1 * n2
        if(n1 > 1){
            select1 = "Reais"
        }
        if(result > 1){
            select2 = "Euros"
        }
        price.innerHTML = `${n1} ${select1} é igual a ${result} ${select2}`
        message.innerHTML = `Cotação do dia 15/09/24`
        // console.log("o resultado foi "+ result)
    }else if(select1 == "Real" && select2 == "Yuan"){
        n1 = Object(real.real)
        n2 = Object(real.yuan)
        result = n1 * n2
        if(n1 > 1){
            select1 = "Reais"
        }
        if(result > 1){
            select2 = "Yuans"
        }
        price.innerHTML = `${n1} ${select1} é igual a ${result} ${select2}`
        message.innerHTML = `Cotação do dia 15/09/24`
        // console.log("o resultado foi "+ result)
    }else if(select1 == "Real" && select2 == "Iene"){
        n1 = Object(real.real)
        n2 = Object(real.iene)
        result = n1 * n2
        if(n1 > 1){
            select1 = "Reais"
        }
        if(result > 1){
            select2 = "Ienes"
        }
        price.innerHTML = `${n1} ${select1} é igual a ${result} ${select2}`
        message.innerHTML = `Cotação do dia 15/09/24`
        // console.log("o resultado foi "+ result)
    }else if(select1 == "Real" && select2 == "Bitcoin"){
        n1 = Object(real.real)
        n2 = Object(real.bitcoin)
        result = n1 * n2
        if(n1 > 1){
            select1 = "Reais"
        }
        if(result > 1){
            select2 = "Bitcoins"
        }
        price.innerHTML = `${n1} ${select1} é igual a ${result} ${select2}`
        message.innerHTML = `Cotação do dia 15/09/24`
        // console.log("o resultado foi "+ result)
    }else if(select1 == "Real" && select2 == "Ethereum"){
        n1 = Object(real.real)
        n2 = Object(real.ethereum)
        result = n1 * n2
        if(n1 > 1){
            select1 = "Reais"
        }
        if(result > 1){
            select2 = "Ethers"
        }
        price.innerHTML = `${n1} ${select1} é igual a ${result} ${select2}`
        message.innerHTML = `Cotação do dia 15/09/24`
        // console.log("o resultado foi "+ result)
    }
    ///////   EURO   /////////////////////////////////////////////
    else if(select1 == "Euro" && select2 == "Euro"){
        n1 = Object(euro.euro)
        n2 = Object(euro.euro)
        result = n1 * n2
        plural = "Euros"
        if(n1 && n2 > 1){
            result = n1 * n2
            price.innerHTML = `${n1} ${plural} é igual a ${n2} ${plural}`
            message.innerHTML = `Cotação do dia 15/09/24`
        }else{
            result = n1 * n2
            price.innerHTML = `${n1} ${select1} é igual a ${n2} ${select2}`
            message.innerHTML = `Cotação do dia 15/09/24`
        }
        // price.innerHTML = `${n1} ${select1} é igual a ${n2} ${select2}`
        // message.innerHTML = `Cotação do dia 15/09/24`
        // console.log("o resultado foi "+ result)
    } else if(select1 == "Euro" && select2 == "US Dollar"){
        n1 = Object(euro.euro)
        n2 = Object(euro.dollar)
        result = n1 * n2
        if(n1 > 1){
            select1 = "Euros"
        }
        if(result > 1){
            select2 = "Dollares"
        }
        price.innerHTML = `${n1} ${select1} é igual a ${result} ${select2}`
        message.innerHTML = `Cotação do dia 15/09/24`
        // console.log("o resultado foi "+ result)
    }else if(select1 == "Euro" && select2 == "Real"){
        n1 = Object(euro.euro)
        n2 = Object(euro.real)
        result = n1 * n2
        if(n1 > 1){
            select1 = "Euros"
        }
        if(result > 1){
            select2 = "Reais"
        }
        price.innerHTML = `${n1} ${select1} é igual a ${result} ${select2}`
        message.innerHTML = `Cotação do dia 15/09/24`
        // console.log("o resultado foi "+ result)
    }else if(select1 == "Euro" && select2 == "Yuan"){
        n1 = Object(euro.euro)
        n2 = Object(euro.yuan)
        result = n1 * n2
        if(n1 > 1){
            select1 = "Euros"
        }
        if(result > 1){
            select2 = "Yuans"
        }
        price.innerHTML = `${n1} ${select1} é igual a ${result} ${select2}`
        message.innerHTML = `Cotação do dia 15/09/24`
        // console.log("o resultado foi "+ result)
    }else if(select1 == "Euro" && select2 == "Iene"){
        n1 = Object(euro.euro)
        n2 = Object(euro.iene)
        result = n1 * n2
        if(n1 > 1){
            select1 = "Euros"
        }
        if(result > 1){
            select2 = "Ienes"
        }
        price.innerHTML = `${n1} ${select1} é igual a ${result} ${select2}`
        message.innerHTML = `Cotação do dia 15/09/24`
        // console.log("o resultado foi "+ result)
    }else if(select1 == "Euro" && select2 == "Bitcoin"){
        n1 = Object(euro.euro)
        n2 = Object(euro.bitcoin)
        result = n1 * n2
        if(n1 > 1){
            select1 = "Euros"
        }
        if(result > 1){
            select2 = "Bitcoins"
        }
        price.innerHTML = `${n1} ${select1} é igual a ${result} ${select2}`
        message.innerHTML = `Cotação do dia 15/09/24`
        // console.log("o resultado foi "+ result)
    }else if(select1 == "Euro" && select2 == "Ethereum"){
        n1 = Object(euro.euro)
        n2 = Object(euro.ethereum)
        result = n1 * n2
        if(n1 > 1){
            select1 = "Euros"
        }
        if(result > 1){
            select2 = "Ethers"
        }
        price.innerHTML = `${n1} ${select1} é igual a ${result} ${select2}`
        message.innerHTML = `Cotação do dia 15/09/24`
        // console.log("o resultado foi "+ result)
    }
    ///////   YUAN   /////////////////////////////////////////////
    else if(select1 == "Yuan" && select2 == "Yuan"){
        n1 = Object(yuan.yuan)
        n2 = Object(yuan.yuan)
        result = n1 * n2
        plural = "Yuans"
        if(n1 && n2 > 1){
            result = n1 * n2
            price.innerHTML = `${n1} ${plural} é igual a ${n2} ${plural}`
            message.innerHTML = `Cotação do dia 15/09/24`
        }else{
            result = n1 * n2
            price.innerHTML = `${n1} ${select1} é igual a ${n2} ${select2}`
            message.innerHTML = `Cotação do dia 15/09/24`
        }
        // price.innerHTML = `${n1} ${select1} é igual a ${n2} ${select2}`
        // message.innerHTML = `Cotação do dia 15/09/24`
        // console.log("o resultado foi "+ result)
    } else if(select1 == "Yuan" && select2 == "US Dollar"){
        n1 = Object(yuan.yuan)
        n2 = Object(yuan.dollar)
        result = n1 * n2
        if(n1 > 1){
            select1 = "Yuans"
        }
        if(result > 1){
            select2 = "Dollares"
        }
        price.innerHTML = `${n1} ${select1} é igual a ${result} ${select2}`
        message.innerHTML = `Cotação do dia 15/09/24`
        // console.log("o resultado foi "+ result)
    }else if(select1 == "Yuan" && select2 == "Real"){
        n1 = Object(yuan.yuan)
        n2 = Object(yuan.real)
        result = n1 * n2
        if(n1 > 1){
            select1 = "Yuans"
        }
        if(result > 1){
            select2 = "Reais"
        }
        price.innerHTML = `${n1} ${select1} é igual a ${result} ${select2}`
        message.innerHTML = `Cotação do dia 15/09/24`
        // console.log("o resultado foi "+ result)
    }else if(select1 == "Yuan" && select2 == "Euro"){
        n1 = Object(yuan.yuan)
        n2 = Object(yuan.euro)
        result = n1 * n2
        if(n1 > 1){
            select1 = "Yuans"
        }
        if(result > 1){
            select2 = "Euros"
        }
        price.innerHTML = `${n1} ${select1} é igual a ${result} ${select2}`
        message.innerHTML = `Cotação do dia 15/09/24`
        // console.log("o resultado foi "+ result)
    }else if(select1 == "Yuan" && select2 == "Iene"){
        n1 = Object(yuan.yuan)
        n2 = Object(yuan.iene)
        result = n1 * n2
        if(n1 > 1){
            select1 = "Yuans"
        }
        if(result > 1){
            select2 = "Ienes"
        }
        price.innerHTML = `${n1} ${select1} é igual a ${result} ${select2}`
        message.innerHTML = `Cotação do dia 15/09/24`
        // console.log("o resultado foi "+ result)
    }else if(select1 == "Yuan" && select2 == "Bitcoin"){
        n1 = Object(yuan.yuan)
        n2 = Object(yuan.bitcoin)
        result = n1 * n2
        if(n1 > 1){
            select1 = "Yuans"
        }
        if(result > 1){
            select2 = "Bitcoins"
        }
        price.innerHTML = `${n1} ${select1} é igual a ${result} ${select2}`
        message.innerHTML = `Cotação do dia 15/09/24`
        // console.log("o resultado foi "+ result)
    }else if(select1 == "Yuan" && select2 == "Ethereum"){
        n1 = Object(yuan.yuan)
        n2 = Object(yuan.ethereum)
        result = n1 * n2
        if(n1 > 1){
            select1 = "Yuans"
        }
        if(result > 1){
            select2 = "Ethers"
        }
        price.innerHTML = `${n1} ${select1} é igual a ${result} ${select2}`
        message.innerHTML = `Cotação do dia 15/09/24`
        // console.log("o resultado foi "+ result)
    }
    ///////   IENE   /////////////////////////////////////////////
    else if(select1 == "Iene" && select2 == "Iene"){
        n1 = Object(iene.iene)
        n2 = Object(iene.iene)
        result = n1 * n2
        plural = "Ienes"
        if(n1 && n2 > 1){
            result = n1 * n2
            price.innerHTML = `${n1} ${plural} é igual a ${n2} ${plural}`
            message.innerHTML = `Cotação do dia 15/09/24`
        }else{
            result = n1 * n2
            price.innerHTML = `${n1} ${select1} é igual a ${n2} ${select2}`
            message.innerHTML = `Cotação do dia 15/09/24`
        }
        // price.innerHTML = `${n1} ${select1} é igual a ${n2} ${select2}`
        // message.innerHTML = `Cotação do dia 15/09/24`
        // console.log("o resultado foi "+ result)
    } else if(select1 == "Iene" && select2 == "US Dollar"){
        n1 = Object(iene.iene)
        n2 = Object(iene.dollar)
        result = n1 * n2
        if(n1 > 1){
            select1 = "Ienes"
        }
        if(result > 1){
            select2 = "Dollares"
        }
        price.innerHTML = `${n1} ${select1} é igual a ${result} ${select2}`
        message.innerHTML = `Cotação do dia 15/09/24`
        // console.log("o resultado foi "+ result)
    }else if(select1 == "Iene" && select2 == "Euro"){
        n1 = Object(iene.iene)
        n2 = Object(iene.euro)
        result = n1 * n2
        if(n1 > 1){
            select1 = "Ienes"
        }
        if(result > 1){
            select2 = "Euros"
        }
        price.innerHTML = `${n1} ${select1} é igual a ${result} ${select2}`
        message.innerHTML = `Cotação do dia 15/09/24`
        // console.log("o resultado foi "+ result)
    }else if(select1 == "Iene" && select2 == "Yuan"){
        n1 = Object(iene.iene)
        n2 = Object(iene.yuan)
        result = n1 * n2
        if(n1 > 1){
            select1 = "Ienes"
        }
        if(result > 1){
            select2 = "Yuans"
        }
        price.innerHTML = `${n1} ${select1} é igual a ${result} ${select2}`
        message.innerHTML = `Cotação do dia 15/09/24`
        // console.log("o resultado foi "+ result)
    }else if(select1 == "Iene" && select2 == "Real"){
        n1 = Object(iene.iene)
        n2 = Object(iene.real)
        result = n1 * n2
        if(n1 > 1){
            select1 = "Ienes"
        }
        if(result > 1){
            select2 = "Reais"
        }
        price.innerHTML = `${n1} ${select1} é igual a ${result} ${select2}`
        message.innerHTML = `Cotação do dia 15/09/24`
        // console.log("o resultado foi "+ result)
    }else if(select1 == "Iene" && select2 == "Bitcoin"){
        n1 = Object(iene.iene)
        n2 = Object(iene.bitcoin)
        result = n1 * n2
        if(n1 > 1){
            select1 = "Ienes"
        }
        if(result > 1){
            select2 = "Bitcoins"
        }
        price.innerHTML = `${n1} ${select1} é igual a ${result} ${select2}`
        message.innerHTML = `Cotação do dia 15/09/24`
        // console.log("o resultado foi "+ result)
    }else if(select1 == "Iene" && select2 == "Ethereum"){
        n1 = Object(iene.iene)
        n2 = Object(iene.ethereum)
        result = n1 * n2
        if(n1 > 1){
            select1 = "Ienes"
        }
        if(result > 1){
            select2 = "Ethers"
        }
        price.innerHTML = `${n1} ${select1} é igual a ${result} ${select2}`
        message.innerHTML = `Cotação do dia 15/09/24`
        // console.log("o resultado foi "+ result)
    }
    ///////   BITCOIN   /////////////////////////////////////////////
    else if(select1 == "Bitcoin" && select2 == "Bitcoin"){
        n1 = Object(bitcoin.bitcoin)
        n2 = Object(bitcoin.bitcoin)
        result = n1 * n2
        plural = "Bitcoins"
        if(n1 && n2 > 1){
            result = n1 * n2
            price.innerHTML = `${n1} ${plural} é igual a ${n2} ${plural}`
            message.innerHTML = `Cotação do dia 15/09/24`
        }else{
            result = n1 * n2
            price.innerHTML = `${n1} ${select1} é igual a ${n2} ${select2}`
            message.innerHTML = `Cotação do dia 15/09/24`
        }
        // price.innerHTML = `${n1} ${select1} é igual a ${n2} ${select2}`
        // message.innerHTML = `Cotação do dia 15/09/24`
        // console.log("o resultado foi "+ result)
    } else if(select1 == "Bitcoin" && select2 == "US Dollar"){
        n1 = Object(bitcoin.bitcoin)
        n2 = Object(bitcoin.dollar)
        result = n1 * n2
        if(n1 > 1){
            select1 = "Bitcoins"
        }
        if(result > 1){
            select2 = "Dollares"
        }
        price.innerHTML = `${n1} ${select1} é igual a ${result} ${select2}`
        message.innerHTML = `Cotação do dia 15/09/24`
        // console.log("o resultado foi "+ result)
    }else if(select1 == "Bitcoin" && select2 == "Euro"){
        n1 = Object(bitcoin.bitcoin)
        n2 = Object(bitcoin.euro)
        result = n1 * n2
        if(n1 > 1){
            select1 = "Bitcoins"
        }
        if(result > 1){
            select2 = "Euros"
        }
        price.innerHTML = `${n1} ${select1} é igual a ${result} ${select2}`
        message.innerHTML = `Cotação do dia 15/09/24`
        // console.log("o resultado foi "+ result)
    }else if(select1 == "Bitcoin" && select2 == "Yuan"){
        n1 = Object(bitcoin.bitcoin)
        n2 = Object(bitcoin.yuan)
        result = n1 * n2
        if(n1 > 1){
            select1 = "Bitcoins"
        }
        if(result > 1){
            select2 = "Yuans"
        }
        price.innerHTML = `${n1} ${select1} é igual a ${result} ${select2}`
        message.innerHTML = `Cotação do dia 15/09/24`
        // console.log("o resultado foi "+ result)
    }else if(select1 == "Bitcoin" && select2 == "Iene"){
        n1 = Object(bitcoin.bitcoin)
        n2 = Object(bitcoin.iene)
        result = n1 * n2
        if(n1 > 1){
            select1 = "Bitcoins"
        }
        if(result > 1){
            select2 = "Ienes"
        }
        price.innerHTML = `${n1} ${select1} é igual a ${result} ${select2}`
        message.innerHTML = `Cotação do dia 15/09/24`
        // console.log("o resultado foi "+ result)
    }else if(select1 == "Bitcoin" && select2 == "Real"){
        n1 = Object(bitcoin.bitcoin)
        n2 = Object(bitcoin.real)
        result = n1 * n2
        if(n1 > 1){
            select1 = "Bitcoins"
        }
        if(result > 1){
            select2 = "Reais"
        }
        price.innerHTML = `${n1} ${select1} é igual a ${result} ${select2}`
        message.innerHTML = `Cotação do dia 15/09/24`
        // console.log("o resultado foi "+ result)
    }else if(select1 == "Bitcoin" && select2 == "Ethereum"){
        n1 = Object(bitcoin.bitcoin)
        n2 = Object(bitcoin.ethereum)
        result = n1 * n2
        if(n1 > 1){
            select1 = "Bitcoins"
        }
        if(result > 1){
            select2 = "Ethers"
        }
        price.innerHTML = `${n1} ${select1} é igual a ${result} ${select2}`
        message.innerHTML = `Cotação do dia 15/09/24`
        // console.log("o resultado foi "+ result)
    }
    ///////   ETHEREUM   /////////////////////////////////////////////
    else if(select1 == "Ethereum" && select2 == "Ethereum"){
        n1 = Object(ethereum.ethereum)
        n2 = Object(ethereum.ethereum)
        result = n1 * n2
        plural = "Ethers"
        if(n1 && n2 > 1){
            result = n1 * n2
            price.innerHTML = `${n1} ${plural} é igual a ${n2} ${plural}`
            message.innerHTML = `Cotação do dia 15/09/24`
        }else{
            result = n1 * n2
            price.innerHTML = `${n1} ${select1} é igual a ${n2} ${select2}`
            message.innerHTML = `Cotação do dia 15/09/24`
        }
        // price.innerHTML = `${n1} ${select1} é igual a ${n2} ${select2}`
        // message.innerHTML = `Cotação do dia 15/09/24`
        // console.log("o resultado foi "+ result)
    } else if(select1 == "Ethereum" && select2 == "US Dollar"){
        n1 = Object(ethereum.ethereum)
        n2 = Object(ethereum.dollar)
        result = n1 * n2
        if(n1 > 1){
            select1 = "Ethers"
        }
        if(result > 1){
            select2 = "Dollares"
        }
        price.innerHTML = `${n1} ${select1} é igual a ${result} ${select2}`
        message.innerHTML = `Cotação do dia 15/09/24`
        // console.log("o resultado foi "+ result)
    }else if(select1 == "Ethereum" && select2 == "Euro"){
        n1 = Object(ethereum.ethereum)
        n2 = Object(ethereum.euro)
        result = n1 * n2
        if(n1 > 1){
            select1 = "Ethers"
        }
        if(result > 1){
            select2 = "Euros"
        }
        price.innerHTML = `${n1} ${select1} é igual a ${result} ${select2}`
        message.innerHTML = `Cotação do dia 15/09/24`
        // console.log("o resultado foi "+ result)
    }else if(select1 == "Ethereum" && select2 == "Yuan"){
        n1 = Object(ethereum.ethereum)
        n2 = Object(ethereum.yuan)
        result = n1 * n2
        if(n1 > 1){
            select1 = "Ethers"
        }
        if(result > 1){
            select2 = "Yuans"
        }
        price.innerHTML = `${n1} ${select1} é igual a ${result} ${select2}`
        message.innerHTML = `Cotação do dia 15/09/24`
        // console.log("o resultado foi "+ result)
    }else if(select1 == "Ethereum" && select2 == "Iene"){
        n1 = Object(ethereum.ethereum)
        n2 = Object(ethereum.iene)
        result = n1 * n2
        if(n1 > 1){
            select1 = "Ethers"
        }
        if(result > 1){
            select2 = "Ienes"
        }
        price.innerHTML = `${n1} ${select1} é igual a ${result} ${select2}`
        message.innerHTML = `Cotação do dia 15/09/24`
        // console.log("o resultado foi "+ result)
    }else if(select1 == "Ethereum" && select2 == "Bitcoin"){
        n1 = Object(ethereum.ethereum)
        n2 = Object(ethereum.bitcoin)
        result = n1 * n2
        if(n1 > 1){
            select1 = "Ethers"
        }
        if(result > 1){
            select2 = "Bitcoins"
        }
        price.innerHTML = `${n1} ${select1} é igual a ${result} ${select2}`
        message.innerHTML = `Cotação do dia 15/09/24`
        // console.log("o resultado foi "+ result)
    }else if(select1 == "Ethereum" && select2 == "Real"){
        n1 = Object(ethereum.ethereum)
        n2 = Object(ethereum.real)
        result = n1 * n2
        if(n1 > 1){
            select1 = "Ethers"
        }
        if(result > 1){
            select2 = "Reais"
        }
        price.innerHTML = `${n1} ${select1} é igual a ${result} ${select2}`
        message.innerHTML = `Cotação do dia 15/09/24`
        // console.log("o resultado foi "+ result)
    }

}


// if(select1 == "US Dollar" && select2 == "Real"){
//     n1 = Object(dollar.dollar)
//     n2 = Object(dollar.real)
//     console.log(n1)
//     result = n1 * n2
//     console.log("o resultado foi "+ result)
// }




// switch(select1){
//     case 'US Dollar' :
//         n1 = Object(dollar.dollar)
//         n2 = Object(dollar.real)
//         console.log(n1)
//         result = n1 * n2
//         console.log("o resultado foi "+ result)
//         break
// }

