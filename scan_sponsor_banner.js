function ScanBanners()
{
    const findings = $('div>div>div>div>div>span>span:contains("promoted")');
    
    if (findings.length > 0)
    {
        shitAd = findings.first();
        for (let i = 0; i < 6; i++)
        {
            // Check if we are at docroot -> no ad
            if (shitAd.is(shitAd.parent()))
                // We are at the docroot. This is not an ad.
                return;
            
            // Go one parent-level up
            shitAd = shitAd.parent();

            // Does the type match the ad-post template?
            if (i == 0)
            {
                if (shitAd.prop("tagName") != "SPAN")
                {
                    // not an ad
                    return;
                }
            }
            else if (shitAd.prop("tagName") != "DIV")
            {
                // not an ad
                return;
            }
        }

        // The top div of the ad template should not have any classes
        if (shitAd[0].classList.length != 0)
            // not an ad
            return;

        // Fetch the ads title for console output
        const shitAdTitle = shitAd.find("h3").html();
        console.log("Removed shit ad banner: " + shitAdTitle);
        
        // Remove that pest
        shitAd.remove();
    }
}
setInterval(ScanBanners, 1);
