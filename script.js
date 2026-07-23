// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(link => 
{

    link.addEventListener('click', function(e)
	{
        e.preventDefault();

        document
            .querySelector(this.getAttribute('href'))
            .scrollIntoView(
			{
                behavior:'smooth'
            });
    });
});

const educationTabs = document.querySelectorAll(".education-tab");
const educationContents = document.querySelectorAll(".education-content");

educationTabs.forEach(tab => 
{
    tab.addEventListener("click", () => 
	{
        educationTabs.forEach(btn => btn.classList.remove("active"));
        educationContents.forEach(content => content.classList.remove("active"));

        tab.classList.add("active");

		const target = tab.getAttribute("data-edu");
        document
            .getElementById(target)
            .classList.add("active");
    });
});

const ledgerTabs = document.querySelectorAll(".ledger-tab");
const ledgerPanels = document.querySelectorAll(".ledger-panel");

ledgerTabs.forEach(tab => 
{
    tab.addEventListener("click", () => 
	{
        ledgerTabs.forEach(btn => btn.classList.remove("active"));

        ledgerPanels.forEach(panel => panel.classList.remove("active"));

        tab.classList.add("active");

        document
            .getElementById(tab.dataset.tab)
            .classList.add("active");
    });
});


function openCertificate(file) 
{
	const modal = document.getElementById("certificateModal");
    const image = document.getElementById("certificateImage");
    const pdf = document.getElementById("certificatePDF");

    image.style.display = "none";
    pdf.style.display = "none";
	
    const extension = file.split('.').pop().toLowerCase();
	document.body.style.overflow = "hidden";

    if (extension === "pdf") 
	{
        pdf.src = file;
        pdf.style.display = "block";
    } 
	else
	{
        image.src = file;
        image.style.display = "block";
    }
	
	 modal.style.display = "flex";
}

function closeCertificate() 
{
	document.body.style.overflow = "";
    document.getElementById("certificateModal").style.display = "none";
	document.getElementById("certificateImage").src = "";
    document.getElementById("certificatePDF").src = "";
}

document.addEventListener("keydown", function(e)
{
    if(e.key === "Escape")
	{
        closeCertificate();
    }
});

window.addEventListener("click", function(e)
{
   const modal = document.getElementById("certificateModal");

    if(e.target === modal)
	{
        closeCertificate();
	}
});

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () =>
{
    if(window.scrollY > 400)
    {
        backToTop.style.display = "block";
    }
    else
    {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () =>
{
    window.scrollTo(
    {
        top:0,
        behavior:"smooth"
    });
});


const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => 
{
    navMenu.classList.toggle("show");
});

document.querySelectorAll("nav ul a").forEach(link => 
{
    link.addEventListener("click", () => 
	{
        navMenu.classList.remove("show");
    });
});

const reveals = document.querySelectorAll(".reveal");

function revealSections() 
{
    reveals.forEach(section => 
	{
        const windowHeight = window.innerHeight;
        const revealTop = section.getBoundingClientRect().top;
        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) 
		{
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealSections);

revealSections();

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => 
{
    let current = "";

    sections.forEach(section => 
	{
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) 
		{
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => 
	{
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) 
		{
            link.classList.add("active");
        }
    });
});