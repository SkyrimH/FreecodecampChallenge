function permAlone(str) {
    // 匹配重复字符，若匹配出的字符不是空 ，则判断0号索引是否与原字符串相同 ，若相同则该字符串由同一个字符组成
    var reg = /(.)\1+/g;
    if (str.match(reg) !== null && str.match(reg)[0] === str) {
        return 0;
    }
    var arr = str.split('');
    var arrs = [];
    //将两元素值对调
    function swap(array, i, j) {
        var t = array[i];
        array[i] = array[j];
        array[j] = t;
    }
    //全排列递归函数
    function fullArray(array, index) {
        if (index >= array.length) {
            arrs.push(arr.join(''));
        } else {
            for (var i = index; i < array.length; i++) {
                swap(array, i, index);
                fullArray(array, index + 1);
                swap(array, i, index);
            }
        }
    }
    fullArray(arr, 0);

    return arrs.filter(function (str) {
        return str.match(/(.)\1+/g) === null;
    }).length;
}
