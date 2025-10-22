const contactsData = {
  mail: {
    imageSrc: "images/logos/gmail.png",
    url: "mailto:procrastination2025@gmail.com",
    displayText: "Mail",
  },
  github: {
    imageSrc: "images/logos/github-black.png",
    url: "https://github.com/CYCNO",
    displayText: "GitHub",
  },
  twitter: {
    imageSrc: "images/logos/twitter.png",
    url: "https://x.com/cycnooo",
    displayText: "Twitter",
  },
};

const contactsDiv = document.getElementById("contacts");

Object.entries(contactsData).forEach(([k, v]) => {
  contactsDiv.innerHTML += `
    <a
        class="flex space-x-3 items-center justify-center text-black text-xl border-2 border-black w-[300px] py-4 font-poppins transition duration-500 ease-in-out hover:border-yellow-400 hover:bg-yellow-400 hover:text-white"
        href="${v.url}"
        ><img class="h-7 w-7" src="${v.imageSrc}" alt="" />
        <p class="">${v.displayText}</p>
    </a
        
    `;
});
