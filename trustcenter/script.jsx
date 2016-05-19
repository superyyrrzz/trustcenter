function getQueryValue(n, t) {
    var r = new RegExp("[\\?&]" + t + "=([^&#]*)", "gi"),
        i = r.exec(n);
    return i == null ? "" : decodeURIComponent(i[1].replace(/\+/g, " "))
}

function getStore(n) {
    var t = "ClosestStore.asmx",
        r, i;
    $(".store-geo[data-GeoStoreLocalServiceURL]").length && (t = $(".store-geo").first().attr("data-GeoStoreLocalServiceURL"));
    i = "POST";
    typeof n != "undefined" && (r = {
        latitude: JSON.stringify(n.coords.latitude),
        longitude: JSON.stringify(n.coords.longitude)
    }, t = t + "ClientGeo", i = "GET");
    $.ajax({
        url: t,
        type: i,
        timeout: 5e3,
        data: r,
        contentType: "application/json; charset=UTF-8",
        dataType: "json",
        error: function() {
            $(".store-geo").remove();
            $(".store-editorial").fadeIn(1e3)
        },
        success: function(n) {
            if (typeof n != "undefined" && typeof n.d != "undefined" && typeof n.d.City != "undefined" && n.d.City != "" && n.d.StoreUrl != "undefined" && n.d.StoreUrl != "") {
                var t = $(".store-geo:first").text();
                $(".store-geo a").html(t + " " + n.d.City);
                $(".store-geo a").attr("href", n.d.StoreUrl);
                $(".store-editorial").remove();
                $(".store-geo").fadeIn(1e3)
            } else $(".store-geo").remove(), $(".store-editorial").fadeIn(1e3)
        }
    })
}

function GetFlashVersion() {
    try {
        return new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
    } catch (n) {
        try {
            if (navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin) return (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
        } catch (n) {}
    }
    return "0,0,0"
}

function showPopup() {
    var n = String($("div.certPopup").height() + 30) + "px",
        t = "+=" + String(-$("div.certPopup").width()) + "px",
        i = "+=" + String(-($("div.certPopup").height() + 30)) + "px";
    $("div.certPopup").css({
        width: "0px",
        height: "0px"
    });
    $("div.certPopup").show();
    $("div.certPopup").animate({
        width: "400px",
        height: n,
        top: i,
        left: t
    })
}

function showPopupAlt(n, t, i) {
    var r = 500,
        u, f;
    $(window).width() < 800 && $(window).width() > 480 && (r = 400);
    var e = String($("div.certPopup").height() + 30) + "px",
        o = "+=" + String(-($("div.certPopup").height() + 30)) + "px";
    t + r > $(document).width() && (u = t + r - $(document).width(), f = String(i - u) + "px", $(".certPopup").css({
        left: f
    }));
    $("div.certPopup").css({
        width: "0px",
        height: "0px"
    });
    $("div.certPopup").show();
    $("div.certPopup").animate({
        width: r + "px",
        height: e,
        top: o
    })
}

function toggleCertIcons(n) {
    var t = ".certImageTable > div:first-of-type div.imageWrapper img." + n + "",
        i = ".certImageTable > div:first-of-type div.imageWrapper img:not(." + n + ")";
    n == "All" && (t = ".certImageTable > div:first-of-type div.imageWrapper img", i = "");
    $(t).parent().show().animate({
        width: "153px",
        height: "154px"
    });
    $(i).parent().animate({
        width: "0px",
        height: "0px"
    }, function() {
        $(this).hide()
    })
}

function getParameterByName(n) {
    n = n.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var i = new RegExp("[\\?&]" + n + "=([^&#]*)"),
        t = i.exec(location.search);
    return t === null ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
}

function displayResourceSummary(n) {
    $("div.certDescription a").attr("target", "_blank");
    $("div.certDescription img.certIcon").show();
    switch (n) {
        case "Actoz Soft Logo":
            $("div.certDescription h1").text("Actoz Soft");
            $("div.certDescription h2").text("Office 365 | Security");
            $("div.certDescription p").text("Worry-free Email Security in the Cloud for Online Gaming Pioneer");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/Actoz_Soft_logo.png?version=fb210197-4700-4486-86e9-e84368338335&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "https://customers.microsoft.com/Pages/CustomerStory.aspx?recid=16145");
            break;
        case "American Water Enterprises Logo":
            $("div.certDescription h1").text("American Water Enterprises");
            $("div.certDescription h2").text("Intune | Security");
            $("div.certDescription p").text("Utility Deploys PC Management Solution to Enhance Security, Improve Productivity");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/AmericanWaterEnterprises_logo.png?version=9640e8a6-c4e6-304e-9bb8-79777893c356&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "https://customers.microsoft.com/Pages/CustomerStory.aspx?recid=13784");
            break;
        case "Catholic District School Board of Eastern Ontario Logo":
            $("div.certDescription h1").text("Catholic District School Board of Eastern Ontario");
            $("div.certDescription h2").text("Intune | Security");
            $("div.certDescription p").text("School District Embraces Student Devices with Cloud-Based Mobile Management Solution");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/CDSBEO_logo.png?version=14f689cc-5d93-2d0d-a040-0afa8a69bd72&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "https://customers.microsoft.com/Pages/CustomerStory.aspx?recid=10511");
            break;
        case "Dartmouth Hitchcock Medical Center Logo":
            $("div.certDescription h1").text("Dartmouth-Hitchcock Medical Center");
            $("div.certDescription h2").text("CRM Online | Compliance (HIPAA)");
            $("div.certDescription p").text("Dartmouth-Hitchcock ushers in a new age of proactive, personalized healthcare using Cortana Analytics Suite");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/DartmouthHitchcockMedicalCenter_logo.png?version=28be94fb-6ea2-a0f1-c200-13bda37b7e50&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "https://customers.microsoft.com/Pages/CustomerStory.aspx?recid=23444");
            break;
        case "Dr Poket Logo":
            $("div.certDescription h1").text("dr Poket");
            $("div.certDescription h2").text("Azure | Security");
            $("div.certDescription p").text("Maximum data security and reliable access to services through Microsoft Azure cloud");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/DrPoket_logo.png?version=621a4fc3-d30b-51c9-481a-0bae003f81bb&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "https://customers.microsoft.com/Pages/CustomerStory.aspx?recid=18813");
            break;
        case "Earth Networks Logo":
            $("div.certDescription h1").text("Earth Networks");
            $("div.certDescription h2").text("Intune | Security");
            $("div.certDescription p").text("Environmental Company Simplifies Endpoint Protection with PC Management Tool");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/Earth_Networks_Logo.png?version=ac11062d-cb15-aded-7b73-d5014f88f7d5&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "https://customers.microsoft.com/Pages/CustomerStory.aspx?recid=13915");
            break;
        case "ePay Policy Logo":
            $("div.certDescription h1").text("ePayPolicy");
            $("div.certDescription h2").text("Azure | Compliance (PCI DSS)");
            $("div.certDescription p").text("ePayPolicy Moves in New Direction with Cloud Services");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/ePayPolicy_Logo.png?version=cb20bb51-9dd8-9e94-ed41-f0d8109c6c09&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "https://customers.microsoft.com/Pages/CustomerStory.aspx?recid=23926");
            break;
        case "Excel Anesthesia Logo":
            $("div.certDescription h1").text("Excel Anesthesia");
            $("div.certDescription h2").text("Office 365 | Compliance (HIPAA)");
            $("div.certDescription p").text("Healthcare Provider Gains Robust, Compliant Email; Avoids 83 Percent of On-Premises Cost");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/ExcelAnesthesia_logo.png?version=1d8aaf9c-de9a-ec44-51ea-735a677af341&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "https://customers.microsoft.com/Pages/CustomerStory.aspx?recid=10127");
            break;
        case "INAIL Logo":
            $("div.certDescription h1").text("INAIL");
            $("div.certDescription h2").text("Intune Azure | Security");
            $("div.certDescription p").text("Nonprofit Uses Cloud-Based Mobility Tools to Help Staff to Improve Worker Health and Safety");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/INAIL_Logo.png?version=686ac57f-a843-ddc1-846c-74d2ddad0af8&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "https://customers.microsoft.com/Pages/CustomerStory.aspx?recid=19459");
            break;
        case "Japan Business Systems Logo":
            $("div.certDescription h1").text("Japan Business Systems");
            $("div.certDescription h2").text("Azure, Intune, Office 365 | Security");
            $("div.certDescription p").text("Systems integrator improves security and active communication through cloud technologies");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/JapanBusinessSystems_logo.png?version=13e4a5d1-a18c-1c97-5590-2bd3fd3ce653&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "https://customers.microsoft.com/Pages/CustomerStory.aspx?recid=22405");
            break;
        case "Red Sea Housing Logo":
            $("div.certDescription h1").text("Red Sea Housing");
            $("div.certDescription h2").text("Office 365 | Security");
            $("div.certDescription p").text("Robust and Secure Communication Platform for Global Expansion");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/RedSeaHousing_logo.png?version=dd76a4b9-1191-911d-327d-780dd5e636c9&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "https://customers.microsoft.com/Pages/CustomerStory.aspx?recid=427");
            break;
        case "San Bernardino County Sheriffs Logo":
            $("div.certDescription h1").text("San Bernardino County Sheriffs Department");
            $("div.certDescription h2").text("Office 365 | Security");
            $("div.certDescription p").text("Sheriff’s Department Enhances Mobility, Improves Public Safety with Cloud Services");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/SanBernardinoCountySheriffs_logo.png?version=49bfcaa0-3bc2-427b-e7de-3d66f7ff22f5&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "https://customers.microsoft.com/Pages/CustomerStory.aspx?recid=2378");
            break;
        case "SD71 Comox Valley Logo":
            $("div.certDescription h1").text("School District No. 71 (Comox Valley)");
            $("div.certDescription h2").text("Office 365 | Privacy");
            $("div.certDescription p").text("School district switches from Google Apps to Office 365 to enhance privacy, streamline IT");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/SD71_ComoxValley_logo.png?version=dbc34746-0f69-8772-b461-c2eb4a6155f9&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "https://customers.microsoft.com/Pages/CustomerStory.aspx?recid=21464");
            break;
        case "Illinois State Department of Correction Logo":
            $("div.certDescription h1").text("State of Illinois Department of Corrections");
            $("div.certDescription h2").text("CRM Online | Security");
            $("div.certDescription p").text("Illinois reforms criminal justice with cloud-based information system");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/StateIllinoisDepartCorrection_logo.png?version=7cbf6c73-3d59-795b-c1dc-77f00701c51b&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "https://customers.microsoft.com/Pages/CustomerStory.aspx?recid=2017");
            break;
        case "Thaicreate Logo":
            $("div.certDescription h1").text("Thaicreate");
            $("div.certDescription h2").text("Azure | Privacy");
            $("div.certDescription p").text("Microsoft Azure IaaS Lowers TCO, Protects Privacy for Leading Thai App-Developer Website");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/Thaicreate_logo.png?version=b5a1281e-14df-e506-d42f-2a93449d784b&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "https://customers.microsoft.com/Pages/CustomerStory.aspx?recid=821");
            break;
        case "UMBRA Global Logo":
            $("div.certDescription h1").text("UMBRA Global");
            $("div.certDescription h2").text("Azure | Compliance (FDA)");
            $("div.certDescription p").text("Healthcare Firm Uses Cloud to Speed Compliance, Go Global, and Boost Revenues by 50 Percent");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/UMBRA_Global_logo.png?version=885a90ca-f321-0d06-4eea-e1213ce45efd&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "https://customers.microsoft.com/Pages/CustomerStory.aspx?recid=8102");
            break;
        case "VIEVU Logo":
            $("div.certDescription h1").text("VIEVU");
            $("div.certDescription h2").text("Azure | Compliance (CJIS)");
            $("div.certDescription p").text("VIEVU Streamlines Body-Worn Camera Use with Highly Secure, Scalable Storage");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/VIEVU_logo.png?version=f850e20b-dedf-ea17-56a6-c8928577839c&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "https://customers.microsoft.com/Pages/CustomerStory.aspx?recid=19942");
            break;
        case "We Make Price Logo":
            $("div.certDescription h1").text("WeMakePrice");
            $("div.certDescription h2").text("Office 365 | Security");
            $("div.certDescription p").text("Korean eRetailer Secures Sensitive Email & Intranet Data with Cloud Services");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/WeMakePrice_logo.png?version=a485f517-c38f-21e4-ab31-18fe81b93546&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "https://customers.microsoft.com/Pages/CustomerStory.aspx?recid=23327");
            break;
        case "A Practical Guide Document Thumbnail":
            $("div.certDescription h1").text("Practical Guide to Designing Secure Health Solutions Using Microsoft Azure");
            $("div.certDescription h2").text("Azure | Compliance");
            $("div.certDescription p").text("(PDF 1 MB)");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/A_PracticalGuideToDesigningSecureHealth_SolutionsUsingMicrosoftAzure_1.png?version=6f574d2a-75df-9666-9998-724d021bb6e9&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "http://aka.ms/azureindustrysecurity");
            break;
        case "Azure Network Security Document Thumbnail":
            $("div.certDescription h1").text("Microsoft Azure Network Security");
            $("div.certDescription h2").text("Azure | Security");
            $("div.certDescription p").text("(PDF 1.4 MB)");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/AzureNetworkSecurity_v3_Feb2015_1.png?version=cc7875a8-5dbd-5aca-c732-4d85466f77d5&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "http://download.microsoft.com/download/C/A/3/CA3FC5C0-ECE0-4F87-BF4B-D74064A00846/AzureNetworkSecurity_v3_Feb2015.pdf");
            break;
        case "Compliance Framework Document Thumbnail":
            $("div.certDescription h1").text("Office 365 Compliance Framework for Industry Standards and Regulations");
            $("div.certDescription h2").text("Office 365 | Compliance");
            $("div.certDescription p").text("(PDF 543 KB)");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/Compliance_Framework_document-1.png?version=645ce3cb-4e3c-2476-e3f8-41d0f882db2c&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "http://go.microsoft.com/fwlink/p/?LinkId=615657");
            break;
        case "EOP Defense Document Thumbnail":
            $("div.certDescription h1").text("Protecting email with Microsoft Exchange Online Protection (EOP)");
            $("div.certDescription h2").text("Office 365 | Security");
            $("div.certDescription p").text("(PDF 313 KB)");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/EOP_DefenseInDepthWhitePaper_1.png?version=444398a0-449a-7ffb-7b2f-3c26a91eb0ce&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "http://go.microsoft.com/fwlink/p/?LinkID=517846");
            break;
        case "Health Cloud White Paper Thumbnail":
            $("div.certDescription h1").text("Addressing HIPAA Requirements in Office 365");
            $("div.certDescription h2").text("Office 365 | Compliance");
            $("div.certDescription p").text("(PDF 1 MB)");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/Health_Cloud_White_Paper_1.png?version=db934de4-744c-f191-abe6-7d94f930966c&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "http://go.microsoft.com/fwlink/p/?LinkID=401406");
            break;
        case "Information Security Management Document Thumbnail":
            $("div.certDescription h1").text("Information Security Management for Microsoft’s Cloud Infrastructure");
            $("div.certDescription h2").text("Office 365 | Compliance");
            $("div.certDescription p").text("(PDF 1.3 MB)");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/Information_Security_Management_System_for_Microsofts_Cloud_Infrastructure_1.png?version=22073ebc-c102-15bd-b2a8-f90c4be6ee0b&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "http://download.microsoft.com/download/A/0/3/A03FD8F0-6106-4E64-BB26-13C87203A763/Information_Security_Management_System_for_Microsofts_Cloud_Infrastructure.pdf");
            break;
        case "Intune Privacy and Data Protection Document Thumbnail":
            $("div.certDescription h1").text("Intune Privacy and Data Protection");
            $("div.certDescription h2").text("Intune | Privacy");
            $("div.certDescription p").text("(PDF 700 KB)");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/Intune_Privacy_and_Data_Protection_Overview_1.png?version=e378346c-a4ec-ab96-2a9a-bff12e72d167&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "http://download.microsoft.com/download/C/A/B/CAB1F9BF-1C3F-41DB-8994-5B0EA35DD846/Intune_Privacy_and_Data_Protection_Overview.pdf");
            break;
        case "Microsoft Enterprise Cloud Document Thumbnail":
            $("div.certDescription h1").text("Microsoft Enterprise Cloud Red Teaming");
            $("div.certDescription h2").text("Security");
            $("div.certDescription p").text("(PDF 1 MB)");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/Microsoft_Enterprise_Cloud_Red_Teaming_1.png?version=0a3a2f1c-f1de-27ac-aed8-eca7ca6d9658&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "http://go.microsoft.com/fwlink/?linkid=518599&clcid=0x409");
            break;
        case "Microsoft Azure Data Protection Document Thumbnail":
            $("div.certDescription h1").text("Data Protection in Azure");
            $("div.certDescription h2").text("Azure | Privacy");
            $("div.certDescription p").text("(PDF 1.5 MB)");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/MicrosoftAzureDataProtection_Aug2014_1.png?version=a5cb1856-86ea-fba7-28de-25a7f590ac4f&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "http://go.microsoft.com/fwlink/?linkid=398382&clcid=0x409");
            break;
        case "Microsoft EOA Whitepaper Document Thumbnail":
            $("div.certDescription h1").text("Microsoft Exchange Online Archiving, Retention & Compliance");
            $("div.certDescription h2").text("Office 365 | Privacy");
            $("div.certDescription p").text("(DOC 100 KB)");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/MicrosoftEOA_WhitePaper.png?version=304ea261-c0ea-89f7-dca5-53ee5e80643c&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "http://download.microsoft.com/download/4/4/6/44627FA1-F9C8-4200-9A70-7F2456CF0237/Microsoft%20EOA%20White%20Paper.docx");
            break;
        case "Office 365 Mapping of CSA Document Thumbnail":
            $("div.certDescription h1").text("Office 365 mapping of CSA Cloud Control Matrix");
            $("div.certDescription h2").text("Office 365 | Compliance");
            $("div.certDescription p").text("(PDF 4 MB)");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/Office365MappingOfCSA_SecurityComplianceAndPrivacyCloud_Control_MatrixRequirements_FINALv2final_final_1.png?version=e03addb4-72e5-4d30-40c7-c611463a23c3&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "http://go.microsoft.com/fwlink/p/?LinkId=517027");
            break;
        case "Operationl Security for Online Services Document Thumbnail":
            $("div.certDescription h1").text("Operational Security for Online Services Overview");
            $("div.certDescription h2").text("Security");
            $("div.certDescription p").text("(PDF 600 KB)");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/OperationalSecurityForOnlineServicesOverview_1.png?version=5b29f6a9-d54d-4a89-ee0c-d55d69ebb371&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "http://www.microsoft.com/en-us/download/confirmation.aspx?id=40872");
            break;
        case "Privacy in the Public Cloud Document Thumbnail":
            $("div.certDescription h1").text("Office 365 Privacy white paper");
            $("div.certDescription h2").text("Office 365 | Privacy");
            $("div.certDescription p").text("(PDF 1 MB)");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/Privacy_in_the_Public_Cloud_12_12_11_FinalStandard_1.png?version=fc6a4f01-b91c-b042-147a-a56889055547&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "http://go.microsoft.com/fwlink/p/?LinkId=517025");
            break;
        case "Protecting Data and Privacy in the Cloud Document Thumbnail":
            $("div.certDescription h1").text("Protecting Data and Privacy in the Cloud ");
            $("div.certDescription h2").text("Privacy");
            $("div.certDescription p").text("(PDF 800 KB)");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/Protecting_DataAndPrivacyInTheCloud_1.png?version=06571c0d-5eb1-7533-d24e-f4e7f0b223e7&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "http://go.microsoft.com/fwlink/p/?LinkId=401092");
            break;
        case "Securing Microsoft Cloud Strategy Document Thumbnail":
            $("div.certDescription h1").text("Securing the Microsoft Cloud Strategy Brief");
            $("div.certDescription h2").text("Security");
            $("div.certDescription p").text("(PDF 2.9 MB)");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/Securing_Microsoft_Cloud_Strategy_Brief_1.png?version=3dc9facf-6d27-1f1b-9583-039cdd5a9c36&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "http://download.microsoft.com/download/D/5/E/D5E0E59E-B8BC-4D08-B222-8BE36B233508/Securing_Microsoft_Cloud_Strategy_Brief_.pdf");
            break;
        case "Security Best Practices Document Thumbnail":
            $("div.certDescription h1").text("Security Best Practices for Developing Azure Solutions");
            $("div.certDescription h2").text("Azure | Security");
            $("div.certDescription p").text("(DOC 400 KB)");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/SecurityBestPracticesForWindowsAzureSolutionsFeb2014_1.png?version=799c1e10-0a83-93ec-cda9-ba3ddde5b44a&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "http://download.microsoft.com/download/7/8/A/78AB795A-8A5B-48B0-9422-FDDEEE8F70C1/SecurityBestPracticesForWindowsAzureSolutionsFeb2014.docx");
            break;
        case "Security In Office 365 Whitepaper Document Thumbnail":
            $("div.certDescription h1").text("Office 365 Security white paper");
            $("div.certDescription h2").text("Office 365 | Security");
            $("div.certDescription p").text("");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/SecurityInOffice365Whitepaper_1.png?version=86e9edbd-343f-5b58-f579-dee9ec305082&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "http://go.microsoft.com/fwlink/p/?LinkId=401240");
            break;
        case "Security in the Cloud Document Thumbnail":
            $("div.certDescription h1").text("Cloud basics: Security in the cloud");
            $("div.certDescription h2").text("Security");
            $("div.certDescription p").text("(PDF, 300 KB)");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/SecurityInTheCloud_1.png?version=e6aedb2a-411c-3e99-b9ce-f8ce84a4e903&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "http://download.microsoft.com/download/3/8/6/386B1BC8-EF25-444A-A0BD-339931F97753/SecurityInTheCloud.pdf");
            break;
        case "Customer Controls For Information Protection Whitepaper Thumbnail":
            $("div.certDescription h1").text("Customer controls for information protection");
            $("div.certDescription h2").text("Office 365 | Security");
            $("div.certDescription p").text("(PDF 1.5 MB)");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/Whitepaper_CustomerControlsForInformationProtectionInOffice365.png?version=21351544-0723-b162-396c-4dfc2dab1a37&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "http://go.microsoft.com/fwlink/p/?LinkID=404234");
            break;
        case "Windows Azure Security Privacy Compliance Document Thumbnail":
            $("div.certDescription h1").text("Security, Privacy, and Compliance in Microsoft Azure");
            $("div.certDescription h2").text("Azure | Security");
            $("div.certDescription p").text("(PDF 1.6 MB)");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/WindowsAzure_SecurityPrivacyCompliance_1.png?version=f9f76d12-6426-1562-78f2-37bf24621a91&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "http://download.microsoft.com/download/1/6/0/160216AA-8445-480B-B60F-5C8EC8067FCA/WindowsAzure-SecurityPrivacyCompliance.pdf");
            break;
        case "CDSA Compliance Backgrounder Thumbnail":
            $("div.certDescription h1").text("Content Delivery & Security Association (CDSA) Content Protection & Security (CPS) Standard Backgrounder");
            $("div.certDescription h2").text("");
            $("div.certDescription p").text("(PDF 1 MB)");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/CDSA_Compliance_Backgrounder.png?version=a8e8a167-221f-b64b-e238-3301119c874b&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "http://download.microsoft.com/download/2/6/3/263C244E-20A8-41B1-B2DA-2835E30CE92E/CDSA_Compliance_Backgrounder.pdf");
            break;
        case "CJIS Compliance Backgrounder Thumbnail":
            $("div.certDescription h1").text("Criminal Justice Information Services (CJIS) Security Policy Version 5.3 Backgrounder");
            $("div.certDescription h2").text("");
            $("div.certDescription p").text("(PDF 1 MB)");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/CJIS_Compliance_Backgrounder.png?version=7045439c-2084-0d01-1992-196392fec58e&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "http://download.microsoft.com/download/F/6/4/F64F6FA0-9895-48A6-80F0-7074E43AA4A6/DISA _Compliance_Backgrounder.pdf");
            break;
        case "DISA Compliance Backgrounder Thumbnail":
            $("div.certDescription h1").text("Defense Information Systems Agency (DISA) Impact Level 2 PA Backgrounder ");
            $("div.certDescription h2").text("");
            $("div.certDescription p").text("(PDF 1 MB)");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/DISA_Compliance_Backgrounder.png?version=5835b04a-5229-84b8-a5a0-21f918d1796d&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "http://download.microsoft.com/download/F/6/4/F64F6FA0-9895-48A6-80F0-7074E43AA4A6/DISA%20_Compliance_Backgrounder.pdf");
            break;
        case "EU Model Clauses Compliance Backgrounder Thumbnail":
            $("div.certDescription h1").text("European Union Model Clauses Backgrounder ");
            $("div.certDescription h2").text("");
            $("div.certDescription p").text("(PDF 1 MB)");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/EU_Model_Clauses_Compliance_Backgrounder-1.png?version=215763ce-83fe-1d47-6b62-d57331635304&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "http://download.microsoft.com/download/E/5/F/E5FA8D11-07A4-4496-82B3-0BCFABAA2FB7/EU_Model_Clauses_Compliance_Backgrounder.pdf");
            break;
        case "FDA Compliance Backgrounder Thumbnail":
            $("div.certDescription h1").text("Food and Drug Administration (FDA) Title 21 CFR Part 11 Backgrounder");
            $("div.certDescription h2").text("");
            $("div.certDescription p").text("(PDF 1 MB)");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/FDA_Compliance_Backgrounder.png?version=28f9a936-e218-99ad-75a2-c47b86f73511&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "http://download.microsoft.com/download/8/8/D/88DA8B65-8CEE-46A5-8E93-DAFC3699AD06/FDA_Compliance_Backgrounder.pdf");
            break;
        case "FERPA Compliance Backgrounder Thumbnail":
            $("div.certDescription h1").text("Family Educational Rights and Privacy Act (FERPA) Backgrounder ");
            $("div.certDescription h2").text("");
            $("div.certDescription p").text("(PDF 1 MB)");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/FERPA_Compliance_Backgrounder.png?version=1187100e-a6b9-2978-6041-7009429a8b3a&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "http://download.microsoft.com/download/2/8/3/2839FB21-353E-472E-BE57-883EC9C6185F/FERPA_Compliance_Backgrounder.pdf");
            break;
        case "FIPS Compliance Backgrounder Thumbnail":
            $("div.certDescription h1").text("Federal Information Processing Standard (FIPS) Publication 140-2  Backgrounder");
            $("div.certDescription h2").text("");
            $("div.certDescription p").text("(PDF 1 MB)");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/FIPS_Compliance_Backgrounder-1.png?version=1a4c40d9-4e66-35d5-fc05-5063e4272d2d&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "http://download.microsoft.com/download/B/7/2/B7226B91-1A56-41E4-AC01-43FCFEE50B7F/FIPS_Compliance_Backgrounder.PDF");
            break;
        case "FISC Compliance Backgrounder Thumbnail":
            $("div.certDescription h1").text("Center for Financial Industry Information Systems (FISC) Japan Backgrounder");
            $("div.certDescription h2").text("");
            $("div.certDescription p").text("(PDF 1 MB)");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/FISC_Compliance_Backgrounder.png?version=1a85e25a-5772-169b-7ddc-8715156c0441&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "http://download.microsoft.com/download/9/1/D/91D74F03-AA26-4D22-AB99-576FE9F88B58/FISC_Compliance_Backgrounder.pdf");
            break;
        case "HIPAA Compliance Backgrounder Thumbnail":
            $("div.certDescription h1").text("Health Insurance Portability and Accountability Act (HIPAA) Backgrounder");
            $("div.certDescription h2").text("");
            $("div.certDescription p").text("(PDF 1 MB)");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/HIPAA_Compliance_Backgrounder.png?version=1944d1eb-3e6a-740d-655f-b08bc25c6ff3&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "http://download.microsoft.com/download/4/6/B/46BB3C98-AE2B-42C1-A2CD-F7C0040FB6B8/HIPAA _Compliance_Backgrounder.pdf");
            break;
        case "IRAP CCSL Compliance Backgrounder Thumbnail":
            $("div.certDescription h1").text("Australian Government Certified Cloud Services LIst (CCSL) Backgrounder");
            $("div.certDescription h2").text("");
            $("div.certDescription p").text("(PDF 1 MB)");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/IRAP_CCSL_Compliance_Backgrounder.png?version=ea0a5b70-4b35-bc1f-dbe6-c27d462dfdb7&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "http://download.microsoft.com/download/9/9/C/99CF1E4A-510C-45FD-9819-B81E1CDFC3C3/IRAP_CCSL_Compliance_Backgrounder.pdf");
            break;
        case "ISOIEC 27001 Compliance Backgrounder Thumbnail":
            $("div.certDescription h1").text("ISO/IEC 27001:2013 Information Security Management Standards Backgrounder");
            $("div.certDescription h2").text("");
            $("div.certDescription p").text("(PDF 1 MB)");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/ISOIEC_27001_Compliance_Backgrounder.png?version=842c2ba4-e093-6cee-248d-98ed0a696e7c&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "http://download.microsoft.com/download/1/2/9/12926039-8F90-4BAF-AC8F-7124D48F400B/ISOIEC_27001_Compliance_Backgrounder.pdf");
            break;
        case "ISOIEC 27018 Compliance Backgrounder Thumbnail":
            $("div.certDescription h1").text("ISO/IEC 27018 Code of Practice for Protecting Personal Data in the Cloud Backgrounder");
            $("div.certDescription h2").text("");
            $("div.certDescription p").text("(PDF 1 MB)");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/ISOIEC_27018_Compliance_Backgrounder.png?version=d264e629-9607-1bfe-2f08-1e487125e98a&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "http://download.microsoft.com/download/F/D/A/FDA4697E-D72D-4513-8626-A5F294DC7A0F/ISOIEC_27018_Compliance_Backgrounder.pdf");
            break;
        case "MCTS Compliance Backgrounder Thumbnail":
            $("div.certDescription h1").text("Multi-Tier Cloud Security Standard (MTCS) for Singapore Backgrounder");
            $("div.certDescription h2").text("");
            $("div.certDescription p").text("(PDF 1 MB)");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/MCTS_Compliance_Backgrounder.png?version=4f203eb5-b7ad-683a-241f-2581c089211c&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "http://download.microsoft.com/download/3/1/A/31AA4618-A5AE-4013-832B-C7A23CEBC26E/MCTS_Compliance_Backgrounder.pdf");
            break;
        case "NZ CC Compliance Backgrounder Thumbnail":
            $("div.certDescription h1").text("New Zealand (NZ) Government Cloud Computing Security and Privacy Considerations Backgrounder");
            $("div.certDescription h2").text("");
            $("div.certDescription p").text("(PDF 1 MB)");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/NZ_CC_Compliance_Backgrounder.png?version=89c3f272-5dec-b5c2-fecd-bb448f422382&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "http://download.microsoft.com/download/6/6/4/664E4B6F-15C6-421E-8F74-3FA468587A47/NZ_CC_Compliance_Backgrounder.pdf");
            break;
        case "PCI DSS Complinace Backgrounder Thumbnail":
            $("div.certDescription h1").text("Payment Card Industry (PCI) Data Security Standards (DSS) Level 1 Backgrounder");
            $("div.certDescription h2").text("");
            $("div.certDescription p").text("(PDF 1 MB)");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/PCI_DSS_Complinace_Backgrounder.png?version=f8c5ea09-ce56-63ef-aa44-80e119a42524&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "http://download.microsoft.com/download/3/7/7/377F1BBC-37D5-4677-AB4A-7C01D089CA67/PCI_DSS_Complinace_Backgrounder.pdf");
            break;
        case "Section 508 Compliance Backgrounder Thumbnail":
            $("div.certDescription h1").text("US Rehabilitation Act Section 508 VPATs Backgrounder ");
            $("div.certDescription h2").text("");
            $("div.certDescription p").text("(PDF 1 MB)");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/Section_508_Compliance_Backgrounder.png?version=25512a22-5df9-ba39-e78d-2ca71cf055de&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "http://download.microsoft.com/download/D/0/8/D08708F0-D05E-472C-A5FD-1E8011410091/Section_508_Compliance_Backgrounder.pdf");
            break;
        case "SOC 1 and 2 Compliance Backgrounder Thumbnail":
            $("div.certDescription h1").text("SOC 1 and SOC 2 Type 2 Reports Backgrounder");
            $("div.certDescription h2").text("");
            $("div.certDescription p").text("(PDF 1 MB)");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/SOC_1_and_2_Compliance_Backgrounder.png?version=aa9cba79-697e-e594-6068-213581c8c02f&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "http://download.microsoft.com/download/C/D/1/CD1D95BB-E009-47D2-9BD3-911D9F0C1DC0/SOC_1_and_2_Compliance_Backgrounder.pdf");
            break;
        case "UK GCloud Compliance Backgrounder Thumbnail":
            $("div.certDescription h1").text("United Kingdom G-Cloud v6 OFFICIAL Backgrounder");
            $("div.certDescription h2").text("");
            $("div.certDescription p").text("(PDF 1 MB)");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/UK_GCloud_Compliance_Backgrounder-1.png?version=59d3543e-6b1c-efa4-200b-79929b8e8ce2&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "http://download.microsoft.com/download/9/E/0/9E008CC0-6783-4472-B19D-F5B6970DD73A/UK_GCloud_Compliance_Backgrounder.pdf");
            break;
        case "Security Management in Microsoft Azure Document Thumbnail":
            $("div.certDescription h1").text("Security Management in Microsoft Azure");
            $("div.certDescription h2").text("Azure | Security");
            $("div.certDescription p").text("(PDF 1 MB)");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/Security_Management_in_Microsoft_Azure_11062014.png?version=07643152-9d67-96fe-cbec-3cc79ea9eaf2&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "http://download.microsoft.com/download/7/0/E/70E3858E-8764-4233-A00F-49A3C6C3143C/Security_Management_in_Microsoft_Azure-11062014.pdf");
            break;
        case "IRS 1075 Backgrounder Thumbnail":
            $("div.certDescription h1").text("IRS 1075 Backgrounder");
            $("div.certDescription h2").text("Azure, Office 365 | Compliance");
            $("div.certDescription p").text("(PDF 1 MB)");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/IRS1075_Compliance_Backgrounder.png?version=7abca0b7-27de-1c1c-4386-29fccfe6ef2c&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "http://download.microsoft.com/download/D/1/8/D1825AE2-4FDA-4A4B-8D4F-9B7D2976D54A/IRS1075_Compliance_Backgrounder.pdf");
            break;
        case "FedRAMP Compliance Backgrounder Thumbnail":
            $("div.certDescription h1").text("FedRAMP Compliance Backgrounder");
            $("div.certDescription h2").text("Azure, Office 365, CRM Online | Compliance");
            $("div.certDescription p").text("(PDF 1 MB)");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/FedRAMP_Compliance_Backgrounder.png?version=9a984753-3701-2f52-c572-92001f6b88e7&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "http://download.microsoft.com/download/E/F/7/EF7052FD-7EC7-4FD4-9E08-18552E8B9B53/FedRAMP_Compliance_Backgrounder.pdf");
            break;
        case "Windows Azure HIPAA Implementation Guidance Document Thumbnail":
            $("div.certDescription h1").text("Azure HIPAA Implementation Guidance ");
            $("div.certDescription h2").text("Azure | Compliance");
            $("div.certDescription p").text("(PDF 500 KB)");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/WindowsAzureHIPAA_ImplementationGuidance_1.png?version=3bc86625-ac2e-5b2c-0741-3f6ce7a1101f&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "http://download.microsoft.com/download/8/4/8/8483B6A9-1865-4D17-B6F1-5B66D5C29B10/Windows%20Azure%20HIPAA%20Implementation%20Guidance.pdf");
            break;
        case "Windows Azure PCI Guide Thumbnail":
            $("div.certDescription h1").text("Azure Customer PCI Guide");
            $("div.certDescription h2").text("Azure | Compliance");
            $("div.certDescription p").text("(PDF 600 KB)");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/WindowsAzurePCI_GuideJanuary2014_1.png?version=7b1a064a-5b7f-909b-8d75-be1a128095af&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "http://go.microsoft.com/fwlink/?linkid=389876&clcid=0x409");
            break;
        case "Windows Azure Privacy Overview Document Thumbnail":
            $("div.certDescription h1").text("Azure Privacy Overview");
            $("div.certDescription h2").text("Azure | Privacy");
            $("div.certDescription p").text("(PDF 700 KB)");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/WindowsAzurePrivacyOverview_1.png?version=31fd0812-0fc6-d167-666b-a455b954ffa5&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "http://download.microsoft.com/download/7/5/9/759E2283-F517-430E-84AF-0151988C117A/WindowsAzurePrivacyOverview.pdf");
            break;
        case "Building a Trusted Cloud Thumbnail":
            $("div.certDescription h1").text("Building a Trusted Cloud in an Uncertain World");
            $("div.certDescription h2").text("Cloud | Security, Privacy");
            $("div.certDescription p").html("Brad Smith, EVP and General Counsel, shares how Microsoft addresses the geopolitics of technology in today's modern age during the 2015 Worldwide Partner Conference Keynote.<br />Jul. 15, 2015   28 min. 58 sec.");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/Building_a_Trusted_cloud_in_an_uncertain_world.jpg?version=04e7014e-7702-a7b6-1c98-43577950585d&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "https://www.youtube.com/watch?v=RkAwAj1Z9rg");
            break;
        case "Enterprise Perspective Thumbnail":
            $("div.certDescription h1").text("Enterprise Perspectives: Security and Privacy In the Cloud");
            $("div.certDescription h2").text("Cloud | Security, Privacy");
            $("div.certDescription p").html("Microsoft Executive Vice President and General Counsel Brad Smith talks with Enterprise business leader Susan Hauser about security and privacy in the cloud, how this area has evolved over time, and the investments Microsoft is making to ensure customer trust.<br />Sep 28, 2014    4 min. 31 sec. ");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/Enterprise_Perspective-Security_and_Privacy_in_cloud.jpg?version=5eb2e419-1fcc-054e-f066-586138949b7b&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "https://www.youtube.com/watch?v=CptkUvRAJKQ");
            break;
        case "Hierarchial Security Modelling Thumbnail":
            $("div.certDescription h1").text("Hierarchical Security Modelling in Microsoft Dynamics CRM 2015");
            $("div.certDescription h2").text("CRM Online | Security");
            $("div.certDescription p").html("In this short video Brandon Simons shows you new enhancements in Microsoft Dynamics CRM 2015 that make modelling the security needs of your business less challenging and more maintainable.<br />Oct. 13, 2014    4 min. 28 sec.");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/Hierarchical_Security_Modelling_in_Microsoft_Dynamics_CRM_2015.jpg?version=fa3c0abf-c045-711e-703e-4abb8446c2f3&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "https://www.youtube.com/embed/kx5So32DrCo");
            break;
        case "How Does Office 365 Combat Emerging Threats Thumbnail":
            $("div.certDescription h1").text("How Does Office 365 Combat Emerging Threats?");
            $("div.certDescription h2").text("Office 365 | Security");
            $("div.certDescription p").html('In this short video we focus on explaining our "Assume Breach" approach where red and blue teams that are part of the Office 365 engineering team work to anticipate and simulate attacks from real-world adversaries using Tactics, Techniques, and Procedures (TTP). In this video we offer a number of examples of how we may manage this.<br />Nov. 5, 2014   4 min. 36 sec.');
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/How_Does_Office_365_Combat_Emerging_Threats.jpg?version=a2325146-36df-a494-4eac-05fa702cdcf0&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "https://www.youtube.com/watch?v=yxvzAcdXEjY");
            break;
        case "How Does Office 365 Monitor and Safeguard Data Thumbnail":
            $("div.certDescription h1").text("How Does Office 365 Monitor and Safeguard Data?");
            $("div.certDescription h2").text("Office 365 | Security");
            $("div.certDescription p").html("In this video, hear how we explain how we continuously test ourselves to keep your data safe within the service, and how it’s the blue team’s job to find that potential needle in the haystack of activity that may signify anomalous behavior, and to then take action.<br />Oct. 28, 2014   4 min. 41 sec.");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/How_Does_Office_365_Monitor_and_Safeguard_Data.jpg?version=0db130a6-dd9a-5db0-b69d-7c23533d2d2c&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "https://www.youtube.com/watch?v=eT81ENTA8aw");
            break;
        case "Is Your Data Safe Thumbnail":
            $("div.certDescription h1").text("Is Your Data Safe at Rest?");
            $("div.certDescription h2").text("Office 365 | Security");
            $("div.certDescription p").html("Vivek Sharma addresses your questions about the security of your data at rest in the Office 365 service.<br />May 3, 2015   4 min. 57 sec.");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/Is_Your_Data_Safe_at_Rest.jpg?version=079515a6-817c-fb39-d163-4012c8667933&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "https://www.youtube.com/watch?v=S4QqQG8tTSg");
            break;
        case "Mobile Device Management Thumbnail":
            $("div.certDescription h1").text("Mobile Device Management Demo – Microsoft Intune");
            $("div.certDescription h2").text("Intune | Security");
            $("div.certDescription p").html("Watch this mobile device management demo video to learn how to deploy applications, resource access profiles, and security settings across popular device platforms using Microsoft Intune.<br />Feb. 10, 2015     4 min. 32 sec.");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/Mobile_Device_Management_Demo-Microsoft_Intune.jpg?version=02d7ebe1-df93-b4ea-491b-1715d1b9adb6&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "https://www.youtube.com/watch?v=MUnCEPjZreY");
            break;
        case "What Controls Protect Data Thumbnail":
            $("div.certDescription h1").text("What Controls Protect Data in Transit?");
            $("div.certDescription h2").text("Office 365 | Security");
            $("div.certDescription p").html("Hear how we protect your data in transit on two levels. First by encrypting all data in transit at the service level and second, by providing solutions you can use for detection and proactive prevention of the data going out to unintended recipients in the first place.<br />Oct. 9, 2014   5 min. 3 sec.");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/What_Controls_Protect_Data_in_Transit.jpg?version=c9515b14-0a9e-fb4b-8ec4-2adec10fad86&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "https://www.youtube.com/watch?v=apRJhCjgtGA");
            break;
        case "What Does It Mean to Own Your Data Thumbnail":
            $("div.certDescription h1").text("What Does It Mean to Own Your Data?");
            $("div.certDescription h2").text("Office 365 | Privacy");
            $("div.certDescription p").html("See how we’re focused on raising the bar on visibility and control, much beyond what you can do in your own on-premises environments today.<br />Sep. 15, 2014   3 min. 15 sec. ");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/What_Does_It_Mean_to_Own_Your_Data.jpg?version=31a659e3-0438-4be0-d8ea-83029be64001&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "https://www.youtube.com/watch?v=lHnxXh8pl6Q");
            break;
        case "What is Continuous Compliance Thumbnail":
            $("div.certDescription h1").text("What is Continuous Compliance?");
            $("div.certDescription h2").text("Office 365 | Compliance");
            $("div.certDescription p").html("Shawn Veney tells how Office 365 meets the majority of industry requirements today and how our control framework keeps us ahead of any industry requirement changes.<br />Jun 24, 2014   3 min. 23 sec.");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/What_is_Continuous_Compliance.jpg?version=62a47b63-70ea-eca1-9ab3-542f0e163852&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "https://www.youtube.com/watch?v=eU7mcuOuSMk");
            break;
        case "Who Has Access to Your Data Thumbnail":
            $("div.certDescription h1").text("Who Has Access to Your Data?");
            $("div.certDescription h2").text("Office 365 | Privacy");
            $("div.certDescription p").html("Customer data is not more accessible by the people administering and running the Office 365 service. Learn specifics from Perry Clarke and Vivek Sharma about how Office 365 maintains the service and does not expose customer data to engineers during troubleshooting activities.<br />Jun. 2, 2014    3 min. 41 sec.");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/Who_Has_Access_to_Your_Data.jpg?version=0bddae13-2c4e-ed6f-0cea-53649f800462&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "https://www.youtube.com/watch?v=RgmF_JOzb_k");
            break;
        case "Why Trust Office 365 Thumbnail":
            $("div.certDescription h1").text("Why Trust Office 365?");
            $("div.certDescription h2").text("Office 365 | Security");
            $("div.certDescription p").html("Listen to Rajesh Jha, Corporate Vice President of Office Services and Servers, and Julia White, General Manager of Office Product Management, to get peace of mind that with Office 365 you have a secure and compliant solution while enabling your users to be productive.<br />May 3, 2014    6 min.");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/Why_Trust_Office_365.jpg?version=b4ea96d5-5e3c-f641-4c53-5a38b6c7b6ab&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "https://products.office.com/en-us/business/office-365-trust-center-engage-videos");
            break;
        case "Azure Platform Securty and Compliance Thumbnail":
            $("div.certDescription h1").text("Azure Platform Security and Compliance Video");
            $("div.certDescription h2").text("Azure | Security, Compliance");
            $("div.certDescription p").html("It covers all of the key areas of security including identity security, network security, system security, data and key security, monitoring, response, compliance, and privacy.<br />Sep. 28, 2015   2 min. 46 sec.");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/Azure-Platform-Security-and-Compliance-Video.jpg?version=91d60d9c-1062-5619-1555-3d2cfe0d2f87&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "https://azure.microsoft.com/en-us/documentation/videos/azurecon-2015-azure-platform-security-and-compliance/");
            break;
        case "What Does Azure Do About Privacy Thumbnail":
            $("div.certDescription h1").text("What Does Azure Do About Privacy?");
            $("div.certDescription h2").text("Azure | Privacy");
            $("div.certDescription p").html("Privacy and privacy concerns as they relate to Microsoft Azure. Is my data private? How private?<br />Jul. 18, 2014   8 min. 35 sec. ");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/What-Does-Azure-Do-About-Privacy.jpg?version=742af3ff-836e-07bd-9d8d-1f32f1c0ba59&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "https://azure.microsoft.com/en-us/documentation/videos/what-does-azure-do-about-privacy/");
            break;
        case "Azure Security 101 Thumbnail":
            $("div.certDescription h1").text("Azure Security 101 - Whose Responsibility is That?");
            $("div.certDescription h2").text("Azure | Security");
            $("div.certDescription p").html("Ben Ridgway schools Scott about Azure Security 101.<br />Jun. 13, 2014    11 min. 55 sec");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/Azure-Security-101.jpg?version=e03fcd5f-e019-6371-cb26-7698aa30e060&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "https://azure.microsoft.com/en-us/documentation/videos/azure-security-101-whose-responsibility-is-that/");
            break;
        case "Privacy Considerations in a Cloudy World Thumbnail":
            $("div.certDescription h1").text("Privacy Considerations in a Cloudy World");
            $("div.certDescription h2").text("Cloud | Privacy, Compliance");
            $("div.certDescription p").html("Brendon Lynch, Chief Privacy Officer, talks about Microsoft’s long term, principled approach to privacy with Diane McDade, Sr. Director, Policy Management.<br /> Jan. 9, 2015    4 min. 42 sec.");
            $("div.certDescription img.certIcon").attr("src", "/en-us/CMSImages/PrivacyInTheCloud.jpg?version=daaa86e6-818a-55a3-b78d-3ad817e87c9a&CollectionId=e77e6368-b22d-4504-8900-82356a701f28");
            $("div.certDescription a").show();
            $("div.certDescription a").attr("href", "https://www.youtube.com/watch?v=q5rwwQBTJxo");
            break;
        default:
            $("div.certDescription h1").text("");
            $("div.certDescription h2").text("");
            $("div.certDescription p").text("");
            $("div.certDescription img.certIcon").attr("src", "").hide();
            $("div.certDescription img.certIcon").attr("src", "");
            $("div.certDescription a").hide();
            $("div.certDescription a").attr("href", "#")
    }
}

function setPopupText(n) {
    var t = ("#" + n).replace("/", "\\/");
    $("div.certDescription").html($("#ComplianceContent").find(t).html());
    $("div.certPopup").css("background-color") == "rgb(0, 114, 198)" && ($("div.certDescription a img").attr("src", "https://c.s-microsoft.com/en-us/CMSImages/Arrow_white.png?version=5c22924b-0b30-b9e9-3bea-41132bde0152"), $("div.certDescription > img").attr("src", "https://c.s-microsoft.com/en-us/CMSImages/Close_W.png?version=a58fec80-c60f-cd16-3f88-c1c91793a039"));
    $("div.certPopup > img").click(function() {
        console.log("Closing");
        $("div.certImageGray img.certImage").removeClass("active");
        $("div.certImageGray div.imageWrapper img").removeClass("active");
        $("div.certPopup").hide()
    })
}
var MSCom, slick;
(function() {
    function k() {
        function i() {
            for (var i, r, f = n + "=", e = document.cookie.split(";"), u = 0; u < e.length; u++) {
                for (i = e[u]; i.charAt(0) == " ";) i = i.substring(1);
                if (i.indexOf(f) != -1) return r = i.substring(f.length, i.length), r.length > 0 && (r = t + r), r
            }
            return ""
        }
        var n = "MUID",
            t = "t:";
        return i()
    }
    var n = this,
        o, f, u, e, l, a, v;
    this.Asimov = this.Asimov || {};
    this.Asimov._schemas = this.Asimov._schemas || [];
    this.Asimov.uploadUrl = "https://vortex.data.microsoft.com/collect/v1";
    this.Asimov.commonSchemaEnvelopeVersion = "2.1";
    this.Asimov.javascriptVersion = "2.15.3.8";
    this.Asimov.correlationVectorTag = "cV";
    this.Asimov.correlationVectorHeader = "MS-CV";
    this.Asimov.originatingCLLTag = "cll";
    this.Asimov.experimentIdTag = "expId";
    this.Asimov.userId = k();
    this.Asimov.allowedGetLength = 2048;
    this.Asimov.getMethodQueryStringParameter = "json";
    o = "JS:";
    f = "appId";
    this.Asimov.verbosityLevels = {
        NONE: 0,
        ERROR: 1,
        WARNING: 2,
        INFORMATION: 3
    };
    Object.freeze && Object.freeze(this.Asimov.verbosityLevels);
    this.Asimov.consoleVerbosity = this.Asimov.verbosityLevels.NONE;
    var s = 63,
        h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        r = null;
    "withCredentials" in new window.XMLHttpRequest ? r = "jQuery" : window.XDomainRequest && (r = "XDomainRequest");
    u = "Unknown";
    e = n.navigator && n.navigator.appVersion ? n.navigator.appVersion : "";
    e.indexOf("Win") != -1 ? u = "Windows" : e.indexOf("Mac") != -1 ? u = "MacOS" : e.indexOf("X11") != -1 ? u = "Unix" : e.indexOf("Linux") != -1 && (u = "Linux");
    l = window.location.hostname;
    a = function() {
        for (var n = "", t = 0; t < 16; t++) n += h.charAt(Math.floor(Math.random() * h.length));
        return n
    };
    this.Asimov.CorrelationVector = function() {
        var i = "0000000000000000",
            n = i,
            t = 0,
            r = function() {
                return n === i ? !1 : !0
            },
            u = function(n) {
                return n.getValue().length + 2 <= s ? !0 : !1
            },
            f = function() {
                return n.length + 1 + (t + 1 + "").length <= s ? !0 : !1
            };
        this.getValue = function() {
            return n.concat(".", t)
        };
        this.setValue = function(i) {
            if (Asimov.CorrelationVector.isValid(i)) {
                var r = i.lastIndexOf(".");
                n = i.substr(0, r);
                t = parseInt(i.substr(r + 1), 10)
            } else throw "Cannot set invalid correlation vector value";
            return n.concat(".", t)
        };
        this.init = function() {
            return n = a(), this.getValue()
        };
        this.extend = function() {
            return r() || this.init(), u(this) && (n = n.concat(".", t), t = 0), this.getValue()
        };
        this.increment = function() {
            return r() || this.init(), f() && (t = t + 1), this.getValue()
        }
    };
    v = new RegExp("^[" + h + "]{16}(.[0-9]+)+$");
    this.Asimov.CorrelationVector.isValid = function(n) {
        return v.test(n) && n.length <= s
    };
    this.Asimov.cv = new this.Asimov.CorrelationVector;
    var d = function() {
            return n.jQuery ? !n.JSON || !n.JSON.stringify ? (t("Unable to write event: the global JSON.stringify method does not exist"), !1) : r ? r == "XDomainRequest" && n.Asimov.uploadUrl && n.Asimov.uploadUrl.indexOf(window.location.protocol) != 0 ? (t("Unable to write event: CORS requests are not supported cross-protocol in this browser"), !1) : !0 : (t("Unable to write event: CORS not supported in this browser"), !1) : (t("Unable to write event: jQuery is not present"), !1)
        },
        y = function(n, i) {
            t("Failure sending data to vortex: " + i)
        },
        c = function() {
            nt("Success sending data to vortex")
        },
        g = function() {
            t("Failure sending data to vortex using XDomainRequest")
        },
        t = function(t) {
            n.Asimov.consoleVerbosity >= n.Asimov.verbosityLevels.ERROR && n.console && n.console.error && n.console.error("JSLL: " + t)
        },
        p = function(t) {
            n.Asimov.consoleVerbosity >= n.Asimov.verbosityLevels.WARNING && n.console && n.console.warn && n.console.warn("JSLL: " + t)
        },
        nt = function(t) {
            n.Asimov.consoleVerbosity >= n.Asimov.verbosityLevels.INFORMATION && n.console && n.console.log && n.console.log("JSLL: " + t)
        },
        i = function(n, t) {
            if (n == "string") return typeof t == "string" || t instanceof String || t instanceof Date;
            if (n == "bool") return typeof t == "boolean" || t instanceof Boolean;
            if (!(typeof t == "number") || t instanceof Number) return !1;
            if (n == "uint8") {
                if (t < 0 || t > 255 || t % 1 != 0) return !1
            } else if (n == "uint16") {
                if (t < 0 || t > 65535 || t % 1 != 0) return !1
            } else if (n == "uint32") {
                if (t < 0 || t > 4294967295 || t % 1 != 0) return !1
            } else if (n == "uint64") {
                if (t < 0 || t > 18446744073709551615 || t % 1 != 0) return !1
            } else if (n == "int8") {
                if (t < -128 || t > 127 || t % 1 != 0) return !1
            } else if (n == "int16") {
                if (t < -32768 || t > 32767 || t % 1 != 0) return !1
            } else if (n == "int32") {
                if (t < -2147483648 || t > 2147483647 || t % 1 != 0) return !1
            } else if (n == "int64") {
                if (t < -9223372036854775808 || t > 9223372036854775807 || t % 1 != 0) return !1
            } else if (n == "float") {
                if (t < -3402823e32 || t > 3402823e32) return !1
            } else if (n == "double" && (t < -17976931348623157e292 || t > 17976931348623157e292)) return !1;
            return !0
        },
        w = function(n, r, u) {
            for (var f, e, a, s, v, o, y, p, b, c, h = r.fields, l = 0; l < h.length; l++) {
                if (f = h[l], e = u[f.name], e === null || e === undefined) {
                    if (f.req) return t("Missing required property: " + f.name), !1;
                    continue
                }
                if (f.type == "map") {
                    a = {};
                    for (s in e) {
                        if (!i(f.key, s)) return t("A key in the map was of the wrong type: " + f.name), !1;
                        if (!i(f.element, e[s])) return t("A value in the map was of the wrong type: " + f.name), !1;
                        a[s] = e[s]
                    }
                    n[f.name] = a
                } else if (f.type == "list" || f.type == "set") {
                    if (v = [], Object.prototype.toString.call(e) === "[object Array]")
                        for (o = 0; o < e.length; o++) {
                            if (e[o] != null && !i(f.element, e[o])) return t("The list contains a value of the wrong type: " + f.name), !1;
                            v[o] = e[o]
                        } else return t("The " + f.type + " " + f.name + " was not an array as expected"), !1;
                    n[f.name] = v
                } else if (f.type == "struct") {
                    if (y = {}, !w(y, f.def, e)) return !1;
                    n[f.name] = y
                } else {
                    if (!i(f.type, e)) return t("Property is the wrong type: " + f.name), !1;
                    n[f.name] = e
                }
            }
            for (p in u) {
                for (b = !1, c = 0; c < h.length; c++)
                    if (h[c].name == p) {
                        b = !0;
                        break
                    }
                b || t("An unexpected property was found in the event content and dropped: " + p)
            }
            return !0
        },
        b = function(t, i) {
            var f, o, a, v, w, s, h, l, b, e, u;
            if (t && d()) {
                if (f = i == !0, o = [], n.jQuery.isArray(t))
                    for (f && p("only one message may be sent via get method per request -- using post instead"), f = !1, a = 0; a < t.length; a++) v = n.Asimov._validateAndTranslateEvent(t[a]), v.success && o.push(v.event);
                else w = n.Asimov._validateAndTranslateEvent(t), w.success && o.push(w.event);
                if (o.length != 0) {
                    for (s = "", h = 0; h < o.length; h++) h > 0 && (s += "\n"), s += n.JSON.stringify(o[h]);
                    l = "";
                    f && (l = encodeURIComponent(s), n.Asimov.uploadUrl.length + n.Asimov.getMethodQueryStringParameter.length + 2 + l.length > n.Asimov.allowedGetLength && (p("event is too large to send using get -- using post instead"), f = !1));
                    r === "jQuery" ? (b = {}, b = f ? {
                        accepts: {
                            text: "application/json"
                        },
                        url: n.Asimov.uploadUrl,
                        type: "get",
                        dataType: "text",
                        data: n.Asimov.getMethodQueryStringParameter + "=" + l,
                        crossDomain: !0
                    } : {
                        accepts: {
                            text: "application/json"
                        },
                        url: n.Asimov.uploadUrl,
                        type: "post",
                        dataType: "text",
                        data: s,
                        crossDomain: !0,
                        headers: {
                            "Content-Type": "application/x-json-stream"
                        }
                    }, e = window.jQuery.ajax(b), e.fail ? e.fail(y) : e.error(y), e.done ? e.done(c) : e.success(c)) : r === "XDomainRequest" && (u = new XDomainRequest, u.onload = c, u.onerror = function() {
                        g(u)
                    }, f ? (u.open("get", n.Asimov.uploadUrl + "?" + n.Asimov.getMethodQueryStringParameter + "=" + l), u.send()) : (u.open("post", n.Asimov.uploadUrl), u.send(s)))
                }
            }
        };
    this.Asimov.writeEvent = function(n) {
        b(n, !1)
    };
    this.Asimov.writeEventWithGet = function(n) {
        b(n, !0)
    };
    this.Asimov._validateAndTranslateEvent = function(n) {
        var r = {},
            c = {},
            a = {},
            e = {
                event: r,
                success: !1
            },
            h, s, p, v, y, b, k, d;
        if (!n) return t("Unable to write null event"), e;
        if (!n.name) return t("Unable to write event with missing name"), e;
        if (!this._schemas.hasOwnProperty(n.name)) return t("Unable to write event: a schema for the event named {" + n.name + "} does not exist"), e;
        if (!n.content) return t("Unable to write event: the event is missing content"), e;
        h = this._schemas[n.name];
        for (s in h)
            if (s !== "name") {
                if (p = h[s], !n.content.hasOwnProperty(s)) return t("Unable to write event: missing expected part: " + s), e;
                if (p.part == "C" ? v = a : (v = {}, a.baseData = v, a.baseType = s), !w(v, p.def, n.content[s])) return e
            }
        for (y in n.content) h[y] && h[y].part || t("An unexpected property was found in the event content and dropped: " + y);
        if (r.ver = this.commonSchemaEnvelopeVersion, r.name = n.name, r.time = new Date, r.data = a, r.tags = {}, r.os = u, n.hasOwnProperty(this.correlationVectorTag))
            if (this.CorrelationVector.isValid(n[this.correlationVectorTag])) r.cV = n[this.correlationVectorTag];
            else return t("Unable to write event: The correlation vector value is invalid: " + n[this.correlationVectorTag]), e;
        else r.cV = this.cv.getValue();
        if (n.hasOwnProperty(this.experimentIdTag))
            if (i("string", n[this.experimentIdTag])) b = {}, b[this.experimentIdTag] = n[this.experimentIdTag], c.app = b;
            else return t("Unable to write event: The supplied experiment id is invalid: " + n[this.experimentIdTag]), e;
        return r.tags[this.originatingCLLTag] = "JSLL", n.hasOwnProperty(f) ? i("string", n[f]) ? r.appId = o + n[f] : t("Unable to write event: The supplied appId is invalid: " + n[f]) : r.appId = o + l, k = {}, k.libVer = this.javascriptVersion, c.javascript = k, this.userId != null && (i("string", this.userId) ? (d = {}, d.localId = this.userId, c.user = d) : t("ignoring the userid value because it is invalid: " + this.userId)), r.ext = c, e.success = !0, e
    };
    this.Asimov._registerSchemas = function(n) {
        for (var t = 0; t < n.length; t++) this._schemas[n[t].name] = n[t]
    }
})(),
function() {
    this.Asimov._registerSchemas([{
        name: "Microsoft.Infrastructure.Events.MSCOMRendering.ClientError",
        "Microsoft.Infrastructure.Events.MSCOMRendering.ClientError": {
            part: "C",
            def: {
                fields: [{
                    req: !0,
                    name: "ErrorInfo",
                    type: "string"
                }, {
                    name: "WasDisplayed",
                    type: "bool"
                }]
            }
        }
    }, {
        name: "Microsoft.Infrastructure.Events.MSCOMRendering.PageAction",
        "Ms.Content.PageAction": {
            part: "B",
            def: {
                fields: [{
                    req: !0,
                    name: "pageName",
                    type: "string"
                }, {
                    name: "uri",
                    type: "string"
                }, {
                    name: "destUri",
                    type: "string"
                }, {
                    name: "pageType",
                    type: "string"
                }, {
                    name: "pageTags",
                    type: "string"
                }, {
                    name: "product",
                    type: "string"
                }, {
                    name: "screenState",
                    type: "int32"
                }, {
                    name: "customSessionGuid",
                    type: "string"
                }, {
                    name: "impressionGuid",
                    type: "string"
                }, {
                    name: "actionInputMethod",
                    type: "int32"
                }, {
                    name: "behavior",
                    type: "int32"
                }, {
                    name: "contentJsonVer",
                    type: "float"
                }, {
                    name: "content",
                    type: "string"
                }]
            }
        },
        "Microsoft.Infrastructure.Events.MSCOMRendering.PageAction": {
            part: "C",
            def: {
                fields: [{
                    req: !0,
                    name: "VisitorId",
                    type: "string"
                }, {
                    name: "GroupId",
                    type: "string"
                }, {
                    name: "FlightId",
                    type: "string"
                }, {
                    name: "TimeToAction",
                    type: "int32"
                }, {
                    name: "Route",
                    type: "string"
                }, {
                    name: "PageVersion",
                    type: "string"
                }, {
                    name: "BrowserSize",
                    type: "string"
                }, {
                    name: "PageSize",
                    type: "string"
                }]
            }
        }
    }, {
        name: "Microsoft.Infrastructure.Events.MSCOMRendering.PageView",
        "Ms.Content.PageView": {
            part: "B",
            def: {
                fields: [{
                    req: !0,
                    name: "pageName",
                    type: "string"
                }, {
                    name: "uri",
                    type: "string"
                }, {
                    name: "referrerUri",
                    type: "string"
                }, {
                    name: "pageType",
                    type: "string"
                }, {
                    name: "pageTags",
                    type: "string"
                }, {
                    name: "product",
                    type: "string"
                }, {
                    name: "screenState",
                    type: "int32"
                }, {
                    name: "customSessionGuid",
                    type: "string"
                }, {
                    name: "impressionGuid",
                    type: "string"
                }, {
                    name: "contentJsonVer",
                    type: "float"
                }, {
                    name: "content",
                    type: "string"
                }]
            }
        },
        "Microsoft.Infrastructure.Events.MSCOMRendering.PageView": {
            part: "C",
            def: {
                fields: [{
                    name: "VisitorId",
                    type: "string"
                }, {
                    name: "GroupId",
                    type: "string"
                }, {
                    name: "FlightId",
                    type: "string"
                }, {
                    name: "ClientUTCOffset",
                    type: "int32"
                }, {
                    req: !0,
                    name: "UserAgent",
                    type: "string"
                }, {
                    name: "BrowserLanguage",
                    type: "string"
                }, {
                    name: "DNTStatus",
                    type: "string"
                }, {
                    name: "CookiesEnabled",
                    type: "bool"
                }, {
                    name: "SilverLightInstalled",
                    type: "bool"
                }, {
                    name: "SilverLightEnabledOnPage",
                    type: "bool"
                }, {
                    name: "SilverLightVersion",
                    type: "string"
                }, {
                    name: "FlashInstalled",
                    type: "bool"
                }, {
                    name: "FlashVersion",
                    type: "string"
                }, {
                    name: "BrowserSize",
                    type: "string"
                }, {
                    name: "Cookies",
                    type: "string"
                }, {
                    name: "PageLoadTime",
                    type: "int32"
                }, {
                    name: "PageTitle",
                    type: "string"
                }, {
                    name: "Route",
                    type: "string"
                }, {
                    name: "PageVersion",
                    type: "string"
                }, {
                    name: "ScreenResolution",
                    type: "string"
                }, {
                    name: "PageSize",
                    type: "string"
                }, {
                    name: "Scrl",
                    type: "string"
                }]
            }
        }
    }, {
        name: "Microsoft.Infrastructure.Events.MSCOMRendering.TimeSpan",
        "Microsoft.Infrastructure.Events.MSCOMRendering.TimeSpan": {
            part: "C",
            def: {
                fields: [{
                    name: "RequestUrl",
                    type: "string"
                }, {
                    name: "Culture",
                    type: "string"
                }, {
                    name: "UserAgent",
                    type: "string"
                }, {
                    name: "BeginTime",
                    type: "string"
                }, {
                    name: "PageLoadTime",
                    type: "int32"
                }, {
                    name: "PageTimingDetails",
                    type: "string"
                }, {
                    name: "TotalRequests",
                    type: "int32"
                }, {
                    name: "SecondaryResourceDetails",
                    type: "string"
                }, {
                    name: "AdditionalInformation",
                    type: "string"
                }, {
                    name: "VisitorId",
                    type: "string"
                }, {
                    name: "RenderingVer",
                    type: "string"
                }]
            }
        }
    }, {
        name: "Ms.Content.PageAction",
        "Ms.Content.PageAction": {
            part: "B",
            def: {
                fields: [{
                    req: !0,
                    name: "pageName",
                    type: "string"
                }, {
                    name: "uri",
                    type: "string"
                }, {
                    name: "destUri",
                    type: "string"
                }, {
                    name: "pageType",
                    type: "string"
                }, {
                    name: "pageTags",
                    type: "string"
                }, {
                    name: "product",
                    type: "string"
                }, {
                    name: "screenState",
                    type: "int32"
                }, {
                    name: "customSessionGuid",
                    type: "string"
                }, {
                    name: "impressionGuid",
                    type: "string"
                }, {
                    name: "actionInputMethod",
                    type: "int32"
                }, {
                    name: "behavior",
                    type: "int32"
                }, {
                    name: "contentJsonVer",
                    type: "float"
                }, {
                    name: "content",
                    type: "string"
                }]
            }
        }
    }, {
        name: "Ms.Content.PageView",
        "Ms.Content.PageView": {
            part: "B",
            def: {
                fields: [{
                    req: !0,
                    name: "pageName",
                    type: "string"
                }, {
                    name: "uri",
                    type: "string"
                }, {
                    name: "referrerUri",
                    type: "string"
                }, {
                    name: "pageType",
                    type: "string"
                }, {
                    name: "pageTags",
                    type: "string"
                }, {
                    name: "product",
                    type: "string"
                }, {
                    name: "screenState",
                    type: "int32"
                }, {
                    name: "customSessionGuid",
                    type: "string"
                }, {
                    name: "impressionGuid",
                    type: "string"
                }, {
                    name: "contentJsonVer",
                    type: "float"
                }, {
                    name: "content",
                    type: "string"
                }]
            }
        }
    }])
}();
window.MSCOMRendering === undefined && (window.MSCOMRendering = {});
MSCOMRendering.Jll = function() {
    function v() {
        y();
        e = w();
        p();
        $(window).load(function() {
            var f = window.location.href,
                t, n, s, u, i;
            if (window.performance != undefined) {
                var e = window.performance.timing.domComplete - window.performance.timing.fetchStart,
                    c = (new Date).getTime(),
                    a = c - window.performance.timing.navigationStart,
                    v = {
                        domLoadTime: e,
                        timing: window.performance.timing
                    },
                    o = !0,
                    r = [];
                try {
                    for (t = window.performance.getEntries(), n = 0; n < t.length; n++) s = t[n].name.indexOf("c.microsoft.com") > -1 || t[n].name.indexOf("tags.bluekai.com") > -1 ? t[n].name.substring(0, 100) : t[n].name, r.push({
                        name: s,
                        initiatorType: t[n].initiatorType,
                        entryType: t[n].entryType,
                        type: t[n].type,
                        startTime: t[n].startTime,
                        fetchStart: t[n].fetchStart,
                        duration: t[n].duration
                    })
                } catch (y) {
                    o = !1
                }
                u = "";
                i = "";
                o ? (i = JSON.stringify(v), u = JSON.stringify(r)) : i = '{"domLoadTime": ' + e + ',"timing" {"navigationStart":' + window.performance.timing.navigationStart + ',"unloadEventStart":' + window.performance.timing.unloadEventStart + ',"unloadEventEnd":' + window.performance.timing.unloadEventEnd + ',"redirectStart":' + window.performance.timing.redirectStart + ',"redirectEnd":' + window.performance.timing.redirectEnd + ',"fetchStart":' + window.performance.timing.fetchStart + ',"domainLookupStart":' + window.performance.timing.domainLookupStart + ',"domainLookupEnd":' + window.performance.timing.domainLookupEnd + ',"connectStart":' + window.performance.timing.connectStart + ',"connectEnd":' + window.performance.timing.connectEnd + ',"requestStart":' + window.performance.timing.requestStart + ',"responseStart":' + window.performance.timing.responseStart + ',"responseEnd":' + window.performance.timing.responseEnd + ',"domLoading":' + window.performance.timing.domLoading + ',"domInteractive":' + window.performance.timing.domInteractive + ',"domContentLoadedEventStart":' + window.performance.timing.domContentLoadedEventStart + ',"domContentLoadedEventEnd":' + window.performance.timing.domContentLoadedEventEnd + ',"domComplete":' + window.performance.timing.domComplete + ',"loadEventStart":' + window.performance.timing.loadEventStart + ',"loadEventEnd":' + window.performance.timing.loadEventEnd + ',"msFirstPaint":' + window.performance.timing.msFirstPaint + "}}";
                h(window.performance.timing.navigationStart.toString(), r.length, l(), u, i, "", f, a)
            } else h("0", 0, l(), "Not Supported", "Not Supported", "", f, 0)
        })
    }

    function y() {
        var t = document.getElementsByTagName("meta"),
            i = "",
            n;
        if (t)
            for (n = 0; n < t.length; n++)
                if (t[n].getAttribute("name") == "CorrelationVector") {
                    i = t[n].getAttribute("content");
                    break
                }
        Asimov.cv = new Asimov.CorrelationVector;
        i != "" && Asimov.cv.setValue(i)
    }

    function p() {
        var t = document.getElementsByTagName("meta"),
            n;
        if (t)
            for (n = 0; n < t.length; n++)
                if (t[n].getAttribute("name") == "RenderingVersion") {
                    c = t[n].getAttribute("content");
                    break
                }
    }

    function l() {
        var t = document.getElementsByTagName("meta"),
            n;
        if (t)
            for (n = 0; n < t.length; n++)
                if (t[n].getAttribute("name") == "MscomContentLocale") return t[n].getAttribute("content");
        return ""
    }

    function w() {
        var u = document.cookie.indexOf(o + "="),
            n, t, r;
        if (u == -1) return n = d(), document.cookie = o + "=" + n, n;
        for (t = document.cookie.split("; "), i = 0; i < t.length; i++)
            if (r = t[i].split("="), o === r.shift()) return r.join("=");
        return e
    }

    function b() {
        n.domain = window.location.host;
        n.siteStem = "";
        n.queryString = "";
        window.location.pathname != "" && (n.siteStem = window.location.pathname);
        window.location.search != "" && (n.queryString = window.location.search)
    }

    function k() {
        n.screenResolution = "";
        n.screenResolutionWidth = "";
        n.screenResolutionHeight = "";
        typeof screen == "object" && (n.screenResolution = screen.width + "x" + screen.height, n.screenResolutionHeight = screen.height, n.screenResolutionWidth = screen.width)
    }

    function r() {
        return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1)
    }

    function d() {
        return r() + r() + "-" + r() + "-" + r() + "-" + r() + "-" + r() + r() + r()
    }

    function g() {
        var t = new Date;
        tz = t.getTimezoneOffset();
        n.timeZoneOffSet = tz / -60
    }

    function nt() {
        var i = "",
            e = new Date,
            t = document.cookie.indexOf(u + "="),
            r, f;
        if (t == -1) {
            if (MscomSetTimeStamp(), sessionId = e.getTime(), n.cookieEnabled == !1) return;
            i = u + "=" + sessionId
        } else r = t + u.length + 1, f = document.cookie.length, i = u + "=" + document.cookie.substring(r, f);
        document.cookie = i;
        t = document.cookie.indexOf(u + "=");
        n.cookieEnabled = t == -1 ? !1 : !0
    }

    function tt() {
        var i, t, u, r;
        if (n.flashInstalled = !1, n.flashVersion = "", i = (new Date).getFullYear() - 1992, navigator.userAgent.indexOf("MSIE") != -1)
            for (t = i; t > 0; t--) try {
                u = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + t);
                n.flashInstalled = !0;
                n.flashVersion = t + ".0";
                break
            } catch (f) {} else navigator.plugins["Shockwave Flash"] && (n.flashInstalled = !0, r = navigator.plugins["Shockwave Flash"], n.flashVersion = r.description.split(" ")[2])
    }

    function it() {
        var u, t, i, r;
        n.silverlightEnabled = !1;
        n.silverlightInstalled = !1;
        n.silverlightVersion = "0.0";
        window.Silverlight != undefined && (n.silverlightEnabled = !0);
        try {
            navigator.plugins["Silverlight Plug-In"] ? (u = navigator.plugins["Silverlight Plug-In"], n.silverlightInstalled = !0, t = u.description, t && (i = t.split("."), t = i[0] + "." + i[1], n.silverlightVersion = t)) : navigator.userAgent.indexOf("MSIE") != -1 && (r = new ActiveXObject("AgControl.AgControl"), r && (n.silverlightInstalled = !0, n.silverlightVersion = rt(r)))
        } catch (f) {}
    }

    function rt(n) {
        for (var i, t = "", u = (new Date).getYear() - 2004, r = u; r > 0; r--)
            for (i = 9; i >= 0; i--)
                if (t = r + "." + i, n.IsVersionSupported(t)) return t;
        return t
    }

    function ut() {
        n.browserSize = "";
        document.body && document.body.clientWidth != undefined ? n.browserSize = document.body.clientWidth + "x" + document.body.clientHeight : document.documentElement && document.documentElement.clientWidth != undefined ? n.browserSize = document.documentElement.clientWidth + "x" + document.documentElement.clientHeight : window.innerWidth != undefined && (n.browserSize = window.innerWidth + "x" + window.innerHeight)
    }

    function ft() {
        var t = (new Date).getTime(),
            n;
        return window.performance && window.performance.timing && (n = window.performance.timing.domComplete, n !== 0) ? t - n : -1
    }

    function a() {
        n.title = document.title;
        n.referrer = document.referrer;
        g();
        nt();
        k();
        ut();
        tt();
        it();
        b()
    }

    function et(n) {
        return typeof n == "number" && n % 1 == 0
    }

    function t(n) {
        return n ? n : ""
    }

    function s(n) {
        return n && et(n) ? n : 0
    }

    function ot(i) {
        n = i;
        a();
        var r = [{
            name: "Microsoft.Infrastructure.Events.MSCOMRendering.PageView",
            content: {
                "Ms.Content.PageView": {
                    pageName: n.title,
                    uri: window.location.href,
                    referrerUri: n.referrer,
                    pageType: "WebPage",
                    pageTags: "{'InteractionType': '" + t(n.interactiontype) + "', 'LinkId': '" + t(n.linkid) + "', 'LinkType': '" + t(n.linktype) + "', 'Environment': '" + t(n.env) + "', 'Lang': '" + t(n.lang) + "', 'Loc': '" + t(n.loc) + "',}",
                    product: "",
                    screenState: 0,
                    customSessionGuid: e,
                    impressionGuid: "",
                    contentJsonVer: 2,
                    content: ""
                },
                "Microsoft.Infrastructure.Events.MSCOMRendering.PageView": {
                    VisitorId: f,
                    GroupId: "",
                    FlightId: "",
                    ClientUTCOffset: n.timeZoneOffSet,
                    UserAgent: navigator.userAgent,
                    BrowserLanguage: navigator.userLanguage,
                    DNTStatus: navigator.doNotTrack,
                    CookiesEnabled: n.cookieEnabled,
                    SilverLightInstalled: n.silverlightInstalled,
                    SilverLightEnabledOnPage: n.silverlightEnabled,
                    SilverLightVersion: n.silverlightVersion,
                    FlashInstalled: n.flashInstalled,
                    FlashVersion: n.flashVersion,
                    BrowserSize: t(n.viewport),
                    Cookies: "",
                    PageLoadTime: -1,
                    PageTitle: n.title,
                    Route: t(n.route),
                    PageVersion: "",
                    ScreenResolution: n.screenResolution,
                    PageSize: n.browserSize,
                    Scrl: t(n.scrollable)
                }
            }
        }];
        window.Asimov.writeEvent(r)
    }

    function st(i) {
        n = i;
        a();
        var r = [{
            name: "Microsoft.Infrastructure.Events.MSCOMRendering.PageAction",
            content: {
                "Ms.Content.PageAction": {
                    pageName: n.title,
                    uri: window.location.href,
                    destUri: t(n["wcs.ct"]),
                    pageType: "WebPage",
                    pageTags: "{'InteractionType': '" + t(n.interactiontype) + "', 'LinkId': '" + t(n.linkid) + "', 'LinkType': '" + t(n.linktype) + "', 'Environment': '" + t(n.env) + "', 'ClickedObjectId': '" + t(n["wcs.cid"]) + "', 'ClickedTargetUrl': '" + t(n["wcs.ct"]) + "', 'ClickedObjectName': '" + t(n["wcs.cn"]) + "', 'ClickedObjectType': '" + s(n.cot) + "', 'SearchType': '" + t(n.searchtype) + "', 'SearchQuery': '" + t(n.searchquery) + "', 'Index': '" + t(n.index) + "', 'PageArea': '" + t(n.pgarea) + "', 'ComponentGroup': '" + t(n.cmpgrp) + "', 'ComponentName': '" + t(n.cmpnm) + "', 'ComponentType': '" + t(n.cmptyp) + "', 'Lang': '" + t(n.lang) + "', 'Loc': '" + t(n.loc) + "',}",
                    product: "",
                    screenState: 0,
                    customSessionGuid: e,
                    impressionGuid: "",
                    actionInputMethod: 0,
                    behavior: 0,
                    contentJsonVer: 2,
                    content: ""
                },
                "Microsoft.Infrastructure.Events.MSCOMRendering.PageAction": {
                    VisitorId: f,
                    GroupId: "",
                    FlightId: "",
                    TimeToAction: ft(),
                    Route: t(n.route),
                    PageVersion: "",
                    BrowserSize: t(n.viewport),
                    PageSize: n.browserSize
                }
            }
        }];
        window.Asimov.writeEvent(r)
    }

    function ht(n, t, i, r, u) {
        var f = "{'ErrorTitle': '" + r + "', 'RequestURL': '" + t + "', 'LineNumber': '" + i + "', 'ErrorMessage': '" + n.replace(/'/g, '"') + "',}";
        ct(f, u)
    }

    function ct(n, t) {
        var i = [{
            name: "Microsoft.Infrastructure.Events.MSCOMRendering.ClientError",
            content: {
                "Microsoft.Infrastructure.Events.MSCOMRendering.ClientError": {
                    ErrorInfo: n,
                    WasDisplayed: t
                }
            }
        }];
        window.Asimov.writeEvent(i)
    }

    function h(n, t, i, r, u, e, o, h) {
        var l = [{
            name: "Microsoft.Infrastructure.Events.MSCOMRendering.TimeSpan",
            content: {
                "Microsoft.Infrastructure.Events.MSCOMRendering.TimeSpan": {
                    RequestUrl: o,
                    Culture: i,
                    UserAgent: navigator.userAgent,
                    BeginTime: n,
                    PageLoadTime: s(h),
                    PageTimingDetails: u,
                    TotalRequests: s(t),
                    SecondaryResourceDetails: r,
                    AdditionalInformation: e,
                    VisitorId: f,
                    RenderingVer: c
                }
            }
        }];
        window.Asimov.writeEvent(l)
    }
    var n = {},
        u = "MC0",
        f = "",
        o = "MSCOMBIID",
        e = "",
        c = "";
    return v(), {
        SendError: ht,
        SentPageAction: st,
        SentPageView: ot,
        SendTimeSpan: h
    }
}();
window.onerror = function(n, t, i) {
    return MSCOMRendering.Jll.SendError(n, t, i, "ErrorTitle", !1), !0
};
$(document).ready(function() {
    $(".mscomAd:visible").length > 0 && window.Mscom.Helper.loadScript("http://Ads1.msn.com/library/dap.js", function() {
        $(".mscomAd:visible").each(function(n) {
            if (dapMgr != "undefined") {
                var t = "Ad" + n,
                    i = $(this).attr("data-ad-pageGroup"),
                    r = $(this).attr("data-ad-sizeCode"),
                    u = $(this).attr("data-ad-width"),
                    f = $(this).attr("data-ad-height");
                $(this).attr("id", t);
                try {
                    dapMgr.enableACB(t, !1);
                    dapMgr.renderAd(t, "&PG=" + i + "&AP=" + r, u, f)
                } catch (e) {}
            }
        })
    })
});
window.Mscom === undefined && (window.Mscom = {
    init: function() {
        this.ResponsiveBP3Width = 899;
        this.ResponsiveBP2Width = 679;
        this.ResponsiveBP1Width = 539;
        this.Direction = $("html").css("direction");
        this.Left = this.Direction == "ltr" ? "left" : "right";
        this.Right = this.Direction == "ltr" ? "right" : "left";
        var n = $('meta[name="MscomContentLocale"]').attr("content");
        this.ContentLocale = window.Mscom.Helper.IsValid(n) ? n : navigator.browserLanguage
    }
});
window.Mscom.BrowserDetect = {
    init: function() {
        this.browser = this.searchString(this.dataBrowser) || "Other";
        this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown"
    },
    searchString: function(n) {
        for (var i, t = 0; t < n.length; t++)
            if (i = n[t].string, this.versionSearchString = n[t].subString, i.indexOf(n[t].subString) != -1) return n[t].identity
    },
    searchVersion: function(n) {
        var t = n.indexOf(this.versionSearchString);
        if (t != -1) return parseFloat(n.substring(t + this.versionSearchString.length + 1))
    },
    dataBrowser: [{
        string: navigator.userAgent,
        subString: "Chrome",
        identity: "Chrome"
    }, {
        string: navigator.userAgent,
        subString: "MSIE",
        identity: "Explorer"
    }, {
        string: navigator.userAgent,
        subString: "Firefox",
        identity: "Firefox"
    }, {
        string: navigator.userAgent,
        subString: "Safari",
        identity: "Safari"
    }, {
        string: navigator.userAgent,
        subString: "Opera",
        identity: "Opera"
    }]
};
window.Mscom.Helper = {
    htmlEncode: function(n) {
        return n == "undefined" || n == null ? n : $("<div/>").text(n).html()
    },
    htmlDecode: function(n) {
        return n == "undefined" || n == null ? n : $("<div/>").html(n).text()
    },
    htmlAttrEncode: function(n) {
        return n = this.htmlEncode(n), n = n.replace(/"/g, "&quot;"), n.replace(/'/g, "&#039;")
    },
    isIE7: function() {
        return navigator.appVersion.indexOf("MSIE 7.") != -1
    },
    isResponsive: function() {
        return $(document.body).hasClass("mscom-responsive") ? !0 : !1
    },
    IsValid: function(n) {
        return n == null || n == "undefined" || n.length == 0 ? !1 : !0
    },
    setCookie: function(n, t, i, r, u, f) {
        var o = new Date,
            e;
        i && (i = i * 864e5);
        e = new Date(o.getTime() + i);
        document.cookie = n + "=" + escape(t) + (i ? ";expires=" + e.toGMTString() : "") + (r ? ";path=" + r : "") + (u ? ";domain=" + u : "") + (f ? ";secure" : "")
    },
    getCookie: function(n, t) {
        for (var u = document.cookie.split("; "), r, i = 0; i < u.length; i++)
            if (r = u[i].split("="), n === r[0]) return unescape(r[1]);
        return t
    },
    deleteCookie: function(n) {
        var t = new Date;
        t.setDate(t.getDate() - 1);
        document.cookie = n + "=;expires=" + t.toGMTString() + ";"
    },
    BiTrack: function(n, t, i, r) {
        if ($.bi) try {
            var u = $.bi.getLinkData(n);
            t && (u.title = t);
            this.IsValid(r) && (u.interactiontype = r);
            this.IsValid(i) && (u.cot = i);
            $.bi.record(u)
        } catch (f) {}
    },
    loadScript: function(n, t) {
        var i = document.createElement("script");
        i.src = n;
        document.body.appendChild(i);
        i.onload = i.onreadystatechange = i.onerror = function() {
            if ((!i || !i.readyState || !/^(?!(?:loaded|complete)$)/.test(i.readyState)) && typeof this.callbackComplete == "undefined") {
                try {
                    t && t()
                } catch (n) {
                    return
                }
                this.callbackComplete = !0
            }
        }
    },
    GetQueryValue: function(n, t) {
        var r = new RegExp("[\\?&]" + t + "=([^&#]*)", "gi"),
            i = r.exec(n);
        return i == null ? "" : decodeURIComponent(i[1].replace(/\+/g, " "))
    },
    GetViewport: function() {
        var n = window,
            t = "inner";
        return "innerWidth" in window || (t = "client", n = document.documentElement || document.body), {
            width: n[t + "Width"],
            height: n[t + "Height"]
        }
    }
};
String.prototype.format = function() {
    var n = arguments;
    return this.replace(/{(\d+)}/g, function(t, i) {
        return n[i]
    })
};
typeof $ != "undefined" && $(function() {
    if (Mscom.init(), $(document.body).removeClass("mscom-nonjs"), Mscom.BrowserDetect.init(), Mscom.BrowserDetect.browser == "Explorer") {
        var n = "";
        Mscom.BrowserDetect.version < 9 && (n = " lt-ie9", Mscom.BrowserDetect.version < 8 && (n += " lt-ie8", Mscom.BrowserDetect.version < 7 && (n += " lt-ie7")), $(document.body).addClass(n))
    }
});
Mscom.Accordion = function(n) {
    this.Control = $("#" + n);
    this.ItemClass = ".mscom-accordion-item";
    this.ItemContainerClass = ".mscom-accordion-item-container";
    this.ItemLinkClass = ".mscom-accordion-item-link";
    this.AriaExpanded = "aria-expanded";
    this.AriaSelected = "aria-selected";
    $($.proxy(this.Init, this))
};
Mscom.Accordion.prototype = {
    Init: function() {
        this.Control.find("> ul > " + this.ItemClass + " > " + this.ItemLinkClass).click($.proxy(this.ItemClick, this))
    },
    ItemClick: function(n) {
        n.preventDefault();
        var t = $(n.currentTarget),
            i = t.closest(this.ItemClass),
            r = i.children(this.ItemContainerClass);
        r.is(":hidden") ? (r.slideDown(200), Mscom.Helper.BiTrack(n.target, null, 5, 9), i.addClass("selected"), t.attr(this.AriaExpanded, !0).attr(this.AriaSelected, !0)) : (r.slideUp(200), Mscom.Helper.BiTrack(n.target, null, 5, 10), i.removeClass("selected"), t.attr(this.AriaExpanded, !1).attr(this.AriaSelected, !1))
    }
};
MSCom = MSCom || {};
MSCom.CMS = MSCom.CMS || {};
MSCom.CMS.LocalePickerLinkControl = {
    CookieName: "mslocale",
    CookieExpirationDays: 45,
    toggleLocaleFlyout: function(n) {
        $(".mscom-locale-flyout").is(":visible") ? (Mscom.Helper.BiTrack(n, null, 5, 10), $(".pagebody").show(), $(".mscom-locale-flyout").hide()) : (Mscom.Helper.BiTrack(n, null, 5, 9), $(".pagebody").hide(), $(".mscom-locale-flyout").show());
        $("html").animate({
            scrollTop: 0
        }, "200")
    },
    SetCookie: function(n) {
        var f = MSCom.CMS.LocalePickerLinkControl.CookieName,
            h = MSCom.CMS.LocalePickerLinkControl.CookieExpirationDays,
            u = {},
            t = "",
            e, i, o, r, s;
        document.cookie.length > 0 && document.cookie.indexOf(f + "=") != -1 && (t = document.cookie.substr(document.cookie.indexOf(f + "=") + f.length + 1), t.indexOf(";") > 0 && (t = t.substring(0, t.indexOf(";"))), t = t.replace(/\|/g, ","), t = t.replace(/'/g, '"'), typeof JSON != "undefined" && (u = JSON.parse(t)));
        u.u = n;
        e = new Date;
        e.setDate(e.getDate() + h);
        typeof JSON != "undefined" ? i = JSON.stringify(u) : t.length == 0 ? i = '{"u":"' + u.u + '"}' : t.indexOf('"u":') == -1 ? (o = '{"u":"' + u.u + '",', i = t.replace("{", o)) : (o = '"u":"' + u.u + '"', r = t.substr(t.indexOf('"u":')), r = r.indexOf(",") != -1 ? r.substring(0, r.indexOf(",")) : r.substring(0, r.length - 1), i = t.replace(r, o));
        i = i.replace(/"/g, "'");
        i = i.replace(/,/g, "|");
        s = f + "=" + i + ";expires=" + e.toUTCString() + ";path=/";
        document.cookie = s
    },
    bindLocaleLinks: function(n) {
        var t = $(".mscom-locale-flyout a");
        t.bind("click", function(t) {
            var i, r, u;
            t.preventDefault();
            i = $(this).attr("bi:locale");
            n(i);
            r = "/" + Mscom.ContentLocale + "/";
            u = location.pathname.contains(r) ? location.pathname.replace(r, "/" + i + "/") : "/" + i + location.pathname;
            document.location.href = u + window.location.search
        })
    },
    localePickerhandler: function(n) {
        var r, i, t;
        if (typeof this.fragmentloaded == "undefined") {
            r = this;
            this.fragmentloaded = !1;
            i = $(".mscom-locale-flyout .mscom-ajax-contentinclude").attr("id");
            t = MSCom.CMS.Mashup.ContentIncludes["_" + i] = new MSCom.CMS.Mashup.ContentInclude2($("#" + i));
            t.handler = this;
            t.Control = n.delegateTarget;
            var u = this.bindLocaleLinks,
                f = this.toggleLocaleFlyout,
                e = this.SetCookie;
            t.render(function() {
                u(e);
                f(n.delegateTarget);
                r.fragmentloaded = !0
            })
        } else if (this.fragmentloaded === !0) this.toggleLocaleFlyout(n.delegateTarget);
        else return;
        n.preventDefault()
    }
};
$(function() {
    $(".pagebody").length > 0 && $(".mscom-locale-flyout .mscom-ajax-contentinclude").length > 0 && $(".mscom-footer-localepicker a").bind("click", function(n) {
        MSCom.CMS.LocalePickerLinkControl.localePickerhandler(n)
    })
});
MSCom = MSCom || {};
MSCom.CMS = MSCom.CMS || {};
MSCom.CMS.Mashup = MSCom.CMS.Mashup || {};
MSCom.CMS.Mashup.ContentInclude = function(n, t, i, r, u, f, e, o) {
    e || (e = "");
    this._url = n ? n + "/api/controls/contentinclude/" + e : window.location.protocol + "//" + window.location.host + "/api/controls/contentinclude/" + e;
    this._collection = getQueryValue(window.location.href, "CollectionId");
    this._locale = i;
    this._pageId = t;
    this._ppaId = r;
    this._controlAttributeMapping = u;
    this._siteContextName = f;
    this._action = e;
    this._query = o
};
MSCom.CMS.Mashup.ContentInclude.prototype = {
    render: function(n) {
        var t, i;
        this._divToRender = n;
        t = this._url + "?locale=" + this._locale + "&pageId=" + this._pageId + "&site=" + this._siteContextName;
        this._collection && (t += "&CollectionId=" + this._collection);
        this._ppaId && (t += "&ProgrammableContentArea=" + this._ppaId);
        for (i in this._query) t += "&" + i + "=" + this._query[i];
        $.ajax({
            type: "POST",
            url: t,
            data: {
                controlAttributeMapping: this._controlAttributeMapping
            },
            xhrFields: {
                withCredentials: !0
            },
            success: function(t) {
                t != null && $(n).html(t)
            }
        })
    }
};
MSCom = MSCom || {};
MSCom.CMS = MSCom.CMS || {};
MSCom.CMS.Mashup = MSCom.CMS.Mashup || {};
MSCom.CMS.Mashup.ContentIncludes = MSCom.CMS.Mashup.ContentIncludes || {};
MSCom.CMS.Mashup.ContentInclude2 = function(n, t, i) {
    i || (i = "html");
    this._locale = n.attr("data-urllocale");
    this._url = t ? t + "/" + this._locale + "/api/controls/contentinclude/" + i : window.location.protocol + "//" + window.location.host + "/" + this._locale + "/api/controls/contentinclude/" + i;
    this._collection = this.getQueryValue(window.location.href, "CollectionId");
    this._pageId = n.attr("data-defaultPageId");
    this._ppaId = n.attr("data-ProgrammableContentArea");
    this._host = n.attr("data-Host");
    this._hostsegments = n.attr("data-host-segments");
    this._hostquery = n.attr("data-host-querystring");
    this._controlAttributeMapping = n.attr("data-ControlAttributesMapping");
    this._action = i;
    var r = n.attr("data-ajaxQuery");
    r && (this._query = JSON.parse(r));
    this._divToRender = "#" + n.attr("id")
};
MSCom.CMS.Mashup.ContentInclude2.prototype = {
    getQueryValue: function(n, t) {
        var r = new RegExp("[\\?&]" + t + "=([^&#]*)", "gi"),
            i = r.exec(n);
        return i == null ? "" : decodeURIComponent(i[1].replace(/\+/g, " "))
    },
    render: function(n) {
        var r = this._divToRender,
            t = this._url + "?pageId=" + this._pageId + "&host=" + this._host + "&segments=" + this._hostsegments + "&query=" + this._hostquery,
            i;
        this._collection && (t += "&CollectionId=" + this._collection);
        this._ppaId && (t += "&ProgrammableContentArea=" + this._ppaId);
        for (i in this._query) t += "&" + i + "=" + this._query[i];
        $.ajax({
            type: "POST",
            url: t,
            data: {
                controlAttributeMapping: this._controlAttributeMapping
            },
            xhrFields: {
                withCredentials: !0
            },
            success: function(t) {
                t != null && ($(r).html(t), n && n())
            }
        })
    }
};
$(document).ready(function() {
    $(".euCookie .mscom-alert-close").click(function(n) {
        n.preventDefault();
        $(".euCookie").hide();
        Mscom.Helper.setCookie("euCookie", 1, 365 / 2, "/", "microsoft.com");
        Mscom.Helper.BiTrack(n.target, null, 5, 10)
    })
});
Mscom.Header = function(n) {
    this.Control = $("#" + n);
    this.navToggleClass = ".mscom-header-navtogglelink";
    this.searchToggleClass = ".mscom-header-searchtogglelink";
    this.searchSectionClass = ".mscom-header-search-section";
    this.navSectionClass = ".mscom-header-nav-section";
    $($.proxy(this.Ready, this))
};
Mscom.Header.prototype = {
    Ready: function() {
        this.Control.find(this.searchToggleClass).click($.proxy(this.SearchToggle, this));
        this.Control.find(this.navToggleClass).click($.proxy(this.NavToggle, this))
    },
    SearchToggle: function(n) {
        n.preventDefault();
        $(this.searchSectionClass).is(":hidden") ? ($(this.searchSectionClass).slideDown(200), Mscom.Helper.BiTrack(n.currentTarget, "SearchToogle", 5, 9)) : ($(this.searchSectionClass).slideUp(200), Mscom.Helper.BiTrack(n.currentTarget, "SearchToogle", 5, 10))
    },
    NavToggle: function(n) {
        n.preventDefault();
        $(this.navSectionClass).is(":hidden") ? ($(this.navSectionClass).slideDown(200), Mscom.Helper.BiTrack(n.currentTarget, "NavToogle", 5, 9)) : ($(this.navSectionClass).slideUp(200), Mscom.Helper.BiTrack(n.currentTarget, "NavToogle", 5, 10))
    }
};
typeof $ != "undefined" && $(function() {
    Mscom && Mscom.Account && new Mscom.Account("divAccountControl")
});
Mscom.Account = function(n) {
    this.Control = $("#" + n);
    this._id = n;
    this.accountViewOneSection = ".mscom-accountcontrol-viewone";
    this.accountViewOneLinkClass = ".mscom-account-viewonelink";
    this._itemClass = ".mscom-accountcontrol-container";
    this._accountClass = ".mscom-account";
    this._accountLinkClass = ".mscom-account-link";
    this.Control.find(this._accountLinkClass).click($.proxy(this.ItemClick, this)).keydown($.proxy(this.ItemKeyDown, this));
    $(this.accountViewOneLinkClass).click($.proxy(this.ItemViewOneClick, this));
    $(document).click($.proxy(this.DocClick, this))
};
Mscom.Account.prototype = {
    DocClick: function(n) {
        var t = this.Control.find(".selected"),
            i;
        t.size() > 0 && (i = $.contains(t.get(0), n.target), i || this.HideAccounts(n))
    },
    ItemClick: function(n) {
        n.preventDefault();
        this.IsAccountVisible(n) ? this.HideAccounts(n) : this.ShowAccount(n)
    },
    ItemViewOneClick: function(n) {
        n.preventDefault();
        $(this.accountViewOneSection).is(":hidden") ? ($(this.accountViewOneSection).slideDown(200), Mscom.Helper.BiTrack(n.target, "AccountViewOne", 5, 9)) : ($(this.accountViewOneSection).slideUp(200), Mscom.Helper.BiTrack(n.target, "AccountViewOne", 5, 10))
    },
    ItemKeyDown: function(n) {
        n.which == 9 && n.shiftKey && this.HideAccounts(n)
    },
    IsAccountVisible: function(n) {
        return $(n.target).parents(this._itemClass, this.Control).find(this._accountClass).css("display") != "none"
    },
    ShowAccount: function(n) {
        $(n.target).parents(this._itemClass, this.Control).addClass("selected");
        Mscom.Helper.BiTrack(n.target, "Account", 5, 9)
    },
    HideAccounts: function(n) {
        $(n.target).parents(this._itemClass, this.Control).removeClass("selected");
        Mscom.Helper.BiTrack(n.target, "Account", 5, 10)
    }
};
typeof JSON != "object" && (JSON = {}),
    function() {
        "use strict";

        function i(n) {
            return n < 10 ? "0" + n : n
        }

        function o(n) {
            return e.lastIndex = 0, e.test(n) ? '"' + n.replace(e, function(n) {
                var t = s[n];
                return typeof t == "string" ? t : "\\u" + ("0000" + n.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + n + '"'
        }

        function u(i, f) {
            var s, l, h, a, v = n,
                c, e = f[i];
            e && typeof e == "object" && typeof e.toJSON == "function" && (e = e.toJSON(i));
            typeof t == "function" && (e = t.call(f, i, e));
            switch (typeof e) {
                case "string":
                    return o(e);
                case "number":
                    return isFinite(e) ? String(e) : "null";
                case "boolean":
                case "null":
                    return String(e);
                case "object":
                    if (!e) return "null";
                    if (n += r, c = [], Object.prototype.toString.apply(e) === "[object Array]") {
                        for (a = e.length, s = 0; s < a; s += 1) c[s] = u(s, e) || "null";
                        return h = c.length === 0 ? "[]" : n ? "[\n" + n + c.join(",\n" + n) + "\n" + v + "]" : "[" + c.join(",") + "]", n = v, h
                    }
                    if (t && typeof t == "object")
                        for (a = t.length, s = 0; s < a; s += 1) typeof t[s] == "string" && (l = t[s], h = u(l, e), h && c.push(o(l) + (n ? ": " : ":") + h));
                    else
                        for (l in e) Object.prototype.hasOwnProperty.call(e, l) && (h = u(l, e), h && c.push(o(l) + (n ? ": " : ":") + h));
                    return h = c.length === 0 ? "{}" : n ? "{\n" + n + c.join(",\n" + n) + "\n" + v + "}" : "{" + c.join(",") + "}", n = v, h
            }
        }
        typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + i(this.getUTCMonth() + 1) + "-" + i(this.getUTCDate()) + "T" + i(this.getUTCHours()) + ":" + i(this.getUTCMinutes()) + ":" + i(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
            return this.valueOf()
        });
        var f = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            e = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            n, r, s = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            t;
        typeof JSON.stringify != "function" && (JSON.stringify = function(i, f, e) {
            var o;
            if (n = "", r = "", typeof e == "number")
                for (o = 0; o < e; o += 1) r += " ";
            else typeof e == "string" && (r = e);
            if (t = f, f && typeof f != "function" && (typeof f != "object" || typeof f.length != "number")) throw new Error("JSON.stringify");
            return u("", {
                "": i
            })
        });
        typeof JSON.parse != "function" && (JSON.parse = function(n, t) {
            function r(n, i) {
                var f, e, u = n[i];
                if (u && typeof u == "object")
                    for (f in u) Object.prototype.hasOwnProperty.call(u, f) && (e = r(u, f), e !== undefined ? u[f] = e : delete u[f]);
                return t.call(n, i, u)
            }
            var i;
            if (n = String(n), f.lastIndex = 0, f.test(n) && (n = n.replace(f, function(n) {
                    return "\\u" + ("0000" + n.charCodeAt(0).toString(16)).slice(-4)
                })), /^[\],:{}\s]*$/.test(n.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return i = eval("(" + n + ")"), typeof t == "function" ? r({
                "": i
            }, "") : i;
            throw new SyntaxError("JSON.parse");
        })
    }();
window.Mscom === undefined && (window.Mscom = {});
typeof $ != "undefined" && $(function() {
    Mscom && Mscom.Nav && new Mscom.Nav(".mscom-nav")
});
Mscom.Nav = function(n) {
    this.Control = $(n);
    this.navFlyoutLinkClass = ".mscom-nav-item-flyout-link";
    this.navFlyoutClass = ".mscom-nav-flyout";
    this.navFlyoutItemClass = ".mscom-navitem";
    $($.proxy(this.Ready, this))
};
Mscom.Nav.prototype = {
    Ready: function() {
        $(document).click($.proxy(this.DocClick, this));
        $("a").focus($.proxy(this.DocClick, this));
        this.Control.find(this.navFlyoutLinkClass).click($.proxy(this.navItemClick, this))
    },
    DocClick: function(n) {
        var t = this.Control.find(".selected"),
            i;
        t.size() > 0 && (i = $.contains(t.get(0), n.target), i || this.hideAllFlyout())
    },
    navItemClick: function(n) {
        n.preventDefault();
        this.IsFlyoutVisible(n) ? this.hideFlyout(n) : this.showFlyout(n)
    },
    showFlyout: function(n) {
        this.hideAllFlyout();
        $(n.target).parents(this.navFlyoutItemClass).addClass("selected");
        jQuery.browser.opera || jQuery.browser.msie && document.documentMode <= 7 ? $(n.target).parents(this.navFlyoutItemClass).find(this.navFlyoutClass).show() : $(n.target).parents(this.navFlyoutItemClass).find(this.navFlyoutClass).slideDown(200);
        Mscom.Helper.BiTrack(n.target, null, 5, 9)
    },
    hideFlyout: function(n) {
        $(n.target).parents(this.navFlyoutItemClass).removeClass("selected");
        jQuery.browser.opera || jQuery.browser.msie && document.documentMode <= 7 ? $(n.target).parents(this.navFlyoutItemClass).find(this.navFlyoutClass).hide() : $(n.target).parents(this.navFlyoutItemClass).find(this.navFlyoutClass).slideUp(200);
        Mscom.Helper.BiTrack(n.target, null, 5, 10)
    },
    hideAllFlyout: function() {
        var n = this.Control.find(".selected"),
            t;
        n.size() > 0 && (t = $(n.get(0)).find(".mscom-link"), Mscom.Helper.BiTrack(t, null, 5, 10));
        this.Control.find(this.navFlyoutItemClass).removeClass("selected");
        this.Control.find(this.navFlyoutItemClass).find(this.navFlyoutClass).slideUp(200)
    },
    IsFlyoutVisible: function(n) {
        return !$(n.target).parents(this.navFlyoutItemClass).find(this.navFlyoutClass).is(":hidden")
    }
};
window.Mscom === undefined && (window.Mscom = {});
typeof $ != "undefined" && $(function() {
    if (Mscom && Mscom.Pivot) var n = new Mscom.Pivot(".mscom-pivot-nav"),
        t = new Mscom.PivotTab(".mscom-pivot-tab")
});
Mscom.Pivot = function(n) {
    this.Control = $(n);
    this.showItemAlways = !1;
    this.Control.find(".mscom-pivot-container").hasClass("mscom-pivot-showitemalways") && (this.showItemAlways = !0);
    this.pivotFlyoutLinkClass = ".mscom-pivot-item-flyout-link";
    this.pivotFlyoutClass = ".mscom-pivot-flyout";
    this.pivotFlyoutItemClass = ".mscom-pivot-item";
    this.pivotContainerClass = ".mscom-pivot-container";
    $($.proxy(this.Ready, this))
};
Mscom.Pivot.prototype = {
    Ready: function() {
        this.Control.find(this.pivotFlyoutLinkClass).click($.proxy(this.pivotItemClick, this));
        this.showItemAlways || $(document).click($.proxy(this.DocClick, this))
    },
    DocClick: function(n) {
        var i = this.Control.find(".selected"),
            t;
        i.size() > 0 && (t = $.contains(i.get(0), n.target), console.log(t), t || this.hideAllFlyout())
    },
    pivotItemClick: function(n) {
        n.preventDefault();
        this.IsFlyoutVisible(n) && !this.showItemAlways ? this.hideFlyout(n) : this.showFlyout(n)
    },
    showFlyout: function(n) {
        this.hideAllFlyout();
        $(n.target).parents(this.pivotFlyoutItemClass).addClass("selected");
        Mscom.Helper.BiTrack(n.target, null, 5, 9)
    },
    hideFlyout: function(n) {
        $(n.target).parents(this.pivotFlyoutItemClass).removeClass("selected");
        Mscom.Helper.BiTrack(n.target, null, 5, 10)
    },
    hideAllFlyout: function() {
        this.Control.find(this.pivotFlyoutItemClass).removeClass("selected")
    },
    IsFlyoutVisible: function(n) {
        return !$(n.target).parents(this.pivotFlyoutItemClass).find(this.pivotFlyoutClass).is(":hidden")
    }
};
Mscom.PivotTab = function(n) {
    this.Control = $(n);
    this.showItemAlways = !1;
    this.Control.find(".mscom-pivot-container").hasClass("mscom-pivot-showitemalways") && (this.showItemAlways = !0);
    this.pivotFlyoutLinkClass = ".mscom-pivot-item-flyout-link";
    this.pivotFlyoutClass = ".mscom-pivot-flyout";
    this.pivotFlyoutItemClass = ".mscom-pivot-item";
    this.pivotContainerClass = ".mscom-pivot-container";
    $($.proxy(this.Ready, this))
};
Mscom.PivotTab.prototype = {
    Ready: function() {
        this.Control.find(this.pivotFlyoutLinkClass).click($.proxy(this.pivotItemClick, this));
        !this.showItemAlways
    },
    DocClick: function(n) {
        var t = this.Control.find(".selected"),
            i;
        t.size() > 0 && (i = $.contains(t.get(0), n.target), i || this.hideAllFlyout())
    },
    pivotItemClick: function(n) {
        n.preventDefault();
        this.IsFlyoutVisible(n) && !this.showItemAlways ? this.hideFlyout(n) : this.showFlyout(n)
    },
    showFlyout: function(n) {
        Mscom.Helper.BiTrack(n.target, null, 5, 4);
        this.hideAllFlyout();
        $(n.target).addClass("selected");
        this.Control.find($(n.target).attr("id").replace("a-", "#")).addClass("selected")
    },
    hideFlyout: function(n) {
        Mscom.Helper.BiTrack(n.target, null, 5, 10);
        $(n.target).removeClass("selected");
        this.Control.find($(n.target).attr("id").replace("a-", "#")).removeClass("selected")
    },
    hideAllFlyout: function() {
        this.Control.find("*").removeClass("selected")
    },
    IsFlyoutVisible: function(n) {
        return $(n.target).hasClass("selected")
    }
};
Mscom.Popup = function(n) {
    this.Control = $(n);
    this.CloseOnOutSideClick = this.Control.attr("data-closeonoutsideclick");
    this.OpenInteractionType = this.Control.attr("data-openinteractiontype");
    this.CloseInteractionType = this.Control.attr("data-closeinteractiontype");
    Mscom.Helper.IsValid(this.OpenInteractionType) || (this.OpenInteractionType = 9);
    Mscom.Helper.IsValid(this.CloseInteractionType) || (this.CloseInteractionType = 10);
    this.Link = $(this.Control.find(".mscom-popup-link:first"));
    this.CloseButton = $(this.Control.find(".mscom-popup-close:first"));
    this.PopupContainer = $(this.Control.find(".mscom-popup-container:first"));
    this.IsContentIncludeLoaded = !1;
    this.ContentIncludeCount = 0;
    $.proxy(this.Init, this)()
};
Mscom.Popup.prototype = {
    Init: function() {
        this.Link.click($.proxy(this.OpenPopup, this));
        this.CloseButton.click($.proxy(this.ClosePopup, this));
        $(document).on("keydown", $.proxy(this.DocumentKeyDown, this));
        this.CloseOnOutSideClick.toLowerCase() == "true" && ($(this.Control.find(".mscom-popup-mask:first")).click($.proxy(this.ClosePopup, this)), navigator.userAgent.match(/iemobile/i) && $(this.Control.find(".mscom-popup-layout:first")).click(function() {}))
    },
    DocumentKeyDown: function(n) {
        n.keyCode === 27 && this.CloseButton.trigger("click")
    },
    GetContenInclude: function() {
        var n = this;
        this.PopupContainer.find(".mscom-ajax-contentinclude").not(this.PopupContainer.find(".mscom-popup .mscom-ajax-contentinclude")).each(function() {
            var t = $(this),
                i;
            t.html().length === 0 && (n.ContentIncludeCount === 0 && n.showProgressBar(), n.ContentIncludeCount++, i = t.attr("data-defaultpageid"), MSCom.CMS.Mashup.ContentIncludes["_" + i] = new MSCom.CMS.Mashup.ContentInclude2(t), MSCom.CMS.Mashup.ContentIncludes["_" + i].render($.proxy(n.hideProgressBar, n)))
        })
    },
    showProgressBar: function() {
        this.PopupContainer.find(".mscom-popup-content").append("<div class='mscom-progressbar'><div>")
    },
    hideProgressBar: function() {
        this.ContentIncludeCount--;
        this.ContentIncludeCount === 0 && this.PopupContainer.find(".mscom-progressbar").remove()
    },
    OpenPopup: function(n) {
        n.preventDefault();
        Mscom.Helper.BiTrack(n.target, null, 5, this.OpenInteractionType);
        $("html").css("overflow", "hidden");
        this.IsContentIncludeLoaded || (this.IsContentIncludeLoaded = !0, this.GetContenInclude());
        this.PopupContainer.addClass("mscom-show-popup");
        this.PopupContainer.trigger("popupOpened")
    },
    ClosePopup: function(n) {
        n.preventDefault();
        Mscom.Helper.BiTrack(n.target, "close", 5, this.CloseInteractionType);
        $("html").css("overflow", "");
        this.PopupContainer.removeClass("mscom-show-popup");
        this.PopupContainer.trigger("popupClosed")
    }
};
typeof $ != "undefined" && $(function() {
    Mscom && Mscom.Popup && $(".mscom-popup").each(function(n) {
        Mscom.Popup.Popups || (Mscom.Popup.Popups = []);
        Mscom.Popup.Popups[n] = new Mscom.Popup(this)
    })
});
Mscom.Search = function(n, t, i, r, u, f, e, o, s, h) {
    this.FadeSpeed = 200;
    this.watermarkTimer = null;
    this.dropdownTimer = null;
    this.IsAutoFocus = f;
    this.Control = $("#" + n);
    this.Textbox = this.Control.find(".mscom-search-TextBox");
    this.Button = this.Control.find(".mscom-search-Button");
    this.Control.find("#" + t).hide();
    this.Scopes = u;
    this.CurrentScope = i;
    this.Control.find(".mscom-search-Source").val(this.CurrentScope);
    this.suggestionsRequestedText = "";
    this.suggestionsRequestedScope = -1;
    this.CurrentLocale = r;
    this.WatermarkText = this.Textbox.attr("title");
    this.TextboxWidth = this.Textbox.width() + 12;
    this.processedRequestTime = 0;
    this.BiTags = o;
    this.SearchHistoryOptions = {
        EnableSearchHistory: e,
        CookieName: "search-history",
        CookieExpiresDays: 5,
        CookiePath: "/",
        CookieDomain: "microsoft.com",
        MaxCount: 8,
        HideSearchScopes: !0
    };
    this.EnableQuickSearch = s;
    s === !0 && h && $.trim(h.ServiceUrl).length > 0 && h.MaxCount > 0 ? this.QuickSearchFeature = new Mscom.Search.QuickSearchFeature(this, h) : this.EnableQuickSearch = !1;
    this.CurrentVisibleSearchHistory = [];
    this.MaxAutoSuggestionCount = 8;
    this.SearchHistoryContainer = this.Control.find(".mscom-search-history");
    this.AutoSuggestionContainer = this.Control.find(".mscom-search-Suggestions");
    this.SuggestionBorderStyle = this.AutoSuggestionContainer.css("border-top-width") + " " + this.AutoSuggestionContainer.css("border-top-style") + " " + this.AutoSuggestionContainer.css("border-top-color");
    $($.proxy(this.initV3, this))
};
Mscom.Search.prototype = {
    initV3: function() {
        var n = this,
            t, i;
        this.SearchHistoryOptions.EnableSearchHistory && this.SearchHistoryOptions.HideSearchScopes && this.hideSearchScopes();
        this.IsAutoFocus && this.Textbox.get(0).focus();
        this.Control.find("#SearchControlForm").submit(function(t) {
            n.SearchClick(t)
        });
        this.Control.find(".mscom-search-Button").click(function(t) {
            n.SearchClick(t)
        });
        this.Textbox.bind("keydown", function(t) {
            n.textboxKeydown(t)
        }).bind("keyup", function(t) {
            n.textboxKeyup(t)
        }).bind("input", function(t) {
            n.textboxInput(t)
        }).bind("cut paste", function() {
            n.handleCutAndPaste()
        });
        window.location.href.indexOf("q=") === -1 ? this.Textbox.val("") : this.lastTypedText = this.Textbox.val();
        this.Control.on("mouseenter", ".mscom-search-Dropdown a", function(t) {
            n.selectDropdownItem($(t.currentTarget), !1)
        });
        this.Control.on("mouseleave", ".mscom-search-Dropdown a", function() {
            n.selectDropdownItem(null, !1)
        });
        t = function() {
            n.dropdownTimer = window.setTimeout(function() {
                n.Control.find(".mscom-search-Dropdown").slideUp(200)
            }, 200)
        };
        this.Control.on("focus", ".mscom-search-TextBox, .mscom-search-Button, .mscom-search-Dropdown a", $.proxy(n.showDropDown, n));
        this.Control.on("blur", ".mscom-search-TextBox, .mscom-search-Button, .mscom-search-Dropdown a", t);
        this.Control.find(".mscom-search-Sources ul a").click(function(t) {
            n.selectSource($(this));
            t.preventDefault()
        });
        i = window.attachEvent ? "click" : "mousedown";
        this.Control.on(i, ".mscom-search-Suggestions ul a", function() {
            var t = $(this).text();
            n.Textbox.val(t);
            n.SearchHistoryOptions.EnableSearchHistory && n.saveSearchHistory(t);
            n.biTrack()
        });
        if (this.SearchHistoryOptions.EnableSearchHistory) this.SearchHistoryContainer.on("mousedown", "ul a", function() {
            var t = $(this).text();
            n.Textbox.val(t);
            n.saveSearchHistory(t);
            n.biTrack()
        })
    },
    showDropDown: function() {
        this.dropdownTimer != null && (window.clearTimeout(this.dropdownTimer), this.dropdownTimer = null);
        this.Control.find(".mscom-search-Dropdown").slideDown(200);
        this.SearchHistoryOptions.EnableSearchHistory && this.Textbox.val().length === 0 && this.showSearchHistory("")
    },
    selectSource: function(n) {
        var t, i;
        window.clearTimeout(this.dropdownTimer);
        this.dropdownTimer = null;
        t = this.Control.find(".mscom-search-Sources li").index(n.parent("li"));
        t !== this.CurrentScope && (this.CurrentScope = t, this.Control.find(".mscom-search-Source").val(t), this.Control.find(".mscom-search-Sources li").removeClass("currentScope"), n.parent("li").addClass("currentScope"), i = $.trim(n.text()), this.Textbox.attr("title", i), this.Button.attr("title", i), this.getSuggestions());
        this.Textbox.get(0).focus()
    },
    shiftHighlight: function(n, t) {
        var r, u, f, e = ".mscom-search-Suggestions a:visible, .mscom-search-history a:visible",
            o = ".mscom-search-Suggestions a.selected, .mscom-search-history a.selected",
            i;
        this.EnableQuickSearch ? (r = this.Control.find(e + ", .quick-search-item:visible"), u = this.Control.find(o + ", .quick-search-item.selected")) : (r = this.Control.find(e), u = this.Control.find(o));
        f = u.length ? r.index(u) : t === "down" ? -1 : r.length;
        i = f;
        t === "down" ? (i++, i >= r.length && (i = -1)) : t === "up" && (i === 0 ? i = -1 : i--);
        i !== -1 ? this.selectDropdownItem($(r[i]), !0) : this.selectDropdownItem(null, !1)
    },
    selectDropdownItem: function(n, t) {
        this.Control.find(".mscom-search-Dropdown a").removeClass("selected");
        this.Control.find(".mscom-search-Suggestions a, .mscom-search-history a").removeClass("selected");
        this.EnableQuickSearch && this.Control.find(".quick-search-item").removeClass("selected");
        n ? (n.addClass("selected"), t && (n.closest(".mscom-search-Suggestions").length || this.SearchHistoryOptions.EnableSearchHistory && n.closest(".mscom-search-history").length ? this.Textbox.val(n.text()) : this.restoreLastTypedText())) : this.SearchHistoryOptions.EnableSearchHistory || this.restoreLastTypedText()
    },
    restoreLastTypedText: function() {
        this.Textbox.val(this.lastTypedText)
    },
    textboxInput: function() {
        this.keyDown == !1 && (this.getSuggestions(), this.EnableQuickSearch && this.Textbox.val().length === 0 && this.QuickSearchFeature.clearSuggestions())
    },
    textboxKeydown: function(n) {
        var t, i, r;
        if (this.keyDown || (this.textOnKeydown = this.Textbox.val()), this.keyDown = !0, n.which === 13) {
            if (t = this.Control.find(".mscom-search-Sources a.selected"), t.length && t.closest("li.currentScope").length === 0) {
                this.selectSource(t);
                n.preventDefault();
                return
            }
            if (this.EnableQuickSearch && (i = this.Control.find(".quick-search-item.selected:visible:first"), i.length > 0 && (r = i.attr("url"), r))) {
                window.location.href = r;
                n.preventDefault();
                return
            }
        }
    },
    textboxKeyup: function(n) {
        if (this.keyDown = !1, n.which === 40) return this.shiftHighlight(n, "down"), !1;
        if (n.which === 38) return this.shiftHighlight(n, "up"), !1;
        this.Textbox.val() !== this.textOnKeydown && (this.lastTypedText = this.Textbox.val(), this.IsAutoFocus && this.showDropDown(), this.getSuggestions(), this.SearchHistoryOptions.EnableSearchHistory && this.showSearchHistory(this.Textbox.val()), this.EnableQuickSearch && this.QuickSearchFeature.showSuggestions(this.Textbox.val()))
    },
    handleCutAndPaste: function() {
        var n = this;
        setTimeout(function() {
            n.lastTypedText = n.Textbox.val();
            n.getSuggestions()
        }, 0)
    },
    getSuggestions: function() {
        if (this.MaxAutoSuggestionCount > 0) {
            var i = this.leftTrim(this.Textbox.val().replace(/\s+/gi, " ")),
                t, f, u, n, e, r;
            if (i !== this.suggestionsRequestedText || this.CurrentScope !== this.suggestionsRequestedScope) {
                this.suggestionsRequestedText = i;
                this.suggestionsRequestedScope = this.CurrentScope;
                u = (new Date).getTime();
                try {
                    t = this.Scopes[this.CurrentScope];
                    t.AutoSuggest && i.length >= t.AutoSuggest.MinChars ? (f = this["processSuggestions_" + t.AutoSuggest.ResultType], n = this, e = this.formatAutoSuggestRequest(i, t), r = {
                        success: function(r) {
                            if (u > n.processedRequestTime) {
                                n.processedRequestTime = u;
                                var e = n.MaxAutoSuggestionCount;
                                n.SearchHistoryOptions.EnableSearchHistory && (e = n.calculateMaxAutoSuggestionCount());
                                e > 0 && f.call(n, r, i, t, e, $.proxy(n.isDuplicate, n))
                            }
                        }
                    }, t.AutoSuggest.JsonpCallbackName ? (r.jsonp = "cb", r.dataType = "jsonp") : r.dataType = "json", $.ajax(e, r)) : (this.processedRequestTime = u, this.hideSuggestions())
                } catch (o) {}
            }
        }
    },
    processSuggestions_bingJSON: function(n, t, i, r, u) {
        var f, e, o, h = !1,
            s;
        try {
            if (n.AS.Results)
                for (e = n.AS.Results[0].Suggests, f = 0; f < e.length; ++f)
                    if (e[f].Txt) {
                        h = !0;
                        break
                    }
        } catch (c) {
            return
        }
        if (h) {
            for (this.clearSuggestions(), s = 0, f = 0; f < e.length; ++f)
                if (o = e[f], o.Txt) {
                    if (u.call(this, o.Txt)) continue;
                    if (this.addSuggestion(o.Txt, this.formatSearchRequest(Mscom.Helper.htmlDecode(o.Txt), i)), s++, s + 1 >= r) break
                }
            this.showSuggestions()
        } else this.hideSuggestions()
    },
    processSuggestions_smcUnmarkedArray: function(n, t, i, r, u) {
        var f, e, o;
        if (n && n.length > 1) {
            for (this.clearSuggestions(), o = 0, f = 1; f < n.length; ++f)
                if (!u.call(this, n[f]) && (e = Mscom.Helper.htmlEncode(n[f]), this.addSuggestion(this.highlightQuery(e, t), this.formatSearchRequest(e, i)), o++, o >= r)) break;
            this.showSuggestions()
        } else this.hideSuggestions()
    },
    processSuggestions_apiUnmarkedArray: function(n, t, i, r, u) {
        var f, e, o;
        if (n && n.length > 0) {
            for (this.clearSuggestions(), o = 0, f = 0; f < n.length; ++f)
                if (!u.call(this, n[f]) && (e = Mscom.Helper.htmlEncode(n[f]), this.addSuggestion(this.highlightQuery(e, t), this.formatSearchRequest(e, i)), o++, o >= r)) break;
            this.showSuggestions()
        } else this.hideSuggestions()
    },
    highlightQuery: function(n, t) {
        var i = n.toLowerCase().indexOf(t.toLowerCase()),
            r = t.length;
        return i === -1 ? n : i === 0 ? n.substr(0, r) + "<strong>" + n.substring(r) + "<\/strong>" : "<strong>" + n.substr(0, i) + "<\/strong>" + n.substr(i, r) + "<strong>" + n.substring(r + i) + "<\/strong>"
    },
    formatAutoSuggestRequest: function(n, t) {
        return this.formatRequest(Mscom.Helper.htmlDecode(t.AutoSuggest.ServiceUrlFormat), n)
    },
    formatSearchRequest: function(n, t) {
        return this.formatRequest(t.SearchUrlFormat, n)
    },
    formatRequest: function(n, t) {
        return n.replace(/\{0\}/g, encodeURIComponent(t)).replace(/\{1\}/g, encodeURIComponent(this.CurrentLocale))
    },
    clearSuggestions: function() {
        this.Control.find(".mscom-search-Suggestions ul").html("")
    },
    addSuggestion: function(n, t) {
        this.Control.find(".mscom-search-Suggestions ul").append("<li><a href='" + t.replace(/'/g, "&#39;") + "' tabindex='-1' bi:track='false'><span class='mscom-search-Text'>" + n + "<\/span><\/a><\/li>")
    },
    fixDropdownContentOldIE: function(n) {
        var u, t, i, r;
        $.browser.msie && parseInt($.browser.version) <= 7 && (u = this, setTimeout(function() {
            t = u.Control.find(n);
            r = t.css("display");
            t.css("display", "");
            t.css("display", r);
            i = u.Control.find(".mscom-search-Sources");
            r = i.css("display");
            i.css("display", "");
            i.css("display", r)
        }, 1))
    },
    hideSuggestions: function() {
        var n = this;
        this.AutoSuggestionContainer.slideUp(200, function() {
            n.fixDropdownContentOldIE(".mscom-search-Suggestions");
            n.AutoSuggestionContainer.find("a.selected").removeClass("selected");
            (n.SearchHistoryOptions.EnableSearchHistory || n.EnableQuickSearch) && n.updateBorderStyle()
        })
    },
    showSuggestions: function() {
        var n = this;
        this.AutoSuggestionContainer.slideDown(200, function() {
            n.fixDropdownContentOldIE(".mscom-search-Suggestions");
            (n.SearchHistoryOptions.EnableSearchHistory || n.EnableQuickSearch) && (n.restrictSuggestionItemsDisplayCount(), n.updateBorderStyle())
        })
    },
    shiftFocus: function() {
        window.setTimeout($.proxy(function() {
            this.Textbox.get(0).focus()
        }, this), 0)
    },
    IsSuggestionsServiceEnabled: function() {
        return location.protocol.toString().toLowerCase() == "http:" ? !0 : !1
    },
    getSearchHistory: function() {
        var n = Mscom.Helper.getCookie(this.SearchHistoryOptions.CookieName, null);
        return Mscom.Helper.IsValid(n) ? JSON.parse(n) : []
    },
    reorderSearchHistory: function(n) {
        var t = this.getSearchHistory(),
            i = $.inArray(n, t);
        return i === 0 ? t : (i > 0 ? (t.splice(i, 1), t.splice(0, 0, n)) : (t.splice(0, 0, n), t.length >= this.SearchHistoryOptions.MaxCount && (t.length = this.SearchHistoryOptions.MaxCount)), t)
    },
    filterSearchHistory: function(n) {
        var i = [],
            r = this.getSearchHistory(),
            t;
        if (Mscom.Helper.IsValid(n)) {
            for (t = 0; t < r.length; t++)
                if (r[t].indexOf(n) === 0 && (i.push(r[t]), i.length >= this.SearchHistoryOptions.MaxCount)) break
        } else i = r;
        return i
    },
    saveSearchHistory: function(n) {
        if (Mscom.Helper.IsValid(n)) {
            n = $.trim(n.replace(/\s+/gi, " "));
            var t = this.reorderSearchHistory(n),
                i = JSON.stringify(t);
            Mscom.Helper.setCookie(this.SearchHistoryOptions.CookieName, i, this.SearchHistoryOptions.CookieExpiresDays, this.SearchHistoryOptions.CookiePath, this.SearchHistoryOptions.CookieDomain)
        }
    },
    clearSearchHistory: function() {
        this.SearchHistoryContainer.find("ul").html("")
    },
    addSearchHistory: function(n, t) {
        this.SearchHistoryContainer.find("ul").append("<li><a href='" + t.replace(/'/g, "&#39;") + "' tabindex='-1' bi:track='false'><span class='mscom-search-Text'>" + n + "<\/span><\/a><\/li>")
    },
    hideSearchHistory: function() {
        var n = this;
        this.clearSearchHistory();
        this.SearchHistoryContainer.slideUp(200, function() {
            n.fixDropdownContentOldIE(".mscom-search-history");
            $(this).find("a.selected").removeClass("selected")
        })
    },
    hideSearchScopes: function() {
        var n = this.Control.find(".mscom-search-Sources");
        n.hide();
        this.updateBorderStyle()
    },
    updateBorderStyle: function() {
        var i = this.Control.find(".mscom-search-Sources").is(":visible"),
            t, n;
        this.Control.find(".mscom-search-suggestion-container").css({
            "border-bottom": "none",
            "border-top": "none"
        });
        this.Control.find(".mscom-search-suggestion-container:visible:last").css({
            "border-bottom": i ? "none" : this.SuggestionBorderStyle,
            "border-top": "none"
        });
        this.Control.find(".mscom-search-suggestion-container:visible:first").css("border-top", this.SuggestionBorderStyle);
        this.EnableQuickSearch && (t = !1, n = this.Control.find(".mscom-search-suggestion-container:visible"), n.length === 1 && n.hasClass("mscom-search-quick-search") && (t = !0), t && n.find(".quick-search-item:last").css("border-bottom", "none"))
    },
    showSearchHistory: function(n) {
        var i;
        n = $.trim(n.replace(/\s+/gi, " "));
        var u = this,
            f, t, e = this.Scopes[this.CurrentScope],
            r = this.filterSearchHistory(n);
        if (this.CurrentVisibleSearchHistory.length = 0, r && r.length > 0) {
            for (this.clearSearchHistory(), i = 0; i < r.length; i++)
                if (t = Mscom.Helper.htmlEncode(r[i]), f = n.length > 0 ? this.highlightQuery(t, n) : t, this.addSearchHistory(f, this.formatSearchRequest(t, e)), this.CurrentVisibleSearchHistory.push(t), i + 1 >= this.SearchHistoryOptions.MaxCount) break;
            this.SearchHistoryContainer.slideDown(200, function() {
                u.restrictSuggestionItemsDisplayCount();
                u.updateBorderStyle();
                u.fixDropdownContentOldIE(".mscom-search-history")
            })
        } else this.hideSearchHistory()
    },
    calculateMaxAutoSuggestionCount: function() {
        var n = 0,
            t = this.getVisibleSearchHistoryCount();
        return t < this.SearchHistoryOptions.MaxCount && (n = this.SearchHistoryOptions.MaxCount - t), n
    },
    getVisibleSearchHistoryCount: function() {
        return this.SearchHistoryContainer.find("ul li").length
    },
    isDuplicate: function(n) {
        return this.SearchHistoryOptions.EnableSearchHistory ? $.inArray(n, this.CurrentVisibleSearchHistory) !== -1 : !1
    },
    leftTrim: function(n) {
        return n.replace(/^\s+/, "")
    },
    restrictSuggestionItemsDisplayCount: function() {
        var t, n;
        if (this.EnableQuickSearch && (t = this.Control.find(".mscom-search-suggestion-container:visible > ul li").length, t > this.MaxAutoSuggestionCount)) {
            var u = t - this.MaxAutoSuggestionCount,
                i = this.Control.find(".mscom-search-history:visible > ul li, .mscom-search-Suggestions:visible > ul li"),
                r = 0;
            for (n = i.length - 1; n >= 0; n--)
                if ($(i[n]).remove(), r++, r >= u) break;
            this.Control.find(".mscom-search-suggestion-container").each(function() {
                var n = $(this);
                n.find("> ul li").length === 0 && n.hide()
            })
        }
    },
    SearchClick: function(n) {
        n.preventDefault();
        var r = this.Scopes[this.CurrentScope],
            i, t = $.trim(this.Control.find(".mscom-search-TextBox").val());
        t.length ? (this.SearchHistoryOptions.EnableSearchHistory && this.saveSearchHistory(t), i = Mscom.Helper.htmlDecode(r.SearchUrlFormat).replace(/\{0\}/g, encodeURIComponent(t)).replace(/\{1\}/g, encodeURIComponent(this.CurrentLocale)), window.location = i, this.biTrack(n)) : this.Textbox.get(0).focus()
    },
    biTrack: function() {
        var t, i;
        if ($.bi) {
            var u = this.Control.find("form"),
                r = this.Control.find(".mscom-search-TextBox").val(),
                n = $.bi.getLinkData(u);
            if (n.interactiontype = 3, n.cot = 4, n.title = "searchbtn", n.searchtype = "MSCOM", n.searchquery = r, n.linkid = "searchmscomclick", n["wcs.cn"] = "searchbtn", n.priorterm = r, n["wcs.ct"] = window.location.href, Mscom.Helper.IsValid(this.BiTags)) {
                t = JSON.parse(this.BiTags);
                for (i in t) n[i] = t[i]
            }
            $.bi.record(n)
        }
    }
};
Mscom.Search.QuickSearchFeature = function(n, t) {
    this.Options = {
        MaxCount: 3,
        MaxDescriptionLength: 100,
        ContainerSelector: ".mscom-search-quick-search"
    };
    $.extend(this.Options, t);
    this.Container = n.Control.find(this.Options.ContainerSelector);
    this.QuickSearchList = this.Container.find(".quick-search-list");
    this.SearchInstance = n;
    this.LatestRequestUrl = "";
    this.Options.DeeplinksMapping = [{
        MetaKey: "BuyUrl",
        DisplayText: this.Options.Deeplinks.BuyLinkText
    }, {
        MetaKey: "SupportUrl",
        DisplayText: this.Options.Deeplinks.SupportLinkText
    }, {
        MetaKey: "InstallUrl",
        DisplayText: this.Options.Deeplinks.InstallLinkText
    }, {
        MetaKey: "DownloadUrl",
        DisplayText: this.Options.Deeplinks.DownloadLinkText
    }];
    $($.proxy(this.init, this))
};
Mscom.Search.QuickSearchFeature.prototype = {
    init: function() {
        this.Container.on("click", ".mscom-search-quick-search .quick-search-item", function(n) {
            var t = $(n.target),
                i = $(this).attr("url");
            t.is("a") || (window.location.href = i, n.preventDefault())
        });
        $.ajaxPrefilter(function(n, t, i) {
            i.originalUrl = t.url
        })
    },
    showSuggestions: function(n) {
        if (n = this.SearchInstance.leftTrim(n.replace(/\s+/gi, " ")), this.Options.MaxCount <= 0 || n.length === 0 || this.Options.ServiceUrl.length === 0) {
            this.clearSuggestions();
            this.hideSuggestions();
            return
        }
        var r, t, i, u;
        that = this;
        r = (new Date).getTime();
        u = this.SearchInstance.Scopes[this.SearchInstance.CurrentScope];
        try {
            t = this.SearchInstance.formatRequest(Mscom.Helper.htmlDecode(this.Options.ServiceUrl), n);
            this.LatestRequestUrl = t;
            i = {
                url: t,
                jsonp: "cb",
                dataType: "jsonp",
                success: function(n, t, i) {
                    if (i.originalUrl && i.originalUrl === that.LatestRequestUrl) {
                        var r = $.trim(that.SearchInstance.Textbox.val());
                        that.processResponse(r, n)
                    }
                }
            };
            $.ajax(t, i)
        } catch (f) {}
    },
    processResponse: function(n, t) {
        var i, c, l, f, s, e, a, r, o, u, h;
        if (this.clearSuggestions(), this.Options.MaxCount > 0 && n.length > 0 && t && t.ResultSets && t.ResultSets.length > 0 && t.ResultSets[0].Results.length > 0) {
            if (e = this, a = this.SearchInstance.Scopes[this.SearchInstance.CurrentScope], n.length < a.AutoSuggest.MinChars) return;
            for (r = 0; r < t.ResultSets[0].Results.length; r++) {
                if (i = t.ResultSets[0].Results[r], l = Mscom.Helper.htmlEncode(i.Title), f = this.truncateStringWithEllipsis(Mscom.Helper.htmlEncode(i.Description), this.Options.MaxDescriptionLength), c = i.Url, s = [], this.Options.DeeplinksMapping && this.Options.DeeplinksMapping.length > 0)
                    for (o = 0; o < this.Options.DeeplinksMapping.length; o++)(u = this.Options.DeeplinksMapping[o], $.trim(u.MetaKey).length != 0 && $.trim(u.DisplayText).length != 0) && (h = this.getMetaValue(i.Metas, u.MetaKey), $.trim(h).length > 0 && s.push({
                        Url: h,
                        DisplayText: u.DisplayText
                    }));
                if (n.length > 0 && (f = f.replace(new RegExp("(" + n + ")", "gi"), "<strong>$1<\/strong>")), this.addSuggestionItem({
                        Title: l,
                        Url: c,
                        ImageUrl: this.getMetaValue(i.Metas, "ImageUrl"),
                        Description: f,
                        DeepLinks: s
                    }), r + 1 >= this.Options.MaxCount) break
            }
            this.Container.slideDown(200, function() {
                e.SearchInstance.restrictSuggestionItemsDisplayCount();
                e.SearchInstance.updateBorderStyle();
                e.SearchInstance.fixDropdownContentOldIE(".mscom-search-quick-search")
            })
        } else this.hideSuggestions()
    },
    getMetaValue: function(n, t) {
        var i, r;
        if (n)
            for (i = 0; i < n.length; i++)
                if (r = n[i], r.Key.toLowerCase() === t.toLowerCase()) return Mscom.Helper.htmlEncode(r.Value);
        return ""
    },
    hideSuggestions: function() {
        var n = this;
        this.Container.slideUp(200, function() {
            n.SearchInstance.updateBorderStyle()
        })
    },
    clearSuggestions: function() {
        this.QuickSearchList.html("");
        this.SearchInstance.updateBorderStyle()
    },
    addSuggestionItem: function(n) {
        var t = "",
            i, r, u, f;
        if (n.DeepLinks.length > 0) {
            for (r = 0; r < n.DeepLinks.length; r++) i = n.DeepLinks[r], t += '<li><a title="' + i.DisplayText + '" href="' + i.Url + '">' + i.DisplayText + "<\/a><\/li>";
            t = '<ul class="quick-search-links">' + t + "<\/ul>"
        }
        u = "<img " + (n.ImageUrl.length > 0 ? "" : ' class="error"') + ' onerror="$(this).addClass(\'error\');" src="' + n.ImageUrl + '" alt="' + n.Title + '"/>';
        f = '<li><div class="quick-search-item" url="' + n.Url + '"><div class="quick-search-thumbnail">' + u + '<\/div><div class="quick-search-caption"><h3>' + n.Title + "<\/h3><p>" + n.Description + "<\/p>" + t + "<\/div><\/div><\/li>";
        this.QuickSearchList.append(f)
    },
    truncateStringWithEllipsis: function(n, t) {
        var i = n;
        return n.length > t && (i = i.substr(0, t) + "..."), i
    }
};
$(window).load(function() {
    var n = window.attachEvent ? "click" : "mousedown",
        t;
    n == "mousedown" && typeof("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch) != "undefined" && (n += " touchstart");
    $(".heroitem .box, .heroitem .text, .heroitem .text-container").on("click", function(n) {
        if (n.target.tagName.toLowerCase() != "a") {
            n.stopPropagation();
            var t = $(this).parents(".heroitem").first().find("a").first();
            t.size() > 0 && (t.trigger("click"), window.location = t.attr("href"))
        }
    });
    if (!window.attachEvent) $(".heroitem .box").on(n, function(n) {
        if (n.target.tagName.toLowerCase() != "a") {
            n.stopPropagation();
            var t = $(this).parents(".heroitem").first().find("a").first();
            t.size() > 0 && t.eq(0).trigger(n.type)
        }
    });
    $(".heroitem .media a").on(n, function() {
        if ($.bi && !this.touchflag) {
            this.touchflag = !0;
            var t = $.bi.getLinkData(this),
                n = $(this).parents(".heroitem").find(".box .box-title").text();
            n == "" && (n = $(this).find("img").attr("alt"));
            t.title = n;
            t["wcs.cn"] = n;
            $.bi.record(t)
        }
    });
    t = function(n) {
        var t;
        t = n ? $(".slideshow-hero .slides > li:eq(" + n + ") .heroitem") : $(".slideshow-hero .slides > li .heroitem:visible").eq(0);
        t.hasClass("light-foreground") ? $(".prev-next").addClass("light-foreground") : $(".prev-next").removeClass("light-foreground")
    };
    $.each($(".slideshow .slides"), function(n, i) {
        $(i).responsiveSlideshow({
            speed: 4500,
            sliderIndex: n,
            rootSelector: ".slideshow",
            controlNav: $(i).children().length > 1 ? ".slideshow .navigation" : null,
            directionNav: ".slideshow .prev-next",
            init: function() {
                $(".heroitem.dark-foreground").removeClass("light-foreground");
                t()
            },
            between: t
        })
    })
});
window.Modernizr = function(n, t, i) {
        function k(n) {
            nt.cssText = n
        }

        function o(n, t) {
            return typeof n === t
        }

        function ft(n, t) {
            return !!~("" + n).indexOf(t)
        }

        function d(n, t) {
            var u, r;
            for (u in n)
                if (r = n[u], !ft(r, "-") && nt[r] !== i) return t == "pfx" ? r : !0;
            return !1
        }

        function et(n, t, r) {
            var f, u;
            for (f in n)
                if (u = t[n[f]], u !== i) return r === !1 ? n[f] : o(u, "function") ? u.bind(r || t) : u;
            return !1
        }

        function e(n, t, i) {
            var r = n.charAt(0).toUpperCase() + n.slice(1),
                u = (n + " " + it.join(r + " ") + r).split(" ");
            return o(t, "string") || o(t, "undefined") ? d(u, t) : (u = (n + " " + rt.join(r + " ") + r).split(" "), et(u, t, i))
        }
        var r = {},
            a = !0,
            f = t.documentElement,
            s = "modernizr",
            g = t.createElement(s),
            nt = g.style,
            ot, ht = {}.toString,
            v = " -webkit- -moz- -o- -ms- ".split(" "),
            tt = "Webkit Moz O ms",
            it = tt.split(" "),
            rt = tt.toLowerCase().split(" "),
            ut = {
                svg: "http://www.w3.org/2000/svg"
            },
            u = {},
            y = [],
            p = y.slice,
            h, c = function(n, i, r, u) {
                var l, a, c, v, e = t.createElement("div"),
                    h = t.body,
                    o = h || t.createElement("body");
                if (parseInt(r, 10))
                    while (r--) c = t.createElement("div"), c.id = u ? u[r] : s + (r + 1), e.appendChild(c);
                return l = ["&#173;", '<style id="s', s, '">', n, "<\/style>"].join(""), e.id = s, (h ? e : o).innerHTML += l, o.appendChild(e), h || (o.style.background = "", o.style.overflow = "hidden", v = f.style.overflow, f.style.overflow = "hidden", f.appendChild(o)), a = i(e, n), h ? e.parentNode.removeChild(e) : (o.parentNode.removeChild(o), f.style.overflow = v), !!a
            },
            w = {}.hasOwnProperty,
            b, l;
        b = !o(w, "undefined") && !o(w.call, "undefined") ? function(n, t) {
            return w.call(n, t)
        } : function(n, t) {
            return t in n && o(n.constructor.prototype[t], "undefined")
        };
        Function.prototype.bind || (Function.prototype.bind = function(n) {
            var t = this,
                i, r;
            if (typeof t != "function") throw new TypeError;
            return i = p.call(arguments, 1), r = function() {
                var f, e, u;
                return this instanceof r ? (f = function() {}, f.prototype = t.prototype, e = new f, u = t.apply(e, i.concat(p.call(arguments))), Object(u) === u ? u : e) : t.apply(n, i.concat(p.call(arguments)))
            }, r
        });
        u.flexbox = function() {
            return e("flexWrap")
        };
        u.canvas = function() {
            var n = t.createElement("canvas");
            return !!n.getContext && !!n.getContext("2d")
        };
        u.touch = function() {
            var i;
            return "ontouchstart" in n || n.DocumentTouch && t instanceof DocumentTouch ? i = !0 : c(["@media (", v.join("touch-enabled),("), s, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(n) {
                i = n.offsetTop === 9
            }), i
        };
        u.backgroundsize = function() {
            return e("backgroundSize")
        };
        u.cssanimations = function() {
            return e("animationName")
        };
        u.csstransforms = function() {
            return !!e("transform")
        };
        u.csstransforms3d = function() {
            var n = !!e("perspective");
            return n && "webkitPerspective" in f.style && c("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(t) {
                n = t.offsetLeft === 9 && t.offsetHeight === 3
            }), n
        };
        u.csstransitions = function() {
            return e("transition")
        };
        u.fontface = function() {
            var n;
            return c('@font-face {font-family:"font";src:url("https://")}', function(i, r) {
                var f = t.getElementById("smodernizr"),
                    u = f.sheet || f.styleSheet,
                    e = u ? u.cssRules && u.cssRules[0] ? u.cssRules[0].cssText : u.cssText || "" : "";
                n = /src/i.test(e) && e.indexOf(r.split(" ")[0]) === 0
            }), n
        };
        u.video = function() {
            var i = t.createElement("video"),
                n = !1;
            try {
                (n = !!i.canPlayType) && (n = new Boolean(n), n.ogg = i.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = i.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = i.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
            } catch (r) {}
            return n
        };
        u.audio = function() {
            var i = t.createElement("audio"),
                n = !1;
            try {
                (n = !!i.canPlayType) && (n = new Boolean(n), n.ogg = i.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = i.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = i.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (i.canPlayType("audio/x-m4a;") || i.canPlayType("audio/aac;")).replace(/^no$/, ""))
            } catch (r) {}
            return n
        };
        u.svg = function() {
            return !!t.createElementNS && !!t.createElementNS(ut.svg, "svg").createSVGRect
        };
        u.inlinesvg = function() {
            var n = t.createElement("div");
            return n.innerHTML = "<svg/>", (n.firstChild && n.firstChild.namespaceURI) == ut.svg
        };
        for (l in u) b(u, l) && (h = l.toLowerCase(), r[h] = u[l](), y.push((r[h] ? "" : "no-") + h));
        return r.addTest = function(n, t) {
            if (typeof n == "object")
                for (var u in n) b(n, u) && r.addTest(u, n[u]);
            else {
                if (n = n.toLowerCase(), r[n] !== i) return r;
                t = typeof t == "function" ? t() : t;
                typeof a != "undefined" && a && (f.className += " " + (t ? "" : "no-") + n);
                r[n] = t
            }
            return r
        }, k(""), g = ot = null, r._version = "2.6.2", r._prefixes = v, r._domPrefixes = rt, r._cssomPrefixes = it, r.testProp = function(n) {
            return d([n])
        }, r.testAllProps = e, r.testStyles = c, f.className = f.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (a ? " js " + y.join(" ") : ""), r
    }(this, this.document),
    function(n, t) {
        function c(n, t) {
            var i = n.createElement("p"),
                r = n.getElementsByTagName("head")[0] || n.documentElement;
            return i.innerHTML = "x<style>" + t + "<\/style>", r.insertBefore(i.lastChild, r.firstChild)
        }

        function u() {
            var n = i.elements;
            return typeof n == "string" ? n.split(" ") : n
        }

        function f(n) {
            var t = p[n[y]];
            return t || (t = {}, h++, n[y] = h, p[h] = t), t
        }

        function l(n, i, u) {
            if (i || (i = t), r) return i.createElement(n);
            u || (u = f(i));
            var e;
            return e = u.cache[n] ? u.cache[n].cloneNode() : it.test(n) ? (u.cache[n] = u.createElem(n)).cloneNode() : u.createElem(n), e.canHaveChildren && !tt.test(n) ? u.frag.appendChild(e) : e
        }

        function w(n, i) {
            if (n || (n = t), r) return n.createDocumentFragment();
            i = i || f(n);
            for (var o = i.frag.cloneNode(), e = 0, s = u(), h = s.length; e < h; e++) o.createElement(s[e]);
            return o
        }

        function b(n, t) {
            t.cache || (t.cache = {}, t.createElem = n.createElement, t.createFrag = n.createDocumentFragment, t.frag = t.createFrag());
            n.createElement = function(r) {
                return i.shivMethods ? l(r, n, t) : t.createElem(r)
            };
            n.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + u().join().replace(/\w+/g, function(n) {
                return t.createElem(n), t.frag.createElement(n), 'c("' + n + '")'
            }) + ");return n}")(i, t.frag)
        }

        function a(n) {
            n || (n = t);
            var u = f(n);
            return i.shivCSS && !s && !u.hasCSS && (u.hasCSS = !!c(n, "article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}")), r || b(n, u), n
        }

        function k(n) {
            for (var t, i = n.getElementsByTagName("*"), r = i.length, e = RegExp("^(?:" + u().join("|") + ")$", "i"), f = []; r--;) t = i[r], e.test(t.nodeName) && f.push(t.applyElement(d(t)));
            return f
        }

        function d(n) {
            for (var t, r = n.attributes, u = r.length, i = n.ownerDocument.createElement(e + ":" + n.nodeName); u--;) t = r[u], t.specified && i.setAttribute(t.nodeName, t.nodeValue);
            return i.style.cssText = n.style.cssText, i
        }

        function g(n) {
            for (var t, i = n.split("{"), r = i.length, f = RegExp("(^|[\\s,>+~])(" + u().join("|") + ")(?=[[\\s,>+~#.:]|$)", "gi"), o = "$1" + e + "\\:$2"; r--;) t = i[r] = i[r].split("}"), t[t.length - 1] = t[t.length - 1].replace(f, o), i[r] = t.join("}");
            return i.join("{")
        }

        function nt(n) {
            for (var t = n.length; t--;) n[t].removeNode()
        }

        function v(n) {
            function r() {
                clearTimeout(i._removeSheetTimer);
                t && t.removeNode(!0);
                t = null
            }
            var t, u, i = f(n),
                o = n.namespaces,
                s = n.parentWindow;
            return !ut || n.printShived ? n : (typeof o[e] == "undefined" && o.add(e), s.attachEvent("onbeforeprint", function() {
                r();
                for (var o, s, f, l = n.styleSheets, e = [], i = l.length, h = Array(i); i--;) h[i] = l[i];
                while (f = h.pop())
                    if (!f.disabled && rt.test(f.media)) {
                        try {
                            o = f.imports;
                            s = o.length
                        } catch (a) {
                            s = 0
                        }
                        for (i = 0; i < s; i++) h.push(o[i]);
                        try {
                            e.push(f.cssText)
                        } catch (a) {}
                    }
                e = g(e.reverse().join(""));
                u = k(n);
                t = c(n, e)
            }), s.attachEvent("onafterprint", function() {
                nt(u);
                clearTimeout(i._removeSheetTimer);
                i._removeSheetTimer = setTimeout(r, 500)
            }), n.printShived = !0, n)
        }
        var o = n.html5 || {},
            tt = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            it = /^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i,
            s, y = "_html5shiv",
            h = 0,
            p = {},
            r, i;
        (function() {
            try {
                var n = t.createElement("a");
                n.innerHTML = "<xyz><\/xyz>";
                s = "hidden" in n;
                r = n.childNodes.length == 1 || function() {
                    t.createElement("a");
                    var n = t.createDocumentFragment();
                    return typeof n.cloneNode == "undefined" || typeof n.createDocumentFragment == "undefined" || typeof n.createElement == "undefined"
                }()
            } catch (i) {
                s = !0;
                r = !0
            }
        })();
        i = {
            elements: o.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video",
            shivCSS: o.shivCSS !== !1,
            supportsUnknownElements: r,
            shivMethods: o.shivMethods !== !1,
            type: "default",
            shivDocument: a,
            createElement: l,
            createDocumentFragment: w
        };
        n.html5 = i;
        a(t);
        var rt = /^$|\b(?:all|print)\b/,
            e = "html5shiv",
            ut = !r && function() {
                var i = t.documentElement;
                return typeof t.namespaces != "undefined" && typeof t.parentWindow != "undefined" && typeof i.applyElement != "undefined" && typeof i.removeNode != "undefined" && typeof n.attachEvent != "undefined"
            }();
        i.type += " print";
        i.shivPrint = v;
        v(t)
    }(this, document),
    function(n, t, i) {
        function h(n) {
            return "[object Function]" == y.call(n)
        }

        function c(n) {
            return "string" == typeof n
        }

        function l() {}

        function w(n) {
            return !n || "loaded" == n || "complete" == n || "uninitialized" == n
        }

        function f() {
            var n = a.shift();
            v = 1;
            n ? n.t ? s(function() {
                ("c" == n.t ? u.injectCss : u.injectJs)(n.s, 0, n.a, n.x, n.e, 1)
            }, 0) : (n(), f()) : v = 0
        }

        function ut(n, i, o, h, c, l, y) {
            function k(t) {
                if (!nt && w(p.readyState) && (tt.r = nt = 1, !v && f(), p.onload = p.onreadystatechange = null, t)) {
                    "img" != n && s(function() {
                        g.removeChild(p)
                    }, 50);
                    for (var u in r[i]) r[i].hasOwnProperty(u) && r[i][u].onload()
                }
            }
            var y = y || u.errorTimeout,
                p = t.createElement(n),
                nt = 0,
                b = 0,
                tt = {
                    t: o,
                    s: i,
                    e: c,
                    a: l,
                    x: y
                };
            1 === r[i] && (b = 1, r[i] = []);
            "object" == n ? p.data = i : (p.src = i, p.type = n);
            p.width = p.height = "0";
            p.onerror = p.onload = p.onreadystatechange = function() {
                k.call(this, b)
            };
            a.splice(h, 0, tt);
            "img" != n && (b || 2 === r[i] ? (g.insertBefore(p, d ? null : e), s(k, y)) : r[i].push(p))
        }

        function ft(n, t, i, r, u) {
            return v = 0, t = t || "j", c(n) ? ut("c" == t ? et : nt, n, t, this.i++, i, r, u) : (a.splice(this.i++, 0, n), 1 == a.length && f()), this
        }

        function b() {
            var n = u;
            return n.loader = {
                load: ft,
                i: 0
            }, n
        }
        var o = t.documentElement,
            s = n.setTimeout,
            e = t.getElementsByTagName("script")[0],
            y = {}.toString,
            a = [],
            v = 0,
            k = "MozAppearance" in o.style,
            d = k && !!t.createRange().compareNode,
            g = d ? o : e.parentNode,
            o = n.opera && "[object Opera]" == y.call(n.opera),
            o = !!t.attachEvent && !o,
            nt = k ? "object" : o ? "script" : "img",
            et = o ? "script" : nt,
            tt = Array.isArray || function(n) {
                return "[object Array]" == y.call(n)
            },
            p = [],
            r = {},
            it = {
                timeout: function(n, t) {
                    return t.length && (n.timeout = t[0]), n
                }
            },
            rt, u;
        u = function(n) {
            function a(n) {
                for (var n = n.split("!"), f = p.length, i = n.pop(), e = n.length, i = {
                        url: i,
                        origUrl: i,
                        prefixes: n
                    }, u, r, t = 0; t < e; t++) r = n[t].split("="), (u = it[r.shift()]) && (i = u(i, r));
                for (t = 0; t < f; t++) i = p[t](i);
                return i
            }

            function f(n, t, u, f, e) {
                var o = a(n),
                    s = o.autoCallback;
                o.url.split(".").pop().split("?").shift();
                o.bypass || (t && (t = h(t) ? t : t[n] || t[f] || t[n.split("/").pop().split("?")[0]]), o.instead ? o.instead(n, t, u, f, e) : (r[o.url] ? o.noexec = !0 : r[o.url] = 1, u.load(o.url, o.forceCSS || !o.forceJS && "css" == o.url.split(".").pop().split("?").shift() ? "c" : i, o.noexec, o.attrs, o.timeout), (h(t) || h(s)) && u.load(function() {
                    b();
                    t && t(o.origUrl, e, f);
                    s && s(o.origUrl, e, f);
                    r[o.url] = 2
                })))
            }

            function s(n, t) {
                function a(n, o) {
                    if (n) {
                        if (c(n)) o || (i = function() {
                            var n = [].slice.call(arguments);
                            s.apply(this, n);
                            u()
                        }), f(n, i, t, 0, e);
                        else if (Object(n) === n)
                            for (r in v = function() {
                                    var t = 0;
                                    for (var i in n) n.hasOwnProperty(i) && t++;
                                    return t
                                }(), n) n.hasOwnProperty(r) && (!o && !--v && (h(i) ? i = function() {
                                var n = [].slice.call(arguments);
                                s.apply(this, n);
                                u()
                            } : i[r] = function(n) {
                                return function() {
                                    var t = [].slice.call(arguments);
                                    n && n.apply(this, t);
                                    u()
                                }
                            }(s[r])), f(n[r], i, t, r, e))
                    } else o || u()
                }
                var e = !!n.test,
                    o = n.load || n.both,
                    i = n.callback || l,
                    s = i,
                    u = n.complete || l,
                    v, r;
                a(e ? n.yep : n.nope, !!o);
                o && a(o)
            }
            var e, t, o = this.yepnope.loader;
            if (c(n)) f(n, 0, o, 0);
            else if (tt(n))
                for (e = 0; e < n.length; e++) t = n[e], c(t) ? f(t, 0, o, 0) : tt(t) ? u(t) : Object(t) === t && s(t, o);
            else Object(n) === n && s(n, o)
        };
        u.addPrefix = function(n, t) {
            it[n] = t
        };
        u.addFilter = function(n) {
            p.push(n)
        };
        u.errorTimeout = 1e4;
        null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", rt = function() {
            t.removeEventListener("DOMContentLoaded", rt, 0);
            t.readyState = "complete"
        }, 0));
        n.yepnope = b();
        n.yepnope.executeStack = f;
        n.yepnope.injectJs = function(n, i, r, o, h, c) {
            var a = t.createElement("script"),
                v, y, o = o || u.errorTimeout;
            a.src = n;
            for (y in r) a.setAttribute(y, r[y]);
            i = c ? f : i || l;
            a.onreadystatechange = a.onload = function() {
                !v && w(a.readyState) && (v = 1, i(), a.onload = a.onreadystatechange = null)
            };
            s(function() {
                v || (v = 1, i(1))
            }, o);
            h ? a.onload() : e.parentNode.insertBefore(a, e)
        };
        n.yepnope.injectCss = function(n, i, r, u, o, h) {
            var u = t.createElement("link"),
                c, i = h ? f : i || l;
            u.href = n;
            u.rel = "stylesheet";
            u.type = "text/css";
            for (c in r) u.setAttribute(c, r[c]);
            o || (e.parentNode.insertBefore(u, e), s(i, 0))
        }
    }(this, document);
Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    },
    function(n) {
        var t = [],
            o = function() {
                return typeof n.screen.systemXDPI != "undefined" && n.screen.systemXDPI >= n.screen.logicalXDPI ? n.screen.systemXDPI / n.screen.logicalXDPI : typeof n.devicePixelRatio != "undefined" ? n.devicePixelRatio : 1
            },
            u = function() {
                var i = !1,
                    t = i == !1 || n.screen.width > n.screen.height ? n.screen.width : n.screen.height,
                    r = i == !1 || n.innerWidth > n.innerHeight ? n.innerWidth : n.innerHeight;
                return t > r && (t = r), t
            },
            f = function() {
                return navigator.userAgent.toLowerCase().indexOf("webkit") > -1 ? document.documentElement.clientWidth : n.innerWidth
            },
            i = function(n) {
                return n = n.substring(0, n.length - 2), Number(n)
            },
            s = function(n) {
                var e, r, s;
                if (n = $.trim(n), n.length > 0)
                    for (n = n.toLowerCase(), n = n.substring(1, n.length - 1), e = n.split(") and ("), r = 0, s = e.length; r < s; r++) {
                        var h = e[r].indexOf(":"),
                            c = $.trim(e[r].substring(0, h)),
                            t = $.trim(e[r].substring(h + 1));
                        switch (c) {
                            case "min-width":
                                if (t = i(t), t > f()) return !1;
                                break;
                            case "max-width":
                                if (t = i(t), t < f()) return !1;
                                break;
                            case "min-device-pixel-width":
                                if (t = i(t), t > u()) return !1;
                                break;
                            case "max-device-pixel-width":
                                if (t = i(t), t < u()) return !1;
                                break;
                            case "min-device-pixel-ratio":
                                if (Number(t) > o()) return !1;
                                break;
                            default:
                                return !1
                        }
                    }
                return !0
            },
            e = function(t) {
                var f, e, r, u, l, i, c, o;
                for (t.setAttribute("data-resolved", "true"), f = $(t).find("div[data-src]").get(), u = f.length - 1; u >= 0; u--)
                    if (l = s(f[u].getAttribute("data-media")), l == !0) {
                        e = f[u].getAttribute("data-src");
                        r = u;
                        break
                    }
                if (typeof e != "undefined") {
                    if (i = t.getElementsByTagName("img")[0], c = !1, i) {
                        if (o = i.getAttribute("data-source-index"), o == r || t.getAttribute("data-disable-swap-above") !== null && o >= r || t.getAttribute("data-disable-swap-below") !== null && o <= r) return
                    } else c = !0, i = n.document.createElement("img"), i.alt = t.getAttribute("data-alt"), t.appendChild(i);
                    c ? (i.src = e, i.setAttribute("data-source-index", r)) : h(i, e, r)
                } else !i
            },
            h = function(n, i, u) {
                if (typeof t[i] == "object" && t[i].complete) r(n, i, u);
                else if (document.images) {
                    var f = $("<img />");
                    f.bind("load", function() {
                        r(n, f.attr("src"), u)
                    }).bind("error", function() {
                        c(i, f)
                    });
                    t[i] = f;
                    f.attr("src", i)
                } else r(n, i, u)
            },
            r = function(n, t, i) {
                n.src = t;
                n.setAttribute("data-source-index", i)
            },
            c = function(n, i) {
                i.unbind("error").unbind("load");
                i.get(0).src = "";
                t[n] = undefined
            };
        n.picturePolyfill = {};
        n.picturePolyfill.resolveLast = function() {
            var n = $("div[data-picture]:not([data-resolved],[data-defer])").last().get()[0];
            e(n)
        };
        n.picturePolyfill.init = function(n) {
            var i, t, r;
            for (typeof n != "boolean" && (n = !0), i = $("div[data-picture]").get(), t = 0, r = i.length; t < r; t++)(i[t].getAttribute("data-resolved") === null || i[t].getAttribute("data-disable-swap") === null) && (n === !0 || i[t].getAttribute("data-defer") === null) && e(i[t])
        };
        n.addEventListener ? (n.addEventListener("resize", n.picturePolyfill.init, !1), n.addEventListener("DOMContentLoaded", function() {
            n.picturePolyfill.init(!1)
        }, !1), n.addEventListener("load", n.picturePolyfill.init, !1)) : n.attachEvent && n.attachEvent("onload", n.picturePolyfill.init)
    }(window);
typeof MSCOM == "undefined" && (window.MSCOM = {});
window.MSCOM.Helper = {
    htmlEncode: function(n) {
        return n == "undefined" || n == null ? n : $("<div/>").text(n).html()
    },
    htmlDecode: function(n) {
        return n == "undefined" || n == null ? n : $("<div/>").html(n).text()
    },
    htmlAttrEncode: function(n) {
        return n = this.htmlEncode(n), n = n.replace(/"/g, "&quot;"), n.replace(/'/g, "&#039;")
    },
    isIE7: function() {
        return navigator.appVersion.indexOf("MSIE 7.") != -1
    }
};
window.MSCOM.Helper.Content = {
    images: {},
    doc: {},
    queue: {},
    curThread: 0,
    maxThread: 2,
    nextDelay: 100,
    logenabled: !1,
    isBodyLoaded: !1,
    prefetchEnabled: !0,
    onload: function() {
        this.log("window.MSCOM.Helper.Content: Body Onload");
        this.isBodyLoaded = !0;
        setTimeout($.proxy(this.next, this), this.nextDelay)
    },
    log: function(n) {
        if (this.logenabled) try {
            console.log(n)
        } catch (t) {} else window.location.hash.indexOf("helplog") > 0 && (this.logenabled = !0)
    },
    sortQ: function() {
        var n = [],
            i = {};
        for (var t in this.queue) n.push(t);
        n.sort();
        for (t in n) i[n[t]] = this.queue[n[t]];
        this.queue = i
    },
    registerImage: function(n) {
        if (this.prefetchEnabled) {
            var t = {
                path: "",
                priority: 0,
                type: "img",
                callback: null,
                passvar: null,
                cache: !0
            };
            $.extend(t, n);
            this.addToQueue(t)
        }
        return this.prefetchEnabled
    },
    registerDoc: function(n) {
        if (this.prefetchEnabled) {
            var t = {
                path: "",
                priority: 0,
                type: "doc",
                callback: null,
                passvar: null,
                cache: !0
            };
            $.extend(t, n);
            this.addToQueue(t)
        }
        return this.prefetchEnabled
    },
    unregister: function(n) {
        var r, i, t;
        for (r in this.queue)
            for (i = this.queue[r], t = 0; t < i.length; ++t)
                if (i[t].path === n) return this.log(["unregister", i[t]]), i.splice(t, 1), !0;
        return !1
    },
    addToQueue: function(n) {
        this.log(["addToQueue", n]);
        this.queue[n.priority] == undefined && (this.queue[n.priority] = [], this.sortQ());
        this.queue[n.priority].push(n);
        setTimeout($.proxy(this.next, this), this.nextDelay)
    },
    next: function() {
        var n, t;
        if (!this.prefetchEnabled || this.curThread >= this.maxThread || !$.isReady && !this.isBodyLoaded) return !1;
        for (t in this.queue) {
            if (!this.isBodyLoaded && parseInt(t) > -1) return !1;
            if (this.queue[t].length > 0) {
                n = this.queue[t].shift();
                break
            }
        }
        n && (this.log(["Next:starting item", n]), this.curThread++, n.type == "img" && this.loadImage(n), n.type == "doc" && this.loadDocument(n))
    },
    loadImage: function(n) {
        if (n.cache && this.images[n.path] != undefined && this.images[n.path].complete) this.imageLoaded(this.images[n.path], n);
        else if (document.images) {
            var t = new Image,
                i = this;
            $(t).load(function() {
                i.imageLoaded(t, n)
            });
            $(t).error(function() {
                i.imageError(t, n)
            });
            t.src = n.path;
            this.images[n.path] = t
        }
    },
    loadDocument: function(n) {
        if (n.cache && this.doc[n.path] != undefined) this.docLoaded(this.doc[n.path], n);
        else {
            var t = this;
            $.get(n.path, function(i) {
                t.docLoaded(i, n)
            })
        }
    },
    imageLoaded: function(n, t) {
        this.curThread = this.curThread > 0 ? this.curThread - 1 : 0;
        t.callback && t.callback(n, t.passvar);
        setTimeout($.proxy(this.next, this), this.nextDelay)
    },
    imageError: function(n, t) {
        this.curThread = this.curThread > 0 ? this.curThread - 1 : 0;
        t.callback && t.callback(n, t.passvar);
        setTimeout($.proxy(this.next, this), this.nextDelay)
    },
    docLoaded: function(n, t) {
        this.curThread = this.curThread > 0 ? this.curThread - 1 : 0;
        try {
            t.callback && t.callback(n, t.passvar)
        } catch (i) {
            this.log(i)
        }
        setTimeout($.proxy(this.next, this), this.nextDelay)
    }
};
typeof $ != "undefined" ? $(window).load($.proxy(window.MSCOM.Helper.Content.onload, window.MSCOM.Helper.Content)) : document.addEventListener ? window.addEventListener("load", function() {
    window.MSCOM.Helper.Content.onload()
}, !1) : window.attachEvent && window.attachEvent("onload", function() {
    window.MSCOM.Helper.Content.onload()
});
$(function() {
    var n = $(".top-bar-storelink").children().clone(!0);
    $(".menulevel-storelink").prepend(n)
});
$(function() {
        if ($(".store-geo").length)
            if (typeof navigator.geolocation != "undefined" && $(".store-geo[data-clientgeo=true]").length) {
                var n = setTimeout(function() {
                    $(".store-editorial").fadeIn(1e3)
                }, 1e4);
                navigator.geolocation.getCurrentPosition(function(t) {
                    clearTimeout(n);
                    getStore(t)
                })
            } else getStore()
    }),
    function(n, t, i, r) {
        n.responsiveSlideshow = function(u, f) {
            var l = n(u),
                a = l.children(),
                e = f.sliderIndex,
                v = f.rootSelector,
                s = 0,
                y = {},
                o, b = n.extend({}, n.responsiveSlideshow.defaults, f),
                c, h = [],
                p = n("div").find(".pause_button"),
                w = n("div").find(".play_button");
            n("body").data("settings") === r && (n("body").data("settings", []), n("body").data("slides", []), n("body").data("controlNav", []), n("body").data("directionNav", []), n("body").data("pauseButtons", []), n("body").data("playButtons", []), n.each(n(v + " .navigation .grid-container"), function(t, i) {
                n(i).attr("data-slidercontrolindex", t)
            }), n.each(n(v + " .prev-next"), function(t, i) {
                n(i).attr("data-sliderdirectionindex", t)
            }));
            n("body").data("settings").push(b);
            n("body").data("slides").push(a);
            n("body").data("pauseButtons").push(p);
            n("body").data("playButtons").push(w);
            n.data(u, "responsiveSlideshow", l);
            y = {
                init: function() {
                    var t, u, f, h;
                    o = this;
                    n("body").data("settings")[e].init();
                    t = n("body").data("slides")[e];
                    i.documentElement.dir == "rtl" ? t.css({
                        "margin-left": "-100%",
                        float: "right",
                        width: "100%"
                    }) : t.css({
                        "margin-right": "-100%",
                        float: "left",
                        width: "100%"
                    });
                    t.each(function(n, t) {
                        t.style.display === "none" && (t.style.display = "")
                    });
                    t.length > 1 && (n("*[data-slidercontrolindex='" + e + "']").addClass("show"), n("*[data-sliderdirectionindex='" + e + "']").addClass("show"));
                    u = t.eq(s);
                    t.not(u).addClass(o.getFadeClassName());
                    o.goToSlide(s, e);
                    u.data("shown", !0);
                    t.on("mouseenter", function() {
                        o.handlePause("hover", "enter")
                    }).on("mouseleave", function() {
                        o.handlePause("hover", "leave")
                    });
                    t.find("a").on("focus", function() {
                        o.handlePause("focus", "enter")
                    }).on("blur", function() {
                        o.handlePause("focus", "leave")
                    });
                    n(n("body").data("pauseButtons")[e]).on("click", function() {
                        o.handlePause("click", "enter");
                        n(this).attr("disabled", !0);
                        w[e].removeAttribute("disabled")
                    });
                    if (n(n("body").data("playButtons")[e]).on("click", function() {
                            o.handlePause("click", "leave");
                            n(this).attr("disabled", !0);
                            p[e].removeAttribute("disabled")
                        }).attr("disabled", "disabled"), n("body").data("settings")[e].controlNav) {
                        n("body").data("controlNav").push(n("*[data-slidercontrolindex='" + e + "']"));
                        f = function() {
                            n("body").data("slides")[e].each(function(t) {
                                var f = n(this).attr("selectBi");
                                f === r && (f = "");
                                var u = '<a href="{{target_id}}" title="{{title}}" bi:index="{{idx}}"' + f + '><span aria-hidden="true" class="bi-hidetext">{{icon}}<\/span> <span class="screen-reader-text">{{idx}}<\/span><\/a>',
                                    o = u.match(/{{\w*}}/gi),
                                    i = [];
                                i.idx = t;
                                i.target_id = "Slide" + e + t;
                                i.title = n("*[data-slidercontrolindex='" + e + "']").data("title-text") ? n("*[data-slidercontrolindex='" + e + "']").data("title-text").replace("{{idx}}", t + 1) : "";
                                i.icon = n("*[data-slidercontrolindex='" + e + "']").data("icon-text") ? n("*[data-slidercontrolindex='" + e + "']").data("icon-text") : "&#x25CF;";
                                n(o).each(function(n, t) {
                                    u = u.replace(t, i[t.replace("{{", "").replace("}}", "")])
                                });
                                n("*[data-slidercontrolindex='" + e + "']").append(u)
                            })
                        };
                        n("*[data-slidercontrolindex='" + e + "']").children().length === 0 && n("*[data-slidercontrolindex='" + e + "']").parents().parents().hasClass("slideshow-hero") === !0 && f();
                        n("*[data-slidercontrolindex='" + e + "']").find("a").eq(0).addClass("active");
                        n("*[data-slidercontrolindex='" + e + "']").find("a").on("click", function(t) {
                            var f, i, h, u;
                            if ((t.preventDefault(), f = n("*[data-slidercontrolindex='" + e + "']").find("a").index(n(this)), s !== f) && (o.goToSlide(f, e), n.bi)) {
                                i = n.bi.getLinkData(this);
                                h = n.bi.getAttrData(n("body").data("slides")[e].eq(f).find("a:visible"));
                                for (u in h) i[u] === r ? i[u] = h[u] : i[u] += ";" + h[u];
                                i.typestructure += n("body").data("slides")[e].find("*[bi\\:type]").length > 0 ? ";" + n("body").data("slides")[e].find("*[bi\\:type]").attr("bi:type") : ";slideshowitem";
                                i.interactiontype = 6;
                                i.cot = 5;
                                n.bi.record(i)
                            }
                        })
                    }
                    if (n("body").data("settings")[e].directionNav) {
                        n("body").data("directionNav").push(n("*[data-sliderdirectionindex='" + e + "']"));
                        h = function() {
                            var t = n('<button class="prev">Previous<\/button><button class="next">Next<\/button>');
                            n("*[data-sliderdirectionindex='" + e + "']").append(t)
                        };
                        n("*[data-sliderdirectionindex='" + e + "']").children().length === 0 && h();
                        n("*[data-sliderdirectionindex='" + e + "']").find(".prev").on("click", function(t) {
                            var s, i, f, u;
                            if (t.preventDefault(), s = o.getPrevSlideIndex(), o.prevSlide(), n.bi) {
                                i = n.bi.getLinkData(this);
                                f = n.bi.getAttrData(n("body").data("slides")[e].eq(s).find("a:visible"));
                                for (u in f) i[u] === r ? i[u] = f[u] : i[u] += ";" + f[u];
                                i.typestructure += n("body").data("slides")[e].find("*[bi\\:type]").length > 0 ? ";" + n("body").data("slides")[e].find("*[bi\\:type]").attr("bi:type") : ";slideshowitem";
                                i.interactiontype = 5;
                                i.cot = 5;
                                i.index = s;
                                n.bi.record(i)
                            }
                        });
                        n("*[data-sliderdirectionindex='" + e + "']").find(".next").on("click", function(t) {
                            var s, i, f, u;
                            if (t.preventDefault(), s = o.getNextSlideIndex(), o.nextSlide(), n.bi) {
                                i = n.bi.getLinkData(this);
                                f = n.bi.getAttrData(n("body").data("slides")[e].eq(s).find("a:visible"));
                                for (u in f) i[u] === r ? i[u] = f[u] : i[u] += ";" + f[u];
                                i.typestructure += n("body").data("slides")[e].find("*[bi\\:type]").length > 0 ? ";" + n("body").data("slides")[e].find("*[bi\\:type]").attr("bi:type") : ";slideshowitem";
                                i.interactiontype = 4;
                                i.cot = 5;
                                i.index = s;
                                n.bi.record(i)
                            }
                        })
                    }
                    o.goToSlide(s, e)
                },
                handlePause: function(n, t) {
                    if (h[n] = t === "enter", h[n]) o.clearTimer();
                    else {
                        for (var i in h)
                            if (h[i]) return;
                        o.setTimer()
                    }
                },
                setTimer: function() {
                    if (n("body").data("settings")[e].slideshow) {
                        var i = n("*[data-slidercontrolindex='" + e + "']").closest(".slideshow-news");
                        c = t.setTimeout(o.autoNextSlide, i.hasClass("slideshow-news") ? i.attr("data-speed") : n("body").data("settings")[e].speed)
                    }
                },
                clearTimer: function() {
                    n("body").data("settings")[e].slideshow && !!c && t.clearTimeout(c)
                },
                getNextSlideIndex: function() {
                    var t = s + 1;
                    return t === n("body").data("slides")[e].length ? 0 : t
                },
                getPrevSlideIndex: function() {
                    var t = s - 1;
                    return t < 0 ? n("body").data("slides")[e].length - 1 : t
                },
                autoNextSlide: function() {
                    var f = o.getNextSlideIndex(),
                        i = n("body").data("slides")[e].eq(f),
                        s = !0,
                        u, t;
                    i.find("img").each(function(n, t) {
                        if (t.complete == !1) return s = !1, !1
                    });
                    s == !0 && i.find("div[data-picture]:not([data-resolved])").size() == 0 ? (o.nextSlide(), i.data("shown") != !0 && (i.data("shown", !0), n.bi && (u = "slideshow;", u += a.find("*[bi\\:type]").length > 0 ? n("body").data("slides")[e].find("*[bi\\:type]").attr("bi:type") : "slideshowitem", t = n.bi.getAttrData(i.find("a:visible")), t.typestructure = u, t.index = f, t.interactiontype = 1, t.cot = 5, t.uridomain = r, t.uripath = r, t.uriquery = r, n.bi.record(t)))) : (o.clearTimer(), o.setTimer())
                },
                nextSlide: function() {
                    o.goToSlide(o.getNextSlideIndex(), e)
                },
                prevSlide: function() {
                    o.goToSlide(o.getPrevSlideIndex(), e)
                },
                goToSlide: function(i, r) {
                    var f = o.getFadeClassName(),
                        u;
                    (n("body").data("settings")[r].before(), n("body").data("playButtons")[r].attr("disabled") === "disabled" && (o.clearTimer(), o.setTimer()), s !== i) && (n("*[data-slidercontrolindex='" + r + "']") && n("*[data-slidercontrolindex='" + r + "']").find("a").removeClass("active").eq(i).addClass("active"), n("body").data("slides")[r].eq(s).is(":visible") ? n("body").data("slides")[r].eq(s).addClass(f) : n("body").data("slides")[r].eq(s).addClass(f), s = i, u = n("body").data("slides")[r].eq(i), u.css("display") === "none" && u.css("display", ""), u.removeClass(f), t.setTimeout(function() {
                        n("body").data("settings")[r].between(i)
                    }, n("body").data("settings")[r].animationDuration / 2))
                },
                getFadeClassName: function() {
                    return Modernizr && Modernizr.csstransitions ? "fade-out" : "hide"
                }
            };
            y.init()
        };
        n.responsiveSlideshow.defaults = {
            slideshow: !0,
            speed: 5e3,
            directionNav: null,
            controlNav: null,
            sliderIndex: 0,
            rootSelector: ".slideshow-hero",
            animationDuration: 400,
            init: function() {},
            before: function() {},
            after: function() {},
            between: function() {}
        };
        n.fn.responsiveSlideshow = function(t) {
            return n(this).each(function() {
                new n.responsiveSlideshow(n(this), t)
            })
        }
    }(jQuery, window, document);
Mscom.Video = function(n) {
    this.Control = n;
    $(this.Control).find(".mscom-html5-video").length > 0 ? (this.SupportsVideo = !!document.createElement("video").canPlayType, this.IsMSNPlayer = !1, this.Video = this.Control.getElementsByTagName("video")[0], this.FlashVersion = GetFlashVersion().split(",").shift(), this.SupportsVideo === !0 && this.Video.controls === !1 ? (this.playButton = $(this.Control).find(".play").get(0), this.muteButton = $(this.Control).find(".mute").get(0), this.fullscreen = $(this.Control).find(".fullscreen").get(0), this.light = $(this.Control).find(".video-light").get(0), this.captions = $(this.Control).find(".captions").get(0), this.facebook = $(this.Control).find(".video-facebook").get(0), this.twitter = $(this.Control).find(".video-twitter").get(0), this.CaptionMenuButtons = [], this.CaptionsMenu, this.PageUrlParameterName = "url", this.ShareWindows = {}) : $(this.Control).children(".video-button-container").hide()) : (this.IsMSNPlayer = !0, this.VideoContainer = $(this.Control).find(".mscom-video-container").first(), $(this.Control).attr("data-loaded", "true"), this.VideoContainerID = this.VideoContainer.attr("id"), this.VideoID = this.VideoContainer.attr("data-videoid"), this.BiTags = this.VideoContainer.attr("data-bitag"), this.PlayerName = this.VideoContainer.attr("data-playername"), this.PlayerRefName = this.VideoContainer.attr("data-playerrefname"), this.AutoPlay = this.VideoContainer.attr("data-autoplay"), this.Mute = this.VideoContainer.attr("data-mute"), this.Loop = this.VideoContainer.attr("data-loop"), this.CSID = "ux-cms-en-us-msoffice", this.PlayerOverrides = {}, this.IsVideoLoaded = !1, this.IsVideoRendered = !1, this.VideoTitle, this.IsPopupVideo = !1, this.PopupContent, Mscom.Helper.IsValid(this.PlayerName) || (this.PlayerName = "ShowcaseMSN1"), Mscom.Helper.IsValid(this.PlayerRefName) || (this.PlayerRefName = "MPL_CMG_ShowcaseMSN1"), Mscom.Helper.IsValid(this.AutoPlay) || (this.AutoPlay = "False"), Mscom.Helper.IsValid(this.Mute) || (this.Mute = "False"), Mscom.Helper.IsValid(this.Loop) || (this.Loop = "False"), this.VideoWidgetId = this.VideoContainerID + "_ux1_1_1_1");
    $($.proxy(this.Init, this))
};
Mscom.Video.prototype = {
    Init: function() {
        var n = $(this.Control).closest(".mscom-popup-container"),
            t;
        if (n.length > 0) {
            this.IsPopupVideo = !0;
            this.PopupContent = n.find(".mscom-popup-content").first();
            n.on("popupOpened", $.proxy(this.VideoPopupOpen, this));
            n.on("popupClosed", $.proxy(this.VideoPopupClose, this))
        }
        if (this.IsMSNPlayer)
            if (t = {
                    videoFilter: {
                        type: "Uuid",
                        uuids: [this.VideoID]
                    }
                }, this.PlayerOverrides[this.PlayerRefName + ".Width"] = "100%", this.PlayerOverrides[this.PlayerRefName + ".AutoPlayVideo"] = this.AutoPlay, this.PlayerOverrides[this.PlayerRefName + ".PlayerMute"] = this.Mute.toLowerCase(), this.PlayerOverrides[this.PlayerRefName + ".DefaultVideo"] = {}, this.PlayerOverrides[this.PlayerRefName + ".DefaultVideo"].videoQuery = t, this.IsPopupVideo === !1) this.Render("init");
            else this.VideoContainer.on("DOMSubtreeModified", $.proxy(this.VideoPopupLoaded, this));
        else this.SupportsVideo === !0 && $(this.Control).find("#video-controls").length > 0 ? (this.BindVideoEvents(), this.BindButtonEvents(), this.InitializeCaptionMenu(), this.ResizeVideo()) : $("#parentDiv").children().filter("#video-controls").remove(), this.SupportsVideo === !1 && this.FlashVersion < 10 && ($(this.Control).children().filter(":not(#video-error)").remove(), $(this.Control).find("#video-error").css("display", "block")), this.IsPopupVideo && this.Video.pause()
    },
    VideoPopupClose: function() {
        this.IsMSNPlayer ? this.TriggerVideoEvent("pauseVideo") : this.Video.pause()
    },
    VideoPopupOpen: function() {
        this.IsMSNPlayer === !1 && this.Video.autoplay === !0 ? ($("video").each(function() {
            this.pause()
        }), this.Video.play()) : (this.PauseAllVideo(), this.Render("popupOpened"))
    },
    VideoPopupLoaded: function() {
        this.VideoContainer.off("DOMSubtreeModified", this.VideoPopupLoaded)
    },
    Render: function() {
        this.IsVideoRendered ? this.AutoPlay.toLowerCase() === "true" && this.TriggerVideoEvent("playVideo") : (MsnVideoUx.render(this.PlayerName, this.VideoContainerID, this.PlayerOverrides, {
            csid: this.CSID
        }), MsnVideo2.addMessageReceiver({
            eventType: "playbackStatusChanged",
            widgetId: this.VideoWidgetId,
            funcCb: $.proxy(this.biTrack, this)
        }), this.IsVideoRendered = !0)
    },
    TriggerVideoEvent: function(n) {
        this.IsVideoRendered && MsnVideo2.sendMessage({
            type: n,
            targetId: this.VideoWidgetId
        })
    },
    PauseAllVideo: function() {
        if (Mscom.Helper.IsValid(Mscom.Video.Videos)) {
            var n = this;
            $.each(Mscom.Video.Videos, function() {
                this.VideoWidgetId !== n.VideoWidgetId && this.TriggerVideoEvent("pauseVideo")
            })
        }
    },
    ResizeVideo: function() {
        this.IsMSNPlayer === !1 && this.SupportsVideo === !0 && ($(window).width() < 373 ? ($(this.Control).children(".video-button-container").hide(), this.Video.controls = !0) : ($(this.Control).children(".video-button-container").show(), this.Video.controls = !1))
    },
    biTrack: function(n) {
        var u, f, t, i, r;
        if (n.sourceId === this.VideoWidgetId && (n.param.status == "loaded" && (this.IsPopupVideo, this.IsVideoLoaded = !0, Mscom.BrowserDetect.browser == "Explorer" && Mscom.BrowserDetect.version <= 7 && (u = $(this.Control).find("div .vxp_richEmbedContainer object"), u.css("zoom", "1")), f = MsnVideo2.getProperties({
                type: "currentVideo",
                targetId: this.VideoWidgetId
            }), this.VideoTitle = f[0].param.video.title), this.Loop.toLowerCase() === "true" && n.param.status === "videoPlayCompleted" && this.TriggerVideoEvent("playVideo"), (n.param.status == "videoPaused" || n.param.status == "videoPlayCompleted") && (this.IsVideoLoaded = !0), this.IsVideoLoaded == !0 && n.param.status === "videoPlaying" && (this.PauseAllVideo(), this.IsVideoLoaded = !1, $.bi))) {
            if (t = $.bi.getLinkData($(this.Control)), t["wcs.cn"] = this.VideoTitle, t.title = this.VideoTitle, Mscom.Helper.IsValid(this.BiTags)) {
                i = JSON.parse(this.BiTags);
                for (r in i) t[r] = i[r]
            }
            $.bi.record(t)
        }
    },
    BindVideoEvents: function() {
        var n = this;
        $(window).on("resize", $.proxy(this.ResizeVideo, this));
        $(this.Video).bind("progress", function(t) {
            n.ProgressEvent(t)
        }).bind("timeupdate", function(t) {
            n.TimeCode(t)
        }).bind("cuechange", function(t) {
            n.CueChange(t)
        }).bind("loadedmetadata", function(t) {
            n.Loadedmetadata(t)
        }).bind("ended", function() {
            n.Video.src = n.Video.currentSrc
        }).bind("click", function(t) {
            n.Video.paused ? n.Play(t) : n.Pause(t)
        }).bind("play", function() {
            $(n).parent().children("#init").remove()
        })
    },
    BindButtonEvents: function() {
        var n = this;
        this.playButton.addEventListener("click", function() {
            n.Video.paused === !0 ? (n.Video.play(), $(this).css("background-position", "0px -1428px")) : (n.Video.pause(), $(this).css("background-position", "0px -1544px"))
        });
        this.muteButton.addEventListener("click", function() {
            n.Video.muted === !1 ? (n.Video.muted = !0, $(this).css("background-position", "0px -1312px")) : (n.Video.muted = !1, $(this).css("background-position", "0px -1660px"))
        });
        this.captions.addEventListener("click", function() {
            n.CaptionsMenu && $(n.CaptionsMenu).toggle()
        });
        this.fullscreen.addEventListener("click", function(t) {
            n.HandleFullscreen(t)
        });
        this.facebook !== undefined && this.facebook.addEventListener("click", function() {
            n.SharePage(this)
        });
        this.facebook !== undefined && this.twitter.addEventListener("click", function() {
            n.SharePage(this)
        });
        this.light !== undefined && this.light.addEventListener("click", function() {
            $(this).toggleClass("lighton");
            $(this).hasClass("lighton") ? $(".video-container-overlay").remove() : ($("body").append('<div class="video-container-overlay"><\/div>'), $(".video-container-overlay").css({
                width: "100%",
                height: $(document).height()
            }), $(".mscom-html5-videoContainer").css({
                "z-index": 1e3
            }))
        });
        $(this.Video).bind("volumechange", function(t) {
            n.VolumeChangedEvent(t)
        }, !1);
        $(this.Control).find("#video_volumebar").bind("mousedown", function() {
            n.isHoldingVolume = !0
        }).bind("mouseup", function(t) {
            n.isHoldingVolume = !1;
            n.SetVolume(t)
        }).bind("mousemove", function(t) {
            n.isHoldingVolume && n.SetVolume(t)
        });
        $(this.Control).find("#video_timebar").bind("mousedown", function() {
            n.isHoldingTime = !0
        }).bind("mouseup", function(t) {
            n.isHoldingTime = !1;
            n.SetPosition(t, !0)
        }).bind("mousemove", function(t) {
            n.NoticeTimecode(t);
            n.isHoldingTime && n.SetPosition(t, !1)
        });
        document.addEventListener("fullscreenchange", function() {
            this.SetFullscreenData(!!(document.fullScreen || document.fullscreenElement))
        });
        document.addEventListener("webkitfullscreenchange", function() {
            this.SetFullscreenData(!!document.webkitIsFullScreen)
        });
        document.addEventListener("mozfullscreenchange", function() {
            this.SetFullscreenData(!!document.mozFullScreen)
        });
        document.addEventListener("msfullscreenchange", function() {
            this.SetFullscreenData(!!document.msFullscreenElement)
        })
    },
    Play: function() {
        var n = this;
        n.Video.play();
        $(n.playButton).css("background-position", "0px -1544px")
    },
    Pause: function() {
        var n = this;
        n.Video.pause();
        $(n.playButton).css("background-position", "0px -1428px")
    },
    ProgressEvent: function() {
        var n = this,
            t, i, r;
        n.Video.buffered.length !== 0 && (t = {
            start: n.Video.buffered.start(0),
            end: n.Video.buffered.end(0)
        }, t.end === n.Video.duration ? $(n.Control).find("#video_timebar_buffer")[0].style.width = $(n.Control).find("#video_timebar")[0].offsetWidth - 2 + "px" : (i = $(n.Control).find("#video_timebar")[0].offsetWidth, r = Math.round(t.end * i / n.Video.duration), $(n.Control).find("#video_timebar_buffer")[0].style.width = r + "px"))
    },
    TimeCode: function() {
        var n = this;
        $(n.Control).find("#video_curpos")[0] !== undefined && ($(n.Control).find("#video_curpos")[0].innerHTML = n.ParseTimeCode(n.Video.currentTime), isNaN(n.Video.duration) || $(n.Control).find("#video_duration")[0].innerHTML !== "00:00" || ($(n.Control).find("#video_duration")[0].innerHTML = n.ParseTimeCode(n.Video.duration)), this.isHoldingTime || ($(n.Control).find("#video_timebar_inner")[0].style.width = n.Video.currentTime * 99 / n.Video.duration + "%"))
    },
    Loadedmetadata: function() {
        $(this).parent().append('<div id="init"><\/div>').on("click", function() {
            $(this).children("#init").remove();
            $(this).unbind("click");
            $(this).find(".play").css("background-position", "0px -1428px");
            $(this).children("video").get(0).play()
        })
    },
    SharePage: function(n) {
        var f = $(n).data("action-endpoint-url"),
            u = $(n).data("window-options"),
            i = $(n).data("share-target-id"),
            r = this.GetShareUrl(f, this.PageUrlParameterName),
            t;
        return r === undefined ? !1 : (t = this.ShareWindows[i], t === undefined || t === null || t.closed ? (t = u === undefined || u === null ? window.open(r, i) : window.open(r, i, u), this.ShareWindows[i] = t) : t.location = r, t.focus(), !1)
    },
    GetShareUrl: function(n, t) {
        var i, f, u, r;
        if (n !== undefined) return window.location === undefined ? void 0 : (i = null, f = null, t !== undefined && t !== null && (u = window.location.href, r = {}, r[t] = u, i = $.param(r)), i !== null ? n + "?" + i : n)
    },
    ParseTimeCode: function(n) {
        var r, t, i;
        for (n = Math.floor(n), r = 0; n - 60 > 0;) n = n - 60, r++;
        return t = n.toString(), t.length === 1 && (t = "0" + t), i = r.toString(), i.length === 1 && (i = "0" + i), i + ":" + t
    },
    SetPosition: function(n, t) {
        var i = this,
            r = $(i.Control).find("#video_timebar")[0],
            f = this.FindPos(r),
            e = n.pageX - f.x,
            u = Math.round(e * 99 / r.offsetWidth);
        $(i.Control).find("#video_timebar_inner")[0].style.width = u.toString() + "%";
        t && (i.Video.currentTime = Math.round(u * i.Video.duration / 99))
    },
    FindPos: function(n) {
        var t = y = 0;
        if (n.offsetParent)
            do t += n.offsetLeft, y += n.offsetTop; while (n = n.offsetParent);
        return {
            x: t,
            y: y
        }
    },
    NoticeTimecode: function(n) {
        var t = this,
            u = $(t.Control).find("#video_timebar")[0],
            i = $(t.Control).find("#video_timebar_notice")[0],
            e = t.FindPos(u),
            f = n.pageX - e.x,
            r = Math.round(f * 100 / u.offsetWidth);
        r < 0 && (r = 0);
        i.innerHTML = t.ParseTimeCode(Math.round(r * t.Video.duration / 100));
        i.style.marginLeft = f + 3 - i.offsetWidth / 2 + "px"
    },
    SetVolume: function(n) {
        var t = this,
            r = $(t.Control).find("#video_volumebar")[0],
            u = this.FindPos(r),
            f = n.pageY - u.y,
            i = 100 - Math.round(f * 100 / r.offsetHeight);
        i <= 100 && ($(t.Control).find("#video_volumebar_inner")[0].style.height = i.toString() + "%", t.Video.volume = i / 100);
        t.Video.volume === 0 ? (t.Video.muted = !0, $(t.muteButton).css("background-position", "0px -1312px")) : (t.Video.muted = !1, $(t.muteButton).css("background-position", "0px -1660px"))
    },
    VolumeChangedEvent: function() {
        var n = this;
        n.Video.volume <= 1 && ($(n.Control).find("#video_volumebar_inner")[0].style.height = (n.Video.volume * 100).toString() + "%")
    },
    SetFullscreenData: function(n) {
        var t = this;
        t.Control.setAttribute("data-fullscreen", !!n);
        t.fullscreen.setAttribute("data-state", !n ? "go-fullscreen" : "cancel-fullscreen")
    },
    IsFullScreen: function() {
        return !!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement)
    },
    HandleFullscreen: function() {
        var n = this;
        n.IsFullScreen() ? (document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen(), n.SetFullscreenData(!1)) : (n.Control.requestFullscreen ? n.Control.requestFullscreen() : n.Control.mozRequestFullScreen ? n.Control.mozRequestFullScreen() : n.Control.webkitRequestFullScreen ? n.Video.webkitRequestFullScreen() : n.Control.msRequestFullscreen && n.Control.msRequestFullscreen(), n.SetFullscreenData(!0))
    },
    CreateMenuItem: function(n, t, i) {
        var r = this,
            f = document.createElement("li"),
            u = f.appendChild(document.createElement("button"));
        return u.setAttribute("id", n), u.className = "captions-button", t.length > 0 && u.setAttribute("lang", t), u.value = i, u.setAttribute("data-state", "inactive"), u.appendChild(document.createTextNode(i)), u.addEventListener("click", function() {
            var t, n;
            for (r.CaptionMenuButtons.map(function(n, t) {
                    r.CaptionMenuButtons[t].setAttribute("data-state", "inactive")
                }), t = this.getAttribute("lang"), n = 0; n < r.Video.textTracks.length; n++) r.Video.textTracks[n].language === t ? (r.Video.textTracks[n].mode = "showing", this.setAttribute("data-state", "active")) : r.Video.textTracks[n].mode = "hidden";
            r.CaptionsMenu.style.display = "none"
        }), r.CaptionMenuButtons.push(u), f
    },
    InitializeCaptionMenu: function() {
        for (var i, n = this, t = 0; t < n.Video.textTracks.length; t++) n.Video.textTracks[t].mode = "hidden";
        if (n.Video.textTracks.length > 0) {
            for (i = document.createDocumentFragment(), n.CaptionsMenu = i.appendChild(document.createElement("ul")), n.CaptionsMenu.className = "captions-menu", n.CaptionsMenu.appendChild(n.CreateMenuItem("captions-off", "", "Off")), t = 0; t < n.Video.textTracks.length; t++) n.CaptionsMenu.appendChild(n.CreateMenuItem("captions-" + n.Video.textTracks[t].language, n.Video.textTracks[t].language, n.Video.textTracks[t].label));
            n.Control.appendChild(n.CaptionsMenu)
        } else $(n.captions).css("display", "none")
    }
};
typeof $ != "undefined" && $(function() {
    var n = "";
    Mscom && Mscom.Helper && Mscom.Video && $(".mscom-video").length > 0 && (n = window.location.protocol == "https:" ? "https://imgs1-video.ssl.catalog.video.msn.com/s/js/vxp.js" : "http://img1.video.s-msn.com/s/js/vxp.js", window.Mscom.Helper.loadScript(n, function() {
        $(".mscom-video").not("[data-loaded=true]").each(function(n) {
            $(this).children(".mscom-html5-video")[0] !== "undefined" && $(this).children(".mscom-html5-video").parent().removeClass("mscom-video").addClass("mscom-html5-videoContainer");
            Mscom.Video.Videos || (Mscom.Video.Videos = []);
            Mscom.Video.Videos[n] = new Mscom.Video(this)
        })
    }))
});
! function(n) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], n) : "undefined" != typeof exports ? module.exports = n(require("jquery")) : n(jQuery)
}(function(n) {
    "use strict";
    var t = window.Slick || {};
    t = function() {
        function t(t, r) {
            var f, e, u = this;
            if (u.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: n(t),
                    appendDots: n(t),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button type="button" data-role="none" class="slick-prev">Previous<\/button>',
                    nextArrow: '<button type="button" data-role="none" class="slick-next">Next<\/button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function(n, t) {
                        return '<button type="button" data-role="none">' + (t + 1) + "<\/button>"
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    fade: !1,
                    focusOnSelect: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    onBeforeChange: null,
                    onAfterChange: null,
                    onInit: null,
                    onReInit: null,
                    onSetPosition: null,
                    pauseOnHover: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rtl: !1,
                    slide: "div",
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    variableWidth: !1,
                    vertical: !1,
                    waitForAnimate: !0
                }, u.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1
                }, n.extend(u, u.initials), u.activeBreakpoint = null, u.animType = null, u.animProp = null, u.breakpoints = [], u.breakpointSettings = [], u.cssTransitions = !1, u.paused = !1, u.positionProp = null, u.respondTo = null, u.shouldClick = !0, u.$slider = n(t), u.$slidesCache = null, u.transformType = null, u.transitionType = null, u.windowWidth = 0, u.windowTimer = null, u.options = n.extend({}, u.defaults, r), u.currentSlide = u.options.initialSlide, u.originalSettings = u.options, f = u.options.responsive || null, f && f.length > -1) {
                u.respondTo = u.options.respondTo || "window";
                for (e in f) f.hasOwnProperty(e) && (u.breakpoints.push(f[e].breakpoint), u.breakpointSettings[f[e].breakpoint] = f[e].settings);
                u.breakpoints.sort(function(n, t) {
                    return t - n
                })
            }
            u.autoPlay = n.proxy(u.autoPlay, u);
            u.autoPlayClear = n.proxy(u.autoPlayClear, u);
            u.changeSlide = n.proxy(u.changeSlide, u);
            u.clickHandler = n.proxy(u.clickHandler, u);
            u.selectHandler = n.proxy(u.selectHandler, u);
            u.setPosition = n.proxy(u.setPosition, u);
            u.swipeHandler = n.proxy(u.swipeHandler, u);
            u.dragHandler = n.proxy(u.dragHandler, u);
            u.keyHandler = n.proxy(u.keyHandler, u);
            u.autoPlayIterator = n.proxy(u.autoPlayIterator, u);
            u.instanceUid = i++;
            u.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
            u.init();
            u.checkResponsive()
        }
        var i = 0;
        return t
    }();
    t.prototype.addSlide = function(t, i, r) {
        var u = this;
        if ("boolean" == typeof i) r = i, i = null;
        else if (0 > i || i >= u.slideCount) return !1;
        u.unload();
        "number" == typeof i ? 0 === i && 0 === u.$slides.length ? n(t).appendTo(u.$slideTrack) : r ? n(t).insertBefore(u.$slides.eq(i)) : n(t).insertAfter(u.$slides.eq(i)) : r === !0 ? n(t).prependTo(u.$slideTrack) : n(t).appendTo(u.$slideTrack);
        u.$slides = u.$slideTrack.children(this.options.slide);
        u.$slideTrack.children(this.options.slide).detach();
        u.$slideTrack.append(u.$slides);
        u.$slides.each(function(t, i) {
            n(i).attr("index", t)
        });
        u.$slidesCache = u.$slides;
        u.reinit()
    };
    t.prototype.animateSlide = function(t, i) {
        var u = {},
            r = this,
            f;
        1 === r.options.slidesToShow && r.options.adaptiveHeight === !0 && r.options.vertical === !1 && (f = r.$slides.eq(r.currentSlide).outerHeight(!0), r.$list.animate({
            height: f
        }, r.options.speed));
        r.options.rtl === !0 && r.options.vertical === !1 && (t = -t);
        r.transformsEnabled === !1 ? r.options.vertical === !1 ? r.$slideTrack.animate({
            left: t
        }, r.options.speed, r.options.easing, i) : r.$slideTrack.animate({
            top: t
        }, r.options.speed, r.options.easing, i) : r.cssTransitions === !1 ? n({
            animStart: r.currentLeft
        }).animate({
            animStart: t
        }, {
            duration: r.options.speed,
            easing: r.options.easing,
            step: function(n) {
                r.options.vertical === !1 ? (u[r.animType] = "translate(" + n + "px, 0px)", r.$slideTrack.css(u)) : (u[r.animType] = "translate(0px," + n + "px)", r.$slideTrack.css(u))
            },
            complete: function() {
                i && i.call()
            }
        }) : (r.applyTransition(), u[r.animType] = r.options.vertical === !1 ? "translate3d(" + t + "px, 0px, 0px)" : "translate3d(0px," + t + "px, 0px)", r.$slideTrack.css(u), i && setTimeout(function() {
            r.disableTransition();
            i.call()
        }, r.options.speed))
    };
    t.prototype.asNavFor = function(t) {
        var i = this,
            r = null != i.options.asNavFor ? n(i.options.asNavFor).getSlick() : null;
        null != r && r.slideHandler(t, !0)
    };
    t.prototype.applyTransition = function(n) {
        var t = this,
            i = {};
        i[t.transitionType] = t.options.fade === !1 ? t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : "opacity " + t.options.speed + "ms " + t.options.cssEase;
        t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(n).css(i)
    };
    t.prototype.autoPlay = function() {
        var n = this;
        n.autoPlayTimer && clearInterval(n.autoPlayTimer);
        n.slideCount > n.options.slidesToShow && n.paused !== !0 && (n.autoPlayTimer = setInterval(n.autoPlayIterator, n.options.autoplaySpeed))
    };
    t.prototype.autoPlayClear = function() {
        var n = this;
        n.autoPlayTimer && clearInterval(n.autoPlayTimer)
    };
    t.prototype.autoPlayIterator = function() {
        var n = this;
        n.options.infinite === !1 ? 1 === n.direction ? (n.currentSlide + 1 === n.slideCount - 1 && (n.direction = 0), n.slideHandler(n.currentSlide + n.options.slidesToScroll)) : (0 == n.currentSlide - 1 && (n.direction = 1), n.slideHandler(n.currentSlide - n.options.slidesToScroll)) : n.slideHandler(n.currentSlide + n.options.slidesToScroll)
    };
    t.prototype.buildArrows = function() {
        var t = this;
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow = n(t.options.prevArrow), t.$nextArrow = n(t.options.nextArrow), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.appendTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled"))
    };
    t.prototype.buildDots = function() {
        var i, r, t = this;
        if (t.options.dots === !0 && t.slideCount > t.options.slidesToShow) {
            for (r = '<ul class="' + t.options.dotsClass + '">', i = 0; i <= t.getDotCount(); i += 1) r += "<li>" + t.options.customPaging.call(this, t, i) + "<\/li>";
            r += "<\/ul>";
            t.$dots = n(r).appendTo(t.options.appendDots);
            t.$dots.find("li").first().addClass("slick-active")
        }
    };
    t.prototype.buildOut = function() {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide");
        t.slideCount = t.$slides.length;
        t.$slides.each(function(t, i) {
            n(i).attr("index", t)
        });
        t.$slidesCache = t.$slides;
        t.$slider.addClass("slick-slider");
        t.$slideTrack = 0 === t.slideCount ? n('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent();
        t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent();
        t.$slideTrack.css("opacity", 0);
        t.options.centerMode === !0 && (t.options.slidesToScroll = 1);
        n("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading");
        t.setupInfinite();
        t.buildArrows();
        t.buildDots();
        t.updateDots();
        t.options.accessibility === !0 && t.$list.prop("tabIndex", 0);
        t.setSlideClasses("number" == typeof this.currentSlide ? this.currentSlide : 0);
        t.options.draggable === !0 && t.$list.addClass("draggable")
    };
    t.prototype.checkResponsive = function() {
        var r, i, u, t = this,
            f = t.$slider.width(),
            e = window.innerWidth || n(window).width();
        if ("window" === t.respondTo ? u = e : "slider" === t.respondTo ? u = f : "min" === t.respondTo && (u = Math.min(e, f)), t.originalSettings.responsive && t.originalSettings.responsive.length > -1 && null !== t.originalSettings.responsive) {
            i = null;
            for (r in t.breakpoints) t.breakpoints.hasOwnProperty(r) && u < t.breakpoints[r] && (i = t.breakpoints[r]);
            null !== i ? null !== t.activeBreakpoint ? i !== t.activeBreakpoint && (t.activeBreakpoint = i, t.options = n.extend({}, t.originalSettings, t.breakpointSettings[i]), t.refresh()) : (t.activeBreakpoint = i, t.options = n.extend({}, t.originalSettings, t.breakpointSettings[i]), t.refresh()) : null !== t.activeBreakpoint && (t.activeBreakpoint = null, t.options = t.originalSettings, t.refresh())
        }
    };
    t.prototype.changeSlide = function(t, i) {
        var e, o, c, u, s, r = this,
            l = n(t.target),
            f, h;
        switch (l.is("a") && t.preventDefault(), c = 0 != r.slideCount % r.options.slidesToScroll, e = c ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, t.data.message) {
            case "previous":
                o = 0 === e ? r.options.slidesToScroll : r.options.slidesToShow - e;
                r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, i);
                break;
            case "next":
                o = 0 === e ? r.options.slidesToScroll : e;
                r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, i);
                break;
            case "index":
                if (f = 0 === t.data.index ? 0 : t.data.index || n(t.target).parent().index() * r.options.slidesToScroll, u = r.getNavigableIndexes(), s = 0, u[f] && u[f] === f)
                    if (f > u[u.length - 1]) f = u[u.length - 1];
                    else
                        for (h in u) {
                            if (f < u[h]) {
                                f = s;
                                break
                            }
                            s = u[h]
                        }
                    r.slideHandler(f, !1, i);
            default:
                return
        }
    };
    t.prototype.clickHandler = function(n) {
        var t = this;
        t.shouldClick === !1 && (n.stopImmediatePropagation(), n.stopPropagation(), n.preventDefault())
    };
    t.prototype.destroy = function() {
        var t = this;
        t.autoPlayClear();
        t.touchObject = {};
        n(".slick-cloned", t.$slider).remove();
        t.$dots && t.$dots.remove();
        t.$prevArrow && "object" != typeof t.options.prevArrow && t.$prevArrow.remove();
        t.$nextArrow && "object" != typeof t.options.nextArrow && t.$nextArrow.remove();
        t.$slides.parent().hasClass("slick-track") && t.$slides.unwrap().unwrap();
        t.$slides.removeClass("slick-slide slick-active slick-center slick-visible").removeAttr("index").css({
            position: "",
            left: "",
            top: "",
            zIndex: "",
            opacity: "",
            width: ""
        });
        t.$slider.removeClass("slick-slider");
        t.$slider.removeClass("slick-initialized");
        t.$list.off(".slick");
        n(window).off(".slick-" + t.instanceUid);
        n(document).off(".slick-" + t.instanceUid)
    };
    t.prototype.disableTransition = function(n) {
        var t = this,
            i = {};
        i[t.transitionType] = "";
        t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(n).css(i)
    };
    t.prototype.fadeSlide = function(n, t, i) {
        var r = this;
        r.cssTransitions === !1 ? (r.$slides.eq(t).css({
            zIndex: 1e3
        }), r.$slides.eq(t).animate({
            opacity: 1
        }, r.options.speed, r.options.easing, i), r.$slides.eq(n).animate({
            opacity: 0
        }, r.options.speed, r.options.easing)) : (r.applyTransition(t), r.applyTransition(n), r.$slides.eq(t).css({
            opacity: 1,
            zIndex: 1e3
        }), r.$slides.eq(n).css({
            opacity: 0
        }), i && setTimeout(function() {
            r.disableTransition(t);
            r.disableTransition(n);
            i.call()
        }, r.options.speed))
    };
    t.prototype.filterSlides = function(n) {
        var t = this;
        null !== n && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(n).appendTo(t.$slideTrack), t.reinit())
    };
    t.prototype.getCurrent = function() {
        var n = this;
        return n.currentSlide
    };
    t.prototype.getDotCount = function() {
        var n = this,
            i = 0,
            r = 0,
            t = 0;
        if (n.options.infinite === !0) t = Math.ceil(n.slideCount / n.options.slidesToScroll);
        else
            for (; i < n.slideCount;) ++t, i = r + n.options.slidesToShow, r += n.options.slidesToScroll <= n.options.slidesToShow ? n.options.slidesToScroll : n.options.slidesToShow;
        return t - 1
    };
    t.prototype.getLeft = function(n) {
        var f, r, i, t = this,
            u = 0;
        return t.slideOffset = 0, r = t.$slides.first().outerHeight(), t.options.infinite === !0 ? (t.slideCount > t.options.slidesToShow && (t.slideOffset = -1 * t.slideWidth * t.options.slidesToShow, u = -1 * r * t.options.slidesToShow), 0 != t.slideCount % t.options.slidesToScroll && n + t.options.slidesToScroll > t.slideCount && t.slideCount > t.options.slidesToShow && (n > t.slideCount ? (t.slideOffset = -1 * (t.options.slidesToShow - (n - t.slideCount)) * t.slideWidth, u = -1 * (t.options.slidesToShow - (n - t.slideCount)) * r) : (t.slideOffset = -1 * t.slideCount % t.options.slidesToScroll * t.slideWidth, u = -1 * t.slideCount % t.options.slidesToScroll * r))) : n + t.options.slidesToShow > t.slideCount && (t.slideOffset = (n + t.options.slidesToShow - t.slideCount) * t.slideWidth, u = (n + t.options.slidesToShow - t.slideCount) * r), t.slideCount <= t.options.slidesToShow && (t.slideOffset = 0, u = 0), t.options.centerMode === !0 && t.options.infinite === !0 ? t.slideOffset += t.slideWidth * Math.floor(t.options.slidesToShow / 2) - t.slideWidth : t.options.centerMode === !0 && (t.slideOffset = 0, t.slideOffset += t.slideWidth * Math.floor(t.options.slidesToShow / 2)), f = t.options.vertical === !1 ? -1 * n * t.slideWidth + t.slideOffset : -1 * n * r + u, t.options.variableWidth === !0 && (i = t.slideCount <= t.options.slidesToShow || t.options.infinite === !1 ? t.$slideTrack.children(".slick-slide").eq(n) : t.$slideTrack.children(".slick-slide").eq(n + t.options.slidesToShow), f = i[0] ? -1 * i[0].offsetLeft : 0, t.options.centerMode === !0 && (i = t.options.infinite === !1 ? t.$slideTrack.children(".slick-slide").eq(n) : t.$slideTrack.children(".slick-slide").eq(n + t.options.slidesToShow + 1), f = i[0] ? -1 * i[0].offsetLeft : 0, f += (t.$list.width() - i.outerWidth()) / 2)), f
    };
    t.prototype.getNavigableIndexes = function() {
        for (var n = this, t = 0, i = 0, r = []; t < n.slideCount;) r.push(t), t = i + n.options.slidesToScroll, i += n.options.slidesToScroll <= n.options.slidesToShow ? n.options.slidesToScroll : n.options.slidesToShow;
        return r
    };
    t.prototype.getSlideCount = function() {
        var r, t = this,
            i;
        return t.options.swipeToSlide === !0 ? (i = null, t.$slideTrack.find(".slick-slide").each(function(r, u) {
            if (u.offsetLeft + n(u).outerWidth() / 2 > -1 * t.swipeLeft) return (i = u, !1)
        }), r = Math.abs(n(i).attr("index") - t.currentSlide)) : t.options.slidesToScroll
    };
    t.prototype.init = function() {
        var t = this;
        n(t.$slider).hasClass("slick-initialized") || (n(t.$slider).addClass("slick-initialized"), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots());
        null !== t.options.onInit && t.options.onInit.call(this, t)
    };
    t.prototype.initArrowEvents = function() {
        var n = this;
        n.options.arrows === !0 && n.slideCount > n.options.slidesToShow && (n.$prevArrow.on("click.slick", {
            message: "previous"
        }, n.changeSlide), n.$nextArrow.on("click.slick", {
            message: "next"
        }, n.changeSlide))
    };
    t.prototype.initDotEvents = function() {
        var t = this;
        t.options.dots === !0 && t.slideCount > t.options.slidesToShow && n("li", t.$dots).on("click.slick", {
            message: "index"
        }, t.changeSlide);
        t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && t.options.autoplay === !0 && n("li", t.$dots).on("mouseenter.slick", function() {
            t.paused = !0;
            t.autoPlayClear()
        }).on("mouseleave.slick", function() {
            t.paused = !1;
            t.autoPlay()
        })
    };
    t.prototype.initializeEvents = function() {
        var t = this;
        t.initArrowEvents();
        t.initDotEvents();
        t.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, t.swipeHandler);
        t.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, t.swipeHandler);
        t.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, t.swipeHandler);
        t.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, t.swipeHandler);
        t.$list.on("click.slick", t.clickHandler);
        t.options.pauseOnHover === !0 && t.options.autoplay === !0 && (t.$list.on("mouseenter.slick", function() {
            t.paused = !0;
            t.autoPlayClear()
        }), t.$list.on("mouseleave.slick", function() {
            t.paused = !1;
            t.autoPlay()
        }));
        t.options.accessibility === !0 && t.$list.on("keydown.slick", t.keyHandler);
        t.options.focusOnSelect === !0 && n(t.options.slide, t.$slideTrack).on("click.slick", t.selectHandler);
        n(window).on("orientationchange.slick.slick-" + t.instanceUid, function() {
            t.checkResponsive();
            t.setPosition()
        });
        n(window).on("resize.slick.slick-" + t.instanceUid, function() {
            n(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
                t.windowWidth = n(window).width();
                t.checkResponsive();
                t.setPosition()
            }, 50))
        });
        n("*[draggable!=true]", t.$slideTrack).on("dragstart", function(n) {
            n.preventDefault()
        });
        n(window).on("load.slick.slick-" + t.instanceUid, t.setPosition);
        n(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
    };
    t.prototype.initUI = function() {
        var n = this;
        n.options.arrows === !0 && n.slideCount > n.options.slidesToShow && (n.$prevArrow.show(), n.$nextArrow.show());
        n.options.dots === !0 && n.slideCount > n.options.slidesToShow && n.$dots.show();
        n.options.autoplay === !0 && n.autoPlay()
    };
    t.prototype.keyHandler = function(n) {
        var t = this;
        37 === n.keyCode && t.options.accessibility === !0 ? t.changeSlide({
            data: {
                message: "previous"
            }
        }) : 39 === n.keyCode && t.options.accessibility === !0 && t.changeSlide({
            data: {
                message: "next"
            }
        })
    };
    t.prototype.lazyLoad = function() {
        function f(t) {
            n("img[data-lazy]", t).each(function() {
                var t = n(this),
                    i = n(this).attr("data-lazy");
                t.load(function() {
                    t.animate({
                        opacity: 1
                    }, 200)
                }).css({
                    opacity: 0
                }).attr("src", i).removeAttr("data-lazy").removeClass("slick-loading")
            })
        }
        var e, r, i, u, t = this;
        t.options.centerMode === !0 ? t.options.infinite === !0 ? (i = t.currentSlide + (t.options.slidesToShow / 2 + 1), u = i + t.options.slidesToShow + 2) : (i = Math.max(0, t.currentSlide - (t.options.slidesToShow / 2 + 1)), u = 2 + (t.options.slidesToShow / 2 + 1) + t.currentSlide) : (i = t.options.infinite ? t.options.slidesToShow + t.currentSlide : t.currentSlide, u = i + t.options.slidesToShow, t.options.fade === !0 && (i > 0 && i--, u <= t.slideCount && u++));
        e = t.$slider.find(".slick-slide").slice(i, u);
        f(e);
        t.slideCount <= t.options.slidesToShow ? (r = t.$slider.find(".slick-slide"), f(r)) : t.currentSlide >= t.slideCount - t.options.slidesToShow ? (r = t.$slider.find(".slick-cloned").slice(0, t.options.slidesToShow), f(r)) : 0 === t.currentSlide && (r = t.$slider.find(".slick-cloned").slice(-1 * t.options.slidesToShow), f(r))
    };
    t.prototype.loadSlider = function() {
        var n = this;
        n.setPosition();
        n.$slideTrack.css({
            opacity: 1
        });
        n.$slider.removeClass("slick-loading");
        n.initUI();
        "progressive" === n.options.lazyLoad && n.progressiveLazyLoad()
    };
    t.prototype.postSlide = function(n) {
        var t = this;
        null !== t.options.onAfterChange && t.options.onAfterChange.call(this, t, n);
        t.animating = !1;
        t.setPosition();
        t.swipeLeft = null;
        t.options.autoplay === !0 && t.paused === !1 && t.autoPlay()
    };
    t.prototype.progressiveLazyLoad = function() {
        var r, t, i = this;
        r = n("img[data-lazy]", i.$slider).length;
        r > 0 && (t = n("img[data-lazy]", i.$slider).first(), t.attr("src", t.attr("data-lazy")).removeClass("slick-loading").load(function() {
            t.removeAttr("data-lazy");
            i.progressiveLazyLoad()
        }).error(function() {
            t.removeAttr("data-lazy");
            i.progressiveLazyLoad()
        }))
    };
    t.prototype.refresh = function() {
        var t = this,
            i = t.currentSlide;
        t.destroy();
        n.extend(t, t.initials);
        t.init();
        t.changeSlide({
            data: {
                message: "index",
                index: i
            }
        }, !0)
    };
    t.prototype.reinit = function() {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide");
        t.slideCount = t.$slides.length;
        t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll);
        t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0);
        t.setProps();
        t.setupInfinite();
        t.buildArrows();
        t.updateArrows();
        t.initArrowEvents();
        t.buildDots();
        t.updateDots();
        t.initDotEvents();
        t.options.focusOnSelect === !0 && n(t.options.slide, t.$slideTrack).on("click.slick", t.selectHandler);
        t.setSlideClasses(0);
        t.setPosition();
        null !== t.options.onReInit && t.options.onReInit.call(this, t)
    };
    t.prototype.removeSlide = function(n, t, i) {
        var r = this;
        return "boolean" == typeof n ? (t = n, n = t === !0 ? 0 : r.slideCount - 1) : n = t === !0 ? --n : n, r.slideCount < 1 || 0 > n || n > r.slideCount - 1 ? !1 : (r.unload(), i === !0 ? r.$slideTrack.children().remove() : r.$slideTrack.children(this.options.slide).eq(n).remove(), r.$slides = r.$slideTrack.children(this.options.slide), r.$slideTrack.children(this.options.slide).detach(), r.$slideTrack.append(r.$slides), r.$slidesCache = r.$slides, r.reinit(), void 0)
    };
    t.prototype.setCSS = function(n) {
        var r, u, t = this,
            i = {};
        t.options.rtl === !0 && (n = -n);
        r = "left" == t.positionProp ? n + "px" : "0px";
        u = "top" == t.positionProp ? n + "px" : "0px";
        i[t.positionProp] = n;
        t.transformsEnabled === !1 ? t.$slideTrack.css(i) : (i = {}, t.cssTransitions === !1 ? (i[t.animType] = "translate(" + r + ", " + u + ")", t.$slideTrack.css(i)) : (i[t.animType] = "translate3d(" + r + ", " + u + ", 0px)", t.$slideTrack.css(i)))
    };
    t.prototype.setDimensions = function() {
        var t = this,
            i, r;
        (t.options.vertical === !1 ? t.options.centerMode === !0 && t.$list.css({
            padding: "0px " + t.options.centerPadding
        }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), t.options.centerMode === !0 && t.$list.css({
            padding: t.options.centerPadding + " 0px"
        })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), t.options.vertical === !1 && t.options.variableWidth === !1) ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : t.options.variableWidth === !0 ? (i = 0, t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.children(".slick-slide").each(function() {
            i += Math.ceil(n(this).outerWidth(!0))
        }), t.$slideTrack.width(Math.ceil(i) + 1)) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
        r = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        t.options.variableWidth === !1 && t.$slideTrack.children(".slick-slide").width(t.slideWidth - r)
    };
    t.prototype.setFade = function() {
        var i, t = this;
        t.$slides.each(function(r, u) {
            i = -1 * t.slideWidth * r;
            t.options.rtl === !0 ? n(u).css({
                position: "relative",
                right: i,
                top: 0,
                zIndex: 800,
                opacity: 0
            }) : n(u).css({
                position: "relative",
                left: i,
                top: 0,
                zIndex: 800,
                opacity: 0
            })
        });
        t.$slides.eq(t.currentSlide).css({
            zIndex: 900,
            opacity: 1
        })
    };
    t.prototype.setHeight = function() {
        var n = this,
            t;
        1 === n.options.slidesToShow && n.options.adaptiveHeight === !0 && n.options.vertical === !1 && (t = n.$slides.eq(n.currentSlide).outerHeight(!0), n.$list.css("height", t))
    };
    t.prototype.setPosition = function() {
        var n = this;
        n.setDimensions();
        n.setHeight();
        n.options.fade === !1 ? n.setCSS(n.getLeft(n.currentSlide)) : n.setFade();
        null !== n.options.onSetPosition && n.options.onSetPosition.call(this, n)
    };
    t.prototype.setProps = function() {
        var n = this,
            t = document.body.style;
        n.positionProp = n.options.vertical === !0 ? "top" : "left";
        "top" === n.positionProp ? n.$slider.addClass("slick-vertical") : n.$slider.removeClass("slick-vertical");
        (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && n.options.useCSS === !0 && (n.cssTransitions = !0);
        void 0 !== t.OTransform && (n.animType = "OTransform", n.transformType = "-o-transform", n.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (n.animType = !1));
        void 0 !== t.MozTransform && (n.animType = "MozTransform", n.transformType = "-moz-transform", n.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (n.animType = !1));
        void 0 !== t.webkitTransform && (n.animType = "webkitTransform", n.transformType = "-webkit-transform", n.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (n.animType = !1));
        void 0 !== t.msTransform && (n.animType = "msTransform", n.transformType = "-ms-transform", n.transitionType = "msTransition", void 0 === t.msTransform && (n.animType = !1));
        void 0 !== t.transform && n.animType !== !1 && (n.animType = "transform", n.transformType = "transform", n.transitionType = "transition");
        n.transformsEnabled = null !== n.animType && n.animType !== !1
    };
    t.prototype.setSlideClasses = function(n) {
        var u, i, r, f, t = this;
        t.$slider.find(".slick-slide").removeClass("slick-active").removeClass("slick-center");
        i = t.$slider.find(".slick-slide");
        t.options.centerMode === !0 ? (u = Math.floor(t.options.slidesToShow / 2), t.options.infinite === !0 && (n >= u && n <= t.slideCount - 1 - u ? t.$slides.slice(n - u, n + u + 1).addClass("slick-active") : (r = t.options.slidesToShow + n, i.slice(r - u + 1, r + u + 2).addClass("slick-active")), 0 === n ? i.eq(i.length - 1 - t.options.slidesToShow).addClass("slick-center") : n === t.slideCount - 1 && i.eq(t.options.slidesToShow).addClass("slick-center")), t.$slides.eq(n).addClass("slick-center")) : n >= 0 && n <= t.slideCount - t.options.slidesToShow ? t.$slides.slice(n, n + t.options.slidesToShow).addClass("slick-active") : i.length <= t.options.slidesToShow ? i.addClass("slick-active") : (f = t.slideCount % t.options.slidesToShow, r = t.options.infinite === !0 ? t.options.slidesToShow + n : n, t.options.slidesToShow == t.options.slidesToScroll && t.slideCount - n < t.options.slidesToShow ? i.slice(r - (t.options.slidesToShow - f), r + f).addClass("slick-active") : i.slice(r, r + t.options.slidesToShow).addClass("slick-active"));
        "ondemand" === t.options.lazyLoad && t.lazyLoad()
    };
    t.prototype.setupInfinite = function() {
        var i, r, u, t = this;
        if (t.options.fade === !0 && (t.options.centerMode = !1), t.options.infinite === !0 && t.options.fade === !1 && (r = null, t.slideCount > t.options.slidesToShow)) {
            for (u = t.options.centerMode === !0 ? t.options.slidesToShow + 1 : t.options.slidesToShow, i = t.slideCount; i > t.slideCount - u; i -= 1) r = i - 1, n(t.$slides[r]).clone(!0).attr("id", "").attr("index", r - t.slideCount).prependTo(t.$slideTrack).addClass("slick-cloned");
            for (i = 0; u > i; i += 1) r = i, n(t.$slides[r]).clone(!0).attr("id", "").attr("index", r + t.slideCount).appendTo(t.$slideTrack).addClass("slick-cloned");
            t.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                n(this).attr("id", "")
            })
        }
    };
    t.prototype.selectHandler = function(t) {
        var i = this,
            r = parseInt(n(t.target).parents(".slick-slide").attr("index"));
        return r || (r = 0), i.slideCount <= i.options.slidesToShow ? (i.$slider.find(".slick-slide").removeClass("slick-active"), i.$slides.eq(r).addClass("slick-active"), i.options.centerMode === !0 && (i.$slider.find(".slick-slide").removeClass("slick-center"), i.$slides.eq(r).addClass("slick-center")), i.asNavFor(r), void 0) : (i.slideHandler(r), void 0)
    };
    t.prototype.slideHandler = function(n, t, i) {
        var u, f, o, e, s = null,
            r = this;
        return t = t || !1, r.animating === !0 && r.options.waitForAnimate === !0 || r.options.fade === !0 && r.currentSlide === n || r.slideCount <= r.options.slidesToShow ? void 0 : (t === !1 && r.asNavFor(n), u = n, s = r.getLeft(u), e = r.getLeft(r.currentSlide), r.currentLeft = null === r.swipeLeft ? e : r.swipeLeft, r.options.infinite === !1 && r.options.centerMode === !1 && (0 > n || n > r.getDotCount() * r.options.slidesToScroll) ? (r.options.fade === !1 && (u = r.currentSlide, i !== !0 ? r.animateSlide(e, function() {
            r.postSlide(u)
        }) : r.postSlide(u)), void 0) : r.options.infinite === !1 && r.options.centerMode === !0 && (0 > n || n > r.slideCount - r.options.slidesToScroll) ? (r.options.fade === !1 && (u = r.currentSlide, i !== !0 ? r.animateSlide(e, function() {
            r.postSlide(u)
        }) : r.postSlide(u)), void 0) : (r.options.autoplay === !0 && clearInterval(r.autoPlayTimer), f = 0 > u ? 0 != r.slideCount % r.options.slidesToScroll ? r.slideCount - r.slideCount % r.options.slidesToScroll : r.slideCount + u : u >= r.slideCount ? 0 != r.slideCount % r.options.slidesToScroll ? 0 : u - r.slideCount : u, r.animating = !0, null !== r.options.onBeforeChange && n !== r.currentSlide && r.options.onBeforeChange.call(this, r, r.currentSlide, f), o = r.currentSlide, r.currentSlide = f, r.setSlideClasses(r.currentSlide), r.updateDots(), r.updateArrows(), r.options.fade === !0 ? (i !== !0 ? r.fadeSlide(o, f, function() {
            r.postSlide(f)
        }) : r.postSlide(f), void 0) : (i !== !0 ? r.animateSlide(s, function() {
            r.postSlide(f)
        }) : r.postSlide(f), void 0)))
    };
    t.prototype.startLoad = function() {
        var n = this;
        n.options.arrows === !0 && n.slideCount > n.options.slidesToShow && (n.$prevArrow.hide(), n.$nextArrow.hide());
        n.options.dots === !0 && n.slideCount > n.options.slidesToShow && n.$dots.hide();
        n.$slider.addClass("slick-loading")
    };
    t.prototype.swipeDirection = function() {
        var i, r, u, n, t = this;
        return i = t.touchObject.startX - t.touchObject.curX, r = t.touchObject.startY - t.touchObject.curY, u = Math.atan2(r, i), n = Math.round(180 * u / Math.PI), 0 > n && (n = 360 - Math.abs(n)), 45 >= n && n >= 0 ? t.options.rtl === !1 ? "left" : "right" : 360 >= n && n >= 315 ? t.options.rtl === !1 ? "left" : "right" : n >= 135 && 225 >= n ? t.options.rtl === !1 ? "right" : "left" : "vertical"
    };
    t.prototype.swipeEnd = function() {
        var n = this;
        if (n.dragging = !1, n.shouldClick = n.touchObject.swipeLength > 10 ? !1 : !0, void 0 === n.touchObject.curX) return !1;
        if (n.touchObject.swipeLength >= n.touchObject.minSwipe) switch (n.swipeDirection()) {
            case "left":
                n.slideHandler(n.currentSlide + n.getSlideCount());
                n.currentDirection = 0;
                n.touchObject = {};
                break;
            case "right":
                n.slideHandler(n.currentSlide - n.getSlideCount());
                n.currentDirection = 1;
                n.touchObject = {}
        } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
    };
    t.prototype.swipeHandler = function(n) {
        var t = this;
        if (!(t.options.swipe === !1 || "ontouchend" in document && t.options.swipe === !1 || t.options.draggable === !1 && -1 !== n.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = n.originalEvent && void 0 !== n.originalEvent.touches ? n.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, n.data.action) {
            case "start":
                t.swipeStart(n);
                break;
            case "move":
                t.swipeMove(n);
                break;
            case "end":
                t.swipeEnd(n)
        }
    };
    t.prototype.swipeMove = function(n) {
        var r, f, u, i, t = this;
        return i = void 0 !== n.originalEvent ? n.originalEvent.touches : null, !t.dragging || i && 1 !== i.length ? !1 : (r = t.getLeft(t.currentSlide), t.touchObject.curX = void 0 !== i ? i[0].pageX : n.clientX, t.touchObject.curY = void 0 !== i ? i[0].pageY : n.clientY, t.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(t.touchObject.curX - t.touchObject.startX, 2))), f = t.swipeDirection(), "vertical" !== f ? (void 0 !== n.originalEvent && t.touchObject.swipeLength > 4 && n.preventDefault(), u = (t.options.rtl === !1 ? 1 : -1) * (t.touchObject.curX > t.touchObject.startX ? 1 : -1), t.swipeLeft = t.options.vertical === !1 ? r + t.touchObject.swipeLength * u : r + t.touchObject.swipeLength * (t.$list.height() / t.listWidth) * u, t.options.fade === !0 || t.options.touchMove === !1 ? !1 : t.animating === !0 ? (t.swipeLeft = null, !1) : (t.setCSS(t.swipeLeft), void 0)) : void 0)
    };
    t.prototype.swipeStart = function(n) {
        var i, t = this;
        return 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow ? (t.touchObject = {}, !1) : (void 0 !== n.originalEvent && void 0 !== n.originalEvent.touches && (i = n.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== i ? i.pageX : n.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== i ? i.pageY : n.clientY, t.dragging = !0, void 0)
    };
    t.prototype.unfilterSlides = function() {
        var n = this;
        null !== n.$slidesCache && (n.unload(), n.$slideTrack.children(this.options.slide).detach(), n.$slidesCache.appendTo(n.$slideTrack), n.reinit())
    };
    t.prototype.unload = function() {
        var t = this;
        n(".slick-cloned", t.$slider).remove();
        t.$dots && t.$dots.remove();
        t.$prevArrow && "object" != typeof t.options.prevArrow && t.$prevArrow.remove();
        t.$nextArrow && "object" != typeof t.options.nextArrow && t.$nextArrow.remove();
        t.$slides.removeClass("slick-slide slick-active slick-visible").css("width", "")
    };
    t.prototype.updateArrows = function() {
        var t, n = this;
        t = Math.floor(n.options.slidesToShow / 2);
        n.options.arrows === !0 && n.options.infinite !== !0 && n.slideCount > n.options.slidesToShow && (n.$prevArrow.removeClass("slick-disabled"), n.$nextArrow.removeClass("slick-disabled"), 0 === n.currentSlide ? (n.$prevArrow.addClass("slick-disabled"), n.$nextArrow.removeClass("slick-disabled")) : n.currentSlide >= n.slideCount - n.options.slidesToShow && n.options.centerMode === !1 ? (n.$nextArrow.addClass("slick-disabled"), n.$prevArrow.removeClass("slick-disabled")) : n.currentSlide > n.slideCount - n.options.slidesToShow + t && n.options.centerMode === !0 && (n.$nextArrow.addClass("slick-disabled"), n.$prevArrow.removeClass("slick-disabled")))
    };
    t.prototype.updateDots = function() {
        var n = this;
        null !== n.$dots && (n.$dots.find("li").removeClass("slick-active"), n.$dots.find("li").eq(Math.floor(n.currentSlide / n.options.slidesToScroll)).addClass("slick-active"))
    };
    n.fn.slick = function(n) {
        var i = this;
        return i.each(function(i, r) {
            r.slick = new t(r, n)
        })
    };
    n.fn.slickAdd = function(n, t, i) {
        var r = this;
        return r.each(function(r, u) {
            u.slick.addSlide(n, t, i)
        })
    };
    n.fn.slickCurrentSlide = function() {
        var n = this;
        return n.get(0).slick.getCurrent()
    };
    n.fn.slickFilter = function(n) {
        var t = this;
        return t.each(function(t, i) {
            i.slick.filterSlides(n)
        })
    };
    n.fn.slickGoTo = function(n, t) {
        var i = this;
        return i.each(function(i, r) {
            r.slick.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(n)
                }
            }, t)
        })
    };
    n.fn.slickNext = function() {
        var n = this;
        return n.each(function(n, t) {
            t.slick.changeSlide({
                data: {
                    message: "next"
                }
            })
        })
    };
    n.fn.slickPause = function() {
        var n = this;
        return n.each(function(n, t) {
            t.slick.autoPlayClear();
            t.slick.paused = !0
        })
    };
    n.fn.slickPlay = function() {
        var n = this;
        return n.each(function(n, t) {
            t.slick.paused = !1;
            t.slick.autoPlay()
        })
    };
    n.fn.slickPrev = function() {
        var n = this;
        return n.each(function(n, t) {
            t.slick.changeSlide({
                data: {
                    message: "previous"
                }
            })
        })
    };
    n.fn.slickRemove = function(n, t) {
        var i = this;
        return i.each(function(i, r) {
            r.slick.removeSlide(n, t)
        })
    };
    n.fn.slickRemoveAll = function() {
        var n = this;
        return n.each(function(n, t) {
            t.slick.removeSlide(null, null, !0)
        })
    };
    n.fn.slickGetOption = function(n) {
        var t = this;
        return t.get(0).slick.options[n]
    };
    n.fn.slickSetOption = function(n, t, i) {
        var r = this;
        return r.each(function(r, u) {
            u.slick.options[n] = t;
            i === !0 && (u.slick.unload(), u.slick.reinit())
        })
    };
    n.fn.slickUnfilter = function() {
        var n = this;
        return n.each(function(n, t) {
            t.slick.unfilterSlides()
        })
    };
    n.fn.unslick = function() {
        var n = this;
        return n.each(function(n, t) {
            t.slick && t.slick.destroy()
        })
    };
    n.fn.getSlick = function() {
        var n = null,
            t = this;
        return t.each(function(t, i) {
            n = i.slick
        }), n
    }
});
slick = function(n) {
    function r() {
        n(".section-carousel").not(".unifiedChannel .section-carousel").each(function(t, r) {
            i(n(r))
        })
    }

    function i(n) {
        n.hasClass("carousel-8") && n.slick({
            infinite: !1,
            speed: 800,
            slide: ".slide",
            slidesToShow: 8,
            slidesToScroll: 8,
            appendArrows: n.closest(".section").find(".section-header-arrows"),
            responsive: [{
                breakpoint: t.vp4,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6
                }
            }, {
                breakpoint: t.vp3,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            }, {
                breakpoint: t.vp2,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: !1,
                    dots: !0
                }
            }, {
                breakpoint: t.vp1 + 60,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: !1,
                    dots: !0
                }
            }]
        })
    }
    var t = {
        vp1: 320,
        vp2: 540,
        vp3: 768,
        vp4: 992,
        vp5: 1400
    };
    return {
        loadAll: r,
        loadOne: i
    }
};
$(document).ready(function() {
        slick(jQuery).loadAll()
    }),
    function(n, t) {
        "use strict";
        var t = t || {};
        t.utils = t.utils || {};
        t.utils.heroSliderInit = function(t) {
            var t = t || {},
                o = document.scripts[document.scripts.length - 1],
                s = n(o.parentNode),
                i = ".slideshow" + (t.cssClassId && "-" + t.cssClassId || ""),
                r = s.find(i + " .slides"),
                f = 4500,
                e = function(t) {
                    var r;
                    r = t ? n(i + " .slides > li:eq(" + t + ") .heroitem") : n(i + " .slides > li .heroitem:visible").eq(0);
                    r.hasClass("light-foreground") ? n(".prev-next").addClass("light-foreground") : n(".prev-next").removeClass("light-foreground")
                },
                u;
            n(".slideshow-news").each(function(t, i) {
                var r = n(i);
                r.attr("data-speed") || r.attr("data-speed", f)
            });
            u = n("body").data("settings") && n("body").data("settings").length || 0;
            r.length && (r.parent().find(".navigation .grid-container").attr("data-slidercontrolindex", u), r.parent().find(".prev-next").attr("data-sliderdirectionindex", u));
            n.responsiveSlideshow && r.length && r.responsiveSlideshow({
                speed: f,
                sliderIndex: n("body").data("settings") && n("body").data("settings").length || 0,
                rootSelector: i,
                directionNav: i + " .prev-next",
                controlNav: r.children().length > 1 ? i + " .navigation" : null,
                init: function() {
                    n(".heroitem.dark-foreground").removeClass("light-foreground");
                    e()
                },
                between: e
            })
        }
    }(jQuery, Mscom);
$(document).ready(function() {
    var n = window.location.pathname,
        t, i;
    n = n.replace("/www.microsoft.com", "");
    n = n.replace("/en-us/TrustCenter", "");
    t = n.split("/")[1];
    t.indexOf("default.aspx") > -1 ? $("ul#trusted-cloud-nav>li:first-of-type").addClass("currentLocation") : (i = "ul#trusted-cloud-nav>li[title=" + t + "]", $(i).addClass("currentLocation"));
    $("ul#trusted-cloud-nav>li").hover(function() {
        $(window).width() >= 800 && $(this).find("div.subNavContainer").show()
    }, function() {
        $(window).width() > 800 && $(this).find("div.subNavContainer").hide()
    });
    $("ul#trusted-cloud-nav>li>a").click(function(n) {
        $(window).width() < 800 && $(this).parent().attr("title") != "Home" && $(this).parent().attr("title") != "Whats-New" && (n.preventDefault(), $(this).parent().find("div.subNavContainer").toggle())
    });
    $("a.mscom-link.mscom-header-navtogglelink").click(function() {
        if ($("div#trusted-cloud-nav").css("right") == "0px") $("div#trusted-cloud-nav").animate({
            right: "-300px"
        }), $("html").css("overflow-y", "scroll");
        else {
            var n = $("body > div:nth-of-type(2)").height();
            $("div#trusted-cloud-nav").css("top", n);
            $("div#trusted-cloud-nav").animate({
                right: "0px"
            });
            $("html").css("overflow-y", "hidden")
        }
    });
    $("a.mscom-link.mscom-header-searchtogglelink").click(function(n) {
        n.preventDefault();
        $(".mscom-header-search-section").css("display") == "none" ? $(".mscom-header-search-section").attr("style", "display: block !important") : $(".mscom-header-search-section").attr("style", "display: none !important");
        $(".mscom-header-search-section").toggleSlide()
    });
    $(document).click(function(n) {
        $(n.target).closest("div.certImageContainer").length || $("div.certPopup").is(":visible") && ($("div.certImageGray img.certImage").removeClass("active"), $("div.certPopup").hide())
    });
    $("div.certPopup > img").click(function() {
        console.log("Closing");
        $("div.certImageGray img.certImage").removeClass("active");
        $("div.certImageGray div.imageWrapper img").removeClass("active");
        $("div.certPopup").hide()
    });
    $("div.certImageGray img.certImage").click(function(n) {
        $("div.certImageGray img.certImage").removeClass("active");
        $(".certPopup").hide();
        $(this).addClass("active");
        $(".certPopup").css("height", "auto");
        setPopupText($(this).attr("id").toLowerCase());
        var t = String(n.pageX - $("div.certImageContainer").position().left) + "px",
            i = String(n.pageY - $("div.certImageContainer").position().top) + "px";
        $(".certPopup").css({
            top: i,
            left: t
        });
        showPopup($(this).attr("alt").toLowerCase())
    });
    $("div.certImageGray div.imageWrapper img").click(function(n) {
        $("div.certImageGray div.imageWrapper img").removeClass("active");
        $(".certPopup").hide();
        $(this).addClass("active");
        $(".certPopup").css("height", "auto");
        console.log($(this).attr("id").toLowerCase());
        setPopupText($(this).attr("id").toLowerCase());
        var t = n.pageX - $("div.certImageContainer").position().left,
            i = String(t) + "px",
            r = String(n.pageY - $("div.certImageContainer").position().top) + "px";
        $(".certPopup").css({
            top: r,
            left: i
        });
        showPopupAlt($(this).attr("alt").toLowerCase(), n.pageX, t)
    });
    $("select").change(function() {
        $(this).parent().hasClass("serviceSort") ? $(".countrySort select").val("All") : $(this).parent().hasClass("countrySort") && $(".serviceSort select").val("All");
        toggleCertIcons($(this).val());
        $("div.certImageGray div.imageWrapper img").removeClass("active");
        setPopupText("");
        displayResourceSummary("")
    });
    $(".subpageBody > div:first-of-type div.row-fluid ul:not(.nonFAQ) > li.mscom-accordion-item:first-of-type").click(function() {
        $(this).hasClass("selected") ? ($("li.mscom-accordion-item").addClass("selected"), $("li.mscom-accordion-item a").attr({
            "aria-expanded": "true",
            "aria-selected": "true"
        }), $("li.mscom-accordion-item div.mscom-accordion-item-container").slideDown()) : ($("li.mscom-accordion-item").removeClass("selected"), $("li.mscom-accordion-item a").attr({
            "aria-expanded": "false",
            "aria-selected": "false"
        }), $("li.mscom-accordion-item div.mscom-accordion-item-container").slideUp())
    });
    $("div.resourceImgs div.imageWrapper img").click(function() {
        displayResourceSummary($(this).attr("alt"))
    })
})