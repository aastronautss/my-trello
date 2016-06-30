this["JST"] = this["JST"] || {};

this["JST"]["application"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</option>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<header><select class=\"boards\"><option value=\"#\">Select a board</option>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.boards : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select><div class=\"new-board-link\"><a href=\"/new\">New Board</a></div><div class=\"app-name\"><a href=\"/\"><h1>My Trello</h1></a></div></header><main></main>";
},"useData":true});

this["JST"]["board"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<h2>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2><ul id=\"lists\"></ul><div class=\"list new-list idle\">Add a list...<form for=\"\" action=\"post\" id=\"new-list-form\"><input type=\"text\" name=\"title\" value=\"New List\"><div><input type=\"submit\" value=\"Add\"><a href=\"#\" class=\"cancel-new-list\">Cancel</a></div></form></div>";
},"useData":true});

this["JST"]["card_modal"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"overlay\"></div><div class=\"card-modal\"><h2>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2><aside class=\"actions\"><h3>Actions</h3><ul><li><a href=\"#\" class=\"delete-card\">Delete</a></li></ul></aside><div class=\"main-col\"><section><h3>Description</h3><a href=\"#\" class=\"edit-description-link\">Edit</a><p class=\"description\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "<p><form action=\"\" method=\"post\" class=\"edit-description\"><fieldset><textarea></textarea><input type=\"submit\" value=\"Save\"><a href=\"#\" class=\"cancel-edit\">Cancel</a></fieldset></form></section><section class=\"comments\"><h2>Comments</h2><ul class=\"comment-list\"></ul><form action=\"\" method=\"post\" class=\"new-comment\"><fieldset><textarea name=\"comment-body\" placeholder=\"Add a comment...\"></textarea><input type=\"submit\" value=\"Send\"></fieldset></form></section></div></div>";
},"useData":true});

this["JST"]["card"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<h3>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3>";
},"useData":true});

this["JST"]["comment"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<p class=\"comment-body\">"
    + alias4(((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"body","hash":{},"data":data}) : helper)))
    + "</p><p class=\"byline\">By "
    + alias4(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data}) : helper)))
    + "</p>";
},"useData":true});

this["JST"]["list"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<a href=\"#\" class=\"delete\">x</a><textarea>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"title","hash":{},"data":data}) : helper)))
    + "</textarea><ul class=\"cards\"></ul><div class=\"new-card-form\"><form action=\"\" method=\"post\"><input type=\"text\" name=\"title\"><input type=\"submit\" value=\"Add\"><a href=\"#\" class=\"cancel-new-card\">Cancel</a></form></div><div class=\"new-card\">Add a card</div>";
},"useData":true});

this["JST"]["new_board"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"overlay\"></div><form action=\"\" method=\"\" class=\"new-board\"><fieldset><h5>Create New Board</h5><input type=\"text\" name=\"title\" value=\"New Board\"><input type=\"submit\" value=\"Create\"></fieldset></form>";
},"useData":true});