//.CommonJS
var Ivan = {};
///CommonJS

Ivan.filter = {}

/**
 * 素描
 * @param  {Object} imgData  
 * @param  {Number} radius 取样区域半径, 正数, 可选, 默认为 3.0
 * @param  {Number} sigma 标准方差, 可选, 默认取值为 radius / 3
 * @return {Array}
 */
Ivan.filter.sketch =  function (imgData, radius, sigma){
    var pixes = imgData.data,
        width = imgData.width, 
        height = imgData.height,
        copyPixes;

    discolor(pixes);//去色
    canvas.width = width, canvas.height = height;
    //复制一份
    ctx.clearRect(0, 0, width, height);
    ctx.putImageData(imgData, 0, 0);
    copyPixes = ctx.getImageData(0, 0, width, height).data;
    // 拷贝数组太慢
    // copyPixes = Array.prototype.slice.call(pixes, 0);
    invert(copyPixes);//反相
    gaussBlur(copyPixes, width, height, radius, sigma);//高斯模糊
    dodgeColor(pixes, copyPixes);//颜色减淡
    return pixes;
}

//.CommonJS
exports.filter = Ivan.filter;
///CommonJS