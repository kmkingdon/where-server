const express = require('express');
const cors = require('cors');
const bodyParser= require('body-parser');
const app = express();


app.use(cors());
app.use(bodyParser.json());

const events = [
    {
        "id": 1,
        "eventname": "Her Paris: Women Artists in the age of Impesssionism @Denver Art Museum",
        "location": "100 West 14th Ave. Pywy., Denver, CO",
        "time": "10am -5pm",
        "scene": "art",
        "cost": true,
        "price": "$11 for Member-$22 adult non-member",
        "link": "https://denverartmuseum.org/",
        "interest": 0,
        "date": "2017-12-20T07:00:00.000Z"
    },
    {
        "id": 2,
        "eventname": "3-D Studio@ Denver Art Museum",
        "location": "100 West 14th Ave. Pywy., Denver, CO",
        "time": "10am -5pm",
        "scene": "art",
        "cost": true,
        "price": "general admission free for members $13 for nonmember",
        "link": "https://denverartmuseum.org/",
        "interest": 0,
        "date": "2017-12-20T07:00:00.000Z"
    },
    {
        "id": 3,
        "eventname": "Ai Weiwei@ Civic Center Park",
        "location": "101 W. 14th Ave., Denver, CO",
        "time": "available 24 hours",
        "scene": "art",
        "cost": false,
        "price": "Free",
        "link": "http://www.zodiacheads.com/index.html",
        "interest": 0,
        "date": "2017-12-20T07:00:00.000Z"
    },
    {
        "id": 4,
        "eventname": "A Better Place Could Hardly Have Been Chosen@ Buffalo Bill Museum & Grave",
        "location": "987 1/2 Lookout Mountain Rd., Golden, CO",
        "time": "9am -5pm",
        "scene": "art",
        "cost": true,
        "price": "$1-$5",
        "link": "http://www.buffalobill.org/Exhibits%20Events%20at%20the%20Buffalo%20Bill%20Museum/anniversary_events.html",
        "interest": 0,
        "date": "2017-12-20T07:00:00.000Z"
    },
    {
        "id": 5,
        "eventname": "David B. Smith Gallery",
        "location": "1543 A Wazee Street, Denver, CO 80202",
        "time": "12 - 6pm",
        "scene": "art",
        "cost": false,
        "price": "Free",
        "link": "http://www.davidbsmithgallery.com/gallery",
        "interest": 0,
        "date": "2017-12-20T07:00:00.000Z"
    },
    {
        "id": 6,
        "eventname": "David Cook Fine Art",
        "location": "1637 Wazee Street, Denver, Colorado 80202",
        "time": "10:30am-6pm",
        "scene": "art",
        "cost": false,
        "price": "Free",
        "link": "http://www.davidcookgalleries.com/",
        "interest": 0,
        "date": "2017-12-20T07:00:00.000Z"
    },
    {
        "id": 7,
        "eventname": "Lisa Stefanelli Exhibit @Robischon Gallery",
        "location": "1740 Wazee Street, Denver, CO",
        "time": "10:30am-6pm",
        "scene": "art",
        "cost": false,
        "price": "Free",
        "link": "https://www.robischongallery.com/gallery",
        "interest": 0,
        "date": "2017-12-20T07:00:00.000Z"
    },
    {
        "id": 8,
        "eventname": "Open Studio @ Pinot's Palette",
        "location": "3420 W 32nd Ave., Denver, CO",
        "time": "1-5pm",
        "scene": "art",
        "cost": true,
        "price": 12,
        "link": "https://www.pinotspalette.com/highlands",
        "interest": 0,
        "date": "2017-12-20T07:00:00.000Z"
    },
    {
        "id": 21,
        "eventname": "LeAnn Rimes @ Belly Up Aspen",
        "location": "450 S. Galena St., Aspen, CO",
        "time": "1899-12-31T03:30:00.000Z",
        "scene": "music",
        "cost": true,
        "price": "$70-$200",
        "link": "http://www.westword.com/event/leann-rimes-9300555",
        "interest": 0,
        "date": "2017-12-20T07:00:00.000Z"
    },
    {
        "id": 22,
        "eventname": "Rukus Family Christmas @ The Oriental Theater",
        "location": "4335 W. 44th Ave, Denver, CO",
        "time": "1899-12-31T02:00:00.000Z",
        "scene": "music",
        "cost": true,
        "price": "$35-$55",
        "link": "http://www.theorientaltheater.com/",
        "interest": 0,
        "date": "2017-12-20T07:00:00.000Z"
    },
    {
        "id": 23,
        "eventname": "Colorado Symphony Brass @ Boettcher Concert Hall",
        "location": "14th St & Curtis St., Denver, CO",
        "time": "1899-12-31T02:30:00.000Z",
        "scene": "music",
        "cost": true,
        "price": "$10-$89",
        "link": "http://coloradosymphony.org/",
        "interest": 0,
        "date": "2017-12-20T07:00:00.000Z"
    },
    {
        "id": 24,
        "eventname": "That Damn Sasquatch @ Moe's Original BBQ & Bowl",
        "location": "3295 S. Broadway, Englewood, CO",
        "time": "1899-12-31T02:00:00.000Z",
        "scene": "music",
        "cost": false,
        "price": 0,
        "link": "http://www.moesdenver.com/",
        "interest": 0,
        "date": "2017-12-20T07:00:00.000Z"
    },
    {
        "id": 25,
        "eventname": "Agnostic Front @ Marquis Theater",
        "location": "2009 Larimer St., Denver, CO",
        "time": "1899-12-31T02:00:00.000Z",
        "scene": "music",
        "cost": true,
        "price": "$16-$18",
        "link": "http://www.themarquistheatre.com/",
        "interest": 0,
        "date": "2017-12-20T07:00:00.000Z"
    },
    {
        "id": 26,
        "eventname": "Phish Thursdays @ Be On Key Psychedelic Ripple",
        "location": "1700 Logan St., Denver, CO",
        "time": "1899-12-31T04:00:00.000Z",
        "scene": "music",
        "cost": true,
        "price": 10,
        "link": "http://beonkeys.com/",
        "interest": 0,
        "date": "2017-12-20T07:00:00.000Z"
    },
    {
        "id": 27,
        "eventname": "Blues Night @ The Pioneer Inn",
        "location": "15 E. First St., Denver, CO",
        "time": "1899-12-31T05:00:00.000Z",
        "scene": "music",
        "cost": false,
        "price": 0,
        "link": "http://www.pioneerinnnederland.net/",
        "interest": 0,
        "date": "2017-12-20T07:00:00.000Z"
    },
    {
        "id": 28,
        "eventname": "Gypsy Swing Revue @ Irish Snug",
        "location": "1201 E. Colfax Ave., Denver, CO",
        "time": "1899-12-31T03:00:00.000Z",
        "scene": "music",
        "cost": false,
        "price": 0,
        "link": "http://www.irishsnug.com/",
        "interest": 0,
        "date": "2017-12-20T07:00:00.000Z"
    },
    {
        "id": 29,
        "eventname": "Kona and Aqua Phellem @ Your Mom's House",
        "location": "608 E. 13th Ave, Denver, CO",
        "time": "1899-12-31T03:00:00.000Z",
        "scene": "music",
        "cost": true,
        "price": 5,
        "link": "http://www.westword.com/event/kona-and-aqua-phellem-9754506",
        "interest": 0,
        "date": "2017-12-20T07:00:00.000Z"
    },
    {
        "id": 30,
        "eventname": "Alex Tripp Trio @ Ophelia's Electric Soapbox",
        "location": "1215 20th St., Denver, CO",
        "time": "1899-12-31T01:00:00.000Z",
        "scene": "music",
        "cost": false,
        "price": 0,
        "link": "http://www.opheliasdenver.com/",
        "interest": 0,
        "date": "2017-12-20T07:00:00.000Z"
    },
    {
        "id": 31,
        "eventname": "Mike Smith Trio @ Syntax Physic Opera",
        "location": "554 S. Broadway, Denver, CO",
        "time": "1899-12-31T05:00:00.000Z",
        "scene": "music",
        "cost": false,
        "price": 0,
        "link": "http://www.physicopera.com/",
        "interest": 0,
        "date": "2017-12-20T07:00:00.000Z"
    },
    {
        "id": 43,
        "eventname": "Dinner with Alex Tripp Trio @ Ophelia's Electric Soapbox",
        "location": "1215 20th St., Denver, CO",
        "time": "1899-12-31T01:00:00.000Z",
        "scene": "music",
        "cost": false,
        "price": 0,
        "link": "https://www.denver.org/event/dinner-with-alex-tripp-trio/52064/",
        "interest": 0,
        "date": "2017-12-20T07:00:00.000Z"
    },
    {
        "id": 44,
        "eventname": "Rebirth Brass Band @ The Bluebird Theater",
        "location": "317 E Colfax Ave, Denver, CO 80206",
        "time": "1899-12-31T04:00:00.000Z",
        "scene": "music",
        "cost": true,
        "price": 25,
        "link": "http://www.bluebirdtheater.net/events/detail/342352",
        "interest": 0,
        "date": "2017-12-20T07:00:00.000Z"
    },
    {
        "id": 45,
        "eventname": "Dueling Pianos @ Howl at the Moon",
        "location": "\t1735 19th Street, Denver, CO 80202",
        "time": "1899-12-31T03:00:00.000Z",
        "scene": "dancing",
        "cost": false,
        "price": 0,
        "link": "https://www.howlatthemoon.com/denver/reserve-a-table/",
        "interest": 0,
        "date": "2017-12-20T07:00:00.000Z"
    },
    {
        "id": 46,
        "eventname": "Local DJs @ Beta Nightclub",
        "location": "1909 Blake St, Denver, CO 80202",
        "time": "1899-12-31T05:00:00.000Z",
        "scene": "dancing",
        "cost": false,
        "price": 0,
        "link": "https://www.betanightclub.com/",
        "interest": 0,
        "date": "2017-12-20T07:00:00.000Z"
    },
    {
        "id": 47,
        "eventname": "Freddy Rodriguez Quartet @ El-Chapultepec",
        "location": "1962 Market St, Denver, CO 80202",
        "time": "1899-12-31T04:00:00.000Z",
        "scene": "music",
        "cost": false,
        "price": 0,
        "link": "http://www.thepeclodo.com/",
        "interest": 0,
        "date": "2017-12-20T07:00:00.000Z"
    },
    {
        "id": 48,
        "eventname": "Local DJ @ Tryst Lounge",
        "location": "1320 15th St, Denver, CO 80202",
        "time": "1899-12-31T03:00:00.000Z",
        "scene": "dancing",
        "cost": false,
        "price": 0,
        "link": "http://www.trystlounge.com/",
        "interest": 0,
        "date": "2017-12-20T07:00:00.000Z"
    },
    {
        "id": 49,
        "eventname": "HuMPday Dance Party w/ The Hot Lunch Band @ Live at Jacks",
        "location": "500 16th St #320 Denver, CO 80202",
        "time": "1899-12-31T03:30:00.000Z",
        "scene": "dancing",
        "cost": false,
        "price": 0,
        "link": "http://liveatjacks.com/",
        "interest": 0,
        "date": "2017-12-20T07:00:00.000Z"
    },
    {
        "id": 50,
        "eventname": "Denver Line Dancers @ Live at Jacks",
        "location": "500 16th St #320 Denver, CO 80202",
        "time": "1899-12-31T01:00:00.000Z",
        "scene": "dancing",
        "cost": false,
        "price": 0,
        "link": "http://liveatjacks.com/",
        "interest": 0,
        "date": "2017-12-20T07:00:00.000Z"
    },
    {
        "id": 51,
        "eventname": "Goth DJ Slave @ Milk",
        "location": " 1037 Broadway Denver, CO",
        "time": "1899-12-31T02:00:00.000Z",
        "scene": "dancing",
        "cost": false,
        "price": 0,
        "link": "http://coclubs.com/milk",
        "interest": 0,
        "date": "2017-12-20T07:00:00.000Z"
    },
    {
        "id": 52,
        "eventname": "RE: Search @ Cervante's Other Side",
        "location": "2637 Welton St., Denver, CO",
        "time": "1899-12-31T03:30:00.000Z",
        "scene": "dancing",
        "cost": true,
        "price": "$10-$15",
        "link": "http://www.cervantesmasterpiece.com/",
        "interest": 0,
        "date": "2017-12-20T07:00:00.000Z"
    },
    {
        "id": 53,
        "eventname": "Kevin O'Brien's G70 House Party",
        "location": "3087 West Highland Park Place Denver, CO",
        "time": "1899-12-31T00:30:00.000Z",
        "scene": "music",
        "cost": false,
        "price": 0,
        "link": "https://www.facebook.com/kevin.obrien.37853734",
        "interest": 20,
        "date": "2017-12-20T07:00:00.000Z"
    }
]

app.get('/events', function(request, response) {
  response.json(events);
})

app.post('/interest', function(request, response) {
  let id= request.body.id;
  for (var i = 0; i < events.length; i++) {
    if(id === events[i].id) {
      events[i].interest += 1;
    }
  }
  response.json("Added interest level")
});


let currentId= events[events.length - 1].id;

app.post('/add', function(request, response) {
  let eventObject= request.body
  currentId += 1;
  eventObject.id = currentId;
  events.push(eventObject);
  response.json("Success! Thank you for suggesting an event!")
});


app.listen(process.env.PORT ||3000);
