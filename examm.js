// ================home
let hasala=``;
window.addEventListener("load", async function () 
{
  $(".loading").fadeOut(2000);
  $("#home").removeClass("d-none")


//   -----

    let Meal =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`)  
    Meal = (await Meal.json());
    // console.log(Meal.meals);
    for (let i = 0; i < Meal.meals.length; i++) 
    {
    // console.log(hasala.push(Meal.meals.strMeal));
    document.querySelector(".hh").innerHTML += hasala ;
    hasala =`
        
        <div class=" rr col-lg-3 col-md-3 col-sm-6 position-relative rounded-2 overflow-hidden mt-2 mb-2">
            <div class="bg-pos rounded-2">
                <p class="text-center pt-5 text-dark fs-1 fw-bolder">${Meal.meals[i].strMeal}</p>
            </div>
            <div class="pos-1">
                <div class="d-flex flex-column">
                <a class="p-2 bg-white rounded-circle text-primary"><i class="fa-solid fa-camera-retro "></i></a>
                <a class="p-2 bg-white rounded-circle text-primary"><i class="fa-regular fa-images"></i></a>
                <a class="p-2 bg-white rounded-circle text-primary"><i class="fa-solid fa-ellipsis"></i></a>
                </div>
            </div>
            <img class="w-90 rounded-2" src="${Meal.meals[i].strMealThumb}">
        </div>`
       
        
        
    }   
    $(".rr").click(async function (info) 
    {
        let MInfo =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${info.target.innerText}`)  
        MInfo = (await MInfo.json());
        // console.log(MInfo.meals[0].idMeal);
        // console.log((info.target.innerText));
        if (MInfo.meals[0].strTags == null) 
        {
            MInfo.meals[0].strTags= "Not Avilable Now";
        }
       $("#home").addClass("d-none");
        $("#home1").removeClass("d-none");
        document.querySelector(".hh1").innerHTML = `
        
        <div class="col-lg-6 col-md-12 text-white">
        <img class="w-75 rounded-2" src="${MInfo.meals[0].strMealThumb}">
        <h2 class="p-2">${info.target.innerText}</h2>
                    </div>
        <div class="col-lg-6 col-md-12 text-white">
        <h2>Instructions</h2>
        <p>${MInfo.meals[0].strInstructions}.</p>   
        <p class="fs-4">Area : <span class="fs-6">${MInfo.meals[0].strArea}</span></p>
        <p class="fs-4">Category : <span class="fs-6"> ${MInfo.meals[0].strCategory}</span></p>
        <p class="fs-4">Recipes : <span class="bg-light rounded-2 text-dark px-2 fs-6">${MInfo.meals[0].strIngredient1}</span>  <span class="bg-light rounded-2 text-dark px-2 fs-6">${MInfo.meals[0].strIngredient1}</span>  <span class="bg-light rounded-2 text-dark px-2 fs-6">${MInfo.meals[0].strIngredient2}</span>  <span class="bg-light rounded-2 text-dark px-2 fs-6">${MInfo.meals[0].strIngredient3}</span>  <span class="bg-light rounded-2 text-dark px-2 fs-6">${MInfo.meals[0].strIngredient4}</span></p>
        <p class="fs-4">Tags :<br> <span class="bg-danger-subtle rounded-2 text-dark px-2 fs-6">${MInfo.meals[0].strTags}</span> </p>
        <button type="button" class="btn btn-success"><a class="text-decoration-none text-white" href="${MInfo.meals[0].strSource}">Source</a></button>
        <button type="button" class="btn btn-danger "><a class="text-decoration-none text-white" href="${MInfo.meals[0].strYoutube}">Youtube</a></button>
         </div>`
    })
 
    })

// ================nav open -- close
$(".btnn").click(function () 
{
  if ($(".navv").width()==0) 
  {
      $(".navv").animate({width :"300"},500); 
      $(".fs-11").css("display","block");
      $(".ms-10").css("display","block");
      $("#swibe").animate({"margin-left":"300px"},500)
      $(".fa-xmark").removeClass("d-none");
      $(".fa-bars").addClass("d-none");
      $("#links").slideDown(2000);
  } 
  else 
  {
    $(".navv").animate({width :"0"},500); 
    $(".fs-11").css("display","none");
    $(".ms-10").css("display","none");
    $("#swibe").animate({"margin-left":"0px"},500)
    $(".fa-xmark").addClass("d-none")
    $(".fa-bars").removeClass("d-none")
    $("#links").slideUp(200);
  }
  })


// ----------- declation of taps
let secName = document.querySelector("#SName");
let secFL = document.querySelector("#SFristL");
let hasala1=``;
let hasala2=``;
let mm;


//   ------------------ nav clicks
function remove() 
{
    $("#home").addClass("d-none")
    $("#home1").addClass("d-none")
    $("#Search").addClass("d-none")
    $("#cat").addClass("d-none")
    $("#area").addClass("d-none")
    $("#ingr").addClass("d-none")
    $("#contact").addClass("d-none")
}
$(".navv a").click(async function () 
{
    remove()
   
    if ($(this).attr("id") == "Sec")
    {
        $("#Search").removeClass("d-none")
        $("#SName").keydown(async function () 
        {
            let MInfo =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${secName.value}`)  
            MInfo = (await MInfo.json()); 
            let array = MInfo.meals;
            console.log(MInfo.meals)
            console.log(secName.value)
            let hasala3 = " "
            for (let i = 0; i < MInfo.meals.length; i++) 
            {
                hasala3 += `
                <div class="col-lg-3 position-relative p-0 rounded-2 overflow-hidden mt-2 mb-2 clicking">
                <div class="bg-pos rounded-2">
                    <p class="text-center pt-5 text-dark fs-1 fw-bolder textmeal">${MInfo.meals[i].strMeal}</p>
                </div>
                <img class="w-90 rounded-2" src="${MInfo.meals[i].strMealThumb}">
                </div>`
                
                
            }
            
            document.querySelector(".search").innerHTML = hasala3; 
      

            $(".clicking").click(async function(info) 
            {
                $("#Search").addClass("d-none")
           
                let mm = $(this).find("p.textmeal").text()
                $("#home1").addClass("d-none");
                $("#home1").removeClass("d-none");
                let Meal =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mm}`)  
                Meal = (await Meal.json());    
    
                document.querySelector(".hh2").innerHTML = 
                `
                
                <div class="col-lg-6 col-md-12 text-white">
                <img class="w-75 rounded-2" src="${Meal.meals[0].strMealThumb}">
                <h2 class="p-2">${info.target.innerText}</h2>
                            </div>
                <div class="col-lg-6 col-md-12 text-white">
                <h2>Instructions</h2>
                <p>${Meal.meals[0].strInstructions}.</p>   
                <p class="fs-4">Area : <span class="fs-6">${Meal.meals[0].strArea}</span></p>
                <p class="fs-4">Category : <span class="fs-6"> ${Meal.meals[0].strCategory}</span></p>
                <p class="fs-4">Recipes : <span class="bg-light rounded-2 text-dark px-2 fs-6">${Meal.meals[0].strIngredient1}</span>  <span class="bg-light rounded-2 text-dark px-2 fs-6">${Meal.meals[0].strIngredient1}</span>  <span class="bg-light rounded-2 text-dark px-2 fs-6">${Meal.meals[0].strIngredient2}</span>  <span class="bg-light rounded-2 text-dark px-2 fs-6">${Meal.meals[0].strIngredient3}</span>  <span class="bg-light rounded-2 text-dark px-2 fs-6">${Meal.meals[0].strIngredient4}</span></p>
                <p class="fs-4">Tags :<br> <span class="bg-danger-subtle rounded-2 text-dark px-2 fs-6">${Meal.meals[0].strTags}</span> </p>
                <button type="button" class="btn btn-success"><a class="text-decoration-none text-white" href="">Source</a></button>
                <button type="button" class="btn btn-danger "><a class="text-decoration-none text-white" href="">Youtube</a></button>
                 </div>`
                
            })
            
        })
        $("#SFristL").keydown(async function () 
        {
            let MInfo =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${secFL.value}`)  
            MInfo = (await MInfo.json()); 
            console.log(MInfo)
            console.log(secFL.value)
            let hasala4 = ''
            for (let i = 0; i < MInfo.meals.length; i++) 
            {
                hasala4 += `
                <div class="col-lg-3 position-relative p-0 rounded-2 overflow-hidden mt-2 mb-2 clicking1">
                <div class="bg-pos rounded-2">
                    <p class="text-center pt-5 text-dark fs-1 fw-bolder textmeal">${MInfo.meals[i].strMeal}</p>
                </div>
                <img class="w-90 rounded-2" src="${MInfo.meals[i].strMealThumb}">
                </div>`

            }
            document.querySelector(".search").innerHTML = hasala4; 

            $(".clicking1").click(async function(info) 
            {
                $("#Search").addClass("d-none")
           
                let mm = $(this).find("p.textmeal").text()
                $("#home1").addClass("d-none");
                $("#home1").removeClass("d-none");
                let Meal =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mm}`)  
                Meal = (await Meal.json());    
    
                document.querySelector(".hh2").innerHTML = 
                `
                
                <div class="col-lg-6 col-md-12 text-white">
                <img class="w-75 rounded-2" src="${Meal.meals[0].strMealThumb}">
                <h2 class="p-2">${info.target.innerText}</h2>
                            </div>
                <div class="col-lg-6 col-md-12 text-white">
                <h2>Instructions</h2>
                <p>${Meal.meals[0].strInstructions}.</p>   
                <p class="fs-4">Area : <span class="fs-6">${Meal.meals[0].strArea}</span></p>
                <p class="fs-4">Category : <span class="fs-6"> ${Meal.meals[0].strCategory}</span></p>
                <p class="fs-4">Recipes : <span class="bg-light rounded-2 text-dark px-2 fs-6">${Meal.meals[0].strIngredient1}</span>  <span class="bg-light rounded-2 text-dark px-2 fs-6">${Meal.meals[0].strIngredient1}</span>  <span class="bg-light rounded-2 text-dark px-2 fs-6">${Meal.meals[0].strIngredient2}</span>  <span class="bg-light rounded-2 text-dark px-2 fs-6">${Meal.meals[0].strIngredient3}</span>  <span class="bg-light rounded-2 text-dark px-2 fs-6">${Meal.meals[0].strIngredient4}</span></p>
                <p class="fs-4">Tags :<br> <span class="bg-danger-subtle rounded-2 text-dark px-2 fs-6">${Meal.meals[0].strTags}</span> </p>
                <button type="button" class="btn btn-success"><a class="text-decoration-none text-white" href="">Source</a></button>
                <button type="button" class="btn btn-danger "><a class="text-decoration-none text-white" href="">Youtube</a></button>
                 </div>`
                
            })
            
        })



    }
    else if ($(this).attr("id") == "Cati")
    {
        $("#cat").removeClass("d-none");
        
            let Meal =await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)  
            Meal = (await Meal.json());
            // console.log(Meal.categories);
    for (let i = 0; i <Meal.categories.length; i++) 
    {
         // console.log(hasala.push(Meal.meals.strMeal));
        document.querySelector(".catg").innerHTML += hasala1 ;
        hasala1 =`
        
        <div class="col-lg-3 position-relative p-0 rounded-2 overflow-hidden mt-2 mb-2 cat1">

        <div class="bg-pos rounded-2">
            <p class="text-center pt-5 text-dark fs-1 fw-bolder">${Meal.categories[i].strCategory}</p>
        </div>
        <div>
                <img class="w-90 h-100 rounded-2 zz" src="${Meal.categories[i].strCategoryThumb}" alt"${Meal.categories[i].strCategory}" >
        </div>
        
        </div>
        `
        // -----------------inside cat
        $(".cat1").click(async function (info) 
        {
            // console.log(info.currentTarget.innerText);
            let mm = info.currentTarget.innerText;
            console.log(mm)
            $("#cat").addClass("d-none");
            $("#home1").removeClass("d-none");

            let Meal =await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${mm}`)  
            Meal = (await Meal.json());
            // alert(info.currentTarget.innerText)
          for (let i = 0; i < Meal.meals.length; i++) 
          {
            // console.log(i)
            document.querySelector(".hh1").innerHTML += hasala2 ;
        hasala2 =
        `
        
        <div class=" rr ccat col-lg-3 col-md-3 col-sm-6 position-relative rounded-2 overflow-hidden mt-2 mb-2">
            <div class="bg-pos rounded-2">
                <p class="text-center pt-5 text-dark fs-1 fw-bolder">${Meal.meals[i].strMeal}</p>
            </div>
            <div class="pos-1">
                <div class="d-flex flex-column">
                <a class="p-2 bg-white rounded-circle text-primary"><i class="fa-solid fa-camera-retro "></i></a>
                <a class="p-2 bg-white rounded-circle text-primary"><i class="fa-regular fa-images"></i></a>
                <a class="p-2 bg-white rounded-circle text-primary"><i class="fa-solid fa-ellipsis"></i></a>
                </div>
            </div>
            <img class="w-90 rounded-2" src="${Meal.meals[i].strMealThumb}">
        </div>`     
          }     
        $(".ccat").click(async function(info) 
        {
            console.log(info.target.innerText)
            console.log(info.delegateTarget)
            console.log(mm);
            $("#home1").addClass("d-none");
            $("#home1").removeClass("d-none");
            let Meal =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mm}`)  
            Meal = (await Meal.json());    

            document.querySelector(".hh2").innerHTML = 
            `
            
            <div class="col-lg-6 col-md-12 text-white">
            <img class="w-75 rounded-2" src="${Meal.meals[0].strMealThumb}">
            <h2 class="p-2">${info.target.innerText}</h2>
                        </div>
            <div class="col-lg-6 col-md-12 text-white">
            <h2>Instructions</h2>
            <p>${Meal.meals[0].strInstructions}.</p>   
            <p class="fs-4">Area : <span class="fs-6">${Meal.meals[0].strArea}</span></p>
            <p class="fs-4">Category : <span class="fs-6"> ${Meal.meals[0].strCategory}</span></p>
            <p class="fs-4">Recipes : <span class="bg-light rounded-2 text-dark px-2 fs-6">${Meal.meals[0].strIngredient1}</span>  <span class="bg-light rounded-2 text-dark px-2 fs-6">${Meal.meals[0].strIngredient1}</span>  <span class="bg-light rounded-2 text-dark px-2 fs-6">${Meal.meals[0].strIngredient2}</span>  <span class="bg-light rounded-2 text-dark px-2 fs-6">${Meal.meals[0].strIngredient3}</span>  <span class="bg-light rounded-2 text-dark px-2 fs-6">${Meal.meals[0].strIngredient4}</span></p>
            <p class="fs-4">Tags :<br> <span class="bg-danger-subtle rounded-2 text-dark px-2 fs-6">${Meal.meals[0].strTags}</span> </p>
            <button type="button" class="btn btn-success"><a class="text-decoration-none text-white" href="">Source</a></button>
            <button type="button" class="btn btn-danger "><a class="text-decoration-none text-white" href="">Youtube</a></button>
             </div>`
            
        })
        

        })
        }

    }
    else if($(this).attr("id") == "Area")
    {
        remove()
        $("#area").removeClass("d-none")
        let area =await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)  
        area = (await area.json());
        // console.log(area.meals)
        for (let i = 0; i < area.meals.length; i++) 
        {
            document.querySelector(".aarea").innerHTML += 
            `
            <div class=" col-lg-3 text-white text-center clickarea">
            <i class="fa-solid fa-house-laptop fs-icon"></i>
            <p class="fs-1">${area.meals[i].strArea}</p>
            ` ;
            $(".clickarea").click(async function (info) 
            {
                
           

                let mm = $(this).find("p.fs-1").text()
                console.log(mm)
                $("#area").addClass("d-none");
                $("#home1").removeClass("d-none");
    
                let Meal =await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${mm}`)  
                Meal = (await Meal.json());
               
                
              for (let i = 0; i < Meal.meals.length; i++) 
              {
                
               
            hasala2 =
            `
            
            <div class=" rr clicking1 col-lg-3 col-md-3 col-sm-6 position-relative rounded-2 overflow-hidden mt-2 mb-2">
                <div class="bg-pos rounded-2">
                    <p class="text-center pt-5 text-dark fs-1 fw-bolder textmeal">${Meal.meals[i].strMeal}</p>
                </div>
                <div class="pos-1">
                    <div class="d-flex flex-column">
                    <a class="p-2 bg-white rounded-circle text-primary"><i class="fa-solid fa-camera-retro "></i></a>
                    <a class="p-2 bg-white rounded-circle text-primary"><i class="fa-regular fa-images"></i></a>
                    <a class="p-2 bg-white rounded-circle text-primary"><i class="fa-solid fa-ellipsis"></i></a>
                    </div>
                </div>
                <img class="w-90 rounded-2" src="${Meal.meals[i].strMealThumb}">
            </div>` 
            
            document.querySelector(".hh1").innerHTML += hasala2 ;
              }     
            $(".clicking1").click(async function(info) 
            {
           
                let mm = $(this).find("p.textmeal").text()
                $("#home1").addClass("d-none");
                $("#home1").removeClass("d-none");
                let Meal =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mm}`)  
                Meal = (await Meal.json());    
    
                document.querySelector(".hh2").innerHTML = 
                `
                
                <div class="col-lg-6 col-md-12 text-white">
                <img class="w-75 rounded-2" src="${Meal.meals[0].strMealThumb}">
                <h2 class="p-2">${info.target.innerText}</h2>
                            </div>
                <div class="col-lg-6 col-md-12 text-white">
                <h2>Instructions</h2>
                <p>${Meal.meals[0].strInstructions}.</p>   
                <p class="fs-4">Area : <span class="fs-6">${Meal.meals[0].strArea}</span></p>
                <p class="fs-4">Category : <span class="fs-6"> ${Meal.meals[0].strCategory}</span></p>
                <p class="fs-4">Recipes : <span class="bg-light rounded-2 text-dark px-2 fs-6">${Meal.meals[0].strIngredient1}</span>  <span class="bg-light rounded-2 text-dark px-2 fs-6">${Meal.meals[0].strIngredient1}</span>  <span class="bg-light rounded-2 text-dark px-2 fs-6">${Meal.meals[0].strIngredient2}</span>  <span class="bg-light rounded-2 text-dark px-2 fs-6">${Meal.meals[0].strIngredient3}</span>  <span class="bg-light rounded-2 text-dark px-2 fs-6">${Meal.meals[0].strIngredient4}</span></p>
                <p class="fs-4">Tags :<br> <span class="bg-danger-subtle rounded-2 text-dark px-2 fs-6">${Meal.meals[0].strTags}</span> </p>
                <button type="button" class="btn btn-success"><a class="text-decoration-none text-white" href="">Source</a></button>
                <button type="button" class="btn btn-danger "><a class="text-decoration-none text-white" href="">Youtube</a></button>
                 </div>`
                
            })
            
    
            })


            





        }
    }
    else if($(this).attr("id") == "Ang")
    {
        remove()
        $("#ingr").removeClass("d-none")
        let ingr =await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)  
        ingr = (await ingr.json());
        for (let i = 0; i < 20; i++) 
        {
            console.log(ingr.meals[i].idIngredient)

        document.querySelector(".ingggr").innerHTML += hasala1;
        hasala1 = `
            <div class=" col-lg-3 text-white text-center pt-2 h-100 overflow-hidden clicking ">
                <i class="fa-solid fa-drumstick-bite fs-icon pt-1"></i>
                <p class="fs-1 pb-1">${ingr.meals[i].strIngredient}</p>
                <div class="pt-1"><p>${ingr.meals[i].strDescription.split(" ").slice(0,20).join(" ")}</p></div>
            </div>
            ` 
            

            $(".clicking").click(async function (info) 
            {
                
           

                let mm = $(this).find("p.fs-1.pb-1").text()
                console.log(mm)
                $("#ingr").addClass("d-none");
                $("#home1").removeClass("d-none");
    
                let Meal =await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${mm}`)  
                Meal = (await Meal.json());
               
                
              for (let i = 0; i < Meal.meals.length; i++) 
              {
                
               
            hasala2 =
            `
            
            <div class=" rr clicking1 col-lg-3 col-md-3 col-sm-6 position-relative rounded-2 overflow-hidden mt-2 mb-2">
                <div class="bg-pos rounded-2">
                    <p class="text-center pt-5 text-dark fs-1 fw-bolder">${Meal.meals[i].strMeal}</p>
                </div>
                <div class="pos-1">
                    <div class="d-flex flex-column">
                    <a class="p-2 bg-white rounded-circle text-primary"><i class="fa-solid fa-camera-retro "></i></a>
                    <a class="p-2 bg-white rounded-circle text-primary"><i class="fa-regular fa-images"></i></a>
                    <a class="p-2 bg-white rounded-circle text-primary"><i class="fa-solid fa-ellipsis"></i></a>
                    </div>
                </div>
                <img class="w-90 rounded-2" src="${Meal.meals[i].strMealThumb}">
            </div>` 
            
            document.querySelector(".hh1").innerHTML += hasala2 ;
              }     
            $(".clicking1").click(async function(info) 
            {
                console.log(info.target.innerText)
                console.log(info.delegateTarget)
                console.log(mm);
                $("#home1").addClass("d-none");
                $("#home1").removeClass("d-none");
                let Meal =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mm}`)  
                Meal = (await Meal.json());    
    
                document.querySelector(".hh2").innerHTML = 
                `
                
                <div class="col-lg-6 col-md-12 text-white">
                <img class="w-75 rounded-2" src="${Meal.meals[0].strMealThumb}">
                <h2 class="p-2">${info.target.innerText}</h2>
                            </div>
                <div class="col-lg-6 col-md-12 text-white">
                <h2>Instructions</h2>
                <p>${Meal.meals[0].strInstructions}.</p>   
                <p class="fs-4">Area : <span class="fs-6">${Meal.meals[0].strArea}</span></p>
                <p class="fs-4">Category : <span class="fs-6"> ${Meal.meals[0].strCategory}</span></p>
                <p class="fs-4">Recipes : <span class="bg-light rounded-2 text-dark px-2 fs-6">${Meal.meals[0].strIngredient1}</span>  <span class="bg-light rounded-2 text-dark px-2 fs-6">${Meal.meals[0].strIngredient1}</span>  <span class="bg-light rounded-2 text-dark px-2 fs-6">${Meal.meals[0].strIngredient2}</span>  <span class="bg-light rounded-2 text-dark px-2 fs-6">${Meal.meals[0].strIngredient3}</span>  <span class="bg-light rounded-2 text-dark px-2 fs-6">${Meal.meals[0].strIngredient4}</span></p>
                <p class="fs-4">Tags :<br> <span class="bg-danger-subtle rounded-2 text-dark px-2 fs-6">${Meal.meals[0].strTags}</span> </p>
                <button type="button" class="btn btn-success"><a class="text-decoration-none text-white" href="">Source</a></button>
                <button type="button" class="btn btn-danger "><a class="text-decoration-none text-white" href="">Youtube</a></button>
                 </div>`
                
            })
            
    
            })
        }
    }
    else if($(this).attr("id") == "Contact")
    {
        $("#contact").removeClass("d-none")
    }
})
// ===============


let submitBtn = document.querySelector("#submitBtn")
let name_contact =  document.querySelector("#name-contact")
let email_contact =  document.querySelector("#email-contact")
let phone_contact =  document.querySelector("#phone-contact")
let age_contact =  document.querySelector("#age-contact")
let repassword_contact =  document.querySelector("#repassword-contact")
let password_contact =  document.querySelector("#password-contact")
name_contact.addEventListener("keyup", nameVaild)
email_contact.addEventListener("keyup", emailValid)
phone_contact.addEventListener("keyup",phoneValid )
age_contact.addEventListener("keyup", ageValid)
repassword_contact.addEventListener("keyup", repasswordValid)
password_contact.addEventListener("keyup",passwordValid )
name_contact.addEventListener('keyup', displayBtn);
email_contact.addEventListener('keyup', displayBtn);
phone_contact.addEventListener('keyup', displayBtn);
age_contact.addEventListener('keyup', displayBtn);
password_contact.addEventListener('keyup', displayBtn);
repassword_contact.addEventListener('keyup', displayBtn);
document.getElementById("nameAlert").classList.replace("d-block","d-none")
function nameVaild(){
  

    let checkName = name_contact.value;
    let patternName = /^[A-Za-z]+$/

    if(patternName.test(checkName))
    {
        
        document.getElementById("nameAlert").classList.replace("d-block","d-none")
       
       
        
    }
    else
    {
        document.getElementById("nameAlert").classList.replace("d-none","d-block")
        
    
    }

}



function emailValid()
{
    let checkEmail = email_contact.value;
    let patternEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/


    if(patternEmail.test(checkEmail))
    {
        
        document.getElementById("emailAlert").classList.replace("d-block","d-none")
        
       
        
        
    }
    else
    {
        document.getElementById("emailAlert").classList.replace("d-none","d-block")
        
        
    
    }
}






function phoneValid(){
    let checkPhone = phone_contact.value;
    let patternPhone = /^01[0125][0-9]{8}$/


    if(patternPhone.test(checkPhone))
    {
        
        document.getElementById("phoneAlert").classList.replace("d-block","d-none")
        
    }
    else
    {
        document.getElementById("phoneAlert").classList.replace("d-none","d-block")
    
    }

}



function ageValid()
{
    let checkAge = age_contact.value;
    let patternAge = /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|100)$/


    if(checkAge.test(patternAge))
    {
        
        document.getElementById("ageAlert").classList.replace("d-block","d-none")
        
    }
    else
    {
        document.getElementById("ageAlert").classList.replace("d-none","d-block")
    
    }
}




function passwordValid()
{

    let checkPassword = password_contact.value;
    let patternPassword = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/


    if(patternPassword.test(checkPassword))
    {
        
        document.getElementById("passwordAlert").classList.replace("d-block","d-none")
        
        
    }
    else
    {
        document.getElementById("passwordAlert").classList.replace("d-none","d-block")
    
    }
}



function repasswordValid()
{
    if(password_contact.value == repassword_contact.value)
    {
        
        document.getElementById("repasswordAlert").classList.replace("d-block","d-none")
        
        
    }
    else
    {
        document.getElementById("repasswordAlert").classList.replace("d-none","d-block")
    
    }
}

function displayBtn(){

    let checkName = name_contact.value;
    let patternName = /^[A-Za-z]+$/
    let checkEmail = email_contact.value;
    let patternEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let checkPhone = phone_contact.value;
    let patternPhone = /^01[0125][0-9]{8}$/
    let checkAge = age_contact.value;
    let patternAge = /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|100)$/
    let checkPassword = password_contact.value;
    let patternPassword = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/

    if(patternName.test(checkName) && patternEmail.test(checkEmail) && patternAge.test(checkAge) && patternPhone.test(checkPhone) && patternPassword.test(checkPassword) && password_contact.value == repassword_contact.value)
    {
        submitBtn.removeAttribute('disabled');  
        
    }

}









// $("#SName").click(function () 
// {
//     if ($("#SName").hasClass("sdw")) 
//     {
//         console.log("hiiii");
//     }
//     else
//     {
//         $("#SName").addClass("sdw")
//     }
// })

