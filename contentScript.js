function getQueryString(URL) {
  if (!URL) {
	URL = location.search;
  }
  else
  {
	var a = document.createElement('a');
	a.href = URL;
	URL = a.search;
  }

  var result = {}, queryString = URL.substring(1),
	  re = /([^&=]+)=([^&]*)/g, m;

  while (m = re.exec(queryString)) {
	result[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
  }

  return result;
}

qsArr = getQueryString();

if(typeof qsArr.from_ts == 'undefined') {
	alert("Available only on dashboard")
} else {
	d = new Date();
	current_unix = d.getTime() - 1000;
	d.setHours(0, 0, 0, 0);
	midnight_unix = d.getTime();

	new_url = window.location.origin + window.location.pathname + '?';

	for(var qs in qsArr) {
		switch (qs) {
			case 'from_ts':
				val = midnight_unix;
				break;
			case 'to_ts':
				val = current_unix;
				break;
			case 'live':
				val = 'false'
				break;
			default:
				val = qsArr[qs]
		}
		new_url += qs + '=' + val + '&'
	}

	//remove the extra & character from the end
	new_url = new_url.slice(0, -1);

	window.location = new_url;

}