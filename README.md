# nidoca-wc-form
Nidoca Form Webcomponent

nidoca http helper classes to fetch data from server.
based on web fetch api https://fetch.spec.whatwg.org/

|project info|
|:-------------|
|[![Published on npm](https://img.shields.io/npm/l/@domoskanonos/nidoca-wc-form)](https://www.npmjs.com/package/@domoskanonos/nidoca-wc-form)|
|[![Published on npm](https://img.shields.io/npm/v/@domoskanonos/nidoca-wc-form)](https://www.npmjs.com/package/@domoskanonos/nidoca-wc-form)|
|[![Published on npm](https://img.shields.io/bundlephobia/min/@domoskanonos/nidoca-wc-form)](https://www.npmjs.com/package/@domoskanonos/nidoca-wc-form)|
|[![Published on npm](https://img.shields.io/bundlephobia/minzip/@domoskanonos/nidoca-wc-form)](https://www.npmjs.com/package/@domoskanonos/nidoca-wc-form)|
|[![Published on npm](https://img.shields.io/npm/dw/@domoskanonos/nidoca-wc-form)](https://www.npmjs.com/package/@domoskanonos/nidoca-wc-form)|
|[![Published on git](https://img.shields.io/github/languages/code-size/domoskanonos/nidoca-wc-form)](https://github.com/domoskanonos/nidoca-wc-form)|

## HttpClientService usage in typescript  
    const httpClientProperties: HttpClientProperties = new HttpClientProperties();  
    httpClientProperties.baseURL = "http://localhost";
    httpClientProperties.port = "8090";
    
    const defaultClientRequest = new HttpClientRequest();
    
    const httpClientService : HttpClientService = 
        new HttpClientService(httpClientProperties, defaultClientRequest),

    const request: HttpClientRequest = httpClientService.getDefaultGetRequestInstance();
    request.path = this.path.concat("/PATH");
    request.requestMethod = HttpClientRequestType.POST;
    request.body = {};
    const response = await this.httpClient.request(request);
    const bodyText: string = await response.text();
    const myResponseBodyObject = JSON.parse(bodyText);
