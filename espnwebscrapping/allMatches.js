const request=require("request") ;
const cheerio=require("cheerio") ;
const {gifs} = require("./scoreCard");
function getAllMatches(url) {
    request(url,cb) ;
}

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

    let scorecardElem = selecTool( "div > div.ds-grow.ds-px-4.ds-border-r.ds-border-line-default-translucent > a") ;
    
    console.log(scorecardElem.length);
     
    for(let i=0;i<scorecardElem.length;i++)
    {
       let scorecardElemArr=selecTool(scorecardElem[i]).attr("href") ;
       //console.log(i+")"+scorecardElemArr);

    let fullLink="https://www.espncricinfo.com" + scorecardElemArr ;

    //console.log(fullLink) ;
    gifs(fullLink);
    break ;

    } 
}
module.exports={
    getAllMatches:getAllMatches,
} ;