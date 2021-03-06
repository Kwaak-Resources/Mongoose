
'use strict';
var hl = require('highlight.js')

module.exports = exports = function (jade) {
  // add highlighting filter to jade

  jade.filters.js = function (str) {
    str = str.replace(/\\n/g, '\n');
    var ret = hl.highlight(str, { language: 'javascript' }).value;
    var code = '<pre><code class="javascript">' + ret.replace(/\n/g, '\\n') + '</code></pre>';
    return code;
  }

  jade.filters.bash = function (str) {
    var ret = hl.highlight(str.replace(/\\n/g, '\n'), { language:'bash' }).value;
    var code = '<pre><code class="bash">' + ret + '</code></pre>';
    return  code
  }

}
