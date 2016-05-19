function MscomInit() {
    MscomsetEvents(), wcsAfPV = window.varAutoFirePV != undefined ? window.varAutoFirePV : 1, wcsCDFpc = window.varDisableServerFPC != undefined ? window.varDisableServerFPC : 0, wcsEFpc == 1 && wcsCDFpc == 0 ? MscomProvisionFPC() : wcsAfPV == 1 && MscomSendPageView(0), wcsMUIDset != 1 && MscomGetMUID(0)
}

function MscomProvisionFPC() {
    var i = MscomGetCookieKeyValue(wcsFpcC, "CS"),
        n, t;
    i == null || i == "0" ? (n = document.head || document.getElementsByTagName("head")[0] || document.documentElement, t = document.createElement("script"), t.src = window.location.protocol + wcsFPCUrl, n.insertBefore(t, n.firstChild), wcsPVsFpc != 1 && wcsAfPV == 1 && MscomSendPageView(0)) : wcsAfPV == 1 && MscomSendPageView(0)
}

function MscomSetFPC(n) {
    var f, o, e, i, r, u, t;
    wcsFpcSet = 1;
    try {
        n != null ? f = new String("ID=" + n.ID + "&CS=" + n.CS + "&LV=" + n.LV + "&V=" + n.V).toString() : (e = new Date, o = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(n) {
            var t = Math.random() * 16 | 0,
                i = n == "x" ? t : t & 3 | 8;
            return i.toString(16)
        }), i = e.getMonth() + 1, f = new String("ID=" + o + "&CS=0&LV=" + e.getFullYear() + (/[\d]{2}/.test(i.toString()) ? i : "0" + i))), r = "", u = document.location.hostname, u != null && (t = u.split("."), r = t.length >= 2 ? t[t.length - 2] + "." + t[t.length - 1] : u), expireDate = new Date((new Date).getTime() + 63072e6), document.cookie = wcsFpcC + "=" + f + "; expires= " + expireDate.toUTCString() + "; path=/" + (r != "" ? "; domain=" + r : "")
    } catch (s) {}
    wcsPVsFpc == 1 && wcsAfPV == 1 && MscomSendPageView(0)
}

function MscomGetFPC() {
    var n = MscomGetCookie(wcsFpcC);
    n == null && wcsFpcSet == 0 && (MscomSetFPC(null), n = MscomGetCookie(wcsFpcC)), wcs["wcs.fpc"] = n != null ? escape(n) : ""
}

function MscomGetClientCookies() {
    var r = "",
        u = [],
        n = wcsccks,
        t, i;
    try {
        try {
            window.varCustomerCookies != undefined && window.varCustomerCookies.length > 0 && (n = n.concat(window.varCustomerCookies))
        } catch (f) {}
        for (t in n) u.hasOwnProperty(n[t]) || (u[n[t]] = "", i = decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(n[t]).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")), i != "" && (r += n[t] + "=" + MscomEncode(i) + ";"))
    } catch (f) {}
    wcs["wcs.cks"] = r
}

function MscomGetCookieKeyValue(n, t) {
    var f = MscomGetCookie(n),
        r, i, u;
    if (f != undefined)
        for (r = f.split("&"), i = 0; i < r.length; i++)
            if (u = r[i].split("="), t == u[0]) return u[1];
    return null
}

function MscomGetCookie(n) {
    var r = document.cookie.split("; "),
        t, u;
    for (i = 0; i < r.length; i++)
        if (t = r[i].split("="), u = Mscomdecode(t.shift()), u == n) return Mscomdecode(t.join("="));
    return null
}

function MscomSendPageView(n) {
    MscomResetArrays(), MscomSetSharedData(0), wcs["wcs.et"] = 0, MscomBeacon(), n != undefined && n != 0 && wcsMUIDset != 1 && MscomGetMUID(0)
}

function MscomCustomEvent() {
    var f, i, r, t, n, u;
    try {
        for (MscomResetArrays(), MscomSetSharedData(5), wcs["wcs.et"] = 1, f = arguments.length, i = 0; i < f;) r = arguments[i].toString().toLowerCase(), u = r.indexOf("="), u >= 0 ? (n = unescape(r.substring(0, u)), t = unescape(r.substring(u + 1, r.length)), t = t == undefined ? "" : t, wcsOrPms.indexOf("," + n.toLowerCase() + ",") >= 0 ? (wcs["wcs." + n.toLowerCase()] = t == undefined ? "" : t, i = i + 1) : (n.indexOf("ms.") == 0 ? ms[n] = t : na[n] = t, i = i + 1)) : (n = arguments[i].toString(), t = arguments[i + 1] == undefined ? "" : arguments[i + 1].toString(), n.indexOf("wcs.") == 0 ? wcs[n.toLowerCase()] = t : n.indexOf("ms.") == 0 ? ms[n] = t : wcsOrPms.indexOf("," + n.toLowerCase() + ",") >= 0 ? wcs["wcs." + n.toLowerCase()] = t : na[n] = t, i = i + 2);
        MscomBeacon()
    } catch (e) {}
}

function MscomProcessClick(n) {
    var e, t, i, c, u, o, h, f, s, r, l;
    MscomResetArrays(), wcs["wcs.et"] = 2;
    try {
        if (e = n || window.event, e)
            for (t = e.srcElement || e.target; t.tagName && MscomIsInList(t.tagName) == 0;) t = t.parentElement || t.parentNode;
        if (i = 0, t && t.tagName) switch (t.tagName) {
            case "A":
                MscomSetSharedData(1), MscomReadAllTags(t), i = MscomIsPII(t), i == 0 && (c = document.all ? t.innerText || t.innerHTML : t.text || t.innerHTML, wcs["wcs.cn"] = c, wcs["wcs.cid"] = MscomGetId(t), wcs["wcs.ct"] = t.href ? t.href : ""), MscomBeacon();
                break;
            case "IMG":
                MscomSetSharedData(2), MscomReadAllTags(t), i = MscomIsPII(t), i == 0 && (wcs["wcs.cn"] = t.alt ? t.alt : "", wcs["wcs.cid"] = MscomGetId(t), wcs["wcs.ct"] = MscomGetImageHREF(t)), MscomBeacon();
                break;
            case "AREA":
                MscomSetSharedData(3), MscomReadAllTags(t), i = MscomIsPII(t), i == 0 && (wcs["wcs.cn"] = t.alt ? t.alt : "", wcs["wcs.cid"] = MscomGetId(t), wcs["wcs.ct"] = t.href ? t.href : ""), MscomBeacon();
                break;
            case "INPUT":
                if (MscomSetSharedData(4), MscomReadAllTags(t), u = t.type || "", o = "", u && (u == "button" || u == "reset" || u == "submit" || u == "image") || u == "text" && (e.which || e.keyCode) == 13) {
                    if (h = t.value || t.name || t.alt || t.id, i = MscomIsPII(t), i == 0 && (wcs["wcs.cn"] = h ? h : "", wcs["wcs.cid"] = MscomGetId(t)), t.form)
                        for (wcs["wcs.ct"] = t.form.action || window.location.pathname, f = t.form.elements, s = 1, r = 0; r < f.length; r++) l = f[r].type, l == "text" && (i = MscomIsPII(f[r]), i == 0 && (o += "&wcs.t" + s + "=" + MscomEncode(f[r].name || f[r].id) + "&wcs.v" + s + "=" + MscomEncode(f[r].value), s++));
                    else wcs["wcs.ct"] = window.location.pathname;
                    wcs["wcs.ctx"] = o != "" ? o : ""
                }
                MscomBeacon()
        }
    } catch (t) {}
}

function MscomBeacon() {
    var t, i, n;
    try {
        t = [], t.push(window.location.protocol + wcsTPUrl), MscomInitMeta(), i = MscomGetStrFromArray(wcs), i.charAt(0) == "&" && (i = i.substring(1)), t.push(i), t.push(MscomGetStrFromArray(ms)), t.push(MscomGetStrFromArray(na)), n = t.join(""), n.length > 2048 ? n = n.substring(0, 2038) + "&wcs.tr=1" : n += "&wcs.tr=0", document.images ? (wcsIAr[wcsIArI] = new Image, wcsIAr[wcsIArI].src = n, wcsIArI++) : document.write('<IMG ALT="" BORDER="0" NAME="bImg" WIDTH="1" HEIGHT="1" SRC="' + n + '"/>')
    } catch (r) {}
}

function MscomGetDebugValues() {
    wcs["wcs.v"] = vs, wcs["wcs.vct"] = window.varCustomerTracking != undefined ? window.varCustomerTracking : "", wcs["wcs.vs"] = window.varSegmentation != undefined ? window.varSegmentation : "", wcs["wcs.vclt"] = window.varClickTracking != undefined ? window.varClickTracking : "", wcs["wcs.vfpv"] = window.varAutoFirePV != undefined ? window.varAutoFirePV : ""
}

function MscomSetTitle() {
    wcs["wcs.ti"] = document.title
}

function MscomSetTimeZoneOffSet() {
    var n = 420,
        t = new Date;
    n = t.getTimezoneOffset(), wcs["wcs.tz"] = n / -60
}

function MscomSetReferrer() {
    var n = document.referrer;
    n != null && n != "" && (wcs["wcs.r"] = n)
}

function MscomSetTimeStamp() {
    var n = new Date,
        t = n.getTime();
    wcs["wcs.ts"] = t.toString()
}

function MscomSetScreenResolution() {
    typeof screen == "object" && (wcs["wcs.sr"] = screen.width + "x" + screen.height)
}

function MscomSetClickStreamFlag() {
    window.varSegmentation != undefined && varSegmentation == 1 && (wcs["wcs.cs"] = "1")
}

function MscomReadAllTags(n) {
    while (n && n != "undefined") MscomReadElementTags(n), n = n.parentElement || n.parentNode
}

function MscomSetCot(n) {
    wcs["wcs.cot"] = n != undefined ? n : ""
}

function MscomSetSharedData(n) {
    MscomSetTimeZoneOffSet(), MscomSetCot(n), MscomSetRouteCtrl(), MscomSetTimeStamp(), MscomGetFPC(), MscomSetReferrer(), MscomSetCookieDisabledFlag(), MscomSetEventId(), MscomSetScreenResolution(), MscomGetBrowserSize(), MscomGetSilverLightInfo(), MscomGetFlashInfo(), MscomGetCTypeHpInfo(), MscomSetClickStreamFlag(), MscomIsHP(), MscomGetCurrentSD(), MscomGetClientCookies(), MscomSetTitle(), MscomGetDebugValues()
}

function MscomGetCurrentSD() {
    wcs["wcs.rsd"] = window.location.host, wcs["wcs.rsus"] = window.location.pathname != "" ? window.location.pathname : "", wcs["wcs.rsqs"] = window.location.search != "" ? window.location.search + window.location.hash : "", wcs["wcs.rihs"] = window.location.protocol == "https" || window.location.protocol == "https:" ? "1" : "0"
}

function MscomGetFlashInfo() {
    var t, i, n, r;
    if (navigator.plugins["Shockwave Flash"]) wcs["wcs.fi"] = "1", t = navigator.plugins["Shockwave Flash"], wcs["wcs.fv"] = t.description.split(" ")[2];
    else if (navigator.userAgent.indexOf("MSIE") != -1)
        for (i = (new Date).getFullYear() - 1992, n = i; n > 0; n--) try {
            r = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + n), wcs["wcs.fi"] = "1", wcs["wcs.fv"] = n + ".0";
            break
        } catch (u) {}
}

function MscomGetSilverLightInfo() {
    var r, n, t, i;
    window.Silverlight != undefined && (wcs["wcs.se"] = "1");
    try {
        navigator.plugins["Silverlight Plug-In"] ? (r = navigator.plugins["Silverlight Plug-In"], wcs["wcs.si"] = "1", n = r.description, n && n != undefined && (t = n.split("."), n = t[0] + "." + t[1], wcs["wcs.sv"] = n)) : navigator.userAgent.indexOf("MSIE") != -1 && (i = new ActiveXObject("AgControl.AgControl"), i && (wcs["wcs.si"] = "1", wcs["wcs.sv"] = MscomGetSlvVersion(i)))
    } catch (u) {}
}

function MscomInitMeta() {
    var n, i, t, r;
    if (document.all ? n = document.all.tags("meta") : document.documentElement && (n = document.getElementsByTagName("meta")), metaTags = "", typeof n != "undefined")
        for (i = 0; i < n.length; i++) t = n.item(i), t.name && (r = t.name.toLowerCase(), r.indexOf("ms.") == 0 && (ms[t.name] = t.content))
}

function MscomReadElementTags(n) {
    var r, t, i, u;
    if (n && (r = MscomIsPII(n), r == 0))
        for (t in n.attributes) t != undefined && n.attributes[t] != null && n.attributes[t] != undefined && (i = n.attributes[t].name, i != null && i != undefined && (u = i.toLowerCase(), u.indexOf("ms.") == 0 && (ms[i] = n.attributes[t].value)));
    return ""
}

function MscomSetEventId() {
    wcs["wcs.eid"] = GenerateGuid()
}

function MscomGetBrowserSize() {
    document.body.clientWidth != undefined ? wcs["wcs.bs"] = document.body.clientWidth + "x" + document.body.clientHeight : document.documentElement && document.documentElement.clientWidth != undefined ? wcs["wcs.bs"] = document.documentElement.clientWidth + "x" + document.documentElement.clientHeight : window.innerWidth != undefined && (wcs["wcs.bs"] = window.innerWidth + "x" + window.innerHeight)
}

function MscomSetRouteCtrl() {
    wcs["wcs.route"] = window.Route != undefined ? window.Route : "", wcs["wcs.ctrl"] = window.Ctrl != undefined ? window.Ctrl : ""
}

function MscomGetCTypeHpInfo() {
    try {
        document.body && document.body.addBehavior && (document.body.addBehavior("#default#clientCaps"), document.body.connectionType && (wcs["wcs.cnt"] = document.body.connectionType))
    } catch (n) {}
}

function MscomIsHP() {
    try {
        document.body && document.body.addBehavior && (document.body.addBehavior("#default#homePage"), wcs["wcs.hp"] = document.body.isHomePage(location.href) ? "1" : "0")
    } catch (n) {}
}

function MscomSetCookieDisabledFlag() {
    var i = "",
        n = "MC0",
        t = document.cookie.indexOf(n + "="),
        r, u;
    if (t == -1) {
        if (MscomSetTimeStamp(), wcsSId = wcs["wcs.ts"], wcs["wcs.cd"] == 1) return;
        i = n + "=" + wcsSId
    } else r = t + n.length + 1, u = document.cookie.length, i = n + "=" + document.cookie.substring(r, u);
    document.cookie = i, t = document.cookie.indexOf(n + "="), wcs["wcs.cd"] = t == -1 ? 1 : 0
}

function GuidPart() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1)
}

function GenerateGuid() {
    return GuidPart() + GuidPart() + "-" + GuidPart() + "-" + GuidPart() + "-" + GuidPart() + "-" + GuidPart() + GuidPart() + GuidPart()
}

function MscomGetSlvVersion(n) {
    for (var t = "", u = (new Date).getYear() - 2004, r, i = u; i > 0; i--)
        for (r = 9; r >= 0; r--)
            if (t = i + "." + r, n.IsVersionSupported(t)) return t;
    return t
}

function Mscomdebug() {
    window.alert(arguments[0])
}

function MscomGetId(n) {
    return n ? n.id == undefined ? "" : n.id : ""
}

function MscomGetImageHREF(n) {
    var t = n;
    if (n) {
        if (n = n.parentElement || n.parentNode, n && n.tagName == "A") return n.href ? n.href : "";
        if (t && t.src) return t.src
    }
    return ""
}

function MscomIsInList(n) {
    for (var t in wedcsCE)
        if (wedcsCE[t] == n.toUpperCase()) return 1;
    return 0
}

function MscomsetEvents() {
    if (window.varClickTracking != undefined && varClickTracking == 1 && document.body)
        if (document.body.addEventListener) {
            var n = navigator.appVersion.indexOf("MSIE") != -1 ? "click" : "mousedown";
            document.body.addEventListener(n, window.MscomProcessClick, 0)
        } else document.body.attachEvent && document.body.attachEvent("onclick", window.MscomProcessClick)
}

function MscomGetMUID(n) {
    if (wcsMUIDset == 1 && n == 1) {
        MscomBeacon();
        return
    }
    if (window.varCustomerTracking != undefined && varCustomerTracking == 1) try {
        var t = window.location.protocol + "//c1.microsoft.com/c.gif?DI=4050&did=1&t=";
        n == 1 ? document.write('<iframe id="_msnFrame" src="' + t + '" style="z-index:-1;height:1px;width:1px;display:none;visibility:hidden;" onload="javascript:MscomBeacon();"><\/iframe>') : document.write('<iframe id="_msnFrame" src="' + t + '" style="z-index:-1;height:1px;width:1px;display:none;visibility:hidden;"><\/iframe>'), wcsMUIDset = 1
    } catch (i) {
        wcsMUIDset = 0
    } else n == 1 && MscomBeacon()
}

function MscomEncode(n) {
    return typeof encodeURIComponent == "function" ? encodeURIComponent(n) : escape(n)
}

function Mscomdecode(n) {
    var t = decodeURIComponent(n.replace("/+/g", " "));
    return t.indexOf('"') == 0 && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")), t
}

function MscomGetStrFromArray(n) {
    var i = "",
        t;
    for (t in n) n.hasOwnProperty(t) && (i += n[t] != undefined ? "&" + MscomEncode(t) + "=" + MscomEncode(n[t]) : "&" + MscomEncode(t) + "=");
    return i
}

function MscomResetArrays() {
    wcs = [], na = [], ms = []
}

function MscomIsPII(n) {
    try {
        var t = n.getAttribute("data-dc");
        return t != null && t != undefined ? t.toLowerCase() == "pii" ? 1 : 0 : 0
    } catch (i) {
        return 0
    }
}
var wcsIAr = [],
    wcsIArI = 0,
    wedcsCE = ["A", "IMG", "AREA", "INPUT"],
    wcsTPUrl = "//c.microsoft.com/trans_pixel.aspx?",
    wcsPVsFpc = 0,
    wcsEFpc = 1,
    wcsCDFpc = 0,
    wcsFpcC = "MSFPC",
    wcsFpcSet = 0,
    wcsFPCUrl = "//cs.microsoft.com/getid.js?jsoncb=MscomSetFPC",
    wcsAfPV = 0,
    wcsMUIDset = 0,
    wcsOrPms = ",sr,bs,ts,tz,ctrl,route,ti,si,se,sv,fi,fv,cid,tr,cn,ct,cot,cs,cnt,hp,cd,rsd,rsus,rsqs,rihs,r,pkey,",
    wcsccks = ["ANON"],
    customTags = "",
    clickInfo = "",
    customInfo = "",
    wcs = [],
    na = [],
    ms = [],
    vs = 4;
MscomInit()