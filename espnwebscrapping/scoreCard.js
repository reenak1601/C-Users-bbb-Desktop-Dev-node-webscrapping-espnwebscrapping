const request=require("request") ;
const cheerio=require("cheerio") ;

function getInfoFromScorecard(url) {
      request(url, cb);
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

    //get venue
    let des=selecTool(" div.ds-text-tight-m.ds-font-regular.ds-text-typo-mid3")
    //console.log(des.text());
    let desArr=des.text().split(",") ;
    //console.log(desArr);
    let venue=desArr[1] ;
    console.log(venue);
    //get date
    let date=desArr[2] ;
    console.log(date);
    let year=desArr[3] ;
    console.log(year);

    //get team name
    let teamname=selecTool(" div.ds-flex.ds-items-center.ds-min-w-0.ds-mr-1 > a > span")
    //console.log(teamname.text());
    let team1=selecTool(teamname[0]).text() ;
    console.log(team1);
    let team2=selecTool(teamname[1]).text();
    console.log(team2);
    
    //get result 
    let matchres=selecTool(".ds-text-tight-m.ds-font-regular.ds-truncate.ds-text-typo")
    console.log(matchres.text());

    //get innings 
    let getallbatman=selecTool(" table.ds-w-full.ds-table.ds-table-md.ds-table-auto.ci-scorecard-table>tbody")
    //console.log(getallbatman.text());
    let htmlString="" ;
    for(let i=0 ;i<getallbatman.length;i++)
    {
        htmlString+=selecTool(getallbatman[i]).html() ;
        let allrows=selecTool(getallbatman[i]).find("tr") ;
        for(let i=0;i<allrows.length;i++)
        {
            let row=selecTool(allrows[i]) ;
            let firstrow=row.find("td")[0] ;
            if(selecTool(firstrow).hasClass("td.ds-w-0.ds-whitespace-nowrap.ds-min-w-max.ds-flex.ds-items-center"))
            {
                let playername=selecTool(row.find("td")[0]).text() ;
                console.log(playername);
            }
        }
    }
    //console.log(htmlString);

        
    }

module.exports={
    gifs:getInfoFromScorecard,
} ;