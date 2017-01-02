const Utils = {
  xhrRequest : ({_url, _onDone, _onError, _json}) => {
      const xmlhttp = new XMLHttpRequest();
      xmlhttp.responseType = _json ? 'json' : xmlhttp.responseType;
      xmlhttp.onreadystatechange = function() {
          if (xmlhttp.readyState === XMLHttpRequest.DONE ) {
             if (xmlhttp.status === 200) {
                 _onDone(xmlhttp);
             }
             else if (xmlhttp.status === 400) {
                if(typeof _onError === 'function') {
                  _onError(xmlhttp);
                } else {
                  console.error('There was an error 400');
                }
             }
             else {
              if(typeof _onError === 'function') {
                  _onError(xmlhttp);
                } else {
                  console.error('something else other than 200 was returned');
                }
             }
          }
      };

      xmlhttp.open("GET", _url, true);
      xmlhttp.send();
  }
}

export default Utils
export const xhrRequest = Utils.xhrRequest