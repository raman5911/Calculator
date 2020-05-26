let input = document.getElementById('input');
let output = document.getElementById('output');
let animate = document.getElementsByTagName('span');

$(document).ready(function(){
        $('.number').click(function(){
            $(this).children().toggleClass('animate__animated animate__heartBeat');
        });

        $('.point').click(function(){
                $(this).children().toggleClass('animate__animated animate__heartBeat');
        });

        $('.symbol').click(function(){
                $(this).children().toggleClass('animate__animated animate__heartBeat');
        });
    });

function calculate(data)
{    
        //animate.classList.toggle("");

       

        output.style.top = "-5px";

        //For moving input upward on pressing any no
        if(output.innerHTML=="")
        {
                input.style.top="0px";
        }

        //For clearing the first zero before actually giving any input
        if(input.innerHTML=="0")
        {
                input.innerHTML="";
        }
            
    switch(data)
    {
        
        case 'ac':
                input.innerHTML = 0;
                output.innerHTML = "";
                input.style.top="20px";
                break;

        case 'c':
                input.innerHTML = input.innerHTML.substr(0, input.innerHTML.length-1);

                if(input.innerHTML=="")
                {
                        input.innerHTML= 0;
                        output.innerHTML=""
                        input.style.top="20px";
                        break;
                }

                output.innerHTML = eval(input.innerHTML) === undefined ? 0: eval(input.innerHTML);

                break;

        case '=': 
                input.innerHTML = "";
                output.style.top = "20px";
                output.style.fontSize = "30px";
                input.innerHTML = output.innerHTML;
                output.innerHTML = "";

                break;

        default:

                if(input.innerHTML[0]=="0")
                {
                        input.innerHTML=="";
                }

                input.innerHTML += data;
                output.innerHTML = eval(input.innerHTML);
    }
}
