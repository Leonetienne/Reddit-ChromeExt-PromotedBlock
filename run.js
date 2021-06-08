function Scan()
{
    const findings = $('span:contains("promoted")');
    
    if (findings.length > 0)
    {
        shitAd = findings.first();
        for (let i = 0; i < 7; i++)
        {
            shitAd = shitAd.parent();
        }

        if (shitAd[0].classList.length == 0)
        {
            const shitAdTitle = shitAd.find("h3").html();
            console.log("Removed shit ad: " + shitAdTitle);
            shitAd.remove();
        }
        else {}
        // not an ad
    }
}
setInterval(Scan, 1);
