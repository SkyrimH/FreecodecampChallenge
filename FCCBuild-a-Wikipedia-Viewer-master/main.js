var list = [];

//搜索按钮绑定函数
function search() {
    var text = $('#id-input')[0].value
    if (text !== '') {
        var url = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=" + text;
        getData(url)
    }
}

//jsonp跨域ajax
function getData(searchUrl) {
    $.ajax({
        type: "GET",
        cache: false,
        url: searchUrl,
        dataType: "jsonp",
        //jsonp: "callback",
        jsonpCallback: "useData"
    });
}

//api获取JOSN数据处理
function useData(data) {
    list = data.query.pages
    displayResult(list)
}

//添加所有dom至html，for in 遍历list
function displayResult(list) {
    for (key in list) {
        var li = list[key];
        addList(li);
    }
}


function generatDOM(li) {
    var href = 'https://en.wikipedia.org/?curid=' + li.pageid;
    var dom =
    `
    <li>
        <a class="content" href="${href}">
            <h1 id="title">
                ${li.title}
            </h1>
            <p id="extract">
                ${li.extract}
            </p>
        </a>
    </li>
    `
    return dom
}

function addList(li) {
    var dom = generatDOM(li);
    $('#result')[0].insertAdjacentHTML('beforeend', dom)
}

$('#id-search').on('click', search)
