//initialize data
var bea_url = "https://gis.dola.colorado.gov/lookups/bea_jobs?county="
var mig_url = "https://gis.dola.colorado.gov/lookups/components?vars=netmigration&year=1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020&county="
var mig_reg_url = "https://gis.dola.colorado.gov/lookups/components_region?vars=netmigration&year=1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020&reg_num="
var bea_json = getData(bea_url,0);
var mig_json = getData(mig_url,0);

//console.log(bea_json);
//console.log(mig_json);

var jobdata = [];
jobdata.push(bea_json[0].jobs_1985 - bea_json[0].jobs_1984);
jobdata.push(bea_json[0].jobs_1986 - bea_json[0].jobs_1985);
jobdata.push(bea_json[0].jobs_1987 - bea_json[0].jobs_1986);
jobdata.push(bea_json[0].jobs_1988 - bea_json[0].jobs_1987);
jobdata.push(bea_json[0].jobs_1989 - bea_json[0].jobs_1988);
jobdata.push(bea_json[0].jobs_1990 - bea_json[0].jobs_1989);
jobdata.push(bea_json[0].jobs_1991 - bea_json[0].jobs_1990);
jobdata.push(bea_json[0].jobs_1992 - bea_json[0].jobs_1991);
jobdata.push(bea_json[0].jobs_1993 - bea_json[0].jobs_1992);
jobdata.push(bea_json[0].jobs_1994 - bea_json[0].jobs_1993);
jobdata.push(bea_json[0].jobs_1995 - bea_json[0].jobs_1994);
jobdata.push(bea_json[0].jobs_1996 - bea_json[0].jobs_1995);
jobdata.push(bea_json[0].jobs_1997 - bea_json[0].jobs_1996);
jobdata.push(bea_json[0].jobs_1998 - bea_json[0].jobs_1997);
jobdata.push(bea_json[0].jobs_1999 - bea_json[0].jobs_1998);
jobdata.push(bea_json[0].jobs_2000 - bea_json[0].jobs_1999);
jobdata.push(bea_json[0].jobs_2001 - bea_json[0].jobs_2000);
jobdata.push(bea_json[0].jobs_2002 - bea_json[0].jobs_2001);
jobdata.push(bea_json[0].jobs_2003 - bea_json[0].jobs_2002);
jobdata.push(bea_json[0].jobs_2004 - bea_json[0].jobs_2003);
jobdata.push(bea_json[0].jobs_2005 - bea_json[0].jobs_2004);
jobdata.push(bea_json[0].jobs_2006 - bea_json[0].jobs_2005);
jobdata.push(bea_json[0].jobs_2007 - bea_json[0].jobs_2006);
jobdata.push(bea_json[0].jobs_2008 - bea_json[0].jobs_2007);
jobdata.push(bea_json[0].jobs_2009 - bea_json[0].jobs_2008);
jobdata.push(bea_json[0].jobs_2010 - bea_json[0].jobs_2009);
jobdata.push(bea_json[0].jobs_2011 - bea_json[0].jobs_2010);
jobdata.push(bea_json[0].jobs_2012 - bea_json[0].jobs_2011);
jobdata.push(bea_json[0].jobs_2013 - bea_json[0].jobs_2012);
jobdata.push(bea_json[0].jobs_2014 - bea_json[0].jobs_2013);
jobdata.push(bea_json[0].jobs_2015 - bea_json[0].jobs_2014);
jobdata.push(bea_json[0].jobs_2016 - bea_json[0].jobs_2015);
jobdata.push(bea_json[0].jobs_2017 - bea_json[0].jobs_2016);
jobdata.push(bea_json[0].jobs_2018 - bea_json[0].jobs_2017);
jobdata.push(bea_json[0].jobs_2019 - bea_json[0].jobs_2018);
jobdata.push(bea_json[0].jobs_2020 - bea_json[0].jobs_2019);


var migdata = [];
var i;
for (i=0;i<35;i++){
  migdata.push(mig_json[i].netmig);
}

var countyname = "Colorado";

var selectElem = document.getElementById('sel');
selectElem.addEventListener('change', function() {
  countyname = selectElem.options[selectElem.selectedIndex].text;
  chartTitle.text = 'Job Change and Net Migration - ' + countyname;
  mixedChartData.datasets.forEach(function(dataset,k) { 
    bea_json = getData(bea_url,selectElem.value);
    if (selectElem.value < 200){
      mig_json = getData(mig_url,selectElem.value);
    } else {
      mig_json = getData(mig_reg_url,selectElem.value-500);
    }
    dataset.data = [];
    if (k == 0){
      dataset.data.push(bea_json[0].jobs_1985 - bea_json[0].jobs_1984);
      dataset.data.push(bea_json[0].jobs_1986 - bea_json[0].jobs_1985);
      dataset.data.push(bea_json[0].jobs_1987 - bea_json[0].jobs_1986);
      dataset.data.push(bea_json[0].jobs_1988 - bea_json[0].jobs_1987);
      dataset.data.push(bea_json[0].jobs_1989 - bea_json[0].jobs_1988);
      dataset.data.push(bea_json[0].jobs_1990 - bea_json[0].jobs_1989);
      dataset.data.push(bea_json[0].jobs_1991 - bea_json[0].jobs_1990);
      dataset.data.push(bea_json[0].jobs_1992 - bea_json[0].jobs_1991);
      dataset.data.push(bea_json[0].jobs_1993 - bea_json[0].jobs_1992);
      dataset.data.push(bea_json[0].jobs_1994 - bea_json[0].jobs_1993);
      dataset.data.push(bea_json[0].jobs_1995 - bea_json[0].jobs_1994);
      dataset.data.push(bea_json[0].jobs_1996 - bea_json[0].jobs_1995);
      dataset.data.push(bea_json[0].jobs_1997 - bea_json[0].jobs_1996);
      dataset.data.push(bea_json[0].jobs_1998 - bea_json[0].jobs_1997);
      dataset.data.push(bea_json[0].jobs_1999 - bea_json[0].jobs_1998);
      dataset.data.push(bea_json[0].jobs_2000 - bea_json[0].jobs_1999);
      dataset.data.push(bea_json[0].jobs_2001 - bea_json[0].jobs_2000);
      dataset.data.push(bea_json[0].jobs_2002 - bea_json[0].jobs_2001);
      dataset.data.push(bea_json[0].jobs_2003 - bea_json[0].jobs_2002);
      dataset.data.push(bea_json[0].jobs_2004 - bea_json[0].jobs_2003);
      dataset.data.push(bea_json[0].jobs_2005 - bea_json[0].jobs_2004);
      dataset.data.push(bea_json[0].jobs_2006 - bea_json[0].jobs_2005);
      dataset.data.push(bea_json[0].jobs_2007 - bea_json[0].jobs_2006);
      dataset.data.push(bea_json[0].jobs_2008 - bea_json[0].jobs_2007);
      dataset.data.push(bea_json[0].jobs_2009 - bea_json[0].jobs_2008);
      dataset.data.push(bea_json[0].jobs_2010 - bea_json[0].jobs_2009);
      dataset.data.push(bea_json[0].jobs_2011 - bea_json[0].jobs_2010);
      dataset.data.push(bea_json[0].jobs_2012 - bea_json[0].jobs_2011);
      dataset.data.push(bea_json[0].jobs_2013 - bea_json[0].jobs_2012);
      dataset.data.push(bea_json[0].jobs_2014 - bea_json[0].jobs_2013);
      dataset.data.push(bea_json[0].jobs_2015 - bea_json[0].jobs_2014);
      dataset.data.push(bea_json[0].jobs_2016 - bea_json[0].jobs_2015);
      dataset.data.push(bea_json[0].jobs_2017 - bea_json[0].jobs_2016);
      dataset.data.push(bea_json[0].jobs_2018 - bea_json[0].jobs_2017);
      dataset.data.push(bea_json[0].jobs_2019 - bea_json[0].jobs_2018);
      dataset.data.push(bea_json[0].jobs_2020 - bea_json[0].jobs_2019);
    } else {
      //Broomfield
      if (selectElem.value == 14){
        for (j=0;j<16;j++){
          dataset.data.push(0);
        }
        for (i=0;i<20;i++){
          dataset.data.push(mig_json[i].netmig);
        }
      } else{
        for (i=0;i<35;i++){
          dataset.data.push(mig_json[i].netmig);
        }
      } 
    }

  });

  window.mixedChart.update();

});

var chartTitle = {
  display: true,
  text: 'Job Change and Net Migration - ' + countyname,
  font: {
    size: 16,
    weight: 'bold'
  }
}

var mixedChartData = {
  labels: ["1985", "", "", "", "", "1990", "", "", "", "", "1995", "", "", "", "", "2000", "", "", "", "", "2005", "", "", "", "", "2010", "", "", "", "", "2015", "", "", "", "", "2020"],
  datasets: [{
    label: 'Job Change',
    type: 'bar', 
    data: jobdata,
    order: 2,
    backgroundColor: '#1f78b4'
  },
  {
    type: 'line', 
    label: 'Net Migration',
    data: migdata,
    order: 1,
    backgroundColor: '#000',
    pointRadius: 5
  }]
}


window.onload = function() {
  var ctx = document.getElementById('chart').getContext('2d');
  window.mixedChart = new Chart(ctx, {
      data: mixedChartData,
      options: {
        plugins: {
          legend: {
            position: 'bottom'
          },
          title: chartTitle
        }  ,
        scales: {
              y: {
                  beginAtZero: true,
                  ticks:{
                    font: {
                      weight: 'bold'
                    }
                  }
              }
          }
      }
  });
};

function getData(lookup,fips) {

  var data = $.ajax({
   url: lookup+fips,
   dataType: 'json',
   async: false,

   });

  return data.responseJSON;
 
}

const cvs = document.getElementById("chart");
const ctx = cvs.getContext("2d");
const dpr = window.devicePixelRatio;
console.log(dpr);
const dpi = 300;
let width = 2.5;
let height = 1.5;
cvs.width = width * dpi * dpr;
cvs.height = height * dpi * dpr;
ctx.scale(dpr, dpr);

function download() {
  const downloadUrl = cvs.toDataURL();
  const a = document.createElement("a");
  a.href = downloadUrl;
  a.setAttribute("download", "Job_Migration");
  a.click();
}

