let url="https://www.espncricinfo.com/series/ipl-2020-21-1210595" ;

const request=require("request") ;
const cheerio=require("cheerio") ;
const allMatchesObj=require("./allMatches")
request(url,cb) ;

function cb(err, res , body)
{
    if(err)
    {
        console.error("error", err);
    }

    else {
           handleHtml(body)
    }
}

function handleHtml(html)
{
    let selecTool=cheerio.load(html) ;

    let anchorElem = selecTool('a[class="ds-inline-flex ds-items-start ds-leading-none"]') ;
    

    //console.log(anchorElem.html());


    let relativeLink = anchorElem.attr("href");
    //console.log(relativeLink);
      
    let fullLink="https://www.espncricinfo.com" + relativeLink  ;

    console.log(fullLink) ;
    allMatchesObj.getAllMatches(fullLink) ;
    
}