for ( k in channels) {
    displayHTML(channels[k])
}

function displayHTML(channel) {
    var streamUrl = generateUrl('streams', channel)
    $.ajax({
        type: "GET",
        cache: false,
        url: streamUrl,
        dataType: "jsonp",
        //jsonp: "callback",
        jsonpCallback: "useData"
    });

    function useData(data) {
        //判断是否在线
        if (data.stream === null) {
            offline(channel);
        } else if (data.stream === undefined) {
            var logo = '';
            var title = channel;
            var statue = 'Closed';
            addList(logo, title, statue);
        } else {
            var logo = data.stream.channel.log;
            var title = data.stream.game;
            var statue = data.stream.channel.statue;
            addList(logo, title, statue);
        }
    }
}

function generateUrl(method, channel) {
    url = 'https://wind-bow.gomix.me/twitch-api/' + method + '/' + channel
    return url
}

function offLine(channel) {
    var channelUrl = generateUrl('channels', channel)
    $.ajax({
        type: "GET",
        cache: false,
        url: channelUrl,
        dataType: "jsonp",
        //jsonp: "callback",
        jsonpCallback: "offData"
    });

    function offData(data) {
        var logo = data.logo;
        var title = data.display_name;
        var statue = 'Offline';
        addList(logo, title, statue);
    }
}

function addList(logo, title, statue) {
    var dom =
        `
        <li>
        <img id='id-logo' src='${logo}'>
        <span id='id-title'>${title}</span>
        <span id='id-statue'>${statue}</span>
        </li>
        `

    $('#id-list').append(dom)
}
