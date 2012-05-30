// ==UserScript==
// @name Service-Now.com Refresher
// @namespace ServiceNowRefresh
// @description This will refresh certain pages on Service-Now.com
// @include https://*.service-now.com/incident_list.do*
// @version 2012.05.30
// ==/UserScript==

// ==Settings==
	var RefreshTime = '300'; // Time in seconds
// ==/Settings==

	if(RefreshTime > 0) setTimeout("location.reload(true);",RefreshTime*1000);