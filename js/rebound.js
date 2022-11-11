$(document).ready(function(){
    var eighty_table = [[740,700,680],[670,630,610],[600,570,550],[550,520,510],[510,490,470],[470,450,430]];
    var hundred_table= [[990,930,900],[900,850,820],[820,780,750],[750,710,680],[690,650,630],[640,610,600]];
    var water_table = [2080,2110,2140,2170,2210,2230];


    $("#sub_button").click(function(){
        var pipe_volume = $("#volume_in").val();
        var pressure_drop = $("#pressure_in").val();
        var internal_diam = $("#diam_in").val();
        var wall_thickness = $("#wall_thick").val();
        var pe_type_val = $("#petype").val();
        var pipe_temp = $("#pipeTempBox").val();
        var test_duration = $("#timeBox").val();
        var water_temp = $("#waterTempBox").val();
        if(!pipe_volume||!pressure_drop||!internal_diam||!wall_thickness){
            alert("Fields can not be empty");
        } else{            
            if(pe_type_val==80){
                var pipe_modulos = eighty_table[Math.round(pipe_temp/5)-1][test_duration-1]*1000;
            }
            else {
                var pipe_modulos = hundred_table[Math.round(pipe_temp/5)-1][test_duration-1]*1000;
            }
            var water_modulos = water_table[Math.round(water_temp/5)-1]*1000;
            
            var result = (1.2*pipe_volume*pressure_drop*((internal_diam/(wall_thickness*pipe_modulos))+(1/water_modulos)));
            $("#answer").text(result);
        }   
    });
});


