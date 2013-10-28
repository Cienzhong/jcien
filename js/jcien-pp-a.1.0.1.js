// VERSION：1.0.1 update 2013.10.25
// 技术来源：http://blog.csdn.net/cienit
/* -------------------------------------------------------------------------------------------
 * 文件：jcien-pp-a.1.0.1.js 
 *
 * 作者：Cien (zhzhi2008@126.com)
 *
 * 说明：弹出层方式浏览相册照片工具封装，可直接调用相应函数体现效果
 * -------------------------------------------------------------------------------------------
 */

// 浏览照片浏览层封装函数
// 直接在点击图片浏览时调用此函数
// 参数：url 即图片的路径（相对or绝对）
function viewPhotoSee(url) {
    var bodyW = $(window).width();
    var bodyH = $(window).height();
    var _pp_size = previewImg(url);
    var _mgW = Number(_pp_size.split(',')[0]);
    var _mgH = Number(_pp_size.split(',')[1]);
    
    /* 原图尺寸大于浏览器窗口尺寸则减去100像素 */
    _mgW = _mgW < bodyW - 50 ? _mgW : bodyW - 100;
    _mgH = _mgH < bodyH - 50 ? _mgH : bodyH - 100;

    var _dvW = _mgW + 50;
    var _dvH = _mgH + 50;
    var x = (bodyW / 2) - (_dvW / 2);
    var y = (bodyH / 2) - (_dvH / 2);

    var html = "<div id='lav_ui_see' style='left:" + x + "px;top:" + y + "px;width:" + _dvW + "px;height:" + _dvH + "px;'>";
    html += "<table width='100%' cellpadding='0' cellspacing='0' border='0'>";
    html += "<tr><td height='25'></td><td></td><td valign='top'><a href='javascript:closeSeeUI();' class='close-lay'></a></td></tr>";
    html += "<tr>";
    html += "<td width='25'></td>";
    html += "<td align='center'>";
    html += "<img id='img_see' src='" + url + "' width='" + _mgW + "' height='" + _mgH + "' />";
    html += "</td>";
    html += "<td width='25'></td>";
    html += "</tr>";
    html += "<tr><td height='25'></td><td></td><td></td></tr>";
    html += "</table>";
    html += "<div class='lay-turn-alert'>";
    html += "<table width='100%' cellpadding='0' cellspacing='0' border='0'>";
    html += "<tr>";
    html += "<td>&nbsp;</td>";
    html += "<td width='80' align='center'>";
    html += "<a href='javascript:turn_img_l();' class='turn-left'></a>";
    html += "<a href='javascript:turn_img_r();' class='turn-right'></a>";
    html += "</td>";
    html += "<td>&nbsp;</td>";
    html += "</tr>";
    html += "</table>";
    html += "</div>";
    html += "</div>";
    $("#lav_ui_see").remove();
    $("body").append(html);
}

/* 获得照片尺寸大小 */
function previewImg(imgFile) {
    var image = new Image();
    image.src = imgFile;
    var w = image.width;
    var h = image.height;
    return w + ',' + h;
}

/* 关闭照片浏览层 */
function closeSeeUI() {
    $("#lav_ui_see").hide();
}

/* 需引用jQueryRotate.2.2.js资源文件 */
var sideval = 0;
function turn_img_l() {
    sideval -= 90;
    $("#img_see").rotate({ animateTo: sideval });
}
function turn_img_r() {
    sideval += 90;
    $("#img_see").rotate({ animateTo: sideval });
}