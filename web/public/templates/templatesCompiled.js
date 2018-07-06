(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['main_page/news'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "    <div class=\"news-item\">\n        <div class=\"news-img\">\n            <img src=\"http://mes.gov.ge/"
    + alias2(alias1((depth0 != null ? depth0.newsImgSrc : depth0), depth0))
    + "\"/>\n        </div>\n        <div class=\"news-info\">\n            <p class=\"news-date\">"
    + alias2(alias1((depth0 != null ? depth0.newsDate : depth0), depth0))
    + "</p>\n            <p class=\"news-title\">"
    + alias2(alias1((depth0 != null ? depth0.newsTitle : depth0), depth0))
    + "</p>\n            <!--<a class=\"news-title\" href=\""
    + alias2(alias1((depth0 != null ? depth0.newsTitleRef : depth0), depth0))
    + "\">-->\n            <!--"
    + alias2(alias1((depth0 != null ? depth0.newsTitle : depth0), depth0))
    + "-->\n            <!--</a>-->\n            <p class=\"newsDescription\">"
    + alias2(alias1((depth0 != null ? depth0.newsText : depth0), depth0))
    + "</p>\n        </div>\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h1 class=\"\">საგანმანათლებლო სიახლეები</h1>\n<hr>\n<div id=\"news-list\" class=\"ui loading basic segment\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.news : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
templates['main_page/ratings'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1 class=\"\">რეიტინგები</h1>\n<hr>\n<div class=\"\">\n    <iframe id=\"ratings-frame\" src=\"https://e.infogram.com/c4d451c4-78c8-4f88-b829-e428549550fc?src=embed\"\n            title=\"უნივერსიტეტების რეიტინგები 2016\" width=\"900\" height=\"970\" scrolling=\"no\" frameborder=\"0\"\n            allowfullscreen=\"allowfullscreen\"></iframe>\n</div>";
},"useData":true});
templates['main_page/uni_list'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "            <li class=\"university-list-item grow\" id=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\">\n                <h3>"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</h3>\n                <p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.universityFaculties : depth0)) != null ? stack1.length : stack1), depth0))
    + " კურსი</p>\n                <p>50 ადგილი</p>\n                <br>\n                <a href=\""
    + alias2(alias1((depth0 != null ? depth0.webAddress : depth0), depth0))
    + "\" target=\"_blank\">"
    + alias2(alias1((depth0 != null ? depth0.webAddress : depth0), depth0))
    + "</a>\n            </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h1 class=\"\">უნივერსიტეტების სია</h1>\n<hr>\n<div class=\"\">\n    <div id=\"university-items\">\n        <ul id=\"university-item-list\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.universities : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n    </div>\n</div>";
},"useData":true});
templates['main_page/uni_profile'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "<h1 class=\"\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</h1>\n<div id=\"logo-div\">\n    <img id=\"logo\" src=\""
    + alias2(alias1((depth0 != null ? depth0.logo : depth0), depth0))
    + "\">\n</div>\n<hr>\n<ul class=\"menu-list\">\n    <li class=\"menu-item\">\n        <a id=\"news-menu\" class=\"item\">\n            სიახლეები\n        </a>\n    </li>\n    <li class=\"menu-item\">\n        <a id=\"faculties-menu\" class=\"item\">\n            ფაკულტეტები\n        </a>\n    </li>\n    <li class=\"menu-item\">\n        <a id=\"events-menu\" class=\"item\">\n            აქტივობები\n        </a>\n    </li>\n    <li class=\"menu-item\">\n        <a id=\"about-menu\" class=\"item\">\n            ჩვენს შესახებ\n        </a>\n    </li>\n    <li class=\"menu-item\">\n        <a id=\"faq-menu\" class=\"item\">\n            კითხვა-პასუხი\n        </a>\n    </li>\n</ul>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["with"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.university : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<div id=\"university-profile\" class=\"\"></div>";
},"useData":true});
templates['university_profile/uni_about'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1 class=\"\">ჩვენს შესახებ</h1>\n<hr>\n<div class=\"\">\n    <div id=\"about-div\">\n    </div>\n</div>";
},"useData":true});
templates['university_profile/uni_events'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "    <a href=\""
    + alias2(alias1((depth0 != null ? depth0.link : depth0), depth0))
    + "\" target=\"_blank\">\n        <div class=\"event-item\">\n            <div>\n                <img class=\"event-image\" src=\""
    + alias2(alias1((depth0 != null ? depth0.img : depth0), depth0))
    + "\">\n                <div>\n                    <table class=\"event-info-table\">\n                        <tr>\n                            <th class=\"event-date\">"
    + alias2(alias1((depth0 != null ? depth0.date : depth0), depth0))
    + "</th>\n                            <th colspan=\"2\">Title</th>\n                        </tr>\n                        <tr>\n                            <td>"
    + alias2(alias1((depth0 != null ? depth0.description : depth0), depth0))
    + "</td>\n                            <td>"
    + alias2(alias1((depth0 != null ? depth0.address : depth0), depth0))
    + "</td>\n                        </tr>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h1 class=\"\">აქტივობები</h1>\n<hr>\n<div class=\"\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.university : depth0)) != null ? stack1.universityEvents : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
templates['university_profile/uni_faculties'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "        <div class=\"faculty-item grow\">\n            <table class=\"faculty-general\">\n                <caption>\n                    <table class=\"caption-table\">\n                        <tr>\n                            <th>პროგრამა:</th>\n                            <th>"
    + alias2(alias1((depth0 != null ? depth0.facultyNumber : depth0), depth0))
    + "</th>\n                            <th>"
    + alias2(alias1((depth0 != null ? depth0.programName : depth0), depth0))
    + "</th>\n                            <th>კვალიფიკაცია: "
    + alias2(alias1((depth0 != null ? depth0.qualification : depth0), depth0))
    + "</th>\n                        </tr>\n                    </table>\n                </caption>\n                <tr>\n                    <th>აკრედიტებული</th>\n                    <th>სწავლების ენა</th>\n                    <th>დაფინანსება</th>\n                    <th>კრედიტების რაოდენობა</th>\n                    <th>წლიური გადასახადი</th>\n                    <th>ადგილების რაოდენობა</th>\n                </tr>\n                <tr>\n                    <td>"
    + alias2(alias1((depth0 != null ? depth0.accredited : depth0), depth0))
    + "</td>\n                    <td>"
    + alias2(alias1((depth0 != null ? depth0.language : depth0), depth0))
    + "</td>\n                    <td>"
    + alias2(alias1((depth0 != null ? depth0.financing : depth0), depth0))
    + "</td>\n                    <td>"
    + alias2(alias1((depth0 != null ? depth0.credits : depth0), depth0))
    + "</td>\n                    <td>"
    + alias2(alias1((depth0 != null ? depth0.annualFee : depth0), depth0))
    + "</td>\n                    <td>"
    + alias2(alias1((depth0 != null ? depth0.numPlaces : depth0), depth0))
    + "</td>\n                </tr>\n            </table>\n            <table class=\"subjects-table\">\n                <caption>საგნები</caption>\n                <tr>\n                    <th colspan=\"2\"></th>\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.facultySubjects : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </tr>\n                <tr>\n                    <td colspan=\"2\">კოეფიციენტები</td>\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.facultySubjects : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </tr>\n                <tr>\n                    <td colspan=\"2\">ადგილების ქვოტა</td>\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.facultySubjects : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </tr>\n                <tr>\n                    <td colspan=\"2\">ზღვარი</td>\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.facultySubjects : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </tr>\n                <tr>\n                    <td colspan=\"2\">შეზღუდვები</td>\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.facultySubjects : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </tr>\n            </table>\n        </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "                    <th>"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "</th>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "                    <td>"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.quotient : depth0), depth0))
    + "</td>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "                    <td>"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.numPlaces : depth0), depth0))
    + "</td>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "                    <td>"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.barrier : depth0), depth0))
    + "</td>\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "                    <td>"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.restriction : depth0), depth0))
    + "</td>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h1 class=\"\">ფაკულტეტები</h1>\n<hr>\n<div class=\"\">\n    <div id=\"faculties-div\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.university : depth0)) != null ? stack1.universityFaculties : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n</div>";
},"useData":true});
templates['university_profile/uni_faq'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "            <li class=\"question-post\">\n                <b class=\"question\">"
    + alias2(alias1((depth0 != null ? depth0.question : depth0), depth0))
    + "</b>\n                <p class=\"answer\">"
    + alias2(alias1((depth0 != null ? depth0.answer : depth0), depth0))
    + "</p>\n            </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h1 class=\"\">ხშირად დასმული კითხვები</h1>\n<hr>\n<div class=\"\">\n    <div class=\"question-list\">\n        <ul>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.university : depth0)) != null ? stack1.universityFaq : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n    </div>\n</div>";
},"useData":true});
templates['university_profile/uni_news'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "    <div class=\"news-item\">\n        <div class=\"news-img\">\n            <img src=\""
    + alias2(alias1((depth0 != null ? depth0.img : depth0), depth0))
    + "\">\n        </div>\n        <div class=\"news-info\">\n            <p class=\"news-date\">"
    + alias2(alias1((depth0 != null ? depth0.date : depth0), depth0))
    + "</p>\n            <h3>\n                "
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "\n            </h3>\n            <p class=\"newsDescription\">"
    + alias2(alias1((depth0 != null ? depth0.description : depth0), depth0))
    + "</p>\n        </div>\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h1 class=\"\">სიახლეები</h1>\n<hr>\n<div class=\"\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.university : depth0)) != null ? stack1.universityNews : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
templates['widgets/error'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\"error-div\" class=\"\">\n    <br>\n    <h2 class=\"\">\n        <i class=\"exclamation triangle icon\"></i>\n        <div class=\"content\">\n            "
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\n            <div class=\"sub header\">"
    + alias4(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"message","hash":{},"data":data}) : helper)))
    + "</div>\n        </div>\n    </h2>\n</div>";
},"useData":true});
})();
