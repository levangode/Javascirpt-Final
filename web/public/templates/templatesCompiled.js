(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['main_page/news'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "    <div class=\"news-item\">\r\n        <div class=\"news-img\">\r\n            <img src=\"http://mes.gov.ge/"
    + alias2(alias1((depth0 != null ? depth0.newsImgSrc : depth0), depth0))
    + "\"/>\r\n        </div>\r\n        <div class=\"news-info\">\r\n            <p class=\"news-date\">"
    + alias2(alias1((depth0 != null ? depth0.newsDate : depth0), depth0))
    + "</p>\r\n            <p class=\"news-title\">"
    + alias2(alias1((depth0 != null ? depth0.newsTitle : depth0), depth0))
    + "</p>\r\n            <!--<a class=\"news-title\" href=\""
    + alias2(alias1((depth0 != null ? depth0.newsTitleRef : depth0), depth0))
    + "\">-->\r\n            <!--"
    + alias2(alias1((depth0 != null ? depth0.newsTitle : depth0), depth0))
    + "-->\r\n            <!--</a>-->\r\n            <p class=\"newsDescription\">"
    + alias2(alias1((depth0 != null ? depth0.newsText : depth0), depth0))
    + "</p>\r\n        </div>\r\n    </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h1>საგანმანათლებლო სიახლეები</h1>\r\n<hr>\r\n<div id=\"news-list\" class=\"ui loading basic segment\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.news : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
templates['main_page/ratings'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>რეიტინგები</h1>\r\n<hr>\r\n<div>\r\n    <iframe id=\"ratings-frame\" src=\"https://e.infogram.com/c4d451c4-78c8-4f88-b829-e428549550fc?src=embed\"\r\n            title=\"უნივერსიტეტების რეიტინგები 2016\" width=\"900\" height=\"970\" scrolling=\"no\" frameborder=\"0\"\r\n            allowfullscreen=\"allowfullscreen\"></iframe>\r\n</div>";
},"useData":true});
templates['main_page/uni_list'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "            <li class=\"university-list-item grow\" id=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\">\r\n                <img src=\""
    + alias2(alias1((depth0 != null ? depth0.logo : depth0), depth0))
    + "\">\r\n                <h3>"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</h3>\r\n                <p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.universityFaculties : depth0)) != null ? stack1.length : stack1), depth0))
    + " კურსი</p>\r\n                <p>50 ადგილი</p>\r\n                <br>\r\n                <a href=\""
    + alias2(alias1((depth0 != null ? depth0.webAddress : depth0), depth0))
    + "\" target=\"_blank\">"
    + alias2(alias1((depth0 != null ? depth0.webAddress : depth0), depth0))
    + "</a>\r\n            </li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h1>უნივერსიტეტების სია</h1>\r\n<hr>\r\n<div>\r\n    <div id=\"university-items\">\r\n        <ul id=\"university-item-list\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.universities : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\r\n    </div>\r\n</div>";
},"useData":true});
templates['main_page/uni_profile'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "<h1>"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</h1>\r\n<div id=\"logo-div\">\r\n    <img id=\"logo\" src=\""
    + alias2(alias1((depth0 != null ? depth0.logo : depth0), depth0))
    + "\">\r\n</div>\r\n<hr>\r\n<ul class=\"menu-list\">\r\n    <li class=\"menu-item\">\r\n        <a id=\"news-menu\" class=\"item\">\r\n            <p>სიახლეები</p>\r\n        </a>\r\n    </li>\r\n    <li class=\"menu-item\">\r\n        <a id=\"faculties-menu\" class=\"item\">\r\n            <p>ფაკულტეტები</p>\r\n        </a>\r\n    </li>\r\n    <li class=\"menu-item\">\r\n        <a id=\"events-menu\" class=\"item\">\r\n            <p>აქტივობები</p>\r\n        </a>\r\n    </li>\r\n    <li class=\"menu-item\">\r\n        <a id=\"about-menu\" class=\"item\">\r\n            <p>ჩვენს შესახებ</p>\r\n        </a>\r\n    </li>\r\n    <li class=\"menu-item\">\r\n        <a id=\"reviews-menu\" class=\"item\">\r\n            <p>შეფასებები</p>\r\n        </a>\r\n    </li>\r\n    <li class=\"menu-item\">\r\n        <a id=\"faq-menu\" class=\"item\">\r\n            <p>კითხვა-პასუხი</p>\r\n        </a>\r\n    </li>\r\n</ul>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["with"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.university : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<div id=\"university-profile\" class=\"\"></div>";
},"useData":true});
templates['university_profile/uni_about'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h3>ჩვენს შესახებ</h3>\r\n<hr>\r\n<div>\r\n    <div id=\"about-div\">\r\n    </div>\r\n</div>";
},"useData":true});
templates['university_profile/uni_events'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "    <a href=\""
    + alias2(alias1((depth0 != null ? depth0.link : depth0), depth0))
    + "\" target=\"_blank\">\r\n        <div class=\"event-item\">\r\n            <div>\r\n                <img class=\"event-image\" src=\""
    + alias2(alias1((depth0 != null ? depth0.img : depth0), depth0))
    + "\">\r\n                <div>\r\n                    <table class=\"event-info-table\">\r\n                        <tr>\r\n                            <th class=\"event-date\">"
    + alias2(alias1((depth0 != null ? depth0.date : depth0), depth0))
    + "</th>\r\n                            <th colspan=\"2\">Title</th>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>"
    + alias2(alias1((depth0 != null ? depth0.description : depth0), depth0))
    + "</td>\r\n                            <td>"
    + alias2(alias1((depth0 != null ? depth0.address : depth0), depth0))
    + "</td>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </a>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h3>აქტივობები</h3>\r\n<hr>\r\n<div>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.university : depth0)) != null ? stack1.universityEvents : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
templates['university_profile/uni_faculties'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "        <div class=\"faculty-item grow\">\r\n            <table class=\"faculty-general\">\r\n                <caption>\r\n                    <table class=\"caption-table\">\r\n                        <tr>\r\n                            <th>პროგრამა:</th>\r\n                            <th>"
    + alias2(alias1((depth0 != null ? depth0.facultyNumber : depth0), depth0))
    + "</th>\r\n                            <th>"
    + alias2(alias1((depth0 != null ? depth0.programName : depth0), depth0))
    + "</th>\r\n                            <th>კვალიფიკაცია: "
    + alias2(alias1((depth0 != null ? depth0.qualification : depth0), depth0))
    + "</th>\r\n                        </tr>\r\n                    </table>\r\n                </caption>\r\n                <tr>\r\n                    <th>აკრედიტებული</th>\r\n                    <th>სწავლების ენა</th>\r\n                    <th>დაფინანსება</th>\r\n                    <th>კრედიტების რაოდენობა</th>\r\n                    <th>წლიური გადასახადი</th>\r\n                    <th>ადგილების რაოდენობა</th>\r\n                </tr>\r\n                <tr>\r\n                    <td>"
    + alias2(alias1((depth0 != null ? depth0.accredited : depth0), depth0))
    + "</td>\r\n                    <td>"
    + alias2(alias1((depth0 != null ? depth0.language : depth0), depth0))
    + "</td>\r\n                    <td>"
    + alias2(alias1((depth0 != null ? depth0.financing : depth0), depth0))
    + "</td>\r\n                    <td>"
    + alias2(alias1((depth0 != null ? depth0.credits : depth0), depth0))
    + "</td>\r\n                    <td>"
    + alias2(alias1((depth0 != null ? depth0.annualFee : depth0), depth0))
    + "</td>\r\n                    <td>"
    + alias2(alias1((depth0 != null ? depth0.numPlaces : depth0), depth0))
    + "</td>\r\n                </tr>\r\n            </table>\r\n            <table class=\"subjects-table\">\r\n                <caption>საგნები</caption>\r\n                <tr>\r\n                    <th colspan=\"2\"></th>\r\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.facultySubjects : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </tr>\r\n                <tr>\r\n                    <td colspan=\"2\">კოეფიციენტები</td>\r\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.facultySubjects : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </tr>\r\n                <tr>\r\n                    <td colspan=\"2\">ადგილების ქვოტა</td>\r\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.facultySubjects : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </tr>\r\n                <tr>\r\n                    <td colspan=\"2\">ზღვარი</td>\r\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.facultySubjects : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </tr>\r\n                <tr>\r\n                    <td colspan=\"2\">შეზღუდვები</td>\r\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.facultySubjects : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </tr>\r\n            </table>\r\n        </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "                    <th>"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "</th>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "                    <td>"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.quotient : depth0), depth0))
    + "</td>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "                    <td>"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.numPlaces : depth0), depth0))
    + "</td>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "                    <td>"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.barrier : depth0), depth0))
    + "</td>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "                    <td>"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.restriction : depth0), depth0))
    + "</td>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h3>ფაკულტეტები</h3>\r\n<hr>\r\n<div>\r\n    <div id=\"faculties-div\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.university : depth0)) != null ? stack1.universityFaculties : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</div>";
},"useData":true});
templates['university_profile/uni_faq'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "            <li class=\"question-post\">\r\n                <b class=\"question\">"
    + alias2(alias1((depth0 != null ? depth0.question : depth0), depth0))
    + "</b>\r\n                <p class=\"answer\">"
    + alias2(alias1((depth0 != null ? depth0.answer : depth0), depth0))
    + "</p>\r\n            </li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h3>ხშირად დასმული კითხვები</h3>\r\n<hr>\r\n<div>\r\n    <div class=\"question-list\">\r\n        <ul>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.university : depth0)) != null ? stack1.universityFaq : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\r\n    </div>\r\n</div>";
},"useData":true});
templates['university_profile/uni_news'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "    <div class=\"news-item\">\r\n        <div class=\"news-img\">\r\n            <img src=\""
    + alias2(alias1((depth0 != null ? depth0.img : depth0), depth0))
    + "\">\r\n        </div>\r\n        <div class=\"news-info\">\r\n            <p class=\"news-date\">"
    + alias2(alias1((depth0 != null ? depth0.date : depth0), depth0))
    + "</p>\r\n            <h3>\r\n                "
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "\r\n            </h3>\r\n            <p class=\"newsDescription\">"
    + alias2(alias1((depth0 != null ? depth0.description : depth0), depth0))
    + "</p>\r\n        </div>\r\n    </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h3>სიახლეები</h3>\r\n<hr>\r\n<div>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.university : depth0)) != null ? stack1.universityNews : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
templates['university_profile/uni_reviews'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "<div class=\"comments-div\">\r\n    <span><img class=\"user-icon\"\r\n               src=\"https://www.bsn.eu/wp-content/uploads/2016/12/user-icon-image-placeholder.jpg\"></span>\r\n    <div>"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.review : depth0), depth0))
    + "</div>\r\n</div>\r\n<hr>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h3>შეფასებები</h3>\r\n<hr>\r\n\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.university : depth0)) != null ? stack1.universityReviews : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n<div>\r\n    <form id=\"add-comment-form\">\r\n        <label>\r\n            დატოვეთ კომენტარი\r\n            <input id=\"comment\" type=\"text\" name=\"review\">\r\n        </label>\r\n        <input id=\"form-submit\" type=\"button\" value=\"დამატება\">\r\n    </form>\r\n</div>\r\n\r\n";
},"useData":true});
templates['widgets/error'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\"error-div\" class=\"\">\r\n    <br>\r\n    <h2 class=\"\">\r\n        <i class=\"exclamation triangle icon\"></i>\r\n        <div class=\"content\">\r\n            "
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\r\n            <div class=\"sub header\">"
    + alias4(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"message","hash":{},"data":data}) : helper)))
    + "</div>\r\n        </div>\r\n    </h2>\r\n</div>";
},"useData":true});
})();
