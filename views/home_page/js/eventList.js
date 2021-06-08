var event_name = 




var code = '<div class="col-md-3">'+
                '<div class="single-post">'+
                    '<img src="/modules/home_page/img/post-image2.jpg" alt="">'+
                    '<h3><a href="/viewEvent">Event 1.</a></h3>'+
                    '<h4><span>Posted By: <span class="author-name">Member 1</span></span>'+
                    '</h4>'+
                    '<p>This is our test event</p>'+
                    '<h4><span>25 February 2021</span></h4>'+
                '</div>'+
            '</div>'



var m_div = document.getElementById("event_list");
var div = document.createElement("div");
div.innerHTML = code;
m_div.appendChild(div);