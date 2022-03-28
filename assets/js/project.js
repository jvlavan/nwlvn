AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "VMHSS CLOUD STORAGE",
    cardImage: "https://vmhsscloud.github.io/assets/images/img-20200717-wa0015.jpg-1280x960.jpg",
    description: "A portable cloud storage.",
    tagimg: "https://vmhsscloud.github.io/assets/images/img-20200717-wa0015.jpg-1280x960.jpg",
    Previewlink: "https://vmhsscloud.github.io",
    Githublink: "https://github.com/vmhsscloud/vmhsscloud.github.io",
  },
  {
    title: "FEROCIOUS MEET",
    cardImage: "data:image/png;base64,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",
    description: "A open source online meeting platform.",
    tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "TN 12 TH MARK CALC 2021",
    cardImage: "https://github.com/tn-12th-mark-calc/assets/raw/main/video.gif",
    description: "Easy and innovative TN(2021 12 TH ) Mark calculator",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://tn-12th-mark-calc.github.io/",
    Githublink: "https://github.com/tn-12th-mark-calc/tn-12th-mark-calc.github.io",
  },
  
  
 
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(
    ({ title, cardImage, tags, Previewlink, Githublink }) => {
      (output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="${Previewlink}">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`
      )
    }
  );
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
