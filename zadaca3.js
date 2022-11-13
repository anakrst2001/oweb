
var hare_position=1;
var tortoise_position=1;
var hare_generated_number;
var tortoise_generated_number;
var pause_between;
var hare_ex_pos=1;
var tortoise_ex_pos=1;
var difference;
var startTime;
function generate_rectangles_tortoise()
{
    var display_rectangles_for_racing="";
    for(var k=1;k<=70;k++)
    {
        display_rectangles_for_racing+="<div id=\"rectangle_tortoise"+k+"\"></div>";
    }
    var rect_tortoise=document.getElementById("zelka_pravoagolnici");
    rect_tortoise.innerHTML=display_rectangles_for_racing;
}
function generate_rectangles_hare()
{
    var display_rectangles_for_racing="";
    for(var m=1;m<=70;m++)
    {
        display_rectangles_for_racing+="<div id=\"rectangle_hare"+m+"\"></div>";
    }
    var rect_hare=document.getElementById("zajak_pravoagolnici");
    rect_hare.innerHTML=display_rectangles_for_racing;
}
function modify_time()
{
    difference=Date.now()-startTime;
    var timer=document.getElementById("timer");
    timer.innerHTML="Timer: "+Math.floor(difference/1000)+"s";
}
function lets_start()
{
    startTime=Date.now();
    pause_between=setInterval("may_the_best_win()", 1000);
}
function generate_numbers_for_positions()
{
    hare_generated_number=Math.floor(1+Math.random()*10);
    tortoise_generated_number=Math.floor(1+Math.random()*10);
}
function may_the_best_win()
{
    hare_ex_pos=hare_position;
    tortoise_ex_pos=tortoise_position;
    if(tortoise_position<70&&hare_position<70)
    {
        generate_numbers_for_positions();
        if(tortoise_generated_number<=5)
        {
            tortoise_position+=3;
        }
        else if(tortoise_generated_number<=7)
        {
            if(tortoise_position-6>=1)
            {
                tortoise_position-=6;
            }
        }
        else
        {
            tortoise_position+=1;
        }
        if(hare_generated_number<=2)
        {
            hare_position+=0;
        }
        else if(hare_generated_number<=4)
        {
            hare_position+=9;
        }
        else if(hare_generated_number<=5)
        {
            if(hare_position-12>=1)
            {
                hare_position-=12;
            }
        }
        else if(hare_generated_number<=8)
        {
            hare_position+=1;
        }
        else
        {
            if(hare_position-2>=1)
            {
                hare_position-=2;
            }
        }
        lets_see_the_positions();
    }
    else if(hare_position>=70)
    {    
        window.alert("Hare won the race!!!");
        clearInterval(pause_between);
    }
    else if(tortoise_position>=70)
    {
        window.alert("Tortoise won the race!!!");
        clearInterval(pause_between);
    }
    else
    {
        window.alert("How unlikely! They both arrived at the finish line at the same time!");
        clearInterval(pause_between);
    }
    modify_time();
}
function lets_see_the_positions()
{
    if(tortoise_ex_pos==tortoise_position)
    {
        var lets_add_color_for_tortoise=document.getElementById("rectangle_tortoise"+tortoise_position);
        lets_add_color_for_tortoise.style.backgroundColor="#E7717D";
    }
    else
    {
        var lets_add_color_for_tortoise=document.getElementById("rectangle_tortoise"+tortoise_position);
        lets_add_color_for_tortoise.style.backgroundColor="#E7717D";
        var lets_remove_color_for_tortoise=document.getElementById("rectangle_tortoise"+tortoise_ex_pos);
        lets_remove_color_for_tortoise.style.backgroundColor="";
    }
    if(hare_ex_pos==hare_position)
    {
        var lets_add_color_for_hare=document.getElementById("rectangle_hare"+hare_position);
        lets_add_color_for_hare.style.backgroundColor="#E7717D";
    }
    else
    {
        var lets_add_color_for_hare=document.getElementById("rectangle_hare"+hare_position);
        lets_add_color_for_hare.style.backgroundColor="#E7717D";
        var lets_remove_color_for_hare=document.getElementById("rectangle_hare"+hare_ex_pos);
        lets_remove_color_for_hare.style.backgroundColor="";
    }
    if(tortoise_position==hare_position)
    {
        setTimeout(function (){
            window.alert("OUCH!!!");
        }, 10);
        //za vo momentot koga OUCH!!! se pojavuva na ekran da bidat sinhronizirani i na ista pozicija zelkata i zajakot
    }
}