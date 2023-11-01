document.querySelectorAll('a[href^="#"]').forEach(anchor=>
    {
        anchor.addEventListener('click',function(e)
        {
            e.preventDefault();
            const targetid=this.getAttribute('href').substring(1)
            const targetElement=document.getElementById(targetid)
            if(targetElement)
            {
                window.scrollTo({
                    top:targetElement.offsetTop,
                    behavior:'smooth'
                })
            }
        })
    })