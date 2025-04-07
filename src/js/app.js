import "./style.css";

function render(variables = {}) {
  console.log("These are the current variables: ", variables);

  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover === false) cover = "<div class='cover'></div>";

  let name = variables.name ? variables.name : "Name";
  let lastName = variables.lastName ? variables.lastName : "Last Name";
  let role = variables.role ? variables.role : "Role";
  let city = variables.city ? variables.city : "City";
  let country = variables.country ? variables.country : "Country";

  let socialPositionClass = variables.socialMediaPosition
    ? variables.socialMediaPosition
    : "position-right";

  let twitter = variables.twitter ? variables.twitter : "4geeksacademy";
  let github = variables.github ? variables.github : "4geeksacademy";
  let linkedin = variables.linkedin
    ? variables.linkedin
    : "school/4geeksacademy";
  let instagram = variables.instagram ? variables.instagram : "4geeksacademy";

  document.querySelector(
    "#widget_content"
  ).innerHTML = `<div class="widget">       ${cover}       <img src="${variables.avatarURL}" class="photo" />       <h1>${name} ${lastName}</h1>       <h2>${role}</h2>       <h3>${city}, ${country}</h3>       <ul class="${socialPositionClass}">         <li><a href="<https://twitter.com/${twitter}>" target="_blank"><i class="fab fa-twitter"></i></a></li>         <li><a href="<https://github.com/${github}>" target="_blank"><i class="fab fa-github"></i></a></li>         <li><a href="<https://linkedin.com/${linkedin}>" target="_blank"><i class="fab fa-linkedin"></i></a></li>         <li><a href="<https://instagram.com/${instagram}>" target="_blank"><i class="fab fa-instagram"></i></a></li>       </ul>     </div>`;
}

window.onload = function() {
  window.variables = {
    includeCover: true,
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    socialMediaPosition: "position-right",
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };

  render(window.variables);

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      const attribute = e.target.getAttribute("for");
      let values = {};
      values[attribute] =
        this.value === "" || this.value === "null"
          ? null
          : this.value === "true"
          ? true
          : this.value === "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values));
    });
  });
};
