// $(document).ready(function(){
//     var data = [ {
//         shortUrl: "TGBHotels_Ahmedabad",
//         title: "TGB Hotels, Ahmedabad, ",
//         price: 6999
//     },
//     {
//         shortUrl: "HotelParasMahal_Udaipur",
//         title: "Hotel ParasMahal, Udaipur",
//         price: 4999
//     },{
//         shortUrl: "HotelSwaroopvilas_Udaipur",
//         title: "Hotel Swaroopvilas, Udaipur",
//         price: 8999
//     }];
//
//     data.map(function (value, i) {
//         var card = document.createElement("div");
//         card.setAttribute("class", "card");
//         card.setAttribute("id", "card" + i);
//         card.style.background = "linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)), url(https://dev-images.4dea.co/vtour/"+value.shortUrl+"/images/MainThumbnail_small.jpg)";
//         var title = document.createElement("div");
//         title.innerHTML = value.title;
//         title.setAttribute("class", "text");
//         var price = document.createElement("div");
//         price.innerHTML = value.price;
//         price.setAttribute("class", "text");
//         var textContainer = document.createElement("div");
//         textContainer.setAttribute("class", "text-container");
//         textContainer.appendChild(title);
//         textContainer.appendChild(price);
//         card.appendChild(textContainer);
//         document.querySelector(".cards-container").appendChild(card);
//
//     });
//
//     (function setActiveCard() {
//
//         var activeIFrame = 0;
//
//         $("#card" + activeIFrame).addClass("active-card");
//
//         $(".card").click(function () {
//             $(".card").removeClass("active-card");
//
//             var id = this.id.replace(/card/,'');
//             activeIFrame = id;
//             $("#card"+activeIFrame).addClass("active-card");
//             renderIFrame(activeIFrame);
//         });
//         renderIFrame(activeIFrame);
//     })();
//
//     function  renderIFrame(activeIFrame){
//         document.querySelector("iframe").src = "https://360-tours-dev.4dea.co/vtour/"+data[activeIFrame].shortUrl+"/";
//     };
// });