function add_reset_button(){setTimeout(function(){jQuery("#pddp_datepicker .ui-datepicker-buttonpane .ui-datepicker-reset").length||(jQuery("#pddp_datepicker .ui-datepicker-buttonpane").append('<button type="button" class="ui-datepicker-reset ui-state-default ui-priority-secondary ui-corner-all" data-handler="reset" data-event="click">Reset</button>'),jQuery("#pddp_datepicker .ui-datepicker-buttonpane .ui-datepicker-reset").click(function(e){jQuery("#timestampdiv").find("#jj").val(dd),jQuery("#timestampdiv").find("#aa").val(yy),jQuery("#timestampdiv").find("#mm").val(mm).attr("selected",!0),jQuery("#timestampdiv").parent().parent().find("#hh").val(hh),jQuery("#timestampdiv").parent().parent().find("#mn").val(mn)}))},1)}var mm,dd,yy,hh,mn;jQuery(document).ready(function(){jQuery("#timestampdiv p").append('<a href="" class="pddp button">Datepicker</a>'),jQuery("#timestampdiv p").after('<div id="pddp_datepicker"></div>'),jQuery("#misc-publishing-actions a.edit-timestamp").click(function(){mm=jQuery(this).parent().parent().find("#mm option").filter(":selected").val(),dd=jQuery(this).parent().parent().find("#jj").val(),yy=jQuery(this).parent().parent().find("#aa").val(),hh=jQuery(this).parent().parent().find("#hh").val(),mn=jQuery(this).parent().parent().find("#mn").val(),jQuery("#pddp_datepicker").datetimepicker({controlType:"select",dateFormat:"mm/dd/yy",yearRange:"1970:2020",changeMonth:!0,changeYear:!0,showButtonPanel:!0,defaultDate:mm+"/"+dd+"/"+yy,hour:parseInt(hh),minute:parseInt(mn),onSelect:function(e,t){add_reset_button(),e=e.split(" "),dateText=e[0].split("/"),jQuery(this).parent().parent().find("#jj").val()!=dateText[1]&&jQuery("#timestampdiv").find("#jj").val(dateText[1]),timeText=e[1].split(":"),jQuery(this).parent().parent().find("#hh").val()!=timeText[0]&&jQuery("#timestampdiv").find("#hh").val(timeText[0]),jQuery(this).parent().parent().find("#mn").val()!=timeText[1]&&jQuery("#timestampdiv").find("#mn").val(timeText[1])},onChangeMonthYear:function(e,t,a){add_reset_button();var i=jQuery("#timestampdiv").find("#mm option").filter(":selected").val();jQuery("#timestampdiv").find("#aa").val()!=e&&jQuery("#timestampdiv").find("#aa").val(e),i!=(t=t<10?"0"+t:t)&&jQuery("#timestampdiv").find("#mm").val(t).attr("selected",!0)}}),add_reset_button(),jQuery.datepicker._gotoToday=function(e){var t=jQuery(e),a=this._getInst(t[0]);if(this._get(a,"gotoCurrent")&&a.currentDay)a.selectedDay=a.currentDay,a.drawMonth=a.selectedMonth=a.currentMonth,a.drawYear=a.selectedYear=a.currentYear;else{var i=new Date;a.selectedDay=i.getDate(),a.drawMonth=a.selectedMonth=i.getMonth(),a.drawYear=a.selectedYear=i.getFullYear(),this._setDateDatepicker(t,i),this._selectDate(e,this._getDateDatepicker(t))}this._notifyChange(a),this._adjustDate(t);var r=jQuery("#pddp_datepicker .ui-datepicker-today .ui-state-highlight").html();r=r<10?"0"+r:r,jQuery("#timestampdiv").find("#jj").val(r)}});var e=!1;jQuery("#timestampdiv p a.pddp").click(function(t){t.preventDefault(),e?(jQuery(this).html("Hide Datepicker"),e=!1):(jQuery(this).html("Show Datepicker"),e=!0),jQuery("#pddp_datepicker").slideToggle()})});