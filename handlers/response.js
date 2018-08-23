const codeMessage = {
    200: 'OK',
    201: 'Created',
    403: 'Invalid Request',
    404: 'Not Found',
    500: 'Internal Server Error'
}

module.exports  = class Response {
    
    constructor(socket, options) {
        this.socket = socket;
        this.responseData = '';
        this.headers = {
            'Content-Type': 'application/json',
            'Connection': 'Closed'
        };

        for (const header in options) {
            if (options.hasOwnProperty(header) && this.headers[header] != null) {
                this.headers[header] = options[header];
            }
        }
    }

    setResponseCode(code) {
        this.responseData += 'HTTP/1.1 '+code+' '+codeMessage[code]+'\n';
    }

    setHeader(header, value) {
        this.responseData += header+': '+value+'\n';
    }

    setAllHeaders() {
        for (const header in this.headers) {
            if ((this.headers).hasOwnProperty(header)) {
                this.setHeader(header, this.headers[header]);
            }
        }
    }
    send(data, code=200) {
        data = JSON.stringify(data)
        this.setResponseCode(code);
        this.setHeader('Content-Length', data.length);
        this.setAllHeaders();
        this.responseData += '\n';
        this.responseData += data;
        (this.socket).write(this.responseData);
        (this.socket).pipe(this.socket);
    }

    sendError(data, errorCode=500) {
        this.send(data, errorCode);
    }
}