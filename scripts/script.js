$(document).ready(function(){

    var tourData = {};

    function renderThumbnails() {
        document.querySelector(".thumb-container").innerHTML = "";
        window.addEventListener('message',function(event) {
            var mainData = JSON.parse(event.data);

            if(mainData.type == 'tourData_downloaded'){
                tourData = mainData.tourData;
                tourData.scenes.map(function (data, i) {
                    var thumb = document.createElement("div");
                    thumb.setAttribute("class", "thumb");
                    thumb.setAttribute("id", "scene"+i);
                    thumb.style.background = "linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)), url(https://s3.eu-central-1.amazonaws.com/4dea-development-commonpanos/vtour/"+tourData.ShortURL+"/images/Scene"+i+"/Thumbnail/thumb.jpg)";
                    document.querySelector(".thumb-container").appendChild(thumb);
                })
            }else if(data.type == ''){

            }else if(data.type == ''){

            }
        });
    };
    renderThumbnails();

    var data = [ {
        shortUrl: "TGBHotels_Ahmedabad",
        title: "TGB Hotels, Ahmedabad, ",
        price: 6999
    },
    {
        shortUrl: "HotelParasMahal_Udaipur",
        title: "Hotel ParasMahal, Udaipur",
        price: 4999
    },{
        shortUrl: "HotelSwaroopvilas_Udaipur",
        title: "Hotel Swaroopvilas, Udaipur",
        price: 8999
    }];

    data.map(function (value, i) {
        var card = document.createElement("div");
        card.setAttribute("class", "card");
        card.setAttribute("id", "card" + i);
        card.style.background = "linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)), url(https://dev-images.4dea.co/vtour/"+value.shortUrl+"/images/MainThumbnail_small.jpg)";
        var title = document.createElement("div");
        title.innerHTML = value.title;
        title.setAttribute("class", "text");
        var price = document.createElement("div");
        price.innerHTML = "Rs "+value.price;
        price.setAttribute("class", "text");
        var textContainer = document.createElement("div");
        textContainer.setAttribute("class", "text-container");
        textContainer.appendChild(title);
        textContainer.appendChild(price);
        card.appendChild(textContainer);
        document.querySelector(".cards-container").appendChild(card);

    });

    (function setActiveCard() {

        var activeIFrame = 0;
        var activeSceneNum = 0;

        $("#card"+activeIFrame).addClass("active-card");
        $('#scene'+activeIFrame).addClass("active-card");

        $(".card").click(function () {
            $(".card").removeClass("active-card");

            var id = this.id.replace(/card/,'');
            activeIFrame = id;
            $("#card"+activeIFrame).addClass("active-card");
            renderIFrame(activeIFrame, activeSceneNum);
            renderThumbnails();
        });

        $('body').on('click','.thumb',function(){
            $('.thumb').removeClass("active-card");

            var id = this.id.replace(/scene/,'');
            console.log("This is scene num", id);
            activeSceneNum = id;
            $(this).addClass("active-card");
            renderIFrame(activeIFrame, activeSceneNum);
        });

        renderIFrame(activeIFrame, activeSceneNum);
    })();

    function  renderIFrame(activeIFrame, sceneNum){
        document.querySelector("iframe").src = "https://s3.eu-central-1.amazonaws.com/testingpurpose4dea/vtour/"+data[activeIFrame].shortUrl+"/hackable/index.html?v=4#Scene="+sceneNum;
    };
});