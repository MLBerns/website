$(function() {
  $("#skill_list li[name='languages']").addClass("selected")
  $("#languages").css("display", "block").attr("name", "active_tab")
  $("#d3svg").css("height", 175)
  $("#skill_list li").click(function(event){
    changeTab($(this).attr("name"));
  });
});

function changeTab(new_tab) {
  if ( $("#" + new_tab).attr("name") == "active_tab" ) {
    return
  }
  var old_tab = $("#skill_display_box").find("div[name='active_tab']")[0]
  $("#skill_list li").removeClass("selected")
  $("#skill_list li[name='" + new_tab + "']").addClass("selected")
  $(old_tab).css("display", "none").attr("name", "")
  movement_direction = moveDirection(old_tab, new_tab)
  $("#" + new_tab).toggle("slide", {direction: movement_direction} ).attr("name", "active_tab")
}

function moveDirection(old_tab, new_tab) {
  if ( old_tab.compareDocumentPosition(document.getElementById(new_tab)) & Node.DOCUMENT_POSITION_FOLLOWING ) {
    return "right"
  }
  else {
    return "left"
  }
}