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

function openCertificate(file) 
{
	const modal = document.getElementById("certificateModal");
    const image = document.getElementById("certificateImage");
    const pdf = document.getElementById("certificatePDF");

    image.style.display = "none";
    pdf.style.display = "none";
	
    const extension = file.split('.').pop().toLowerCase();

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
    document.getElementById("certificateModal").style.display = "none";
	document.getElementById("certificateImage").src = "";
    document.getElementById("certificatePDF").src = "";
}

window.addEventListener("click", function(e)
{
   const modal = document.getElementById("certificateModal");

    if(e.target === modal)
	{
        closeCertificate();
	}
});