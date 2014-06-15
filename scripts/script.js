$(function() {
  $("#languages").attr("class", "active_tab")
  $("#skill_list li").click(function(event){
    changeTab($(this).attr("name"));
  })
});

function changeTab(new_tab) {
  $("#skill_display_box").find("div").attr("class", "active_tab").removeClass("active_tab")
  $("#" + new_tab).addClass("active_tab")
}