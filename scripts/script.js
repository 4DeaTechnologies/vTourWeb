$(document).ready(function(){

    var tourData = {};

    function renderThumbnails() {
        document.querySelector(".thumb-container").innerHTML = "";
        window.addEventListener('message',function(event) {
            var mainData = JSON.parse(event.data);

            if(mainData.type == 'tourData_downloaded'){
                tourData = mainData.tourData;
                console.log("Data", tourData);
                tourData.scenes.map(function (data, i) {
                    var thumb = document.createElement("div");
                    thumb.setAttribute("class", "thumb");
                    thumb.style.background = "linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)), url(https://s3.eu-central-1.amazonaws.com/4dea-development-commonpanos/vtour/"+tourData.ShortURL+"/images/Scene"+i+"/Thumbnail/thumb.jpg)";
                    document.querySelector(".thumb-container").appendChild(thumb);
                })
            }else if(data.type == ''){

            }else if(data.type == ''){

            }
        });
    };

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
        price.innerHTML = value.price;
        price.setAttribute("class", "text");
        var textContainer = document.createElement("div");
        textContainer.setAttribute("class", "text-container");
        textContainer.appendChild(title);
        textContainer.appendChild(price);
        card.appendChild(textContainer);
        document.querySelector(".cards-container").appendChild(card);

    });

    (function setActiveCard() {

        var activeIFrame = 1;

        $("#card" + activeIFrame).addClass("active-card");

        $(".card").click(function () {
            $(".card").removeClass("active-card");

            var id = this.id.replace(/card/,'');
            activeIFrame = id;
            $("#card"+activeIFrame).addClass("active-card");
            renderIFrame(activeIFrame);
            renderThumbnails();
        });
        renderIFrame(activeIFrame);
    })();

    function  renderIFrame(activeIFrame){
        document.querySelector("iframe").src = "https://s3.eu-central-1.amazonaws.com/testingpurpose4dea/vtour/"+data[activeIFrame].shortUrl+"/hackable/index.html?v=3";
    };

    renderThumbnails();
});