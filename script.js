
var firstScreenImages = ["Screen1Seat","Screen1Seat2","Screen1Seat3","Screen1Seat4","Screen1Seat"]
var secondScreenImages = ["Screen2Seat","Screen2Seat2","Screen2Seat3","Screen2Seat4","Screen2Seat"]
var OuterTheatreImages =["Theatre image","Theatre image2","Theatre image3","Theatre image4","Theatre image"]
var SriScreen1Images=["Screen1Seat2in3","Screen1Seat2in2","Screen1Seat2in1","Screen1Seat2in4","Screen1Seat2in3"];
var SriScreen2Images=["Screen2Seat1in2","Screen2Seat2in2","Screen2Seat3in2","Screen2Seat4in2","Screen2Seat1in2"];
var SriPadmamImages=["TheatreImageOfSriPadmam1","TheatreImageOfSriPadmam2","TheatreImageOfSriPadmam3","TheatreImageOfSriPadmam4","TheatreImageOfSriPadmam1"]
var BookedSeats = [];
var BookedSeatsForTomorrow = []
var array = [0];
var hide = [];
var origin;
var imageSize;
var imageSize1;
var frontCount = 0;
var counting = 0;
var movieNames;
var movieNames2;
var anchorTagForDirections;
var theatreIdName;

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
var AtPresentTimeDateDay = Date();
AtPresentTimeDateDay = AtPresentTimeDateDay.split(" ")
var presentDay = AtPresentTimeDateDay[0];
var CopyDay = presentDay;
console.log(presentDay);
var presentMonth = AtPresentTimeDateDay[1];
console.log(presentMonth);
var presentDate = AtPresentTimeDateDay[2];
var CopyDate = presentDate;
console.log(presentDate);

 //window.localStorage.removeItem('Tomorrow')
if(localStorage.getItem('OrderedSeats')!=null)
{
   var Tomorrow = String(Number(presentDate)+1)
   localStorage.setItem("Tomorrow", Tomorrow)
   console.log(typeof(Tomorrow));
    var Tomorrow = localStorage.getItem("Tomorrow");
  if(Number(Tomorrow)==Number(presentDate))
  {
    var Tomorrow = String(Number(presentDate)+1)
    localStorage.setItem("Tomorrow", Tomorrow)
    var BookedTicketsCopy1 = localStorage.getItem('OrderedSeatsForTomorrow');
    console.log(BookedTicketsCopy1);
    localStorage.setItem("OrderedSeats",BookedTicketsCopy1);
    window.localStorage.removeItem("OrderedSeatsForTomorrow")
    var BookedTicketsCopy2 = localStorage.getItem('OrderedSeatsForScreen2ForTomorrow')
    localStorage.set
    Item("OrderedSeatsForScreen2",BookedTicketsCopy2);
    window.localStorage.removeItem("OrderedSeatsForScreen2ForTomorrow")  
  }
}

function frontPageForTicketBooking(theatreNameWas) {

    if ((frontCount == 1)&&(theatreNameWas!="Sri")) {
        document.body.removeChild(wholeContainer);
        counting = 0;
        presentDate = CopyDate;
        presentDay = CopyDay;
    }

    var fullContainer = document.createElement("div");
    document.body.appendChild(fullContainer);
    fullContainer.setAttribute("id", "fullContainer");

    var firstDiv = document.createElement("div");
    fullContainer.appendChild(firstDiv);
    firstDiv.setAttribute("id", "firstDiv");

    var imageofPaytm = document.createElement("img")
    firstDiv.appendChild(imageofPaytm);
    imageofPaytm.setAttribute("id", "imageofPaytm");
    imageofPaytm.setAttribute("src", "paytm_logo.png");

    var navigations = document.createElement("div")
    firstDiv.appendChild(navigations);
    navigations.setAttribute("id", "navigations");
    navigations.innerHTML = "<span class='boldletters'>Paytm for Consumer</span><span class='boldletters'>Paytm for Business</span><span class='boldletters'>Investor Relations</span><span class='boldletters'>Company</span><span class='boldletters'>Career</span>"

    var signinbutton = document.createElement("div")
    firstDiv.appendChild(signinbutton);
    signinbutton.setAttribute("id", "signinbutton");
    signinbutton.innerHTML = "<span id ='signIn'>Sign In</span>"
    signinbutton.addEventListener("click",signUpFunction)

    var personIcon = document.createElement("img")
    signinbutton.appendChild(personIcon);
    personIcon.setAttribute("src", "personIcon.svg");

    var SecondDiv = document.createElement("div");
    fullContainer.appendChild(SecondDiv);
    SecondDiv.setAttribute("id", "SecondDiv");

    var theatreName = document.createElement("div");
    SecondDiv.appendChild(theatreName);
    theatreName.setAttribute("id", "theatreName");
    previousHeart();

    function RedHeart(){
        if(theatreNameWas=="PSS")
        {
         theatreName.innerHTML = "<p id='theatreNameFont'>PSS Multiplex, Tenkasi, Tenkasi<i class='fa-solid fa-heart' id='redHeart'></i></p><br><p id ='address'>117, Railway Feeder Rd, Tenkai, TamilNadu 627811, India</p>"
         document.getElementById("redHeart").addEventListener("click",()=>{previousHeart()})
        }
        else if(theatreNameWas=="Sri")
        {
         theatreName.innerHTML = "<p id='theatreNameFont'>Sri Padmam - Tenkasi, Tenkasi<i class='fa-solid fa-heart' id='redHeart'></i></p><br><p id ='address'>105, Railway Road, Tenkai, TamilNadu 627811, India</p>"
         document.getElementById("redHeart").addEventListener("click",()=>{previousHeart()})
        }
    }

    function previousHeart() {
        if(theatreNameWas=="PSS")
        {
         theatreName.innerHTML = "<p id='theatreNameFont'>PSS Multiplex, Tenkasi, Tenkasi<i id='heart' class='fa-regular fa-heart'></i></p><br><p id ='address'>117, Railway Feeder Rd, Tenkai, TamilNadu 627811, India</p>"
         document.getElementById("heart").addEventListener("click",()=>{RedHeart()})
        }
        else if(theatreNameWas=="Sri")
        {
         theatreName.innerHTML = "<p id='theatreNameFont'>Sri Padmam - Tenkasi, Tenkasi<i id='heart' class='fa-regular fa-heart'></i></p><br><p id ='address'>105, Railway Road, Tenkai, TamilNadu 627811, India</p>"
         document.getElementById("heart").addEventListener("click",()=>{RedHeart()})
        }
    }

    anchorTagForDirections = document.createElement("a");
    anchorTagForDirections.setAttribute("href", "https://www.google.com/maps/place/8%C2%B057'43.5%22N+77%C2%B018'28.3%22E/@8.96207,77.30786,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x65854944fdddd415!8m2!3d8.96207!4d77.30786");
    anchorTagForDirections.setAttribute("target","_blank");
    SecondDiv.appendChild(anchorTagForDirections);
    var getDirections = document.createElement("div");
    anchorTagForDirections.appendChild(getDirections);
    getDirections.setAttribute("id", "getDirections");
    getDirections.innerHTML = "<i class='fa-solid fa-diamond-turn-right'></i><span>Get Directions</span>";

    var thirdDiv = document.createElement("div");
    fullContainer.appendChild(thirdDiv);
    thirdDiv.setAttribute("id", "thirdDiv");

    var NextDaydiv = document.createElement("div");
    thirdDiv.appendChild(NextDaydiv);
    NextDaydiv.setAttribute("id", "NextDaydiv");

    var dateStructure = document.createElement("div");
    NextDaydiv.appendChild(dateStructure);
    dateStructure.setAttribute("id", "dateStructure");

    var monthDivStructure = document.createElement("div");
    dateStructure.appendChild(monthDivStructure);
    monthDivStructure.setAttribute("id", "monthDivStructure");

    var monthRotateText = document.createElement("span");
    monthDivStructure.appendChild(monthRotateText);
    monthRotateText.setAttribute("id", "monthRotateText");
    monthRotateText.innerHTML = presentMonth.toUpperCase();

    var TodayDivStructure = document.createElement("div");
    dateStructure.appendChild(TodayDivStructure);
    TodayDivStructure.setAttribute("id", "TodayDivStructure");
    TodayDivStructure.setAttribute("class", "dayDivStructureOnclick");
    TodayDivStructure.innerText = presentDay;
    TodayDivStructure.addEventListener("click", onclickChangeforDay1)

    var TodayDateDivStructure = document.createElement("div");
    TodayDivStructure.appendChild(TodayDateDivStructure);
    TodayDateDivStructure.setAttribute("id", "TodayDateDivStructure");
    TodayDateDivStructure.setAttribute("class", "dateDivStructureOnclick");
    TodayDateDivStructure.innerText = presentDate;

    var TomodayDivStructure = document.createElement("div");
    dateStructure.appendChild(TomodayDivStructure);
    TomodayDivStructure.setAttribute("id", "TomodayDivStructure");
    TomodayDivStructure.setAttribute("class", "dayDivStructure");
    for (let i = 0; i < dayNames.length; i++) {
        if (presentDay == "Sat") {
            NextDay = "Sun";
            TomodayDivStructure.innerText = NextDay;
            break;
        } else if (presentDay == dayNames[i]) {
            var value = i
            NextDay = dayNames[i + 1];
            TomodayDivStructure.innerText = NextDay;
            console.log(NextDay);
            break;
        }
    }
    TomodayDivStructure.addEventListener("click", onclickChangeforDay2)

    var TomoDateDivStructure = document.createElement("div");
    TomodayDivStructure.appendChild(TomoDateDivStructure);
    TomoDateDivStructure.setAttribute("id", "TomoDateDivStructure")
    TomoDateDivStructure.setAttribute("class", "dateDivStructure");
    var nextDate = Number(presentDate) + 1;
    if((presentDate>=1)&&(presentDate<=9))
    {
          TomoDateDivStructure.innerText="0"+nextDate;
    }
    else{
        TomoDateDivStructure.innerText = nextDate;
    }

    function onclickChangeforDay1() {
        document.getElementById("TodayDateDivStructure").className = "dateDivStructureOnclick";
        document.getElementById("TodayDivStructure").className = "dayDivStructureOnclick";
        document.getElementById("TomoDateDivStructure").className = "dateDivStructure";
        document.getElementById("TomodayDivStructure").className = "dayDivStructure";
    }

    function onclickChangeforDay2() {
        document.getElementById("TodayDateDivStructure").className = "dateDivStructure";
        document.getElementById("TodayDivStructure").className = "dayDivStructure";
        document.getElementById("TomoDateDivStructure").className = "dateDivStructureOnclick";
        document.getElementById("TomodayDivStructure").className = "dayDivStructureOnclick";
        presentDate = "0"+ (Number(presentDate) + 1);
        presentDay = NextDay;
    }

    var filterBy = document.createElement("div");
    NextDaydiv.appendChild(filterBy);
    filterBy.setAttribute("id", "filterBy");

    var moviesDiv = document.createElement("div");
    thirdDiv.appendChild(moviesDiv);
    moviesDiv.setAttribute("class", "moviesDiv");

    var topDivInMoviesDiv = document.createElement("div");
    moviesDiv.appendChild(topDivInMoviesDiv);
    topDivInMoviesDiv.setAttribute("class", "topDivInMoviesDiv");

    var searchButton = document.createElement("div");
    topDivInMoviesDiv .appendChild(searchButton);
    searchButton.setAttribute("id", "searchButton");
    searchButton.innerHTML="<i class='fa-solid fa-magnifying-glass searchButton'></i><div id= 'searchbox'><input type='Search' placeholder='Search' id='search'/></div>";
    document.getElementById("search").addEventListener("click",searchBox)

    function searchBox()
    {
        document.getElementById("searchbox").style.borderBottom="2px solid #00b8f5";
    }

    var divForColorDiv = document.createElement("div");
    topDivInMoviesDiv .appendChild(divForColorDiv);
    divForColorDiv.setAttribute("id", "divForColorDiv");
    divForColorDiv.innerHTML="<div id='greenColor'></div><span>AVAILABLE</span><div id='yellowColor'></div><span>FAST FILLING</span><div id='redColor'></div><span>ALMOST FULL</span><div id='subtitleLanguage'>cc</div><span>SUBTITLE LANGUAGE</span>"

    var SecondDivInMoviesDiv = document.createElement("div");
    moviesDiv.appendChild(SecondDivInMoviesDiv);
    SecondDivInMoviesDiv.setAttribute("class", "SecondDivInMoviesDiv");

    var tamillang = document.createElement("span");
    SecondDivInMoviesDiv.appendChild(tamillang);
    tamillang.setAttribute("class", "tamilLanguage1");
    tamillang.innerText="Tamil";

    var movieImageForFrontPage = document.createElement("div");
    SecondDivInMoviesDiv.appendChild(movieImageForFrontPage);
    movieImageForFrontPage.setAttribute("id", "movieImageForFrontPage");

    imageSize = document.createElement("img");
    movieImageForFrontPage.appendChild(imageSize);
    imageSize.setAttribute("class", "imageSize");
    imageSize.setAttribute("src", "a1.jpeg");

    movieNames = document.createElement("span");
    movieImageForFrontPage.appendChild(movieNames);
    movieNames.setAttribute("class", "moviesNames");
    movieNames.innerText="Avatar 1"

    movieNames1 = document.createElement("span");
    movieImageForFrontPage.appendChild(movieNames1);
    movieNames1.setAttribute("class", "moviesContent1");
    movieNames1.innerText="U/A • Action, Thriller";

    var ShowtimeOfMovie = document.createElement("div");
    SecondDivInMoviesDiv.appendChild(ShowtimeOfMovie);
    ShowtimeOfMovie.setAttribute("class", "ShowtimeOfMovie");

    var eleventime = document.createElement("div");
    ShowtimeOfMovie.appendChild(eleventime);
    eleventime.setAttribute("class", "timeOfShow");
    eleventime.setAttribute("id", "eleventime");
    eleventime.innerHTML = "<p class='center'> 11.00 AM </p> <p class='twoD' id='eleven'> 2D </p>";
    eleventime.addEventListener("click",() => {    
        ScreenChecking("Screen1"); 
        WholeTicketBookingProcess();
        if(theatreNameWas=="PSS")
        {
         document.getElementById("movieName").innerHTML = "<p id='movieTitle'> Avatar 1 • Tamil </p>   <p id='time'></p>";
        }
        else if(theatreNameWas=="Sri")
        {
          document.getElementById("movieName").innerHTML = "<p id='movieTitle'> Vikram • Tamil </p>   <p id='time'></p>";
        }
        changeColor()
    });
    var twotime = document.createElement("div");
    ShowtimeOfMovie.appendChild(twotime);
    twotime.setAttribute("class", "timeOfShow");
    twotime.setAttribute("id", "twotime");
    twotime.innerHTML = "<p class='center'> 02.00 PM </p> <p class='twoD' id='two'> 2D </p>";
    twotime.addEventListener("click",() => {    
        ScreenChecking("Screen1"); 
        WholeTicketBookingProcess();
        if(theatreNameWas=="PSS")
        {
         document.getElementById("movieName").innerHTML = "<p id='movieTitle'> Avatar 1 • Tamil </p>   <p id='time'></p>";
        }
        else if(theatreNameWas=="Sri")
        {
          document.getElementById("movieName").innerHTML = "<p id='movieTitle'> Vikram • Tamil </p>   <p id='time'></p>";
        }
        changeColor1()
    });

    var sixtime = document.createElement("div");
    ShowtimeOfMovie.appendChild(sixtime);
    sixtime.setAttribute("class", "timeOfShow");
    sixtime.setAttribute("id", "sixtime");
    sixtime.innerHTML = "<p class='center'> 06.00 PM </p> <p class='twoD'id='six'> 2D </p>";
    sixtime.addEventListener("click",() => {  
        ScreenChecking("Screen1");   
        WholeTicketBookingProcess();
        document.getElementById("movieName").innerHTML = "<p id='movieTitle'> Avatar 1 • Tamil </p>   <p id='time'></p>";
        changeColor2()
    });

    var tentime = document.createElement("div");
    ShowtimeOfMovie.appendChild(tentime);
    tentime.setAttribute("class", "timeOfShow");
    tentime.setAttribute("id", "tentime");
    tentime.innerHTML = "<p class='center'> 10.00 PM </p> <p class='twoD'id='ten'> 2D </p>";
    tentime.addEventListener("click",() => {  
        ScreenChecking("Screen1");   
        WholeTicketBookingProcess();
        if(theatreNameWas=="PSS")
        {
         document.getElementById("movieName").innerHTML = "<p id='movieTitle'> Avatar 1 • Tamil </p>   <p id='time'></p>";
        }
        else if(theatreNameWas=="Sri")
        {
          document.getElementById("movieName").innerHTML = "<p id='movieTitle'> Vikram • Tamil </p>   <p id='time'></p>";
        }
        changeColor3()
    });

    var ThirdDivInMoviesDiv = document.createElement("div");
    moviesDiv.appendChild(ThirdDivInMoviesDiv);
    ThirdDivInMoviesDiv.setAttribute("class", "SecondDivInMoviesDiv");

    var tamil = document.createElement("span");
    ThirdDivInMoviesDiv.appendChild(tamil);
    tamil.setAttribute("class", "tamilLanguage");
    tamil.innerText="Tamil";

    var movieImageForFrontPage1 = document.createElement("div");
    ThirdDivInMoviesDiv.appendChild(movieImageForFrontPage1);
    movieImageForFrontPage1.setAttribute("id", "movieImageForFrontPage");

    imageSize1 = document.createElement("img");
    movieImageForFrontPage1.appendChild(imageSize1);
    imageSize1.setAttribute("class", "imageSize");
    imageSize1.setAttribute("src", "a2.jpg");

    movieNames2 = document.createElement("span");
    movieImageForFrontPage1.appendChild(movieNames2);
    movieNames2.setAttribute("class", "moviesNames");
    movieNames2.innerText="Avatar 2"

    var movieNames3 = document.createElement("span");
    movieImageForFrontPage1.appendChild(movieNames3);
    movieNames3.setAttribute("class", "moviesContent1");
    movieNames3.innerText="U/A • Action, Thriller";

    var ShowtimeOfMovie1 = document.createElement("div");
    ThirdDivInMoviesDiv.appendChild(ShowtimeOfMovie1);
    ShowtimeOfMovie1.setAttribute("class", "ShowtimeOfMovie");

    var eleventime1 = document.createElement("div");
    ShowtimeOfMovie1.appendChild(eleventime1);
    eleventime1.setAttribute("class", "timeOfShow");
    eleventime1.setAttribute("id", "eleventime");
    eleventime1.innerHTML = "<p class='center'> 11.00 AM </p> <p class='twoD' id='eleven'> 2D </p>";
    eleventime1.addEventListener("click",() => {    
        ScreenChecking("Screen2");
        WholeTicketBookingProcess();
        if(theatreNameWas=="PSS")
        {
         document.getElementById("movieName").innerHTML = "<p id='movieTitle'> Avatar 2 • Tamil </p>   <p id='time'></p>";
        }
        else if(theatreNameWas=="Sri")
        {
          document.getElementById("movieName").innerHTML = "<p id='movieTitle'> Kaithi • Tamil </p>   <p id='time'></p>";
        }
        changeColor()
    });

    var twotime1 = document.createElement("div");
    ShowtimeOfMovie1.appendChild(twotime1);
    twotime1.setAttribute("class", "timeOfShow");
    twotime1.setAttribute("id", "twotime");
    twotime1.innerHTML = "<p class='center'> 02.00 PM </p> <p class='twoD' id='two'> 2D </p>";
    twotime1.addEventListener("click",() => { 
        ScreenChecking("Screen2");    
        WholeTicketBookingProcess();
        if(theatreNameWas=="PSS")
        {
         document.getElementById("movieName").innerHTML = "<p id='movieTitle'> Avatar 2 • Tamil </p>   <p id='time'></p>";
        }
        else if(theatreNameWas=="Sri")
        {
          document.getElementById("movieName").innerHTML = "<p id='movieTitle'> Kaithi • Tamil </p>   <p id='time'></p>";
        }
        changeColor1()
    });

    var sixtime1 = document.createElement("div");
    ShowtimeOfMovie1.appendChild(sixtime1);
    sixtime1.setAttribute("class", "timeOfShow");
    sixtime1.setAttribute("id", "sixtime");
    sixtime1.innerHTML = "<p class='center'> 06.00 PM </p> <p class='twoD'id='six'> 2D </p>";
    sixtime1.addEventListener("click",() => { 
        ScreenChecking("Screen2");    
        WholeTicketBookingProcess();
        if(theatreNameWas=="PSS")
        {
         document.getElementById("movieName").innerHTML = "<p id='movieTitle'> Avatar 2 • Tamil </p>   <p id='time'></p>";
        }
        else if(theatreNameWas=="Sri")
        {
          document.getElementById("movieName").innerHTML = "<p id='movieTitle'> Kaithi • Tamil </p>   <p id='time'></p>";
        }
        changeColor2()
    });

    var tentime1 = document.createElement("div");
    ShowtimeOfMovie1.appendChild(tentime1);
    tentime1.setAttribute("class", "timeOfShow");
    tentime1.setAttribute("id", "tentime");
    tentime1.innerHTML = "<p class='center'> 10.00 PM </p> <p class='twoD'id='ten'> 2D </p>";
    tentime1.addEventListener("click",() => {    
        ScreenChecking("Screen2"); 
        WholeTicketBookingProcess();
        if(theatreNameWas=="PSS")
        {
         document.getElementById("movieName").innerHTML = "<p id='movieTitle'> Avatar 2 • Tamil </p>   <p id='time'></p>";
        }
        else if(theatreNameWas=="Sri")
        {
          document.getElementById("movieName").innerHTML = "<p id='movieTitle'> Kaithi • Tamil </p>   <p id='time'></p>";
        }
        changeColor3()
    });

    var moviesDiv1 = document.createElement("div");
    thirdDiv.appendChild(moviesDiv1);
    moviesDiv1.setAttribute("class", "moviesDiv1");

    var NearByCinema1 = document.createElement("div");
    moviesDiv1.appendChild(NearByCinema1);
    NearByCinema1.setAttribute("class", "NearByCinema");
     
    var nearbycinema1 = document.createElement("p");
    NearByCinema1.appendChild(nearbycinema1);
    nearbycinema1.setAttribute("class","positionOftextinThemoviesDiv1") 
    nearbycinema1.innerText="Nearby Cinema Halls & Theatre";

    var divForNearcinemaHalls =  document.createElement("div");
    NearByCinema1.appendChild(divForNearcinemaHalls);
    divForNearcinemaHalls.setAttribute("class","divForNearcinemaHalls") 

    var buttonForPSS = document.createElement("a");
    divForNearcinemaHalls.appendChild(buttonForPSS);
    buttonForPSS.setAttribute("href","http://127.0.0.1:5501/");
    buttonForPSS.innerHTML="<div class ='nearbyCinemaHalls'>PSS Multiplex, Tenkasi</div>";

    var buttonForSP = document.createElement("a");
    divForNearcinemaHalls.appendChild(buttonForSP);
    buttonForSP.setAttribute("href","#firstDiv");
    buttonForSP.innerHTML="<div class ='nearbyCinemaHalls'>Sri Padmam - Tenkasi</div>";
    buttonForSP.addEventListener("click",()=>{
        document.body.removeChild(fullContainer);
        frontPageForTicketBooking("Sri");
        Sripadmam();
    })

    var NearByCinema2 = document.createElement("div");
    moviesDiv1.appendChild(NearByCinema2);
    NearByCinema2.setAttribute("class", "NearByCinema");

    var nearbycinema2 = document.createElement("p");
    NearByCinema2.appendChild(nearbycinema2);
    nearbycinema2.setAttribute("class","positionOftextinThemoviesDiv1") 
    nearbycinema2.innerText="Cinema Halls & Theatres in Top Cities";

    var divForNearcinemaHalls =  document.createElement("div");
    NearByCinema2.appendChild(divForNearcinemaHalls);
    divForNearcinemaHalls.setAttribute("class","divForNearcinemaHalls") 

    var buttonForche = document.createElement("a");
    divForNearcinemaHalls.appendChild(buttonForche);
    buttonForche.setAttribute("href","http://127.0.0.1:5501/");
    buttonForche.innerHTML="<div class ='topcities'>Tenkasi</div>";

    var NearByCinema3 = document.createElement("div");
    moviesDiv1.appendChild(NearByCinema3);
    NearByCinema3.setAttribute("class", "NearByCinema");

    var nearbycinema3 = document.createElement("p");
    NearByCinema3.appendChild(nearbycinema3);
    nearbycinema3.setAttribute("class","positionOftextinThemoviesDiv1") 
    nearbycinema3.innerText="Theatres Under Same Cinema Chain";

    var divForNearcinemaHalls =  document.createElement("div");
    NearByCinema3.appendChild(divForNearcinemaHalls);
    divForNearcinemaHalls.setAttribute("class","divForNearcinemaHalls") 

    var buttonForPSS = document.createElement("a");
    divForNearcinemaHalls.appendChild(buttonForPSS);
    buttonForPSS.setAttribute("href","http://127.0.0.1:5501/");
    buttonForPSS.innerHTML="<div class ='nearbyCinemaHalls'>PSS Multiplex, Tenkasi</div>"

    var buttonForSP = document.createElement("a");
    divForNearcinemaHalls.appendChild(buttonForSP);
    buttonForSP.setAttribute("href","#firstDiv");
    buttonForSP.innerHTML="<div class ='nearbyCinemaHalls'>Sri Padmam - Tenkasi</div>";
    buttonForSP.addEventListener("click",()=>{
        document.body.removeChild(fullContainer);
        frontPageForTicketBooking("Sri")
        Sripadmam();
    })

    var moviesDiv2 = document.createElement("div");
    thirdDiv.appendChild(moviesDiv2);
    moviesDiv2.setAttribute("class", "moviesDiv2");

    var favouriteMovie = document.createElement("div");
    moviesDiv2.appendChild(favouriteMovie);
    favouriteMovie.setAttribute("class", "favouriteMovie");
    favouriteMovie.innerHTML = "<span class='upcomingMovies'>Book your Favourite Upcoming Movies</span>"

    var moviesList = document.createElement("div");
    moviesDiv2.appendChild(moviesList);
    moviesList.setAttribute("id", "moviesList");

    var movieList = document.createElement("div");
    moviesList.appendChild(movieList);
    movieList.setAttribute("class", "movieList");
    movieList.innerHTML = "<div class='movieImage'><img class ='imagesResolution' src='thunivu.jpeg'/></div><span class='moviesname'>Thunivu</span><span class='moviescontent'>U/A • Tamil</span><div onclick='alteringUpcomingMovies()' class='bookTicketForMovieDiv'>Book Ticket</div>"

    var movieList1 = document.createElement("div");
    moviesList.appendChild(movieList1);
    movieList1.setAttribute("class", "movieList");
    movieList1.innerHTML = "<div class='movieImage'><img class ='imagesResolution' src='Varisu.jpeg'/></div><span class='moviesname'>Varisu</span><span class='moviescontent'>U/A • Tamil</span><div onclick='alteringUpcomingMovies()' class='bookTicketForMovieDiv'>Book Ticket</div>";

    var movieList2 = document.createElement("div");
    moviesList.appendChild(movieList2);
    movieList2.setAttribute("class", "movieList");
    movieList2.innerHTML = "<div class='movieImage'><img class ='imagesResolution' src='Dhruva Natchathiram.jpeg'/></div><span class='moviesname'>Dhruva Natchathiram</span><span class='moviescontent'>U/A • Tamil</span><div onclick='alteringUpcomingMovies()' class='bookTicketForMovieDiv'>Book Ticket</div>";

    var movieList3 = document.createElement("div");
    moviesList.appendChild(movieList3);
    movieList3.setAttribute("class", "movieList");
    movieList3.innerHTML = "<div class='movieImage'><img class ='imagesResolution' src='Indian-II.jpg'/></div><span class='moviesname'>Indian-II</span><span class='moviescontent'>U/A • Tamil</span><div onclick='alteringUpcomingMovies()' class='bookTicketForMovieDiv'>Book Ticket</div>";

    var moviesDiv3 = document.createElement("div");
    thirdDiv.appendChild(moviesDiv3);
    moviesDiv3.setAttribute("class", "moviesDiv3");
    moviesDiv3.innerHTML="<div class='favouriteMovie'><span class='upcomingMovies'> PSS Theatre's Interface</span></div><div id='interfaceDiv'></div>"
   
    document.getElementById("interfaceDiv").innerHTML="<img class='Screen1images' id='firstScreen' src ='Screen1Seat.jpg'/><img class='Screen1images' id='outerImage' src ='Theatre image.jpg'/><img class='Screen1images' id='secondScreen' src ='Screen2Seat.jpg'/>"

    var socialMedia = document.createElement("div");
    thirdDiv.appendChild(socialMedia);
    socialMedia.setAttribute("id", "socialMedia");

    var divforInstallingPaytm = document.createElement("div");
    socialMedia.appendChild(divforInstallingPaytm);
    divforInstallingPaytm.setAttribute("id", "divforInstallingPaytm");
    divforInstallingPaytm.innerHTML="<span>Download Paytm App <br> to Pay from anywhere</span><a target='_blank' href='https://apps.apple.com/bw/app/paytm-payments-bank-account/id473941634'><img src='12.svg'/></a><a target='_blank' href='https://play.google.com/store/apps/details?id=net.one97.paytm'><img src='11.svg'/></a>"

    var socialMediaApp = document.createElement("div");
    socialMedia.appendChild(socialMediaApp);
    socialMediaApp.setAttribute("id", "socialMediaApp");
    socialMediaApp.innerHTML="<a target='_blank' href='https://twitter.com/paytm/'><i class='fa-brands fa-twitter socialMediaColor'></i></a><a target='_blank' href='https://www.instagram.com/paytm/'><i class='fa-brands fa-instagram socialMediaColor'></i></a><a target='blank' href='https://www.facebook.com/Paytm/'><i class='fa-brands fa-facebook socialMediaColor'></i></a><div id='finalLine'></div>"

}
if (frontCount == 0) {
    frontPageForTicketBooking("PSS");
    theatreIdName="PSS Multiplex";
}

// window.localStorage.removeItem('OrderedSeats')
// window.localStorage.removeItem('OrderedSeatsForTomorrow')
// window.localStorage.removeItem('OrderedSeatsForScreen2')
// window.localStorage.removeItem('OrderedSeatsForScreen2ForTomorrow')
// window.localStorage.removeItem("OrderedSeatsForSriTheatre")
// window.localStorage.removeItem("OrderedSeatsForTomorrowForSriTheatre")
// window.localStorage.removeItem("OrderedSeatsForScreen2ForTomorrowForSriTheatre")
// window.localStorage.removeItem("OrderedSeatsForScreen2ForSriTheatre")
//Div in the body tag which named as wholeContainer
function WholeTicketBookingProcess() {
    document.body.removeChild(fullContainer);

    frontCount = 1;

    var wholeDiv = document.createElement("div");
    document.body.appendChild(wholeDiv);
    wholeDiv.setAttribute("id", "wholeContainer");

    //Div in the wholeContainer which named as top this div contains logo for the page,title of the movie ,day,date and location of the movie
    var topDiv = document.createElement("div");
    wholeDiv.appendChild(topDiv);
    topDiv.setAttribute("id", "top");

    var leftArrowButton = document.createElement("div");
    topDiv.appendChild(leftArrowButton);
    leftArrowButton.setAttribute("id", "leftArrowButton");
    leftArrowButton.innerHTML = "<i class='fa-solid fa-chevron-left' id='BackButtonfrontpage'></i>"
    leftArrowButton.addEventListener("click",()=>{
         if(theatreIdName=="Sri Padmam")
        {
            document.body.removeChild(wholeContainer);
            counting = 0;
            frontPageForTicketBooking("Sri");
            Sripadmam();
        }
        else 
        {
          theatreIdName="PSS Multiplex";
          frontPageForTicketBooking("PSS")
        }
})

    //this div for adding image in the top div
    var patymImage = document.createElement("img");
    topDiv.appendChild(patymImage);
    patymImage.setAttribute("src", "3.png");
    patymImage.setAttribute("id", "patymImage");

    //this div for adding movie name in the top div
    var movieName = document.createElement("div");
    topDiv.appendChild(movieName);
    movieName.setAttribute("id", "movieName");

    //this div for timings of the movie which has four movie timings 11.00, 02.00, 06.00 and 10.00 shows and date and day 
    var timingsDiv = document.createElement("div");
    wholeDiv.appendChild(timingsDiv);
    timingsDiv.setAttribute("id", "timings");

    //this div for appending the four timings show this div is created 
    var timingsOfMovie = document.createElement("div");
    timingsDiv.appendChild(timingsOfMovie);
    timingsOfMovie.setAttribute("id", "timingsOfMovie");

    //this div is created for writing the day 
    var day = document.createElement("div");
    timingsOfMovie.appendChild(day);
    day.setAttribute("id", "day");
    day.innerHTML = "<p id='dayColor' class='center'></p> <p id='date'></p>";
    dayColor.innerText = presentDay;
    date.innerHTML = presentDate + " " + presentMonth;

    //this div is created for mentioning the time 11.00 AM inside the timings div and has a onclick function named changeColor this for showing that user clicked it. in this funtion the color change white and background color change into skyblue
    var eleventime = document.createElement("div");
    timingsOfMovie.appendChild(eleventime);
    eleventime.setAttribute("class", "timeOfShow");
    eleventime.setAttribute("id", "eleventime");
    eleventime.innerHTML = "<p class='center'> 11.00 AM </p> <p class='twoD' id='eleven'> 2D </p>";
    document.getElementById("eleventime").addEventListener("click", changeColor);
    document.getElementById("eleven").addEventListener("click", changeColor);

    //this div is created for mentioning the time 02.00 PM inside the timings div and has a onclick function named changeColor1 this for showing that user clicked it. in this funtion the color change white and background color change into skyblue
    var twotime = document.createElement("div");
    timingsOfMovie.appendChild(twotime);
    twotime.setAttribute("class", "timeOfShow");
    twotime.setAttribute("id", "twotime");
    twotime.innerHTML = "<p class='center'> 02.00 PM </p> <p class='twoD' id='two'> 2D </p>";
    document.getElementById("twotime").addEventListener("click", changeColor1);
    document.getElementById("two").addEventListener("click", changeColor1);

    //this div is created for mentioning the time 06.00 PM inside the timings div and has a onclick function named changeColor2 this for showing that user clicked it. in this funtion the color change white and background color change into skyblue
    var sixtime = document.createElement("div");
    timingsOfMovie.appendChild(sixtime);
    sixtime.setAttribute("class", "timeOfShow");
    sixtime.setAttribute("id", "sixtime");
    sixtime.innerHTML = "<p class='center'> 06.00 PM </p> <p class='twoD'id='six'> 2D </p>";
    document.getElementById("sixtime").addEventListener("click", changeColor2);
    document.getElementById("six").addEventListener("click", changeColor2);

    //this div is created for mentioning the time 10.00 PM inside the timings div  and has a onclick function named changeColor1 this for showing that user clicked it. in this funtion the color change white and background color change into skyblue
    var tentime = document.createElement("div");
    timingsOfMovie.appendChild(tentime);
    tentime.setAttribute("class", "timeOfShow");
    tentime.setAttribute("id", "tentime");
    tentime.innerHTML = "<p class='center'> 10.00 PM </p> <p class='twoD'id='ten'> 2D </p>";
    document.getElementById("tentime").addEventListener("click", changeColor3);
    document.getElementById("ten").addEventListener("click", changeColor3);

    //this div is created for showing to user that how many seats are available, unavailable and booked.
    var referenceOfSeats = document.createElement("div");
    timingsDiv.appendChild(referenceOfSeats);
    referenceOfSeats.setAttribute("id", "referenceOfSeats");

    //this div is created inside the referenceofseats which shows available seats
    var Available = document.createElement("div");
    referenceOfSeats.appendChild(Available);
    Available.setAttribute("id", "Available");
    Available.innerHTML = "<span class='fontpositionForAvailable'>AVAILABLE</span>";

    //this div is created inside the referenceofseats which shows booked seats
    var Booked = document.createElement("div");
    referenceOfSeats.appendChild(Booked);
    Booked.setAttribute("id", "Booked");
    Booked.innerHTML = "<span class='fontpositionForAvailable'>BOOKED</span>"

    //this div is created inside the referenceofseats which shows unavailable seats
    var Unavailable = document.createElement("div");
    referenceOfSeats.appendChild(Unavailable);
    Unavailable.setAttribute("id", "Unavailable");
    Unavailable.innerHTML = "<span class='fontpositionForAvailable'>UNAVAILABLE</span>"

}

    // args => indicating ths shows that user's clicking time.
    function ApplingSeatsForAllTime(args) {
        //this function is used to create the seats in the theatre 
        // here the string "first" indicates the 11'o clock time show.
        // and the var aa = indicate the id of the first seat in the theatre and var bb = indicate the id of the last seat in the theatre
        if (args == "First") {
            var a = 0;
            var aa = 0;
            var bb = 286;
        }
        // here the string "Second" indicates the 02'o clock time show.
        //and the var aa = indicate the id of the first seat in the theatre and var bb = indicate the id of the last seat in the theatre
        else if (args == "Second") {
            var a = 286;
            var aa = 286;
            var bb = 572;
        }
        // here the string "Third" indicates the 06'o clock time show.
        // and the var aa = indicate the id of the first seat in the theatre and var bb = indicate the id of the last seat in the theatre
        else if (args == "Third") {
            var a = 572;
            var aa = 572;
            var bb = 858;
        }
        // here the string "fourth" indicates the 10'o clock time show.
        // and the var aa = indicate the id of the first seat in the theatre and var bb = indicate the id of the last seat in the theatre
        else if (args == "Fourth") {
            var a = 858;
            var aa = 858;
            var bb = 1146;
        }
        // here we initialing array which has 0 because it is used the furthor function for innertext
        var array = [0];

        //this div is created inside the wholecontainer for inserting seats in it
        var wholedivforseats = document.createElement("div");
        document.getElementById("wholeContainer").appendChild(wholedivforseats);
        wholedivforseats.setAttribute("id", "wholedivforseats");

        //this div is created for showing the amount of per seat
        var firstClassDiv = document.createElement("div");
        wholedivforseats.appendChild(firstClassDiv);
        firstClassDiv.setAttribute("id", "firstClassDiv");
        firstClassDiv.innerHTML = "<p> FIRST CLASS: ₹150</p>";

        //this div is created inside the wholedivforseats
        var seatDiv = document.createElement("div");
        wholedivforseats.appendChild(seatDiv);
        seatDiv.setAttribute("id", "seatDiv");

        //this div is created for where the screen is displayed
        var screenDiv = document.createElement("div");
        document.getElementById("wholeContainer").appendChild(screenDiv);
        screenDiv.setAttribute("id", "screenDiv");

        //this div created for the seats in the left side
        var seatsOnLeftSides = document.createElement("div");
        seatDiv.appendChild(seatsOnLeftSides);
        seatsOnLeftSides.setAttribute("class", "seatsOnLeftSides");

        //this div created for the seats in the middle side
        var seats = document.createElement("div");
        seatDiv.appendChild(seats);
        seats.setAttribute("id", "seats");

        //this div created for the seats in the right side
        var seatsOnRightSides = document.createElement("div");
        seatDiv.appendChild(seatsOnRightSides);
        seatsOnRightSides.setAttribute("class", "seatsOnRightSides");

        //this loop is created for appling seats in the left side which is booked alternative seats for user who is not payed in online
        for (let i = 0; i <= 1; i++) {
            for (let j = 0; j <= 6; j++) {
                var manyseats = document.createElement("div");
                seatsOnLeftSides.appendChild(manyseats);
                manyseats.setAttribute("class", "manyseatsOccupied");
                a += 1
                manyseats.setAttribute("id", a);
                manyseats.addEventListener("click", changeColorForSeats);
            }
        }

        //this loop is created for appling seats in the leftside which is available
        for (let i = 0; i <= 7; i++) {
            for (let j = 0; j <= 6; j++) {
                var manyseats = document.createElement("div");
                seatsOnLeftSides.appendChild(manyseats);
                manyseats.setAttribute("class", "manyseats");
                a += 1
                manyseats.setAttribute("id", a);
                manyseats.addEventListener("click", changeColorForSeats);
            }
        }

        //this loop is created for appling seats in the middle side which is booked alternative seats for user who is not payed in online
        for (let i = 0; i <= 1; i++) {
            for (let j = 0; j <= 11; j++) {
                var manyseats = document.createElement("div");
                seats.appendChild(manyseats);
                manyseats.setAttribute("class", "manyseatsOccupied");
                a += 1
                manyseats.setAttribute("id", a);
                manyseats.addEventListener("click", changeColorForSeats);
            }
        }

        //this loop is created for appling seats in the middle side
        for (let i = 0; i <= 7; i++) {
            for (let j = 0; j <= 11; j++) {
                var manyseats = document.createElement("div");
                seats.appendChild(manyseats);
                manyseats.setAttribute("class", "manyseats");
                a += 1
                manyseats.setAttribute("id", a);
                manyseats.addEventListener("click", changeColorForSeats);
            }
        }

        //this loop is created for appling seats in the right side which is booked alternative seats for user who is not payed in online
        for (let i = 0; i <= 1; i++) {
            for (let j = 0; j <= 6; j++) {
                var manyseats = document.createElement("div");
                seatsOnRightSides.appendChild(manyseats);
                manyseats.setAttribute("class", "manyseatsOccupied");
                a += 1
                manyseats.setAttribute("id", a);
                manyseats.addEventListener("click", changeColorForSeats);
            }
        }

        //this loop is created for appling seats in the right side 
        for (let i = 0; i <= 7; i++) {
            for (let j = 0; j <= 6; j++) {
                var manyseats = document.createElement("div");
                seatsOnRightSides.appendChild(manyseats);
                manyseats.setAttribute("class", "manyseats");
                a += 1
                manyseats.setAttribute("id", a);
                manyseats.addEventListener("click", changeColorForSeats);
            }
        }

        //this div is created for the last row seat in the theatre
        var seatsinBottom = document.createElement("div");
        wholedivforseats.appendChild(seatsinBottom);
        seatsinBottom.setAttribute("id", "seatsinBottom");

        //this div is created for the last row seat in the theatre for left side
        var kRowSeatsLeft = document.createElement("div");
        seatsinBottom.appendChild(kRowSeatsLeft);
        kRowSeatsLeft.setAttribute("class", "kRowSeatsLeft");

        //this div is created for the last row seat in the theatre for middle side
        var kRowSeatsCenter = document.createElement("div");
        seatsinBottom.appendChild(kRowSeatsCenter);
        kRowSeatsCenter.setAttribute("class", "kRowSeatsCenter");

        //this div is created for the last row seat in the theatre for right side
        var kRowSeatsRight = document.createElement("div");
        seatsinBottom.appendChild(kRowSeatsRight);
        kRowSeatsRight.setAttribute("class", "kRowSeatsRight");

        //this loop is created for appling seats in the left side 
        for (let i = 0; i <= 6; i++) {
            var manyseats = document.createElement("div");
            kRowSeatsLeft.appendChild(manyseats);
            manyseats.setAttribute("class", "manyseats");
            a += 1
            manyseats.setAttribute("id", a);
            manyseats.addEventListener("click", changeColorForSeats);
        }

        //this loop is created for appling seats in the middle side 
        for (let i = 0; i <= 11; i++) {
            var manyseats = document.createElement("div");
            kRowSeatsCenter.appendChild(manyseats);
            manyseats.setAttribute("class", "manyseats");
            a += 1
            manyseats.setAttribute("id", a);
            manyseats.addEventListener("click", changeColorForSeats);
        }

        //this loop is created for appling seats in the right side 
        for (let i = 0; i <= 6; i++) {
            var manyseats = document.createElement("div");
            kRowSeatsRight.appendChild(manyseats);
            manyseats.setAttribute("class", "manyseats");
            a += 1
            manyseats.setAttribute("id", a);
            manyseats.addEventListener("click", changeColorForSeats);
        }

        //this img tag used put the screen image in the screen div
        var image = document.createElement("img");
        screenDiv.appendChild(image);
        image.setAttribute("src", "1.svg");
        image.setAttribute("id", "image");

        ////////////////////////////////////////////////////////////////////
        //this condition local stroage which seat are already booked and its seat number are stored 
        function ForRestoreingSeats(LocalStorageName)
        {
            BookedSeats = [];
            if (localStorage.getItem(LocalStorageName) != null) {
                var BookedTickets = localStorage.getItem(LocalStorageName);
                console.log(BookedTickets);
                BookedTickets = BookedTickets.split(",");
                console.log(BookedTickets);
                for (let i = 0; i < BookedTickets.length; i++) {
                    BookedSeats.push(BookedTickets[i])
                }
            }
            if (BookedSeats != "") {
                console.log(aa)
                for (let i = 1; i < BookedSeats.length; i++) {
                    if ((BookedSeats[i] > aa) && (BookedSeats[i] < bb)) {
                        document.getElementById(BookedSeats[i]).className = "manyseatsOccupied";
                        document.getElementById(BookedSeats[i]).innerText = ""
                    }
                }
            }
        }
        function ForRestoreingSeatsTomorrow(LocalStorageName)
        {
            BookedSeatsForTomorrow = []
            if (localStorage.getItem(LocalStorageName) != null) {
                var BookedTickets = localStorage.getItem(LocalStorageName);
                console.log(BookedTickets);
                BookedTickets = BookedTickets.split(",");
                console.log(BookedTickets);
                for (let i = 0; i < BookedTickets.length; i++) {
                    BookedSeatsForTomorrow.push(BookedTickets[i])
                }
            }
            if (BookedSeatsForTomorrow != "") {
                console.log(aa)
                for (let i = 1; i < BookedSeatsForTomorrow.length; i++) {
                    if ((BookedSeatsForTomorrow[i] > aa) && (BookedSeatsForTomorrow[i] < bb)) {
                        document.getElementById(BookedSeatsForTomorrow[i]).className = "manyseatsOccupied";
                        document.getElementById(BookedSeatsForTomorrow[i]).innerText = ""
                    }
                }
            }
        }
        if ((presentDay == CopyDay) && (presentDate == CopyDate) && (localStorage.getItem('ScreenName') == null) && (theatreIdName!="Sri Padmam")) {
            ForRestoreingSeats("OrderedSeats");
        }       
        if ((presentDay != CopyDay) && (presentDate != CopyDate) && (localStorage.getItem('ScreenName') == null) && (theatreIdName!="Sri Padmam")) {
            ForRestoreingSeatsTomorrow('OrderedSeatsForTomorrow')
        }
        if ((presentDay == CopyDay) && (presentDate == CopyDate) && (localStorage.getItem('ScreenName') != null) && (theatreIdName!="Sri Padmam")) {
        ForRestoreingSeats("OrderedSeatsForScreen2");
        }
        if ((presentDay != CopyDay) && (presentDate != CopyDate) && (localStorage.getItem('ScreenName') != null) && (theatreIdName!="Sri Padmam")) {
        ForRestoreingSeatsTomorrow("OrderedSeatsForScreen2ForTomorrow")
        }
        if ((presentDay == CopyDay) && (presentDate == CopyDate) && (localStorage.getItem('ScreenName') == null) && (theatreIdName=="Sri Padmam")) {
            ForRestoreingSeats("OrderedSeatsForSriTheatre");
        }
        if ((presentDay != CopyDay) && (presentDate != CopyDate) && (localStorage.getItem('ScreenName') == null) && (theatreIdName=="Sri Padmam")) {
            ForRestoreingSeatsTomorrow('OrderedSeatsForTomorrowForSriTheatre')
        }
        if ((presentDay == CopyDay) && (presentDate == CopyDate) && (localStorage.getItem('ScreenName') != null) && (theatreIdName=="Sri Padmam")) {
        ForRestoreingSeats("OrderedSeatsForScreen2ForSriTheatre");
        }
        if ((presentDay != CopyDay) && (presentDate != CopyDate) && (localStorage.getItem('ScreenName') != null) && (theatreIdName=="Sri Padmam")) {
        ForRestoreingSeatsTomorrow("OrderedSeatsForScreen2ForTomorrowForSriTheatre")
        }


        //this function is used to click the available seats and removing the Selected seats which selected by the user before they pay for seats
        function changeColorForSeats() {
            //here event target.id shows the id which are able to book the seats by the user
            if ((((!array.includes(event.target.id)) && ((((event.target.id) > 14) && ((event.target.id) < 71)) || (((event.target.id) > 94) && ((event.target.id) < 191)) || (((event.target.id) > 204) && ((event.target.id) < 287)))) || ((!array.includes(event.target.id)) && ((((event.target.id) > 300) && ((event.target.id) < 357)) || (((event.target.id) > 380) && ((event.target.id) < 477)) || (((event.target.id) > 490) && ((event.target.id) < 573)))) || ((!array.includes(event.target.id)) && ((((event.target.id) > 586) && ((event.target.id) < 643)) || (((event.target.id) > 666) && ((event.target.id) < 763)) || (((event.target.id) > 776) && ((event.target.id) < 859)))) || ((!array.includes(event.target.id)) && ((((event.target.id) > 872) && ((event.target.id) < 929)) || (((event.target.id) > 952) && ((event.target.id) < 1049)) || (((event.target.id) > 1062) && ((event.target.id) < 1145))))) && (!BookedSeats.includes(event.target.id)) && (!BookedSeatsForTomorrow.includes(event.target.id))) {
                if (array.length == 1) {

                    // this div is created to when the seats are clicked.....
                    var bookTickets = document.createElement("div");
                    document.getElementById("wholeContainer").appendChild(bookTickets);
                    bookTickets.setAttribute("id", "bookTickets");

                    //this div shows the totalamount and how many seats are clicked....
                    var ticketpriceDiv = document.createElement("div");
                    bookTickets.appendChild(ticketpriceDiv);
                    ticketpriceDiv.setAttribute("id", "ticketpriceDiv");

                    //this div shows the totalamount for the seats of user books 
                    var ticketPrice = document.createElement("div");
                    ticketpriceDiv.appendChild(ticketPrice);
                    ticketPrice.setAttribute("id", "ticketPrice");
                    ticketPrice.innerHTML = "<p id ='totalamount'></p>";

                    //this div is created for showing the how many seats are clicked by the user
                    var HowManyTickets = document.createElement("div");
                    ticketpriceDiv.appendChild(HowManyTickets);
                    HowManyTickets.setAttribute("id", "HowManyTickets");
                    HowManyTickets.innerHTML = "<p id ='totalamountMultiplication'></p>";

                    //this div is created for the booking the tickets which are selected by the user..
                    var blueTickets = document.createElement("div");
                    bookTickets.appendChild(blueTickets);
                    blueTickets.setAttribute("id", "blueDivForBookTickets");
                    blueDivForBookTickets.innerHTML = "<p> Book Tickets </p>";
                    blueTickets.addEventListener("click", Purchasetickets);
                }
                array.push(event.target.id);

                // this is created when the user selecting the seats more than 10 seats and this alert them by, you have reached 10 seats
                if (array.indexOf(event.target.id) > 10) {
                    if (hide.length > 0) {
                        document.getElementById(hide[0]).innerHTML = "";
                    }
                    document.getElementById(event.target.id).className = ("manyseats");
                    document.getElementById(event.target.id).innerHTML = "<div class='box alert'>Maximum 10 seats can be selected</div>";
                    hide.unshift(event.target.id);
                    array.splice(array.indexOf(event.target.id), 1)
                    console.log(array)
                } else if (array.indexOf(event.target.id) < 11) {
                    document.getElementById(event.target.id).className = ("onclickSeats");
                    document.getElementById(event.target.id).innerText = array.indexOf(event.target.id);
                    totalamount.innerText = "₹" + array.indexOf(event.target.id) * 150;
                    totalamountMultiplication.innerText = "Ticket " + array.indexOf(event.target.id) + " X " + "₹150";
                }
            }
            //this function is used for removing the Selected seats which selected by the user before they pay for seats
            else if ((((array.includes(event.target.id)) && ((((event.target.id) > 14) && ((event.target.id) < 71)) || (((event.target.id) > 94) && ((event.target.id) < 191)) || (((event.target.id) > 204) && ((event.target.id) < 287)))) || ((array.includes(event.target.id)) && ((((event.target.id) > 300) && ((event.target.id) < 357)) || (((event.target.id) > 380) && ((event.target.id) < 477)) || (((event.target.id) > 490) && ((event.target.id) < 573)))) || ((array.includes(event.target.id)) && ((((event.target.id) > 586) && ((event.target.id) < 643)) || (((event.target.id) > 666) && ((event.target.id) < 763)) || (((event.target.id) > 776) && ((event.target.id) < 859)))) || ((array.includes(event.target.id)) && ((((event.target.id) > 872) && ((event.target.id) < 929)) || (((event.target.id) > 952) && ((event.target.id) < 1049)) || (((event.target.id) > 1062) && ((event.target.id) < 1145))))) && (!BookedSeats.includes(event.target.id)) && (!BookedSeatsForTomorrow.includes(event.target.id)) ) {
                var index = array.indexOf(event.target.id);
                if (index > -1) {
                    array.splice(index, 1);
                }
                document.getElementById(event.target.id).className = ("manyseats");
                for (let z = 1; z < array.length; z++) {
                    document.getElementById(array[z]).innerText = array.indexOf(array[z]);
                    totalamount.innerText = "₹" + array.indexOf(array[z]) * 150;
                    totalamountMultiplication.innerText = "Ticket " + array.indexOf(array[z]) + " X " + "₹150";
                    if (hide.length > 1) {
                        document.getElementById(hide[0]).innerHTML = "";
                    }
                }
                if (array.length == 1) {
                    var select = document.getElementById('wholeContainer');
                    select.removeChild(select.lastChild);
                }
            }
        }

        function Purchasetickets() {
            var shadow = document.createElement("div");
            wholeContainer.appendChild(shadow);
            shadow.setAttribute("id", "shadow");

            var mainDivForPaytmPaying = document.createElement("div");
            wholeContainer.appendChild(mainDivForPaytmPaying);
            mainDivForPaytmPaying.setAttribute("id", "mainDivForPaytmPaying");

            var paytmPaying = document.createElement("div");
            mainDivForPaytmPaying.appendChild(paytmPaying);
            paytmPaying.setAttribute("id", "paytmPaying");

            var Instructions = document.createElement("div");
            paytmPaying.appendChild(Instructions);
            Instructions.setAttribute("id", "Instructions");

            var steps = document.createElement("div");
            Instructions.appendChild(steps);
            steps.setAttribute("id", "steps");
            steps.innerHTML = "<span id ='boldingLetter' class='fontMargin'>To Login into your Paytm Web account</span><br><span class='fontMargin'>1. Open Paytm App</span><br><span class='fontMargin'>2. Tap Scanoption available at the bottom</span><br><span class='fontMargin'>3. Point Paytm Scan at QR Code to login</span>";
            var watchVideo = document.createElement("div");
            steps.appendChild(watchVideo);
            watchVideo.setAttribute("id", "watchVideo");
            watchVideo.innerHTML = "<img src = 'video-icon.svg'/><span class='positionOftheText'>Watch Video</span>";
            watchVideo.addEventListener("click", forWatchingVideo);

            var download = document.createElement("div");
            Instructions.appendChild(download);
            download.setAttribute("id", "download");
            download.innerHTML = "<div id ='text'>To create an account download Paytm App</div>"

            var anchorTag1 = document.createElement("a");
            anchorTag1.setAttribute("href", "https://play.google.com/store/apps/details?id=net.one97.paytm");
            anchorTag1.setAttribute("target","_blank");
            download.appendChild(anchorTag1);
            var googlePlay = document.createElement("div");
            anchorTag1.appendChild(googlePlay);
            googlePlay.setAttribute("id", "googlePlay");
            googlePlay.innerHTML = "<img src = 'googleplay.svg'/><span class='positionOftheText'>Google Play</span>";

            var anchorTag2 = document.createElement("a");
            anchorTag2.setAttribute("href", "https://apps.apple.com/bw/app/paytm-payments-bank-account/id473941634");
            anchorTag2.setAttribute("target","_blank");
            download.appendChild(anchorTag2);
            var appstore = document.createElement("div");
            anchorTag2.appendChild(appstore);
            appstore.setAttribute("id", "appstore");
            appstore.innerHTML = "<img src = 'appstore.svg'/><span class='positionOftheText'>App Store<span>";

            var QRcode = document.createElement("div");
            paytmPaying.appendChild(QRcode);
            QRcode.setAttribute("id", "QRcode");
            QRcode.innerHTML = "<div id ='CloseButton'> &#215;</div> <img id='Barcode' src ='QR Code.jpg'/><span id = 'positionOfscan'>Scan QR code with Paytm App to login</span>"
            var PayOption = document.createElement("div");
            QRcode.appendChild(PayOption);
            PayOption.setAttribute("id", "PayOption");
            PayOption.innerText = "Pay Now";
            PayOption.addEventListener("click", RealPayment)

            var paytmPayingLightBlue = document.createElement("div");
            mainDivForPaytmPaying.appendChild(paytmPayingLightBlue);
            paytmPayingLightBlue.setAttribute("id", "paytmPayingLightBlue");

            var paytmPayingDarkBlue = document.createElement("div");
            mainDivForPaytmPaying.appendChild(paytmPayingDarkBlue);
            paytmPayingDarkBlue.setAttribute("id", "paytmPayingDarkBlue");
            document.getElementById("CloseButton").addEventListener("click", removingShadow);
        }

        function forWatchingVideo() {
            var removingOldDiv = document.getElementById('Instructions');
            removingOldDiv.removeChild(steps);
            removingOldDiv.removeChild(download);
            Instructions.innerHTML = "<span id ='bolding' class='fontMargin'>To Login into your GPay Web account</span><br><span id ='closeButtonForVideo'>Close</span>"
            var videoWatching = document.createElement("div");
            Instructions.appendChild(videoWatching);
            videoWatching.setAttribute("id", "videoWatching");
            videoWatching.innerHTML = "<video height='324' autoplay muted loop> <source src='introVideo.mp4' type='video/mp4'></video>";
            document.getElementById("closeButtonForVideo").addEventListener("click", removingWatchingVideo);
        }

        function removingWatchingVideo() {
            var RemovingTheShadow = document.getElementById('wholeContainer');
            RemovingTheShadow.removeChild(shadow);
            RemovingTheShadow.removeChild(mainDivForPaytmPaying);
            Purchasetickets();
        }

        function removingShadow() {
            var RemovingTheShadow = document.getElementById('wholeContainer');
            RemovingTheShadow.removeChild(shadow);
            RemovingTheShadow.removeChild(mainDivForPaytmPaying);
        }

        function RealPayment() {
            console.log(array)
            function LocalStorageSetupForTomorrow(LocalStorageName)
            {
                origin = array.length
                console.log(BookedSeatsForTomorrow)
                for (let i = 0; i < BookedSeatsForTomorrow.length; i++) {
                    console.log(BookedSeatsForTomorrow[i])
                    array.push(BookedSeatsForTomorrow[i])
                }
                localStorage.setItem(LocalStorageName, array)
                if (localStorage.getItem(LocalStorageName) != null) {
                    var BookedTickets = localStorage.getItem(LocalStorageName);
                    console.log(BookedTickets);
                    BookedTickets = BookedTickets.split(",");
                    console.log(BookedTickets);
                    for (let i = 1; i < BookedTickets.length; i++) {
                        BookedSeatsForTomorrow.push(BookedTickets[i])
                    }
                }
                console.log(BookedSeats)
                if (BookedSeatsForTomorrow != "") {
                    for (let i = 0; i < BookedSeatsForTomorrow.length; i++) {
                        console.log(aa)
                        console.log(BookedSeatsForTomorrow[i])
                        if ((BookedSeatsForTomorrow[i] > aa) && (BookedSeatsForTomorrow[i] < bb)) {
                            document.getElementById(BookedSeatsForTomorrow[i]).className = "manyseatsOccupied";
                            document.getElementById(BookedSeatsForTomorrow[i]).innerText = ""
                        }
                    }
                }
            }
            function LocalStorageSetupForToday(LocalStorageName)
            {
                origin = array.length
                console.log(BookedSeats)
                for (let i = 0; i < BookedSeats.length; i++) {
                    console.log(BookedSeats[i])
                    array.push(BookedSeats[i])
                }
                localStorage.setItem(LocalStorageName, array)
                if (localStorage.getItem(LocalStorageName) != null) {
                    var BookedTickets = localStorage.getItem(LocalStorageName);
                    console.log(BookedTickets);
                    BookedTickets = BookedTickets.split(",");
                    console.log(BookedTickets);
                    for (let i = 1; i < BookedTickets.length; i++) {

                        BookedSeats.push(BookedTickets[i])
                    }
                }
                if (BookedSeats != "") {
                    for (let i = 0; i < BookedSeats.length; i++) {
                        console.log(aa)
                        console.log(BookedSeats[i])
                        if ((BookedSeats[i] > aa) && (BookedSeats[i] < bb)) {
                            document.getElementById(BookedSeats[i]).className = "manyseatsOccupied";
                            document.getElementById(BookedSeats[i]).innerText = ""
                        }
                    }
                }
            }
            if ((presentDay == CopyDay) && (presentDate == CopyDate) && (localStorage.getItem('ScreenName') == null) && (theatreIdName!="Sri Padmam")){
                LocalStorageSetupForToday("OrderedSeats")
            } 
            else if ((presentDay != CopyDay) && (presentDate != CopyDate) && (localStorage.getItem('ScreenName') == null) && (theatreIdName!="Sri Padmam")) {
                LocalStorageSetupForTomorrow("OrderedSeatsForTomorrow")
            }
           else if ((presentDay == CopyDay) && (presentDate == CopyDate) && (localStorage.getItem('ScreenName') != null) && (theatreIdName!="Sri Padmam")){
                LocalStorageSetupForToday("OrderedSeatsForScreen2")
            } 
            else if ((presentDay != CopyDay) && (presentDate != CopyDate) && (localStorage.getItem('ScreenName') != null) && (theatreIdName!="Sri Padmam")) {
                LocalStorageSetupForTomorrow("OrderedSeatsForScreen2ForTomorrow")
            }
            else if ((presentDay == CopyDay) && (presentDate == CopyDate) && (localStorage.getItem('ScreenName') == null) && (theatreIdName=="Sri Padmam")){
                LocalStorageSetupForToday("OrderedSeatsForSriTheatre")
            } 
            else if ((presentDay != CopyDay) && (presentDate != CopyDate) && (localStorage.getItem('ScreenName') == null) && (theatreIdName=="Sri Padmam")) {
                LocalStorageSetupForTomorrow("OrderedSeatsForTomorrowForSriTheatre")
            }
           else if ((presentDay == CopyDay) && (presentDate == CopyDate) && (localStorage.getItem('ScreenName') != null) && (theatreIdName=="Sri Padmam")){
                LocalStorageSetupForToday("OrderedSeatsForScreen2ForSriTheatre")
            } 
            else if ((presentDay != CopyDay) && (presentDate != CopyDate) && (localStorage.getItem('ScreenName') != null) && (theatreIdName=="Sri Padmam")) {
                LocalStorageSetupForTomorrow("OrderedSeatsForScreen2ForTomorrowForSriTheatre")
            }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            PaymentFinishingVideo();
        }

        function PaymentFinishingVideo() {
            document.getElementById('QRcode').removeChild(Barcode);
            document.getElementById('QRcode').removeChild(positionOfscan);
            document.getElementById('QRcode').removeChild(PayOption);
            var PaymentFinishedVideo = document.createElement("div");
            QRcode.appendChild(PaymentFinishedVideo);
            PaymentFinishedVideo.setAttribute("id", "PaymentFinishedVideo");
            PaymentFinishedVideo.innerHTML = "<video height='350' autoplay muted loop> <source src='PaymentFinishedVideo.mp4' type='video/mp4'></video>";
            var Receipt = document.createElement("div");
            QRcode.appendChild(Receipt);
            Receipt.setAttribute("id", "Receipt");
            Receipt.innerText = "You have Booked " + Number(origin - 1) + " tickets";
            document.getElementById('wholeContainer').removeChild(bookTickets);
            array =[0];
        }
    }

    ////////////////////////////////////////////////////////////////////
    function changeColor() {
        document.getElementById("time").innerHTML = "Today, " + presentDate + " " + presentMonth + ", 10:00 PM at " + theatreIdName + " , Tenkasi"
        document.getElementById("eleventime").className = "onclickTime";
        document.getElementById("eleven").className = "twooD";
        document.getElementById("twotime").className = "timeOfShow";
        document.getElementById("two").className = "twoD";
        document.getElementById("sixtime").className = "timeOfShow";
        document.getElementById("six").className = "twoD";
        document.getElementById("tentime").className = "timeOfShow";
        document.getElementById("ten").className = "twoD";
        if(counting==1)
        {
        document.getElementById('wholeContainer').removeChild(wholedivforseats);
        document.getElementById('wholeContainer').removeChild(screenDiv);
        }
        ApplingSeatsForAllTime("First")
        if(counting==1){
            document.getElementById('wholeContainer').removeChild(bookTickets);
        }
        counting = 1

    }

    function changeColor1() {
        document.getElementById("time").innerHTML = "Today, " + presentDate + " " + presentMonth + ", 10:00 PM at " + theatreIdName + " , Tenkasi"
        document.getElementById("twotime").className = "onclickTime";
        document.getElementById("two").className = "twooD";
        document.getElementById("eleventime").className = "timeOfShow";
        document.getElementById("eleven").className = "twoD";
        document.getElementById("sixtime").className = "timeOfShow";
        document.getElementById("six").className = "twoD";
        document.getElementById("tentime").className = "timeOfShow";
        document.getElementById("ten").className = "twoD";
        if(counting==1)
        {
        document.getElementById('wholeContainer').removeChild(wholedivforseats);
        document.getElementById('wholeContainer').removeChild(screenDiv);
        }
        ApplingSeatsForAllTime("Second")
        if(counting==1){
            document.getElementById('wholeContainer').removeChild(bookTickets);
        }
        counting = 1
    }

    function changeColor2() {
        document.getElementById("time").innerHTML = "Today, " + presentDate + " " + presentMonth + ", 10:00 PM at " + theatreIdName + " , Tenkasi";
        document.getElementById("sixtime").className = "onclickTime";
        document.getElementById("six").className = "twooD";
        document.getElementById("twotime").className = "timeOfShow";
        document.getElementById("two").className = "twoD";
        document.getElementById("eleventime").className = "timeOfShow";
        document.getElementById("eleven").className = "twoD";
        document.getElementById("tentime").className = "timeOfShow";
        document.getElementById("ten").className = "twoD";
        if(counting==1)
        {
        document.getElementById('wholeContainer').removeChild(wholedivforseats);
        document.getElementById('wholeContainer').removeChild(screenDiv);
        }
        ApplingSeatsForAllTime("Third")
        if(counting==1){
            document.getElementById('wholeContainer').removeChild(bookTickets);
        }
        counting = 1
    }

    function changeColor3() {
        document.getElementById("time").innerHTML = "Today, " + presentDate + " " + presentMonth + ", 10:00 PM at " + theatreIdName + " , Tenkasi"
        document.getElementById("tentime").className = "onclickTime";
        document.getElementById("ten").className = "twooD";
        document.getElementById("twotime").className = "timeOfShow";
        document.getElementById("two").className = "twoD";
        document.getElementById("sixtime").className = "timeOfShow";
        document.getElementById("six").className = "twoD";
        document.getElementById("eleventime").className = "timeOfShow";
        document.getElementById("eleven").className = "twoD";
        if(counting==1)
        {
        document.getElementById('wholeContainer').removeChild(wholedivforseats);
        document.getElementById('wholeContainer').removeChild(screenDiv);
        }
        ApplingSeatsForAllTime("Fourth")
        if(counting==1){
            document.getElementById('wholeContainer').removeChild(bookTickets);
        }
        counting = 1
    }
    function alteringUpcomingMovies()
    {    
        var alertBox = document.createElement("div")
        document.getElementById("fullContainer").appendChild(alertBox);
        alertBox.setAttribute("id","alertBox");
        var alertBoxFormovies = document.createElement("div");
        alertBox.appendChild(alertBoxFormovies);
        alertBoxFormovies.setAttribute("id","alertBoxFormovies")
        alertBoxFormovies.innerHTML = "<div id ='closeButton2'> &#215;</div><img id='seatdiv1' src='alert.svg'/><span class='moviesname' >Sorry!, The Movie has not been released yet</span><a href = 'http://127.0.0.1:5500/'><div id= viewAllAvailableMovies>View all Available Movies</div></a>";
        document.getElementById("closeButton2").addEventListener("click",removingShadowforFrontPage)
    }
    function removingShadowforFrontPage()
    {
        var RemovingTheShadow = document.getElementById('fullContainer');
        RemovingTheShadow.removeChild(alertBox);
    }
    document.getElementById("firstScreen").addEventListener("mouseenter",() => {ChangingImagesForScreens(this,firstScreenImages,"firstScreen")});
    document.getElementById("outerImage").addEventListener("mouseenter",() => {ChangingImagesForScreens(this,OuterTheatreImages,"outerImage")});
    document.getElementById("secondScreen").addEventListener("mouseenter",() => {ChangingImagesForScreens(this,secondScreenImages,"secondScreen")})

    function ChangingImagesForScreens(elem,checking,elementID)
    {
        var count = 0
            console.log(count)
            let interval=setInterval(()=>
            {
             if(count<=4){document.getElementById(elementID).setAttribute("src",checking[count++]+".jpg")}
            },650)
            elem.addEventListener ("mouseout", ()=>
            {
                clearInterval(interval)
            })
    }

    function ScreenChecking(ScreenName)
    {
        if(ScreenName=="Screen1")
        {
            window.localStorage.removeItem("ScreenName")
        }
        else if(ScreenName=="Screen2")
        {
            localStorage.setItem("ScreenName","Screen2forToday")
        }
        else if(ScreenName=="Screen3")
        {
            localStorage.setItem("ScreenName","Screen2forTomorrow")
        }
    }
    function Sripadmam()
    {
        anchorTagForDirections.setAttribute("href", "https://www.google.com/maps/place/8%C2%B057'47.3%22N+77%C2%B018'24.1%22E/@8.963138,77.30668,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xfb44533a7c848421!8m2!3d8.963138!4d77.30668");
        document.getElementById("firstScreen").setAttribute("src","Screen1Seat2in3.jpg");
        document.getElementById("secondScreen").setAttribute("src","Screen2Seat1in2.jpg");
        document.getElementById("outerImage").setAttribute("src","TheatreImageOfSriPadmam1.jpg")
        document.getElementById("firstScreen").addEventListener("mouseenter",() => {ChangingImagesForScreens(this,SriScreen1Images,"firstScreen")});
        document.getElementById("outerImage").addEventListener("mouseenter",() => {ChangingImagesForScreens(this,SriPadmamImages,"outerImage")});
        document.getElementById("secondScreen").addEventListener("mouseenter",() => {ChangingImagesForScreens(this,SriScreen2Images,"secondScreen")});
        imageSize1.setAttribute("src","Kaithi.png");
        imageSize.setAttribute("src","Vikram.png");
        movieNames.innerText="Vikram";
        movieNames2.innerText="Kaithi";
        theatreIdName = "Sri Padmam"
    }
function signUpFunction()
{
    var mainDivForPaytmPaying = document.createElement("div");
    fullContainer.appendChild(mainDivForPaytmPaying);
    mainDivForPaytmPaying.setAttribute("id","positionOfSignUp")

    var paytmPaying = document.createElement("div");
    mainDivForPaytmPaying.appendChild(paytmPaying);
    paytmPaying.setAttribute("id", "paytmPaying");

    var Instructions = document.createElement("div");
    paytmPaying.appendChild(Instructions);
    Instructions.setAttribute("id", "Instructions");

    var steps = document.createElement("div");
    Instructions.appendChild(steps);
    steps.setAttribute("id", "steps");
    steps.innerHTML = "<span id ='boldingLetter' class='fontMargin'>To Login into your Paytm Web account</span><br><span class='fontMargin'>1. Open Paytm App</span><br><span class='fontMargin'>2. Tap Scanoption available at the bottom</span><br><span class='fontMargin'>3. Point Paytm Scan at QR Code to login</span>";
    var watchVideo = document.createElement("div");
    steps.appendChild(watchVideo);
    watchVideo.setAttribute("id", "watchVideo");
    watchVideo.innerHTML = "<img src = 'video-icon.svg'/><span class='positionOftheText'>Watch Video</span>";
    //watchVideo.addEventListener("click", forWatchingVideo);

    var download = document.createElement("div");
    Instructions.appendChild(download);
    download.setAttribute("id", "download");
    download.innerHTML = "<div id ='text'>To create an account download Paytm App</div>"

    var anchorTag1 = document.createElement("a");
    anchorTag1.setAttribute("href", "https://play.google.com/store/apps/details?id=net.one97.paytm");
    anchorTag1.setAttribute("target","_blank");
    download.appendChild(anchorTag1);
    var googlePlay = document.createElement("div");
    anchorTag1.appendChild(googlePlay);
    googlePlay.setAttribute("id", "googlePlay");
    googlePlay.innerHTML = "<img src = 'googleplay.svg'/><span class='positionOftheText'>Google Play</span>";

    var anchorTag2 = document.createElement("a");
    anchorTag2.setAttribute("href", "https://apps.apple.com/bw/app/paytm-payments-bank-account/id473941634");
    anchorTag2.setAttribute("target","_blank");
    download.appendChild(anchorTag2);
    var appstore = document.createElement("div");
    anchorTag2.appendChild(appstore);
    appstore.setAttribute("id", "appstore");
    appstore.innerHTML = "<img src = 'appstore.svg'/><span class='positionOftheText'>App Store<span>";

    var QRcode = document.createElement("div");
    paytmPaying.appendChild(QRcode);
    QRcode.setAttribute("id", "QRcode");
    QRcode.innerHTML = "<div id ='CloseButton'> &#215;</div> <img id='Barcode' src ='SignUpBarcode.png'/><span id = 'positionOfscan'>Scan QR code with Paytm App to login</span>";

    var paytmPayingLightBlue = document.createElement("div");
    mainDivForPaytmPaying.appendChild(paytmPayingLightBlue);
    paytmPayingLightBlue.setAttribute("id", "paytmPayingLightBlue");

    var paytmPayingDarkBlue = document.createElement("div");
    mainDivForPaytmPaying.appendChild(paytmPayingDarkBlue);
    paytmPayingDarkBlue.setAttribute("id", "paytmPayingDarkBlue");
    document.getElementById("CloseButton").addEventListener("click",removingSignUpFunction);

    function removingSignUpFunction()
    {
        document.getElementById("fullContainer").removeChild(positionOfSignUp)
    }
}