function calculate(){
    let myname = document.getElementById('myname').value;
    let lovename = document.getElementById('lovename').value;
    let result = document.getElementById('result')
    let age = document.getElementById('age').value;
    let time = document.getElementById('time').value;
    let love = Math.random()*100;
    love = Math.ceil(love);

    if(myname.length<=2 || lovename.length<=2)
    {
        alert('name can not be less than 3 letters')
        result.innerHTML="";

    }
    else if(!isNaN(myname) || !isNaN(lovename))
    {
        alert('name can not be a number')
        result.innerHTML="";

    }
    else if(age<16){
        alert('Go to your study bachha')
        result.innerHTML="";

    }
    else if(time<5)
    {
        alert('Thoda Aur Ruk Jao, Break-Up Ho Gaya Toh Kya Karoge')
        result.innerHTML="";
    }
    else{
        if(love<60){

            result.innerHTML=love+"%"+'<br>'+"Abhi waqt hai, soch ke decision lena !";
        }

        else if(love<80){

            result.innerHTML=love+"%"+'<br>'+"good bond !";
        }
        else if(love<70)
        {
            result.innerHTML=love+"%"+'<br>'+"Abhi sure nahi hone ka !";
            
        }
        else if(love<90)
        {
            result.innerHTML=love+"%"+'<br>'+"Awesome , aur majboot banao isko !";
            
        }
        else if(love<100)
        {
            result.innerHTML=love+"%"+'<br>'+"Superpb , janmo janmo ka sath rahe !";

        }
        else{
            result.innerHTML = love+'%'
        }
    }
    
}