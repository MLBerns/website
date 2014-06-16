$(function() {
  $("#skill_list li[name='languages']").addClass("selected")
  $("#languages").css("display", "block").attr("name", "active_tab")
  $("#skill_list li").click(function(event){
    changeTab($(this).attr("name"));
  });
  $("#d3svg").css("height", 175)
});

function changeTab(new_tab) {
  if ( $("#" + new_tab).attr("name") == "active_tab" ) {
    return
  }
  $("#skill_list li").removeClass("selected")
  $("#skill_list li[name='" + new_tab + "']").addClass("selected")
  $($("#skill_display_box").find("div[name='active_tab']")[0]).css("display", "none").attr("name", "")
  $("#" + new_tab).toggle("slide", {direction:'left'} ).attr("name", "active_tab")
}


