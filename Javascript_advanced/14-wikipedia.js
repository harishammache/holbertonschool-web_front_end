function createElement(data) {
    const paragraph = document.createElement('p');
    paragraph.textContent = data;
    document.body.appendChild(paragraph);
  }

  function queryWikipedia(callback) {
    const xml = new XMLHttpRequest();
    const url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';
    
    xml.open('GET', url, true);
    
    xml.onreadystatechange = function() {
      if (xml.readyState === 4 && xml.status === 200) {
        const response = JSON.parse(xml.responseText);
        const pages = response.query.pages;
        const pageId = Object.keys(pages)[0];
        const extract = pages[pageId].extract;
        
        callback(extract);
      }
    };
    
    xml.send();
  }
  queryWikipedia(createElement);