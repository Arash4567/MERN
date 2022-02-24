import colors from 'colors'

export function requestTime(req, res, next){
    req.requestTime = Date.now();

    next()
}

export function logger(req, res, next){
    console.log(colors.bgGreen.white.bold(`request_time: ${req.requestTime}`));

    next()
}

export function kv(n) {
    return n * n
}