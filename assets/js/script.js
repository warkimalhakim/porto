$(document).ready(function () {
    $(".kim-icon").click(function () {
        $(this).toggleClass("active");
        $(".kim-nav").toggleClass("active");
    });
    $(".kim-nav ul li a").click(function () {
        $(".kim-icon").removeClass("active");
        $(".kim-nav").removeClass("active");
    });

    let projectContainer = $(".project-container");

    $.get("assets/clients.json", function (e) {
        e.clients.forEach(function (data) {
            projectContainer.append("");
            projectContainer.append(
                `
          <div class="project-box">
          <img src="${data.img == "" ? `assets/img/projects/project-2.jpg` : data.img
                }" alt="" />
          <div class="project-desc">
            <h4 class="text-center">${data.name}</h4>
            <p>
              ${data.business} -
              ${data.desc}
            </p>
            ${data.url == ""
                    ? ``
                    : `<a href="${data.url}" type="button" class="btn btn-warning btn-sm mx-auto" target="_blank">Website <i class="fas fa-long-arrow-alt-right"></i></span></a>`
                }</div>
        </div>
          `
            );
        });
    });
});