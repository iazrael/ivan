
Ivan('base', function(){
    
    /**
     * 把图像变成黑白色
     * Y = 0.299R + 0.587G + 0.114B
     * @param  {Array} pixes pix array
     * @return {Array}
     * @link {http://www.61ic.com/Article/DaVinci/DM64X/200804/19645.html}
     */
    this.discolor = function (pixes) {
        var grayscale;
        for (var i = 0, len = pixes.length; i < len; i += 4) {
            grayscale = pixes[i] * 0.299 + pixes[i + 1] * 0.587 + pixes[i + 2] * 0.114;
            pixes[i] = pixes[i + 1] = pixes[i + 2] = grayscale;
        }
        return pixes;
    }


    /**
     * 把图片反相, 即将某个颜色换成它的补色
     * @param  {Array} pixes pix array
     * @return {Array}
     */
    this.invert = function (pixes) {
        for (var i = 0, len = pixes.length; i < len; i += 4) {
            pixes[i] = 255 - pixes[i]; //r
            pixes[i + 1] = 255 - pixes[i + 1]; //g
            pixes[i + 2] = 255 - pixes[i + 2]; //b
        }
        return pixes;
    }

    /**
     * 颜色减淡,
     * 结果色 = 基色 + (混合色 * 基色) / (255 - 混合色)
     * @param  {Array} basePixes 基色
     * @param  {Array} mixPixes  混合色
     * @return {Array}
     */
    this.dodgeColor = function (basePixes, mixPixes) {
        for (var i = 0, len = basePixes.length; i < len; i += 4) {
            basePixes[i] = basePixes[i] + (basePixes[i] * mixPixes[i]) / (255 - mixPixes[i]);
            basePixes[i + 1] = basePixes[i + 1] + (basePixes[i + 1] * mixPixes[i + 1]) / (255 - mixPixes[i + 1]);
            basePixes[i + 2] = basePixes[i + 2] + (basePixes[i + 2] * mixPixes[i + 2]) / (255 - mixPixes[i + 2]);
        }
        return basePixes;
    }


});


