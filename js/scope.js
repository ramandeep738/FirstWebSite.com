$("#mainWrapper .data-table div.filled").mouseover(function() {
	var team = "Team";
	var projTitle= "Current Project";
	console.log($(this).data('name')+ " : " +$(this).data('job-title')+ " : " +$(this).data('team')+ " : "  +$(this).data('proj'));
	var $desc = $('<div class="description"><div class="demo-image"></div><div class="name-wrapper"><span>' +$(this).data('name')+ '</span><br><span>' +$(this).data('job-title')+ '<span></div><div class="team-title">' +team+ '</div><div class="team-name">' +$(this).data('team')+ '</div><div class="proj-title">' +projTitle+ '</div><div class="proj-name">' +$(this).data('proj')+ '</div></div>');
	
	/*if($("#mainWrapper .data-table:nth-child(4)") || $("#mainWrapper .data-table:nth-child(5)") || $("#mainWrapper .data-table:nth-child(6)") ){
	$("#mainWrapper").css("height", "535px");
	}*/
	$(this).append($desc);
	$(this).children(".description").show("slow", function(){
	   });
	}).mouseout(function() {
		 $(this).children(".description").remove();
		/* if($("#mainWrapper .data-table:nth-child(4)") || $("#mainWrapper .data-table:nth-child(5)") || $("#mainWrapper .data-table:nth-child(6)") ){
			 $("#mainWrapper").css("height", "103%");
			}*/
		 $(this).children(".description").hide("slow", function(){
	    	
	    });
	   
	});
	
	$('#basicAddon2').on("click", function(){
        var searchedText = $('#searchBox').val();
        var page = $('#mainWrapper .data-table div.filled');
        var fechedData = [];
        /*for(var i=0;i<page.length;i++){
        	console.log($(page[i]).data('name'));
        }*/
        $.each(page, function (index) {
        	fechedData[index] = $(page[index]).data('name').toLowerCase();
           });
       // console.log(fechedData);
        $.each(fechedData, function(index){
        	 if(searchedText == fechedData[index] ){
          	 $(page[index]).addClass('checked');
          	 return false;
           } 
           else {
          	 $(page[index]).removeClass('checked');
          	 console.log('No Match Found');
           }
        });
        
       /* if(searchedText == $(page[index]).data('name')){
       	 $(page[index]).addClass('checked');
        } 
        else {
       	 $(page[index]).removeClass('checked');
       	 console.log('No Match Found');
        }*/

	});

$("#filterBtn").on("click", function(){
	$("#filterWrapper").toggleClass("displayFilter");
	//$("#mainWrapper div.data-table:nth-child(3)").toggleClass("shift");
	//$("#mainWrapper div.data-table:gt(2)").toggleClass("shift");
	  if($("#teamCheckbox").is(':checked')) { 
		  $("#teamCheckboxBlock").css("display", "block");
	  }
	  else if($("#jobTitleCheckbox").is(':checked')){
		  $("#jobTitleCheckboxBlock").css("display", "block");
	  }
	
});



$('#teamCheckbox').click(function(){
	
	$('#jobTitleCheckbox').attr("checked", false);
	$("#jobTitleCheckboxBlock").css("display", "none");
	
	$();
    if ($(this).is(':checked'))
    {
    	$("#jobWrapper").css("display", "block");
    	$("#teamCheckboxBlock").css("display", "block");
    }
    else {
    	$("#jobWrapper").css("display", "none");
    	$("#teamCheckboxBlock").css("display", "none");
    }
  });
$('#jobTitleCheckbox').click(function(){
	
	$('#teamCheckbox').attr("checked", false);
	$("#teamCheckboxBlock").css("display", "none");
    if ($(this).is(':checked'))
    {
    	$("#jobWrapper").css("display", "block");
    	$("#jobTitleCheckboxBlock").css("display", "block");
    	
    }
    else {
    	$("#jobWrapper").css("display", "none");
    	$("#jobTitleCheckboxBlock").css("display", "none");
    }
  });
$('#teamCheckboxBlock input[type="checkbox"]').click(function(){
	var selectedCheckBox = $('#teamCheckboxBlock input[type="checkbox"]:checked');
	if(selectedCheckBox.length > 0){
		for(var i=0;i < selectedCheckBox.length;i++){
			if(selectedCheckBox[i].name == "Web FrontEnd"){
	    		var elements = document.querySelectorAll('[data-team="Web FrontEnd"]');
	    		$.each(elements, function(index){
	    			$(elements[index]).addClass('checked');
	    		});
	    	}
			else if(selectedCheckBox[i].name == "Backend"){
				var elements = document.querySelectorAll('[data-team="Backend"]');
	    		$.each(elements, function(index){
	    			$(elements[index]).addClass('checked');
	    		});
				
			}
			/*else if((selectedCheckBox[i].name == "Backend") && (selectedCheckBox[i].name == "webFrontEnd")){
				var elements = document.querySelectorAll('[data-team="Web FrontEnd"][data-team="Backend"]');
	    		$.each(elements, function(index){
	    			$(elements[index]).addClass('checked');
	    		});
	    		
			}*/
		}
	}
});
$('#jobTitleCheckboxBlock input[type="checkbox"]').click(function(){
	var selectedCheckBox = $('#jobTitleCheckboxBlock input[type="checkbox"]:checked');
	if(selectedCheckBox.length > 0){
		for(var i=0;i < selectedCheckBox.length;i++){
			if(selectedCheckBox[i].name == "Sr Developer"){
	    		var elements = document.querySelectorAll('[data-job-title="Sr Developer"]');
	    		$.each(elements, function(index){
	    			$(elements[index]).addClass('checked');
	    		});
	    	}
			else if(selectedCheckBox[i].name == "Team Lead"){
				var elements = document.querySelectorAll('[data-job-title="Team Lead"]');
	    		$.each(elements, function(index){
	    			$(elements[index]).addClass('checked');
	    		});
				
			}
			else if(selectedCheckBox[i].name == "DBA"){
				var elements = document.querySelectorAll('[data-job-title="DBA"]');
	    		$.each(elements, function(index){
	    			$(elements[index]).addClass('checked');
	    		});
				
			}
			else if(selectedCheckBox[i].name == "Jr Developer"){
				var elements = document.querySelectorAll('[data-job-title="Jr Developer"]');
	    		$.each(elements, function(index){
	    			$(elements[index]).addClass('checked');
	    		});
				
			}
			else if(selectedCheckBox[i].name == "Sol Architect"){
				var elements = document.querySelectorAll('[data-job-title="Sol Architect"]');
	    		$.each(elements, function(index){
	    			$(elements[index]).addClass('checked');
	    		});
				
			}
			/*else if((selectedCheckBox[i].name == "Backend") && (selectedCheckBox[i].name == "webFrontEnd")){
				var elements = document.querySelectorAll('[data-team="Web FrontEnd"][data-team="Backend"]');
	    		$.each(elements, function(index){
	    			$(elements[index]).addClass('checked');
	    		});
	    		
			}*/
		}
	}
});

