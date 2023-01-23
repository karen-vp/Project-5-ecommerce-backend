const msgFormatConst = (msj ) =>{
    console.log(`\x1b[33m ${msj}\x1b[0m`)
}

const respApi = (res, msg, data) =>{
    res.json({
        msg: msg,
        total : data.length,
        data: data
    })
}

module.exports ={
    msgFormatConst,
    respApi
} 